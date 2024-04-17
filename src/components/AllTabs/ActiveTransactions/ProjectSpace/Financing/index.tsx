'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import FinanicingProcess from './financingprocess';

type handleonchangeType = {
    onchange: (val: string) => void
}

const Financing = ({ onchange }: handleonchangeType) => {
    const [isOpen, setIsOpen] = useState(true);
    const [keyfiles, setKeyFiles] = useState(false)
    const [isDiligence, setIsDiligence] = useState(true);
    const [company, setCompany] = useState(true)
    const [isOpenList4, setIsOpenList4] = useState(true);
    const [isOpenList5, setIsOpenList5] = useState(true);
    const [isOpenList6, setIsOpenList6] = useState(true);

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

    const Co_InvestPurchase = [
        { name: 'Active documents:', value: ['Term Sheets,', 'Subscription Agreements,', 'Purchase Agreements'] },
        { name: 'Negotiated documents:', value: ['NDA,', 'NRL'] },
        { name: '', value: ['Outreach Tracker'] },
    ]

    const ManagementDoc = [
        { name: 'Active documents:', value: ['Employment Agreements,', 'Operating Agreement,', 'MIP Allocation Agreements'] },
        { name: 'Negotiated documents:', value: ['N/A'] },
    ]

    const Third_Party = [
        {
            name: 'Active Files:', value: [
                {
                    name: 'Accountants:', key: ['Buyside QoE,', 'QoE Rollforward,', 'Sell-Side QoE']
                },
                {
                    name: 'Tax:', key: ['Diligence Trackers']
                },
                {
                    name: 'Insurance:', key: ['RWI Insurance Quotes,', 'Diligence Tracker']
                },
                {
                    name: 'Legal:', key: ['HSR Filing,', 'Diligence Tracker']
                },
                {
                    name: 'IT Diligence:', key: ['Diligence Tracker']
                },
                {
                    name: '', key: ['Diligence Tracker']
                }
            ]
        }
    ]


    return (
        <div className='flex flex-col gap-3'>

            <div>

                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-3 ml-5'>
                        <div className='flex flex-col gap-1 mt-2'>
                            <div className='flex gap-4 items-center cursor-pointer' onClick={() => setCompany(!company)}>
                                <li>
                                    <span className='text-black text-[15px] font-medium'>
                                        Company Documents
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
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className='ml-5'>
                        <div className='flex flex-col gap-1'>
                            <div className='flex gap-4 items-center cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                                <li>
                                    <span className='text-black text-[15px] font-medium'>
                                        Auction Process
                                    </span>
                                </li>
                                <Image src='/icons/downarrowsvg.svg' alt='' width={15} height={15} className={`${isOpen ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                            </div>
                            {
                                isOpen && (
                                    <div className='slide-in ml-10'>
                                        <ul style={{ listStyleType: 'circle' }} className=''>
                                            <li className='text-black text-[14px] font-medium'>Active documents:
                                                <span className='text-cyan-600 cursor-pointer font-normal hover:font-medium duration-300' onClick={() => onchange('purchaseTable')}> Stock Purchase Agreement</span>,
                                                <span className='text-cyan-600 cursor-pointer font-normal hover:font-medium duration-300' onClick={() => onchange('purchaseTable')}> LLC Agreement</span>,
                                                <span className='text-cyan-600 cursor-pointer font-normal hover:font-medium duration-300' onClick={() => onchange('purchaseTable')}> Transition Services Agreements</span>
                                                <span className='text-cyan-600 cursor-pointer font-normal hover:font-medium duration-300' onClick={() => onchange('purchaseTable')}> Disclosure Schedules,</span>
                                                <span className='text-cyan-600 cursor-pointer font-normal hover:font-medium duration-300' onClick={() => onchange('purchaseTable')}> Parent Guarantee,</span>
                                                <span className='text-cyan-600 cursor-pointer font-normal hover:font-medium duration-300' onClick={() => onchange('purchaseTable')}> Escrow Agreement,</span>
                                                <span className='text-cyan-600 cursor-pointer font-normal hover:font-medium duration-300' onClick={() => onchange('purchaseTable')}> Exclusivity Agreement </span>
                                            </li>
                                        </ul>
                                        <ul style={{ listStyleType: 'circle' }} className=''>
                                            <li className='text-black text-[14px] font-medium'> Negotiated documents:
                                                <span className='text-cyan-600 cursor-pointer font-normal hover:font-medium duration-300' onClick={() => onchange('purchaseTable')}> Process NDA</span>,
                                                <span className='text-cyan-600 cursor-pointer font-normal hover:font-medium duration-300' onClick={() => onchange('purchaseTable')}> IOI</span>,
                                                <span className='text-cyan-600 cursor-pointer font-normal hover:font-medium duration-300' onClick={() => onchange('purchaseTable')}> LOI</span>,
                                                <span className='text-cyan-600 cursor-pointer font-normal hover:font-medium duration-300' onClick={() => onchange('purchaseTable')}> Term Sheet</span>,
                                                <span className='text-cyan-600 cursor-pointer font-normal hover:font-medium duration-300' onClick={() => onchange('purchaseTable')}> Exclusivity Agreement</span>
                                            </li>
                                        </ul>

                                    </div>
                                )
                            }
                        </div>

                    </div>

                    <div className='ml-5'>
                        <div className='flex flex-col gap-1'>
                            <div className='flex gap-4 items-center cursor-pointer' onClick={() => setIsDiligence(!isDiligence)}>
                                <li>
                                    <span className='text-black text-[15px] font-medium'>
                                        Master Diligence Tracker
                                    </span>
                                </li>
                                <Image src='/icons/downarrowsvg.svg' alt='' width={15} height={15} className={`${isDiligence ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                            </div>
                            {
                                isDiligence && (
                                    <div className='slide-in'>
                                        <div className='flex gap-4 items-center cursor-pointer' onClick={() => setKeyFiles(!keyfiles)}>
                                            <ul style={{ listStyle: 'circle' }} className='ml-11'>
                                                <li>
                                                    <span className='text-black text-[16px] font-medium'>
                                                        Key Files
                                                    </span>
                                                </li>
                                            </ul>
                                            <Image src='/icons/downarrowsvg.svg' alt='' width={15} height={15} className={`${keyfiles ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                                        </div>
                                        {
                                            keyfiles && keyfilesdata.map((item, index) => (
                                                <div key={index} className='ml-16 slide-in'>
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
                                )
                            }
                        </div>
                    </div>

                    <FinanicingProcess />

                    <div className='slide-in'>
                        <div className='flex gap-2 items-center cursor-pointer' onClick={() => setIsOpenList4(!isOpenList4)} >
                            <ul style={{ listStyleType: 'disc' }} className='ml-11'>
                                <li className='text-black text-[15px] font-medium'>
                                    Equity Co-Invest Process
                                </li>
                            </ul>
                            <Image src='/icons/downarrowsvg.svg' alt='' width={12} height={12} className={`mt-[2px] ${isOpenList4 ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                        </div>
                        {isOpenList4 && (
                            <div className='ml-16 slide-in'>
                                {
                                    Co_InvestPurchase && Co_InvestPurchase.map((item, index) => (
                                        <div key={index}>
                                            <ul style={{ listStyleType: 'circle' }} className=''>
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
                        <div className='flex gap-2 items-center cursor-pointer' onClick={() => setIsOpenList5(!isOpenList5)} >
                            <ul style={{ listStyleType: 'disc' }} className='ml-11'>
                                <li className='text-black text-[15px] font-medium'>
                                    Management Documents
                                </li>
                            </ul>
                            <Image src='/icons/downarrowsvg.svg' alt='' width={12} height={12} className={`mt-[2px] ${isOpenList5 ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                        </div>
                        {isOpenList5 && (
                            <div className='ml-16 slide-in'>
                                {
                                    ManagementDoc && ManagementDoc.map((item, index) => (
                                        <div key={index}>
                                            <ul style={{ listStyleType: 'circle' }} className=''>
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
                        <div className='flex gap-2 items-center cursor-pointer' onClick={() => setIsOpenList6(!isOpenList6)} >
                            <ul style={{ listStyleType: 'disc' }} className='ml-11'>
                                <li className='text-black text-[15px] font-medium'>
                                    Third Parties - Other
                                </li>
                            </ul>
                            <Image src='/icons/downarrowsvg.svg' alt='' width={12} height={12} className={`mt-[2px] ${isOpenList6 ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                        </div>
                        {isOpenList6 && (
                            <div className='ml-16 slide-in'>
                                {
                                    Third_Party && Third_Party.map((item, index) => (
                                        <div key={index}>
                                            <ul style={{ listStyleType: 'circle' }} className=''>
                                                <li className='text-black text-[14px] font-medium'>{item.name}
                                                    <ul style={{ listStyleType: 'square' }} className='ml-5'>
                                                        {item.value.map((value, id) => (
                                                            <li key={id}>
                                                                <div className='cursor-pointer font-normal'>
                                                                    <span>{value.name}</span>
                                                                    {
                                                                        value.key.map((keys, ids) => (
                                                                            <span key={ids}> {keys}</span>
                                                                        ))
                                                                    }
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    ))
                                }
                                <ul style={{ listStyleType: 'circle' }} className=''>
                                    <li className='text-black font-medium text-[14px]'>
                                        Negotiated Files:
                                        <span className='text-cyan-600 cursor-pointer font-normal hover:font-medium duration-300'> Accountant Engagement Letter,</span>
                                        <span className='text-cyan-600 cursor-pointer font-normal hover:font-medium duration-300'> Consultant Engagement Letter,</span>
                                        <span className='text-cyan-600 cursor-pointer font-normal hover:font-medium duration-300'> Counsel Engagement Letter,</span>
                                        <span className='text-cyan-600 cursor-pointer font-normal hover:font-medium duration-300'> Tax Engagement Letter,</span>
                                        <span className='text-cyan-600 cursor-pointer font-normal hover:font-medium duration-300'> Background Check Engagement Letter</span>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Financing;
