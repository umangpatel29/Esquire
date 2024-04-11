'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image';

const ProjectStar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div>
                <h1 className='text-[25px] underline text-black font-medium'>Project Star – Script LLC</h1>
                <h3 className='text-cyan-600 font-medium'>Transaction Status: Target transaction closing on [x].</h3>
            </div>
            <div className='flex flex-col gap-1 mt-2'>
                <div className='flex gap-4 items-center cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                    <div className='text-black text-[18px] font-medium'>
                        Active Documents
                    </div>
                    <Image src='/icons/downarrowsvg.svg' alt='' width={15} height={15} className={`${isOpen ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                </div>
                {isOpen && (
                    <div className='slide-in'>
                        <li className='text-black text-[16px] font-medium'>Stock Purchase Agreemen</li>
                        <Link href='/' className='text-cyan-600 font-medium ml-5 text-4'>Joe@moelis.com, jane@moelis.com</Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProjectStar
