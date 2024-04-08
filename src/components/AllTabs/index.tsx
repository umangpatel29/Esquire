'use client'
import React, { useEffect, useState } from 'react'

const tabs = [
    {
        name: 'Active Transactions',
    },
    {
        name: 'Initiate Transaction',
    },
    {
        name: 'Portfolio Monitoring',
    },
    {
        name: 'Manage Collaborators',
    },
    {
        name: 'Diligence Trackers',
    }
]

interface AllTabsType {
    activeTab: string;
    setActiveTab: (val: string) => void;
}
const AllTabs = ({ activeTab, setActiveTab }: AllTabsType) => {

    useEffect(() => {
        if (activeTab === '') {
            setActiveTab(tabs[0].name)
        }
    }, [activeTab]);

    return (
        <div className='flex gap-3 my-8 items-center'>
            {
                tabs.map((item, id) => (
                    <>
                        <div className={` ${activeTab === item.name ? 'font-bold text-black' : 'font-medium text-gray-700'} text-[14px]  cursor-pointer`}
                            onClick={() => setActiveTab(item.name)}
                            key={id}>{item.name}</div>
                        {
                            tabs.length - id != 1 &&

                            <span>|</span>
                        }
                    </>
                ))
            }
        </div>
    )
}

export default AllTabs
