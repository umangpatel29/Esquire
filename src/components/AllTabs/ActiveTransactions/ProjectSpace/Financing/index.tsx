'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import FinanicingProcess from './financingprocess';

type handleonchangeType = {
    onchange: (val: string) => void
}

const Financing = ({ onchange }: handleonchangeType) => {
    const [isOpen, setIsOpen] = useState(true);
    const [keyfiles, setKeyFiles] = useState(true)
    const [isCoinvest, setIsCoinvest] = useState(false);
    const [company, setCompany] = useState(true)

    const companyDoc = [
        { name: '', value: ['Commercial Contracts'] },
        { name: '', value: ['Financial Files'] },
        { name: '', value: ['Insurance'] },
        { name: '', value: ['HR'] },
        { name: '', value: ['Legal'] },
        { name: '', value: ['IP'] },
        { name: '', value: ['IT'] },
        { name: '', value: ['Tax'] },
    ]

    const keyfilesdata = [
        { name: '', value: ['Buy-side QoE,', 'Rollforward'] },
        { name: 'Sell-side Materials:', value: ['CIM,', 'Term Sheet,', 'Sell-side QoE,', 'Financial Update'] },
        { name: 'Internal Materials:', value: ['Investment Committee Intro Memo,', 'Sales Database'] },
        { name: 'Financing Materials:', value: ['Financing Mode'] },
        { name: 'Models:', value: ['IC Intro Memo Model,', 'Latest Equity Mode'] },
        { name: 'Third Party Diligence Materials:', value: ['RWI Insurance Offering from Aon,', 'Latest Equity Model'] }
    ]




    return (
        <div className='flex flex-col gap-3'>

            <div>

                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-3 ml-5'>
                        <div className='flex flex-col gap-1 mt-2'>
                            <div className='flex gap-4 items-center cursor-pointer' onClick={() => setCompany(!company)}>
                                <li>
                                    <span className='text-black text-[18px] font-medium'>
                                        Key Active Legal Docs:
                                    </span>
                                </li>
                                <Image src='/icons/downarrowsvg.svg' alt='' width={15} height={15} className={`${company ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                            </div>

                            {
                                company && (
                                    <div className='slide-in ml-10'>
                                        <div>
                                            {
                                                companyDoc && companyDoc.map((item, index) => (
                                                    <div key={index}>
                                                        <ul style={{ listStyleType: 'circle' }} className=''>
                                                            <li className='text-black text-[16px]'>{item.name}
                                                                {item.value.map((value, id) => (
                                                                    <span key={id} className='text-cyan-700 cursor-pointer font-normal hover:font-medium duration-300'> {value}</span>
                                                                ))}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className='ml-5'>
                        <div className='flex flex-col gap-1'>
                            <div className='flex gap-4 items-center cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                                <li>
                                    <span className='text-black text-[18px] font-medium'>
                                        Auction Process
                                    </span>
                                </li>
                                <Image src='/icons/downarrowsvg.svg' alt='' width={15} height={15} className={`${isOpen ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                            </div>
                            {
                                isOpen && (
                                    <div className='slide-in ml-10'>
                                        <ul style={{ listStyleType: 'circle' }} className=''>
                                            <li className='text-black text-[16px] font-medium'>Active documents:
                                                <span className='text-cyan-600 cursor-pointer' onClick={() => onchange('purchaseTable')}> Stock Purchase Agreement</span>,
                                                <span className='text-cyan-600 cursor-pointer' onClick={() => onchange('purchaseTable')}> LLC Agreement</span>,
                                                <span className='text-cyan-600 cursor-pointer' onClick={() => onchange('purchaseTable')}> Transition Services Agreements</span>
                                            </li>
                                        </ul>
                                        <ul style={{ listStyleType: 'circle' }} className=''>
                                            <li className='text-black text-[16px] font-medium'> Negotiated documents:
                                                <span className='text-cyan-600 cursor-pointer' onClick={() => onchange('purchaseTable')}> Process NDA</span>,
                                                <span className='text-cyan-600 cursor-pointer' onClick={() => onchange('purchaseTable')}> IOI</span>,
                                                <span className='text-cyan-600 cursor-pointer' onClick={() => onchange('purchaseTable')}> LOI</span></li>
                                        </ul>
                                        <ul style={{ listStyleType: 'circle' }} className=''>
                                            <li className='text-[16px] font-medium'> <span className='text-cyan-600 cursor-pointer' onClick={() => onchange('purchaseTable')}>Diligence Tracker</span></li>
                                        </ul>
                                    </div>
                                )
                            }
                        </div>

                    </div>

                    <div className='ml-5'>
                        <div className='flex flex-col gap-1'>
                            <div className='flex gap-4 items-center cursor-pointer' onClick={() => setKeyFiles(!keyfiles)}>
                                <li>
                                    <span className='text-black text-[18px] font-medium'>
                                        Master Diligence Tracker Key Files
                                    </span>
                                </li>
                                <Image src='/icons/downarrowsvg.svg' alt='' width={15} height={15} className={`${keyfiles ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                            </div>
                            {
                                keyfiles && (
                                    <div className='slide-in ml-10'>
                                        {
                                            keyfilesdata && keyfilesdata.map((item, index) => (
                                                <div key={index}>
                                                    <ul style={{ listStyleType: 'circle' }} className=''>
                                                        <li className='text-black text-[16px]'>{item.name}
                                                            {item.value.map((value, id) => (
                                                                <span key={id} className='text-cyan-700 cursor-pointer font-medium'> {value}</span>
                                                            ))}
                                                        </li>
                                                    </ul>
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <FinanicingProcess />
                </div>
            </div>
        </div>
    );
};

export default Financing;
