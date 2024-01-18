import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import LogoutButton from './buttons/Logoutbutton';

const UserProfile = ({ username, email }) => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className='bg-cyan-700 rounded-lg border border-white'>Profile</Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle className='text-center'>Your Profile</DialogTitle>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <label htmlFor='name' className='text-right'>
                Name
              </label>
              <input
                id='name'
                value={username || 'John Doe'}
                className='col-span-3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300'
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <label htmlFor='email' className='text-right'>
                Email
              </label>
              <input
                id='email'
                value={email || 'john.doe@example.com'}
                className='col-span-3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300'
              />
            </div>
          </div>
          <DialogFooter>
            <LogoutButton />
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UserProfile;
