'use client'
import React, { useState } from 'react'
import Image from 'next/image';

type handleonchangeType = {
    onchange: (val: string) => void
}

const Financing = ({ onchange }: handleonchangeType) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenFinancing, setIsOpenFinancing] = useState(false);
    const [isOpenList, setIsOpenList] = useState(false);
    const [isOpenList2, setIsOpenList2] = useState(false);
    const [isOpenList3, setIsOpenList3] = useState(false);
    const [isCoinvest, setIsCoinvest] = useState(false);

    return (
        <div className='flex flex-col gap-3'>
            <div>
                <div className='flex flex-col gap-1'>
                    <div className='flex gap-4 items-center cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                        <div className='text-black text-[18px] font-medium'>
                            Auction Process
                        </div>
                        <Image src='/icons/downarrowsvg.svg' alt='' width={15} height={15} className={`${isOpen ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                    </div>
                    {
                        isOpen && (
                            <div className='slide-in'>
                                <div>
                                    <li className='text-black text-[16px] font-medium'>Active documents:
                                        <span className='text-cyan-600 cursor-pointer' onClick={() => onchange('purchaseTable')}> Stock Purchase Agreement</span>,
                                        <span className='text-cyan-600 cursor-pointer' onClick={() => onchange('purchaseTable')}> LLC Agreement</span>,
                                        <span className='text-cyan-600 cursor-pointer' onClick={() => onchange('purchaseTable')}> Transition Services Agreements</span>
                                    </li>
                                </div>
                                <div>
                                    <li className='text-black text-[16px] font-medium'> Negotiated documents:
                                        <span className='text-cyan-600 cursor-pointer' onClick={() => onchange('purchaseTable')}> Process NDA</span>,
                                        <span className='text-cyan-600 cursor-pointer' onClick={() => onchange('purchaseTable')}> IOI</span>,
                                        <span className='text-cyan-600 cursor-pointer' onClick={() => onchange('purchaseTable')}> LOI</span></li>
                                </div>
                                <div>
                                    <li className='text-[16px] font-medium'> <span className='text-cyan-600 cursor-pointer' onClick={() => onchange('purchaseTable')}>Diligence Tracker</span></li>
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-4 items-center cursor-pointer' onClick={() => setIsOpenFinancing(!isOpenFinancing)}>
                    <div className='text-black text-[18px] font-medium'>
                        Financing Process
                    </div>
                    <Image src='/icons/downarrowsvg.svg' alt='' width={15} height={15} className={`${isOpenFinancing ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                </div>
                {
                    isOpenFinancing && (
                        <>
                            <div className='slide-in'>
                                <div className='flex gap-2 items-center cursor-pointer' onClick={() => setIsOpenList(!isOpenList)} >
                                    <li className='text-black text-[16px] font-medium'>
                                        1L and Revolver
                                    </li>
                                    <Image src='/icons/downarrowsvg.svg' alt='' width={12} height={12} className={`mt-[2px] ${isOpenList ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                                </div>
                                {isOpenList && (
                                    <div className='ml-7 slide-in'>
                                        <div>- Active documents:
                                            <span className='text-cyan-600 cursor-pointer' onClick={() => onchange('purchaseTable')}> Credit Agreement</span>,
                                            <span className='text-cyan-600 cursor-pointer' onClick={() => onchange('purchaseTable')}> Intercreditor Agreement</span>
                                        </div>

                                        <div>- Negotiated documents:
                                            <span className='text-cyan-600 cursor-pointer' onClick={() => onchange('purchaseTable')}> NDA</span>,
                                            <span className='text-cyan-600 cursor-pointer' onClick={() => onchange('purchaseTable')}> Debt Commitment Letter</span>

                                        </div>
                                        <div>-
                                            <span className='text-cyan-600 cursor-pointer' onClick={() => onchange('purchaseTable')}> Diligence Tracker</span>,
                                            <span className='text-cyan-600 cursor-pointer' onClick={() => onchange('purchaseTable')}> Previous Term Sheets</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className='slide-in'>
                                <div className='flex gap-2 items-center cursor-pointer' onClick={() => setIsOpenList2(!isOpenList2)} >
                                    <li className='text-black text-[16px] font-medium'>
                                        2L
                                    </li>
                                    <Image src='/icons/downarrowsvg.svg' alt='' width={12} height={12} className={`mt-[2px] ${isOpenList2 ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                                </div>
                                {isOpenList2 && (
                                    <div className='ml-7 slide-in'>
                                        <div>- Active documents:
                                            <span className='text-cyan-600 cursor-pointer' onClick={() => onchange('purchaseTable')}> Credit Agreement</span>,
                                            <span className='text-cyan-600 cursor-pointer' onClick={() => onchange('purchaseTable')}> Intercreditor Agreement</span>
                                        </div>

                                        <div>- Negotiated documents:
                                            <span className='text-cyan-600 cursor-pointer' onClick={() => onchange('purchaseTable')}> NDA</span>,
                                            <span className='text-cyan-600 cursor-pointer' onClick={() => onchange('purchaseTable')}> Debt Commitment Letter</span>

                                        </div>
                                        <div>-
                                            <span className='text-cyan-600 cursor-pointer' onClick={() => onchange('purchaseTable')}> Diligence Tracker</span>,
                                            <span className='text-cyan-600 cursor-pointer' onClick={() => onchange('purchaseTable')}> Previous Term Sheets</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className='slide-in'>
                                <div className='flex gap-2 items-center cursor-pointer' onClick={() => setIsOpenList3(!isOpenList3)} >
                                    <li className='text-black text-[16px] font-medium'>
                                        Preferred Equity:
                                    </li>
                                    <Image src='/icons/downarrowsvg.svg' alt='' width={12} height={12} className={`mt-[2px] ${isOpenList3 ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                                </div>
                                {isOpenList3 && (
                                    <div className='ml-7 slide-in'>
                                        <div>- Active documents:
                                            <span className='text-cyan-600 cursor-pointer' onClick={() => onchange('purchaseTable')}> Credit Agreement</span>,
                                            <span className='text-cyan-600 cursor-pointer' onClick={() => onchange('purchaseTable')}> Intercreditor Agreement</span>
                                        </div>

                                        <div>- Negotiated documents:
                                            <span className='text-cyan-600 cursor-pointer' onClick={() => onchange('purchaseTable')}> NDA</span>,
                                            <span className='text-cyan-600 cursor-pointer' onClick={() => onchange('purchaseTable')}> Debt Commitment Letter</span>

                                        </div>
                                        <div>-
                                            <span className='text-cyan-600 cursor-pointer' onClick={() => onchange('purchaseTable')}> Diligence Tracker</span>,
                                            <span className='text-cyan-600 cursor-pointer' onClick={() => onchange('purchaseTable')}> Previous Term Sheets</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </>
                    )
                }

            </div>

            <div className='flex flex-col gap-1'>
                <div className='flex gap-4 items-center cursor-pointer' onClick={() => setIsCoinvest(!isCoinvest)}>
                    <div className='text-black text-[18px] font-medium'>
                        Equity Co-Invest Process
                    </div>
                    <Image src='/icons/downarrowsvg.svg' alt='' width={15} height={15} className={`${isCoinvest ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                </div>
                {
                    isCoinvest && (
                        <div className='slide-in ml-5'>
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
                    )
                }

            </div>
        </div>
    );
};

export default Financing;
