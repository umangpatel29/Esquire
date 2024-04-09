'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import ProjectSpot from "@/components/EsquireComponents/ActiveTransactions/ProjectSpot"
import ProjectStar from "@/components/EsquireComponents/ActiveTransactions/ProjectStar"


const ActiveTransactions = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);

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
        <div className='flex flex-col gap-4'>
            <div>
                <div>
                    <h1 className='text-[25px] underline text-black font-medium'>Project Space – Rocket LLC</h1>
                    <h3 className='text-cyan-600 font-medium'>Transaction Status: LOI Signed on 3/26/2024.</h3>
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
                                        <li className='text-black text-[16px] font-medium'>Stock Purchase Agreement</li>
                                        <Link href='/' className='text-cyan-600 font-medium ml-5 text-4'>Joe@moelis.com, jane@moelis.com</Link>
                                    </div>
                                    <div>
                                        <li className='text-black text-[16px] font-medium'>Operating Agreement</li>
                                        <Link href='/' className='text-cyan-600 font-medium ml-5 text-4'>Joe@rocket.com, jane@rocket.com</Link>
                                    </div>
                                    <div>
                                        <li className='text-black text-[16px] font-medium'>1L Credit Agreement</li>
                                        <Link href='/' className='text-cyan-600 font-medium ml-5 text-4'>Joe@hps.com, jane@hps.com</Link>
                                    </div>
                                </>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>
            <div>
                <div>
                    <h1 className='text-[25px] underline text-black font-medium'>Project Spot – Cleaning LLC</h1>
                    <h3 className='text-cyan-600 font-medium'>Transaction Status: Initiated as a new investment opportunity on 3/22/2024.</h3>
                </div>
                <div className='flex flex-col gap-1 mt-2'>
                    <div className='flex gap-4 items-center cursor-pointer' onClick={() => setIsOpen2(!isOpen2)}>
                        <div className='text-black text-[18px] font-medium'>
                            Active Documents
                        </div>
                        <Image src='/icons/downarrowsvg.svg' alt='' width={15} height={15} className={`${isOpen2 ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                    </div>
                    <AnimatePresence>
                        {isOpen2 && (
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
            <div>
                <div>
                    <h1 className='text-[25px] underline text-black font-medium'>Project Star – Script LLC</h1>
                    <h3 className='text-cyan-600 font-medium'>Transaction Status: Target transaction closing on [x].</h3>
                </div>
                <div className='flex flex-col gap-1 mt-2'>
                    <div className='flex gap-4 items-center cursor-pointer' onClick={() => setIsOpen3(!isOpen3)}>
                        <div className='text-black text-[18px] font-medium'>
                            Active Documents
                        </div>
                        <Image src='/icons/downarrowsvg.svg' alt='' width={15} height={15} className={`${isOpen3 ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                    </div>
                    <AnimatePresence>
                        {isOpen3 && (
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
                                        <li className='text-black text-[16px] font-medium'>Stock Purchase Agreemen</li>
                                        <Link href='/' className='text-cyan-600 font-medium ml-5 text-4'>Joe@moelis.com, jane@moelis.com</Link>
                                    </div>
                                </>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default ActiveTransactions
