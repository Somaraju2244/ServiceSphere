"use client"
import { Button } from '../../components/ui/button'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useEffect } from 'react'

import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvXBLE5LKGrS2xMt7P9hl1PZJagPZFigY",
  authDomain: "servicesphere-d1d84.firebaseapp.com",
  projectId: "servicesphere-d1d84",
  storageBucket: "servicesphere-d1d84.appspot.com",
  messagingSenderId: "398631985",
  appId: "1:398631985:web:df2757b786e9611762a110",
  measurementId: "G-E5LDRSFMX7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function Header() {

  const {data}=useSession();

  useEffect(()=>{
    console.log(data);
  },[data])

  return (
    <div className='p-5 shadow-sm flex  justify-between'>
        <div className='flex items-center gap-8 '>
            <Image src='/logo3.png' alt='logo'
            width={180} height={90} />
            <div className='md:flex items-center
            gap-6 hidden
            '>
                <Link href={'/'} className='hover:scale-105 hover:text-primary
                cursor-pointer'>Home</Link>
                <Link href={'/search/cleaning'} className='hover:scale-105 hover:text-primary
                cursor-pointer'>Services</Link>
                <Link href={"/aboutus"} className='hover:scale-105 hover:text-primary
                cursor-pointer'>About Us</Link>

            </div>
           
        </div>
        <div>
          {data?.user?
          
          <DropdownMenu>
  <DropdownMenuTrigger asChild>
  <Image src={data?.user?.image}
          alt='user'
          width={40}
          height={40}
          className='rounded-full'
          />
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
     <Link href={'/mybooking'}>My Booking</Link> 
      </DropdownMenuItem>
    <DropdownMenuItem onClick={()=>signOut()}>Logout</DropdownMenuItem>
   
  </DropdownMenuContent>
</DropdownMenu>

          :

          <Button onClick={()=>signIn('descope')}>Login / Sign Up</Button>

        }
            </div>
    </div>
  )
}

export default Header

