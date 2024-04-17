'use client'
import React, { useState } from 'react'
import { ActiveDiligenceTrackersConstant, ActiveTransactionsConstant, CapTableManagementConstant, FormerDeligenceTrackerConstant, FormerTransactionsConstant, MyPortCosConstant, RecentActivityConstant } from '@/constant/tabs';
import { useTabContext } from '@/context/tabContext';
import Image from 'next/image';

const Sidebar = () => {

    const { activeTab, setActiveTab, activeHeader } = useTabContext()
    const [isFormerTrasaction, setIsFormerTrasaction] = useState(false)

    const handleSidebar = (name: string) => {
        setActiveTab(name)
    }

    const [isCapTableOpen, setIsCaptableOpen] = useState<boolean>(true);
    const [isCapTable, setIsCaptable] = useState<number>(0);
    const [security, setSecurity] = useState(false)

    return (
        <>
            <div className='flex flex-col mt-6 gap-3'>
                {
                    (activeHeader === 'tab1' || activeHeader === 'tab2' || activeHeader === 'tab3' || activeHeader === 'tab4') && <>
                        <div className='border p-2'>
                            <h1 className='text-[15px] font-medium leading-[25px] uppercase'>Recent Activity</h1>
                            {
                                RecentActivityConstant.map((item, id) => (
                                    <div key={id}>
                                        <div className='flex gap-3 mt-2 items-center'>
                                            <li onClick={() => handleSidebar('Recent Activity')} className={`${activeTab === 'Recent Activity' ? 'font-semibold' : ' font-normal'} ml-4 text-sm text-black cursor-pointer`}>{item.name}</li>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='px-2 mt-2 flex flex-col gap-6'>
                            <div>
                                <h1 className='text-[15px] font-medium leading-[25px] uppercase'>Active Transactions</h1>
                                {
                                    ActiveTransactionsConstant.map((item, id) => (
                                        <div key={id}>
                                            <div className='flex gap-3 mt-2 items-center'>
                                                <li onClick={() => handleSidebar(item.name)} className={`${activeTab === item.name ? 'font-semibold' : ' font-normal'} ml-4 text-sm text-black cursor-pointer`}>{item.name}</li>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div>
                                <h1 className='text-[15px] font-medium leading-[25px] uppercase'>My PortCos</h1>
                                {
                                    MyPortCosConstant.map((item, id) => (
                                        <div key={id}>
                                            <div className='flex gap-3 mt-2 items-center'>
                                                <li onClick={() => handleSidebar(item.name)} className={`${activeTab === item.name ? 'font-semibold' : ' font-normal'} ml-4 text-sm text-black cursor-pointer`}>{item.name}</li>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div>
                                <div className='flex gap-4 items-center cursor-pointer' onClick={() => setIsFormerTrasaction(!isFormerTrasaction)}>
                                    <div className='text-black text-[15px] font-medium leading-[25px] uppercase'>
                                        Former Transactions
                                    </div>
                                    <Image src='/icons/downarrowsvg.svg' alt='' width={15} height={15} className={`${isFormerTrasaction ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                                </div>
                                {
                                    isFormerTrasaction && FormerTransactionsConstant.map((item, id) => (
                                        <div key={id} className='slide-in'>
                                            <div className='flex gap-3 mt-2 items-center'>
                                                <li onClick={() => handleSidebar(item.name)} className={`${activeTab === item.name ? 'font-semibold' : ' font-normal'} ml-4 text-sm text-black cursor-pointer`}>{item.name}</li>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </>
                }

                {
                    activeHeader === 'tab5' && <>
                        <div className='px-2 mt-2 flex flex-col gap-6'>
                            <div>
                                <h1 className='text-[15px] font-medium leading-[25px] uppercase'>Active Diligence Trackers</h1>
                                {
                                    ActiveDiligenceTrackersConstant.map((item, id) => (
                                        <div key={id}>
                                            <div className='flex gap-3 mt-2 items-center'>
                                                <li onClick={() => handleSidebar(item.link)} className={`${activeTab === item.link ? 'font-semibold' : ' font-normal'} ml-4 text-sm text-black cursor-pointer`}>{item.name}</li>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div>
                                <div className='flex gap-4 items-center cursor-pointer' onClick={() => setIsFormerTrasaction(!isFormerTrasaction)}>
                                    <div className='text-black text-[15px] font-medium leading-[25px] uppercase'>
                                        Former Diligence Trackers
                                    </div>
                                    <Image src='/icons/downarrowsvg.svg' alt='' width={15} height={15} className={`${isFormerTrasaction ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                                </div>
                                {
                                    isFormerTrasaction && FormerDeligenceTrackerConstant.map((item, id) => (
                                        <div key={id} className='slide-in'>
                                            <div className='flex gap-3 mt-2 items-center'>
                                                <li onClick={() => handleSidebar(item.name)} className={`${activeTab === item.name ? 'font-semibold' : ' font-normal'} ml-4 text-sm text-black cursor-pointer`}>{item.name}</li>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </>
                }

                {
                    activeHeader === 'tab6' &&
                    <>
                        <div className='pl-3 mt-2'>
                            <h1 className='text-[15px] font-medium leading-[25px] uppercase'>My PortCos</h1>
                            {
                                CapTableManagementConstant.map((item, id) => (
                                    <div key={id} className='mt-3'>
                                        <div className='flex gap-4 items-center cursor-pointer' onClick={() => { setIsCaptableOpen(true), setIsCaptable(id) }}>
                                            <div className='text-black text-[15px] font-medium leading-[25px] uppercase'>
                                                <ul style={{ listStyle: 'square' }} className='ml-1'>
                                                    <li className={`${isCapTable === id ? 'font-medium' : ' font-normal'} ml-4 text-sm text-black cursor-pointer`}>{item.name}</li>
                                                </ul>
                                            </div>
                                            <Image src='/icons/downarrowsvg.svg' alt='' width={15} height={15} className={`${isCapTableOpen && isCapTable === id ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                                        </div>
                                        {
                                            isCapTableOpen && isCapTable === id &&
                                            <div className='text-[14px] ml-6 flex flex-col mt-1 gap-1 slide-in'>
                                                <li className='cursor-pointer font-medium'>Dashboard</li>
                                                <li className='cursor-pointer hover:font-medium'>Cap Table</li>
                                                <li className='cursor-pointer hover:font-medium'>WaterFall Modeling</li>
                                                <li className='cursor-pointer hover:font-medium'>Draft Option Grant</li>
                                                <li className='cursor-pointer hover:font-medium'>Draft Certificate</li>
                                                <div>
                                                    <div className='flex gap-4 items-center cursor-pointer' onClick={() => setSecurity(!security)}>
                                                        <li className='cursor-pointer hover:font-medium'>
                                                            <span className='text-black'>
                                                                Securitys
                                                            </span>
                                                        </li>
                                                        <Image src='/icons/downarrowsvg.svg' alt='' width={13} height={13} className={`${security ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                                                    </div>
                                                    {
                                                        security &&
                                                        <div className='slide-in ml-10'>
                                                            <ul style={{ listStyleType: 'circle' }} className='flex flex-col gap-1' >
                                                                <li className='cursor-pointer hover:font-medium'>Shares</li>
                                                                <li className='cursor-pointer hover:font-medium'>Equity Awards</li>
                                                                <li className='cursor-pointer hover:font-medium'>Warrents</li>
                                                                <li className='cursor-pointer hover:font-medium'>Covertibles</li>
                                                                <li className='cursor-pointer hover:font-medium'>Manage Share</li>
                                                                <li className='cursor-pointer hover:font-medium'>Classes</li>
                                                                <li className='cursor-pointer hover:font-medium'>Equity Plans</li>
                                                                <li className='cursor-pointer hover:font-medium'>Securities</li>
                                                                <li className='cursor-pointer hover:font-medium'>Template</li>
                                                            </ul>
                                                        </div>
                                                    }
                                                </div>
                                                <li className='cursor-pointer hover:font-medium'>Manage Stakeholders</li>
                                                <li className='cursor-pointer hover:font-medium'>Complains & Tax</li>
                                            </div>
                                        }

                                    </div>
                                ))
                            }
                        </div>
                        {/* <div className='relative px-3 mt-2'>
                            <h1 className='text-[15px] font-medium leading-[25px] uppercase'>My PortCos</h1>
                            {
                                CapTableManagementConstant.map((item, index) => (
                                    <div key={index} >
                                        <div className='flex gap-3 mt-2 items-center'>
                                            <li
                                                onMouseEnter={() => setActiveHover(index)}
                                                onClick={() => handleSidebar(item.name)}
                                                className={`${activeTab === item.name ? 'font-semibold' : ' font-normal'} ml-4 text-sm  duration-300 hover:font-semibold text-black cursor-pointer`}
                                            >
                                                {item.name}
                                            </li>
                                        </div>
                                    </div>
                                ))
                            }

                            {activeHover === 0 && (
                                <div
                                    onMouseEnter={() => setActiveHover(0)}
                                    onMouseLeave={() => setActiveHover(null)}
                                    className='absolute top-10 duration-500 slide-in left-[200px] w-[250px] border bg-white p-3 shadow-md'>
                                    <div className='text-[14px] flex flex-col gap-2'>
                                        <li className='cursor-pointer hover:font-medium'>Dashboard</li>
                                        <li className='cursor-pointer hover:font-medium'>Cap Table</li>
                                        <li className='cursor-pointer hover:font-medium'>WaterFall Modeling</li>
                                        <li className='cursor-pointer hover:font-medium'>Draft Option Grant</li>
                                        <li className='cursor-pointer hover:font-medium'>Draft Certificate</li>
                                        <div>
                                            <div className='flex gap-4 items-center cursor-pointer' onClick={() => setSecurity(!security)}>
                                                <li className='cursor-pointer hover:font-medium'>
                                                    <span className='text-black'>
                                                        Securitys
                                                    </span>
                                                </li>
                                                <Image src='/icons/downarrowsvg.svg' alt='' width={13} height={13} className={`${security ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                                            </div>
                                            {
                                                security &&
                                                <div className='slide-in ml-10'>
                                                    <ul style={{ listStyleType: 'circle' }} >
                                                        <li className='cursor-pointer hover:font-medium'>Shares</li>
                                                        <li className='cursor-pointer hover:font-medium'>Equity Awards</li>
                                                        <li className='cursor-pointer hover:font-medium'>Warrents</li>
                                                        <li className='cursor-pointer hover:font-medium'>Covertibles</li>
                                                        <li className='cursor-pointer hover:font-medium'>Manage Share</li>
                                                        <li className='cursor-pointer hover:font-medium'>Classes</li>
                                                        <li className='cursor-pointer hover:font-medium'>Equity Plans</li>
                                                        <li className='cursor-pointer hover:font-medium'>Securities</li>
                                                        <li className='cursor-pointer hover:font-medium'>Template</li>
                                                    </ul>
                                                </div>
                                            }
                                        </div>
                                        <li className='cursor-pointer hover:font-medium'>Manage Stakeholders</li>
                                        <li className='cursor-pointer hover:font-medium'>Complains & Tax</li>
                                    </div>
                                </div>
                            )}
                        </div> */}
                    </>
                }
            </div >
        </>
    )
}

export default Sidebar
