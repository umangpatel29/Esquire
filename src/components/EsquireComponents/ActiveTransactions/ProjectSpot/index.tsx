'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const ProjectSpot = () => {
    const [isOpen, setIsOpen] = useState(false);

    const variants = {
        closed: {
            y: '-10%',
            opacity: 0,
        },
        open: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.3, ease: 'easeOut' },
        },
    };

    return (
        <div>
            <div>
                <h1 className='text-[25px] underline text-black font-medium'>Project Spot – Cleaning LLC</h1>
                <h3 className='text-cyan-600 font-medium'>Transaction Status: Initiated as a new investment opportunity on 3/22/2024.</h3>
            </div>
            <div className='flex flex-col gap-1 mt-2'>
                <div className='flex gap-4 items-center cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                    <div className='text-black text-[18px] font-medium'>
                        Active Documents
                    </div>
                    <Image src='/icons/downarrowsvg.svg' alt='' width={15} height={15} className={`${isOpen ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            key="content"
                            variants={variants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="conten ml-3"
                            style={{ zIndex: -10 }}
                        >
                            <>
                                <div>
                                    <li className='text-black text-[16px] font-medium'>NDA</li>
                                    <Link href='/' className='text-cyan-600 font-medium ml-5 text-4'>Joe@barclays.com, jane@barclays.com</Link>
                                </div>
                            </>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default ProjectSpot
