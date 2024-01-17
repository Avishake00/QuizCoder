'use client'
import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import axios from 'axios';
import { useToast } from '../ui/use-toast';
import { IoLogOut } from "react-icons/io5";

const Logoutbutton = () => {
    const {toast} =useToast();
    const router=useRouter();
    const handleOnclick=async()=>{
       try {
        await axios.get('/api/users/logout');
        toast({
            description:"Logout successful"
        })
        router.push('/')
        
       } catch (error) {
        console.log(error.message);
        toast({
            variant: "destructive",
            description: "Something error",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
        
       }

    }
  return (
    <Button onClick={handleOnclick} className='p-2 border border-white bg-cyan-700'>
        <div className='flex gap-1 items-center'>
            
        Logout
        <IoLogOut/>
        </div>
    </Button>
  )
}

export default Logoutbutton