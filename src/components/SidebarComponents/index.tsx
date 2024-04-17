'use client'
import React, { useState } from 'react'
import { ActiveDiligenceTrackersConstant, ActiveTransactionsConstant, CapTableManagementConstant, FormerDeligenceTrackerConstant, FormerTransactionsConstant, MyPortCosConstant, RecentActivityConstant } from '@/constant/tabs';
import { useTabContext } from '@/context/tabContext';
import Image from 'next/image';
import Tab6Sidebar from './Tab6Sidebar';

const Sidebar = () => {

    const { activeTab, setActiveTab, activeHeader } = useTabContext()
    const [isFormerTrasaction, setIsFormerTrasaction] = useState(false)

    const handleSidebar = (name: string) => {
        setActiveTab(name)
    }



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
                                    {/* <Image src='/icons/downarrowsvg.svg' alt='' width={15} height={15} className={`${isFormerTrasaction ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} /> */}
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
                        <Tab6Sidebar />
                    </>
                }
            </div >
        </>
    )
}

export default Sidebar
