'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const DeligenceProjectSpace = () => {

    const [isOpenFinance, setIsOpenFinance] = useState(true);
    const [coInvest, setCoInvest] = useState(true)

    const F_1L = [
        { name: '1L and Revolver:', value: ['Green Hill Capital,', 'Steel Rock Credit,', 'Blue Hill Credit,', 'Smart Capital'] },
        { name: '2L:', value: ['Blue Lamp Capital,', 'Green Lantern Capital,', 'Koala Capital'] },
        { name: 'Preferred Equity:', value: ['Green Equity,', 'Rockstar Equity'] },
    ]

    const Co_Invest = ['Harvest', 'Trivest', 'Comvest', 'Capvest', 'Marvest', 'Cool Capital']
    return (
        <div>
            <div className='mb-5'>
                <h1 className='text-[25px] underline text-black font-medium'>Project Space – Rocket LLC</h1>
                <h3 className='text-cyan-600 font-medium'>Transaction Status: LOI signed on 3/26/2024. Target SPA signing on 4/26/2024.</h3>
            </div>
            <div className='px-5'>
                <div className='flex flex-col gap-3'>
                    <div>
                        <li className='font-medium'>Master Diligence Tracker</li>
                    </div>
                    <div>
                        <li className='font-medium'>Master Outreach Tracker</li>
                    </div>
                    <div>
                        <li className='font-medium'>Process Tracker – With Banker</li>
                    </div>
                    <div>
                        <li className='flex gap-2 items-center cursor-pointer' onClick={() => setIsOpenFinance(!isOpenFinance)} >
                            <li className='text-black text-[16px] font-medium'>
                                Financing Trackers
                            </li>
                            <Image src='/icons/downarrowsvg.svg' alt='' width={12} height={12} className={`mt-[2px] ${isOpenFinance ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                        </li>
                        {
                            isOpenFinance &&
                            <div className='ml-11 slide-in flex flex-col gap-3 mt-1'>
                                {
                                    F_1L && F_1L.map((item, index) => (
                                        <div key={index}>
                                            <ul style={{ listStyleType: 'circle' }} className=''>
                                                <li className='text-black text-[16px]'>{item.name}
                                                    {item.value.map((value, id) => (
                                                        <ul key={id} style={{ listStyleType: 'square' }} className='ml-6'>
                                                            <li className='text-cyan-700 cursor-pointer font-medium'> {value}</li>
                                                        </ul>
                                                    ))}
                                                </li>
                                            </ul>
                                        </div>
                                    ))
                                }
                            </div>
                        }
                    </div>
                    <div>
                        <li className='flex gap-2 items-center cursor-pointer' onClick={() => setCoInvest(!coInvest)} >
                            <li className='text-black text-[16px] font-medium'>
                                Equity Co-Invest Process
                            </li>
                            <Image src='/icons/downarrowsvg.svg' alt='' width={12} height={12} className={`mt-[2px] ${coInvest ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                        </li>
                        {
                            coInvest &&
                            <div className='ml-11 slide-in mt-1'>
                                {
                                    Co_Invest && Co_Invest.map((item, index) => (
                                        <div key={index}>
                                            <ul style={{ listStyleType: 'circle' }} className=''>
                                                <li className='text-black text-[16px]'>{item}</li>
                                            </ul>
                                        </div>
                                    ))
                                }
                            </div>
                        }
                    </div>


                </div>
            </div>
        </div>
    )
}

export default DeligenceProjectSpace
