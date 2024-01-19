'use client'
import React, { useState, useEffect } from 'react';
import CardWrapper from '../cardwrapper';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';
import Loader from '../Loader';




// Define the SignInForm component
const SignInForm = () => {


  const router=useRouter();
  const [Loading, setLoading] = useState(false);
  const [user, setuser] = useState({
    username: '',
    email: '',
    password: '',
  });

  // useEffect to log the user object after the state has been updated
  useEffect(() => {
    console.log('user', user);
  }, [user]);

  // Handle form submission
  const handleSubmit = async() => {
    
    
    try {
      setLoading(true);
     const res=await axios.post('/api/users/Signup',user) ; 
     toast.success("Create account Successful",{
      duration:3000,
     })
     router.replace('/dashboard')
    } catch (error) {
      toast.error('Provide Valid Email and Password',{
        duration:3000,
        style: {backgroundColor:'#ef4444',color:'white'},
      });
      console.log('singup failed',error.message);
      
    }
    finally{
      setLoading(false);
    }
  };

  return (
    <CardWrapper
      headerLabel={Loading?
        <Loader text={"Creating Account"}/>
        :"Create account"}
      backButtonLable={'Already have an account!'}
      backButtonHref="/Login"
      //showSocial if we want to add login with google using OAuth (currently no available)
      
    >
      <div  className="mt-4 text-left">
        {/* Username Input */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">
            Username
          </label>
          <Input type="text" id="username" name="username" placeholder="Enter your username"
          value={user.username}
          onChange={(e)=>setuser({...user,username:e.target.value})}
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <Input type="email" id="email" name="email" placeholder="Enter your email" 
           value={user.email}
           onChange={(e)=>setuser({...user,email:e.target.value})}/>
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <Input type="password" id="password" name="password" placeholder="Enter your password" 
           value={user.password}
           onChange={(e)=>setuser({...user,password:e.target.value})}/>
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full" onClick={handleSubmit}>
          Create Account
        </Button>
      </div>
    </CardWrapper>
  );
};

// Export the SignInForm component
export default SignInForm;
