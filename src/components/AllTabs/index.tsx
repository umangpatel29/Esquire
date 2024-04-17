'use client'
import { useTabContext } from '../../context/tabContext';
import React from 'react'

const tabs = [
    {
        link: 'tab1',
        name: 'Active Transactions',
    },
    {
        link: 'tab2',
        name: 'Initiate Transaction',
    },
    {
        link: 'tab5',
        name: 'Diligence Trackers',
    },
    {
        link: 'tab3',
        name: 'Portfolio Monitoring and Marks',
    },
    {
        link: 'tab4',
        name: 'PortCo Contract Management',
    },
    {
        link: 'tab6',
        name: 'PortCo Cap Table Management',
    }
]

interface AllTabsType {
    setActiveTab: (val: string) => void;
    activeHeader: string;
    setActiveHeader: (val: string) => void
}
const AllTabs = () => {

    const { setActiveTab, activeHeader, setActiveHeader } = useTabContext()

    const handleActiveTab = (name: string) => {
        setActiveTab(name);
        setActiveHeader(name)
    };

    return (
        <div className='flex gap-3 my-6 items-center'>
            {
                tabs.map((item, id) => (
                    <>
                        <div className={` ${activeHeader === item.link ? 'font-bold text-black' : 'font-medium text-gray-700'} text-[14px] cursor-pointer`}
                            onClick={() => handleActiveTab(item.link)}
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
