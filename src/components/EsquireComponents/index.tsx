'use client'
import React, { useEffect, useState } from 'react';
import AllTabs from '../AllTabs';
import Sidebar from '../SidebarComponents';
import TabsCildrenComponents from '../TabsCildrenComponents';
import { componentMap } from '@/constant/returnComponents';

const EsquireComponents = () => {
    const [activeHeader, setActiveHeader] = useState('Active Transactions')
    const [activeTab, setActiveTab] = useState('Active Transactions');
    const [activeComponent, setActiveComponent] = useState<React.ReactNode>(null);

    useEffect(() => {
        const component = componentMap.find(item => item.name === activeTab);
        setActiveComponent(component ? component.child : null);
    }, [activeTab, activeTab]);

    return (
        <div className=''>
            <div className='sticky top-[90px] h-[50px] items-center flex bg-white z-20'>
                <div className='container mx-auto'>
                    <AllTabs setActiveTab={setActiveTab} activeHeader={activeHeader} setActiveHeader={setActiveHeader} />
                </div>
            </div>
            <div className='flex border-t container mx-auto gap-2 z-10'>
                <div className='w-[300px] sticky left-0'>
                    <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>
                <div className='border-l p-8 w-full'>
                    <TabsCildrenComponents>
                        {activeComponent}
                    </TabsCildrenComponents>
                </div>
            </div>
        </div>
    );
};

export default EsquireComponents;
