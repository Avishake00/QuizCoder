'use server'
import { connectDB } from "@/dbconfig/db";
import User from "@/models/userModel";
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import  Jwt  from "jsonwebtoken";


connectDB();

export async function POST(request){ 

    try {
        const reqBody=await request.json();
        const {email,password}=reqBody

        console.log(reqBody);

       const user=await User.findOne({email});

       if(!user){
        return NextResponse.json({error:'User does not exist'},
            {status:500})
       }

     const validpass=await bcryptjs.compare(password,user.password)
      
      

       if(!validpass){
        return NextResponse.json({error: "Invalid password"}, {status: 400})
    }
    console.log(user);

    const tokendata={
        id:user._id,
        username:user.username,
        email:user.email
    }

    const token=  Jwt.sign(tokendata,`${process.env.TOKEN_SECRET}`,{expiresIn:"1d"});

    const response=NextResponse.json({
        message:"Login Successful",
        success:true
    })
    response.cookies.set("token", token, {
        httpOnly: true, 
        
    })

    return response;
         
    } catch (error) {
        return NextResponse.json({error:error.message},
            {status:500})
        
    }

}