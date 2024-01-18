'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaHome } from 'react-icons/fa';
import LogoutButton from './buttons/Logoutbutton';
import axios from 'axios';
import USerProfile from './profile';
// ... (imports and other code)

const Navbar = () => {
  const [username, setUsername] = useState('');
  const [Email, setEmail] = useState('');

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const req = await axios.get('/api/users/me');
        setUsername(req.data.data.username);
        setEmail(req.data.data.email);
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      } finally {
        setLoading(false);
      

      }
    };

    fetchData();
  }, [username]);
  

  return (
    <nav className='Nav flex items-center justify-between p-4 m-3 rounded-lg bg-cyan-600 text-white '>
      <div className='flex gap-1 items-center text-2xl font-semibold'>
        <Link href='/'>Home</Link>
        <FaHome />
      </div>

      <div className='space-x-4 font-semibold'>
        {loading ? (
          // Display a loading indicator or placeholder while fetching data
          <span>Loading...</span>
        ) : !username ? (
          // If user is not logged in, show signup and login links
          <>
            <Link href='/Signup' className="underline border border-white p-2 rounded-lg">Signup</Link>
            <Link href='/Login' className='underline border border-white p-2 rounded-lg'>Login</Link>
          </>
        ) : (
          // If user is logged in, show logout button
          <USerProfile username={username} email={Email} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
