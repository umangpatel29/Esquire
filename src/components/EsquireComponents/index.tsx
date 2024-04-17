'use client'
import React, { useEffect, useState } from 'react';
import AllTabs from '../AllTabs';
import Sidebar from '../SidebarComponents';
import TabsCildrenComponents from '../TabsCildrenComponents';
import { useTabContext } from '../../context/tabContext';
import { componentMap } from '../../constant/returnComponents';

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
            <div className='sticky top-[90px] items-center flex bg-white z-20'>
                <div className='container border-l mx-auto px-6'>
                    <AllTabs />
                </div>
            </div>
            <div className='flex container border-l border-t mx-auto gap-2 z-10'>
                <div className='w-[280px] pl-3 sticky left-0'>
                    <Sidebar />
                </div>
                <div className='border-l mb-10 px-8 pt-7 w-[calc(100%-280px)]'>
                    <TabsCildrenComponents>
                        {activeComponent}
                    </TabsCildrenComponents>
                </div>
            </div>
        </div>
    );
};

export default EsquireComponents;
