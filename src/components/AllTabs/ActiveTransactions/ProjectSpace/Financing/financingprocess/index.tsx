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


const FinanicingProcess = () => {

    const [isOpenFinancing, setIsOpenFinancing] = useState(true);

    const [isOpenList, setIsOpenList] = useState(true);
    const [isOpenList2, setIsOpenList2] = useState(false);
    const [isOpenList3, setIsOpenList3] = useState(false);
    const [isOpenList4, setIsOpenList4] = useState(false);
    const [isOpenList5, setIsOpenList5] = useState(false);
    const [isOpenList6, setIsOpenList6] = useState(false);

    return (
        <div className='flex flex-col gap-2 ml-[21px]'>
            <div className='flex gap-4 items-center cursor-pointer' onClick={() => setIsOpenFinancing(!isOpenFinancing)}>
                <li>
                    <span className='text-black text-[18px] font-medium'>
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
                                    <li className='text-black text-[16px] font-medium'>
                                        1L and Revolver
                                    </li>
                                </ul>
                                <Image src='/icons/downarrowsvg.svg' alt='' width={12} height={12} className={`mt-[2px] ${isOpenList ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                            </div>
                            {isOpenList && (
                                <div className='ml-16 slide-in'>
                                    <ul style={{ listStyleType: 'square' }} className=''>
                                        <li>Active documents:
                                            <span className='text-cyan-600 cursor-pointer'> Credit Agreement</span>,
                                            <span className='text-cyan-600 cursor-pointer'> Intercreditor Agreement</span>
                                        </li>
                                    </ul>

                                    <div>
                                        <ul style={{ listStyleType: 'square' }} className=''>
                                            <li>Negotiated documents:
                                                <span className='text-cyan-600 cursor-pointer'> NDA</span>,
                                                <span className='text-cyan-600 cursor-pointer'> Debt Commitment Letter</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul style={{ listStyleType: 'square' }} className=''>
                                            <li>
                                                <span className='text-cyan-600 cursor-pointer'> Diligence Tracker</span>,
                                                <span className='text-cyan-600 cursor-pointer'> Previous Term Sheets</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className='slide-in'>
                            <div className='flex gap-2 items-center cursor-pointer' onClick={() => setIsOpenList2(!isOpenList2)} >
                                <ul style={{ listStyleType: 'circle' }} className='ml-11'>
                                    <li className='text-black text-[16px] font-medium'>
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
                            )}
                        </div>
                        <div className='slide-in'>
                            <div className='flex gap-2 items-center cursor-pointer' onClick={() => setIsOpenList3(!isOpenList3)} >
                                <ul style={{ listStyleType: 'circle' }} className='ml-11'>
                                    <li className='text-black text-[16px] font-medium'>
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
                            )}
                        </div>
                        <div className='slide-in'>
                            <div className='flex gap-2 items-center cursor-pointer' onClick={() => setIsOpenList4(!isOpenList4)} >
                                <ul style={{ listStyleType: 'circle' }} className='ml-11'>
                                    <li className='text-black text-[16px] font-medium'>
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
                                                <ul style={{ listStyleType: 'square' }} className=''>
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
                            )}
                        </div>
                        <div className='slide-in'>
                            <div className='flex gap-2 items-center cursor-pointer' onClick={() => setIsOpenList5(!isOpenList5)} >
                                <ul style={{ listStyleType: 'circle' }} className='ml-11'>
                                    <li className='text-black text-[16px] font-medium'>
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
                                                <ul style={{ listStyleType: 'square' }} className=''>
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
                            )}
                        </div>
                        <div className='slide-in'>
                            <div className='flex gap-2 items-center cursor-pointer' onClick={() => setIsOpenList6(!isOpenList6)} >
                                <ul style={{ listStyleType: 'circle' }} className='ml-11'>
                                    <li className='text-black text-[16px] font-medium'>
                                        Third Parties - Othe
                                    </li>
                                </ul>
                                <Image src='/icons/downarrowsvg.svg' alt='' width={12} height={12} className={`mt-[2px] ${isOpenList6 ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                            </div>
                            {isOpenList6 && (
                                <div className='ml-16 slide-in'>
                                    {
                                        Third_Party && Third_Party.map((item, index) => (
                                            <div key={index}>
                                                <ul style={{ listStyleType: 'square' }} className=''>
                                                    <li className='text-black text-[16px]'>{item.name}
                                                        <ul style={{ listStyleType: 'disc' }} className='ml-5'>
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
                                    <ul style={{ listStyleType: 'square' }} className=''>
                                        <li className='text-black text-[16px]'>
                                            Negotiated Files:
                                            <span className='text-cyan-700 cursor-pointer font-medium'> Accountant Engagement Letter,</span>
                                            <span className='text-cyan-700 cursor-pointer font-medium'> Consultant Engagement Letter,</span>
                                            <span className='text-cyan-700 cursor-pointer font-medium'> Counsel Engagement Letter,</span>
                                            <span className='text-cyan-700 cursor-pointer font-medium'> Tax Engagement Letter,</span>
                                            <span className='text-cyan-700 cursor-pointer font-medium'> Background Check Engagement Letter</span>
                                        </li>
                                    </ul>
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
