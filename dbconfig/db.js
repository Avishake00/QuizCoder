import mongoose, { mongo } from "mongoose";

export async function connectDB(){

    try {
        
        mongoose.connect(`${process.env.MONGO_URI}`);
        const connection=mongoose.connection;
    
        connection.on('connect',()=>{
            console.log("MongoDB connected succesfully");
        })
    
        connection.on('error',(err)=>{
            console.log("MongoDB connection error.Please check again"+ err);
        })
    } catch (error) {
        console.log('Something goes wrong!');
        console.log(error);
        
    }

}