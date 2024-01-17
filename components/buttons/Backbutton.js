'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'



export const BackButton = ({href,label}) => {
  return (
   <Button
   variant='link'
   className="font-normal w-full "
   size="sm"
   asChild
   >
    <Link href={href} className=''>
        {label}
    </Link>
   </Button>
  )
}