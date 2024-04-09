'use client'
import React from 'react'
import { ActiveDiligenceTrackersConstant, ActiveTransactionsConstant, FormerTransactionsConstant, RecentActivityConstant } from '@/constant/tabs';

interface SidebarType {
    activeTab: string;
    setActiveTab: (val: string) => void;
}

const Sidebar = ({ activeTab, setActiveTab }: SidebarType) => {

    const handleSidebar = (name: string) => {
        setActiveTab(name)
    }

    return (
        <>
            <div className='flex flex-col mt-8 gap-6'>
                {
                    activeTab !== 'Diligence Trackers' && <>
                        <div>
                            <h1 className='text-[15px] font-medium leading-[25px] uppercase'>Recent Activity</h1>
                            {
                                RecentActivityConstant.map((item, id) => (
                                    <div key={id}>
                                        <div className='flex gap-3 mt-3 items-center'>
                                            <li onClick={() => handleSidebar('Recent Activity')} className={`${activeTab === 'Recent Activity' ? 'font-semibold' : ' font-normal'} ml-2 text-sm text-black cursor-pointer`}>{item.name}</li>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div>
                            <h1 className='text-[15px] font-medium leading-[25px] uppercase'>Active Transactions</h1>
                            {
                                ActiveTransactionsConstant.map((item, id) => (
                                    <div key={id}>
                                        <div className='flex gap-3 mt-3 items-center'>
                                            <li onClick={() => handleSidebar(item.name)} className={`${activeTab === item.name ? 'font-semibold' : ' font-normal'} ml-2 text-sm text-black cursor-pointer`}>{item.name}</li>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div>
                            <h1 className='text-[15px] font-medium leading-[25px] uppercase'>Former Transactions</h1>
                            {
                                FormerTransactionsConstant.map((item, id) => (
                                    <div key={id}>
                                        <div className='flex gap-3 mt-3 items-center'>
                                            <li onClick={() => handleSidebar(item.name)} className={`${activeTab === item.name ? 'font-semibold' : ' font-normal'} ml-2 text-sm text-black cursor-pointer`}>{item.name}</li>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </>
                }

                {
                    activeTab === 'Diligence Trackers' && <>
                        <div>
                            <h1 className='text-[15px] font-medium leading-[25px] uppercase'>Active Diligence Trackers</h1>
                            {
                                ActiveDiligenceTrackersConstant.map((item, id) => (
                                    <div key={id}>
                                        <div className='flex gap-3 mt-3 items-center'>
                                            <li onClick={() => handleSidebar(item.name)} className={`${activeTab === item.name ? 'font-semibold' : ' font-normal'} ml-2 text-sm text-black cursor-pointer`}>{item.name}</li>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div>
                            <h1 className='text-[15px] font-medium leading-[25px] uppercase'>Former Diligence Transactions</h1>
                            {
                                FormerTransactionsConstant.map((item, id) => (
                                    <div key={id}>
                                        <div className='flex gap-3 mt-3 items-center'>
                                            <li onClick={() => handleSidebar(item.name)} className={`${activeTab === item.name ? 'font-semibold' : ' font-normal'} ml-2 text-sm text-black cursor-pointer`}>{item.name}</li>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </>}
            </div >
        </>
    )
}

export default Sidebar
