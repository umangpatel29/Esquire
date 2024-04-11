'use client'
import React, { useEffect, useState } from 'react';
import AllTabs from '../AllTabs';
import Sidebar from '../SidebarComponents';
import TabsCildrenComponents from '../TabsCildrenComponents';
import { componentMap } from '@/constant/returnComponents';
import { useTabContext } from '@/context/tabContext';

const EsquireComponents = () => {
    const [activeComponent, setActiveComponent] = useState<React.ReactNode>(null);
    const { activeTab } = useTabContext();
    console.log("🚀 ~ EsquireComponents ~ activeTab:", activeTab)

    useEffect(() => {
        const component = componentMap.find(item => item.name === activeTab);
        setActiveComponent(component ? component.child : null);
    }, [activeTab]);

    return (
        <div className=''>
            <div className='sticky top-[90px] h-[50px] items-center flex bg-white z-20'>
                <div className='container mx-auto'>
                    <AllTabs />
                </div>
            </div>
            <div className='flex border-t container mx-auto gap-2 z-10'>
                <div className='w-[300px] sticky left-0'>
                    <Sidebar />
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
