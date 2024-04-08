'use client'
import React from 'react'
import { ActiveDiligenceTrackers, ActiveTransactions, FormerTransactions, RecentActivity } from '@/constant/tabs';

interface SidebarType {
    isActive: string;
    setIsActive: (val: string) => void;
    activeTab: string;
}

const Sidebar = ({ isActive, setIsActive, activeTab }: SidebarType) => {

    return (
        <>
            <div className='flex flex-col mt-8 gap-6'>
                {
                    activeTab.toLowerCase() !== 'diligence trackers' && <>

                        <div>
                            <h1 className='text-[15px] font-medium leading-[25px] uppercase cursor-pointer'>Recent Activity</h1>
                            {
                                RecentActivity.map((item, id) => (
                                    <div key={id}>
                                        <div className='flex gap-3 mt-3 items-center'>
                                            <li onClick={() => setIsActive('Recent activity')} className={`${isActive === 'Recent activity' ? 'font-semibold' : ' font-normal'} ml-2 text-sm text-black cursor-pointer`}>{item.name}</li>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div>
                            <h1 className='text-[15px] font-medium leading-[25px] uppercase cursor-pointer' onClick={() => setIsActive('Active Transactions')}>Active Transactions</h1>
                            {
                                ActiveTransactions.map((item, id) => (
                                    <div key={id}>
                                        <div className='flex gap-3 mt-3 items-center'>
                                            <li onClick={() => setIsActive(item.name)} className={`${isActive === item.name ? 'font-semibold' : ' font-normal'} ml-2 text-sm text-black cursor-pointer`}>{item.name}</li>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div>
                            <h1 className='text-[15px] font-medium leading-[25px] uppercase cursor-pointer' onClick={() => setIsActive('Former Transactions')}>Former Transactions</h1>
                            {
                                FormerTransactions.map((item, id) => (
                                    <div key={id}>
                                        <div className='flex gap-3 mt-3 items-center'>
                                            <li onClick={() => setIsActive(item.name)} className={`${isActive === item.name ? 'font-semibold' : ' font-normal'} ml-2 text-sm text-black cursor-pointer`}>{item.name}</li>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </>
                }

                {
                    activeTab.toLowerCase() === 'diligence trackers' && <>
                        <div>
                            <h1 className='text-[15px] font-medium leading-[25px] uppercase cursor-pointer' onClick={() => setIsActive('Active Diligence Trackers')}>Active Diligence Trackers</h1>
                            {
                                ActiveDiligenceTrackers.map((item, id) => (
                                    <div key={id}>
                                        <div className='flex gap-3 mt-3 items-center'>
                                            <li onClick={() => setIsActive(item.name)} className={`${isActive === item.name ? 'font-semibold' : ' font-normal'} ml-2 text-sm text-black cursor-pointer`}>{item.name}</li>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div>
                            <h1 className='text-[15px] font-medium leading-[25px] uppercase cursor-pointer' onClick={() => setIsActive('Former Diligence Transactions')}>Former Diligence Transactions</h1>
                            {
                                FormerTransactions.map((item, id) => (
                                    <div key={id}>
                                        <div className='flex gap-3 mt-3 items-center'>
                                            <li onClick={() => setIsActive(item.name)} className={`${isActive === item.name ? 'font-semibold' : ' font-normal'} ml-2 text-sm text-black cursor-pointer`}>{item.name}</li>
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
