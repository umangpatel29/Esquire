'use client'
import React from 'react'

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
    setActiveTab: (val: string) => void;
    activeHeader: string;
    setActiveHeader: (val: string) => void
}
const AllTabs = ({ setActiveTab, setActiveHeader, activeHeader }: AllTabsType) => {

    const handleActiveTab = (name: string) => {
        setActiveTab(name);
        setActiveHeader(name)
    };

    return (
        <div className='flex gap-3 my-8 items-center'>
            {
                tabs.map((item, id) => (
                    <>
                        <div className={` ${activeHeader === item.name ? 'font-bold text-black' : 'font-medium text-gray-700'} text-[14px]  cursor-pointer`}
                            onClick={() => handleActiveTab(item.name)}
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
