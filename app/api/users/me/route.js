
import {  NextResponse } from "next/server";
import User from "@/models/userModel";
import { connectDB } from "@/dbconfig/db";
import { getDataFromToken } from "@/helper/getDataFromToken";

connectDB();

export async function GET (request){

    try {
        const userId =  getDataFromToken(request);
        const user = await User.findOne({_id: userId}).select("-password");
        return NextResponse.json({
            mesaaage: "User found",
            data: user
        })
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}