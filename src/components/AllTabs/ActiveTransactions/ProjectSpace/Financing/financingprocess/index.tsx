'use client'
import React, { useState } from 'react'
import Image from 'next/image';

const F_2L = [
    { name: 'Active documents:', value: ['Credit Agreement,', 'Intercreditor Agreement'] },
    { name: 'Negotiated documents:', value: ['Debt Commitment Letter'] },
    { name: 'Other parties:', value: ['Previous Term Sheets,', 'Outreach Tracker'] },
]

const prefferredFeature = [
    { name: 'Active documents:', value: ['Stock Purchase Agreement,', 'Intercreditor Agreement'] },
    { name: 'Negotiated documents:', value: ['Debt Commitment Letter'] },
    { name: 'Other parties:', value: ['Previous Term Sheets,', 'Outreach Tracker'] },
]



const FinanicingProcess = () => {

    const [isOpenFinancing, setIsOpenFinancing] = useState(true);

    const [isOpenList, setIsOpenList] = useState(true);
    const [isOpenList2, setIsOpenList2] = useState(false);
    const [isOpenList3, setIsOpenList3] = useState(false);


    return (
        <div className='flex flex-col gap-2 ml-[21px]'>
            <div className='flex gap-4 items-center cursor-pointer' onClick={() => setIsOpenFinancing(!isOpenFinancing)}>
                <li>
                    <span className='text-black text-[16px] font-medium'>
                        Financing Process
                    </span>
                </li>
                <Image src='/icons/downarrowsvg.svg' alt='' width={15} height={15} className={`${isOpenFinancing ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
            </div>
            {
                isOpenFinancing && (
                    <>
                        <div className='slide-in'>
                            <div className='flex gap-2 items-center cursor-pointer' onClick={() => setIsOpenList(!isOpenList)} >
                                <ul style={{ listStyleType: 'circle' }} className='ml-11'>
                                    <li className='text-black text-[15px] font-medium'>
                                        1L and Revolver
                                    </li>
                                </ul>
                                <Image src='/icons/downarrowsvg.svg' alt='' width={12} height={12} className={`mt-[2px] ${isOpenList ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                            </div>
                            {isOpenList && (
                                <div className='ml-16 slide-in font-medium'>
                                    <ul style={{ listStyleType: 'square' }} className=''>
                                        <li className='text-[14px]'>Active documents:
                                            <span className='text-cyan-600 cursor-pointer font-normal hover:font-medium duration-300'> Credit Agreement</span>,
                                            <span className='text-cyan-600 cursor-pointer font-normal hover:font-medium duration-300'> Intercreditor Agreement</span>
                                        </li>
                                    </ul>

                                    <div>
                                        <ul style={{ listStyleType: 'square' }} className=''>
                                            <li className='text-[14px]'>Negotiated documents:
                                                <span className='text-cyan-600 cursor-pointer font-normal hover:font-medium duration-300'> NDA</span>,
                                                <span className='text-cyan-600 cursor-pointer font-normal hover:font-medium duration-300'> Debt Commitment Letter</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul style={{ listStyleType: 'square' }} className=''>
                                            <li className='text-[14px]'>
                                                <span className='text-cyan-600 cursor-pointer font-normal hover:font-medium duration-300'> Diligence Tracker</span>,
                                                <span className='text-cyan-600 cursor-pointer font-normal hover:font-medium duration-300'> Previous Term Sheets</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className='slide-in'>
                            <div className='flex gap-2 items-center cursor-pointer' onClick={() => setIsOpenList2(!isOpenList2)} >
                                <ul style={{ listStyleType: 'circle' }} className='ml-11'>
                                    <li className='text-black text-[15px] font-medium'>
                                        2L
                                    </li>
                                </ul>
                                <Image src='/icons/downarrowsvg.svg' alt='' width={12} height={12} className={`mt-[2px] ${isOpenList2 ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                            </div>
                            {isOpenList2 && (
                                <div className='ml-16 slide-in'>
                                    {
                                        F_2L && F_2L.map((item, index) => (
                                            <div key={index}>
                                                <ul style={{ listStyleType: 'square' }} className=''>
                                                    <li className='text-black text-[14px]'>{item.name}
                                                        {item.value.map((value, id) => (
                                                            <span key={id} className='text-cyan-600 cursor-pointer font-normal hover:font-medium duration-300'> {value}</span>
                                                        ))}
                                                    </li>
                                                </ul>
                                            </div>
                                        ))
                                    }
                                </div>
                            )}
                        </div>
                        <div className='slide-in'>
                            <div className='flex gap-2 items-center cursor-pointer' onClick={() => setIsOpenList3(!isOpenList3)} >
                                <ul style={{ listStyleType: 'circle' }} className='ml-11'>
                                    <li className='text-black text-[15px] font-medium'>
                                        Preferred Equity
                                    </li>
                                </ul>
                                <Image src='/icons/downarrowsvg.svg' alt='' width={12} height={12} className={`mt-[2px] ${isOpenList3 ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                            </div>
                            {isOpenList3 && (
                                <div className='ml-16 slide-in'>
                                    {
                                        prefferredFeature && prefferredFeature.map((item, index) => (
                                            <div key={index}>
                                                <ul style={{ listStyleType: 'square' }} className=''>
                                                    <li className='text-black text-[14px]'>{item.name}
                                                        {item.value.map((value, id) => (
                                                            <span key={id} className='text-cyan-600 cursor-pointer font-normal hover:font-medium duration-300'> {value}</span>
                                                        ))}
                                                    </li>
                                                </ul>
                                            </div>
                                        ))
                                    }
                                </div>
                            )}
                        </div>
                       
                    </>
                )
            }
            
        </div >
    )
}

export default FinanicingProcess
