import { headerItems, userInfo } from '@/constant/Constant'
import Image from 'next/image'
import React from 'react'

const Intro: React.FC= () => {
  return (
    <section id={headerItems.home.page}
    className='h-screen flex flex-col md:flex-row text-center items-center justify-center md:text-start'
    >
        <div className='lg:mx-32 md:mx-4'>
            <Image
            src={userInfo.picture}
            width={300}
            height={300}
            alt='PP'
            className='rounded-full shadow-2xl mt-10'
            />
        </div>
        <div className='ml-20 sm:ml-12 md:w-1/2 '>
            <h1 className='text-7xl uppercase hidden md:block'>Software Developer</h1>
            <h1 className='text-2xl mt-5 md:text-3xl'>Hi, I&#39;m <span className='text-red-500 text-3xl md:text-4xl'>{userInfo.name}</span></h1>
        </div>
    </section>
  )
}

export default Intro
