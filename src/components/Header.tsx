
'use client'

import React, {useState} from 'react'
import { headerItems, userInfo } from '@/constant/Constant';
import { NavItems } from '@/models/Header';
import {BiMenu} from 'react-icons/bi';
const Header:React.FC = () => {
    const[navItem, setNavItem]= useState<boolean>(false)
  return (
    <header className='bg-white p-6 md:flex justify-between fixed top-0 w-full z-30'>
        <div className='flex justify-between'>
            <h2 className='text-2xl font-bold'>{userInfo.name} </h2>
            <BiMenu 
            size={30}
            className='md:hidden'
            onClick={()=>setNavItem(prevState=> !prevState)}
            />
        </div>  
        <div className={`mr-8 md:space-x-6 mt-3 md:mt-0 md:block  ${navItem ? 'block':'hidden'}`}>
           {
            Object.keys(headerItems).map(item=>(
                <a className='block md:inline-block cursor-pointer'
                key={headerItems[item as keyof NavItems].label}
                >{headerItems[item as keyof NavItems].label}</a>
            ))
           } 
        </div>  
    </header>
  )
}

export default Header;
