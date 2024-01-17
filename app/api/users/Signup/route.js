'use server'
import { connectDB } from "@/dbconfig/db";
import User from "@/models/userModel";
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from "bcryptjs";


connectDB();

 function isvalidEmail(email){
     // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email against the regular expression
  return emailRegex.test(email);
}

export async function POST(request){ 

    try {
        const reqBody=await request.json();
        const {username,email,password}=reqBody

        console.log(reqBody);

       const user=await User.findOne({email});

       if(user){
        return NextResponse.json({error:'User already exist'},
            {status:500})
       }
       if(password.length<8){
        return NextResponse.json({error:'Password must be at least 8 character long'},
            {status:500})
       }

       if(!isvalidEmail(email)){
        return NextResponse.json({error:'Email is not valid'},
        {status:500})
       }
       const salt=await bcryptjs.genSalt(10);
       const hashpass=await bcryptjs.hash(password,salt);

       const newUser=new User({
        username,
        email,
        password:hashpass
       });

       const savedUser=await newUser.save();
       console.log(savedUser);

       return NextResponse.json({
        message: "User Created Successfully",
        success: true,
        savedUser,
        status: 200, // or any other appropriate status code
      });
         
    } catch (error) {
        return NextResponse.json({error:error.message},
            {status:500})
        
    }

}