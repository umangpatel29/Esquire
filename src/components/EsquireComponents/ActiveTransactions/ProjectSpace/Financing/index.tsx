'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Financing = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenFinancing, setIsOpenFinancing] = useState(false);
    const [isOpenList, setIsOpenList] = useState(false);
    const [isOpenList2, setIsOpenList2] = useState(false);
    const [isOpenList3, setIsOpenList3] = useState(false);
    const [isCoinvest, setIsCoinvest] = useState(false);

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
        <div className='flex flex-col gap-3'>
            <div>
                <div className='flex flex-col gap-1 mt-2'>
                    <div className='flex gap-4 items-center cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                        <div className='text-black text-[18px] font-medium'>
                            Auction Process
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
                                        <li className='text-black text-[16px] font-medium'>Active documents:
                                            <span className='text-cyan-600 cursor-pointer'> Stock Purchase Agreement</span>,
                                            <span className='text-cyan-600 cursor-pointer'> LLC Agreement</span>,
                                            <span className='text-cyan-600 cursor-pointer'> Transition Services Agreements</span>
                                        </li>
                                    </div>
                                    <div>
                                        <li className='text-black text-[16px] font-medium'> Negotiated documents:
                                            <span className='text-cyan-600 cursor-pointer'> Process NDA</span>,
                                            <span className='text-cyan-600 cursor-pointer'> IOI</span>,
                                            <span className='text-cyan-600 cursor-pointer'> LOI</span></li>
                                    </div>
                                    <div>
                                        <li className='text-[16px] font-medium'> <span className='text-cyan-600 cursor-pointer'>Diligence Tracker</span></li>
                                    </div>
                                </>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-4 items-center cursor-pointer' onClick={() => setIsOpenFinancing(!isOpenFinancing)}>
                    <div className='text-black text-[18px] font-medium'>
                        Financing Process
                    </div>
                    <Image src='/icons/downarrowsvg.svg' alt='' width={15} height={15} className={`${isOpenFinancing ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                </div>
                <AnimatePresence>
                    {isOpenFinancing && (
                        <>
                            <motion.div key="financing-content" variants={variants} initial="closed" animate="open" exit="closed" className="conten ml-3">
                                <div className='flex gap-2 items-center cursor-pointer' onClick={() => setIsOpenList(!isOpenList)} >
                                    <li className='text-black text-[16px] font-medium'>
                                        1L and Revolver
                                    </li>
                                    <Image src='/icons/downarrowsvg.svg' alt='' width={12} height={12} className={`mt-[2px] ${isOpenList ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                                </div>
                                <AnimatePresence>
                                    {isOpenList && (
                                        <motion.div key="li-content" variants={variants} initial="closed" animate="open" exit="closed" className="conten" style={{ zIndex: -10 }}>
                                            <div className='ml-7'>
                                                <div>- Active documents:
                                                    <span className='text-cyan-600 cursor-pointer'> Credit Agreement</span>,
                                                    <span className='text-cyan-600 cursor-pointer'> Intercreditor Agreement</span>
                                                </div>

                                                <div>- Negotiated documents:
                                                    <span className='text-cyan-600 cursor-pointer'> NDA</span>,
                                                    <span className='text-cyan-600 cursor-pointer'> Debt Commitment Letter</span>

                                                </div>
                                                <div>-
                                                    <span className='text-cyan-600 cursor-pointer'> Diligence Tracker</span>,
                                                    <span className='text-cyan-600 cursor-pointer'> Previous Term Sheets</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                            <motion.div key="financing-content" variants={variants} initial="closed" animate="open" exit="closed" className="conten ml-3">
                                <div className='flex gap-2 items-center cursor-pointer' onClick={() => setIsOpenList2(!isOpenList2)} >
                                    <li className='text-black text-[16px] font-medium'>
                                        2L
                                    </li>
                                    <Image src='/icons/downarrowsvg.svg' alt='' width={12} height={12} className={`mt-[2px] ${isOpenList2 ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                                </div>
                                <AnimatePresence>
                                    {isOpenList2 && (
                                        <motion.div key="li-content" variants={variants} initial="closed" animate="open" exit="closed" className="conten" style={{ zIndex: -10 }}>
                                            <div className='ml-7'>
                                                <div>- Active documents:
                                                    <span className='text-cyan-600 cursor-pointer'> Credit Agreement</span>,
                                                    <span className='text-cyan-600 cursor-pointer'> Intercreditor Agreement</span>
                                                </div>

                                                <div>- Negotiated documents:
                                                    <span className='text-cyan-600 cursor-pointer'> NDA</span>,
                                                    <span className='text-cyan-600 cursor-pointer'> Debt Commitment Letter</span>

                                                </div>
                                                <div>-
                                                    <span className='text-cyan-600 cursor-pointer'> Diligence Tracker</span>,
                                                    <span className='text-cyan-600 cursor-pointer'> Previous Term Sheets</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                            <motion.div key="financing-content" variants={variants} initial="closed" animate="open" exit="closed" className="conten ml-3">
                                <div className='flex gap-2 items-center cursor-pointer' onClick={() => setIsOpenList3(!isOpenList3)} >
                                    <li className='text-black text-[16px] font-medium'>
                                        Preferred Equity:
                                    </li>
                                    <Image src='/icons/downarrowsvg.svg' alt='' width={12} height={12} className={`mt-[2px] ${isOpenList3 ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                                </div>
                                <AnimatePresence>
                                    {isOpenList3 && (
                                        <motion.div key="li-content" variants={variants} initial="closed" animate="open" exit="closed" className="conten" style={{ zIndex: -10 }}>
                                            <div className='ml-7'>
                                                <div>- Active documents:
                                                    <span className='text-cyan-600 cursor-pointer'> Credit Agreement</span>,
                                                    <span className='text-cyan-600 cursor-pointer'> Intercreditor Agreement</span>
                                                </div>

                                                <div>- Negotiated documents:
                                                    <span className='text-cyan-600 cursor-pointer'> NDA</span>,
                                                    <span className='text-cyan-600 cursor-pointer'> Debt Commitment Letter</span>

                                                </div>
                                                <div>-
                                                    <span className='text-cyan-600 cursor-pointer'> Diligence Tracker</span>,
                                                    <span className='text-cyan-600 cursor-pointer'> Previous Term Sheets</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>

            <div className='flex flex-col gap-1'>
                <div className='flex gap-4 items-center cursor-pointer' onClick={() => setIsCoinvest(!isCoinvest)}>
                    <div className='text-black text-[18px] font-medium'>
                        Equity Co-Invest Process
                    </div>
                    <Image src='/icons/downarrowsvg.svg' alt='' width={15} height={15} className={`${isCoinvest ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                </div>
                <AnimatePresence>
                    {isCoinvest && (
                        <motion.div key="li-content" variants={variants} initial="closed" animate="open" exit="closed" className="conten" style={{ zIndex: -10 }}>
                            <div className='ml-5'>
                                <div>- Active documents:
                                    <span className='text-cyan-600 cursor-pointer'> Credit Agreement</span>,
                                    <span className='text-cyan-600 cursor-pointer'> Intercreditor Agreement</span>
                                </div>

                                <div>- Negotiated documents:
                                    <span className='text-cyan-600 cursor-pointer'> NDA</span>,
                                    <span className='text-cyan-600 cursor-pointer'> Debt Commitment Letter</span>

                                </div>
                                <div>-
                                    <span className='text-cyan-600 cursor-pointer'> Diligence Tracker</span>,
                                    <span className='text-cyan-600 cursor-pointer'> Previous Term Sheets</span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Financing;
