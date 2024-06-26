'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image';

const ProjectSpot = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div>
            <div>
                <h1 className='text-[18px] trasking-[12px] underline text-black font-medium'>Project Spot - Cleaning LLC</h1>
                <h3 className='text-cyan-600 text-[15px]'>Transaction Status: IOI signed on 3/22/2024. LOIs are due 4/22/2024 at 5PM ET.</h3>
            </div>
            <div className='flex flex-col gap-1 mt-2'>
                <div className='flex gap-4 items-center cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                    <div className='text-black text-[16px] font-medium'>
                        Active Documents
                    </div>
                    <Image src='/icons/downarrowsvg.svg' alt='' width={15} height={15} className={`${isOpen ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                </div>
                {isOpen && (
                    <div className='slide-in'>
                        <li className='text-black text-[14px] font-medium'>NDA</li>
                        <Link href='/' className='text-cyan-600 font-medium ml-5 text-[14px]'>Joe@barclays.com, jane@barclays.com</Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProjectSpot
