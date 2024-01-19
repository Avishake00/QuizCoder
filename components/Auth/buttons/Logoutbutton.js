'use client'
import React from 'react'
import { Button } from '../../ui/button'
import { useRouter } from 'next/navigation'
import axios from 'axios';
import toast from 'react-hot-toast';
import { IoLogOut } from "react-icons/io5";

const Logoutbutton = () => {
    const router=useRouter();
    const handleOnclick=async()=>{
       try {
        await axios.get('/api/users/logout');
        toast.success( "Welcome to Home Page",{
          duration:3000
        });
        window.location.reload();
        router.replace('/')
        
       } catch (error) {
        console.log(error.message);
        toast.error("Something error!",{
          duration:3000
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