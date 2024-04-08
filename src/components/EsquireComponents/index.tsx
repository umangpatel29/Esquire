'use client'
import React, { useEffect, useState } from 'react';
import AllTabs from '../AllTabs';
import Sidebar from '../SidebarComponents';
import TabsCildrenComponents from '../TabsCildrenComponents';
import RecentActivity from './RecentActivity';
import ActiveTransactions from './ActiveTransactions';
import FormerTransactions from '../SidebarComponents/formerTransactions';
import ActiveDiligenceTrackers from '../SidebarComponents/ActiveDiligenceTrackers';
import FormerDiligenceTransactions from '../SidebarComponents/FormerDiligenceTransactions';
import ProjectStar from './ActiveTransactions/ProjectStar';
import ProjectSpot from './ActiveTransactions/ProjectSpot';
import ProjectSpace from './ActiveTransactions/ProjectSpace';

const componentMap = [
    {
        name: 'Recent activity',
        child: <RecentActivity />,
    },
    {
        name: 'Project Space',
        child: <ProjectSpace />,
    },
    {
        name: 'Project Star',
        child: <ProjectStar />,
    },
    {
        name: 'Project spot',
        child: <ProjectSpot />,
    },
    {
        name: 'Former Transactions',
        child: <FormerTransactions />,
    },
    {
        name: 'Active Diligence Trackers',
        child: <ActiveDiligenceTrackers />,
    },
    {
        name: 'Former Diligence Transactions',
        child: <FormerDiligenceTransactions />,
    },
];

const EsquireComponents = () => {
    const [activeTab, setActiveTab] = useState('Project Space');
    const [isActive, setIsActive] = useState('active Transactions');
    const [activeComponent, setActiveComponent] = useState<React.ReactNode>(null);

    useEffect(() => {
        const component = componentMap.find(item => item.name.toLowerCase() === isActive.toLowerCase());
        setActiveComponent(component ? component.child : componentMap[1].child);
    }, [isActive]);

    useEffect(() => {
        if (activeTab === 'Diligence Trackers') {
            setActiveComponent(componentMap[6].child);
        } else {
            setActiveComponent(componentMap[1].child);
        }
    }, [activeTab])

    return (
        <div>
            <AllTabs setActiveTab={setActiveTab} activeTab={activeTab} />

            <div className='flex border-t gap-2 h-screen'>
                <div className='w-[300px] h-[calc(100vh-90px)] sticky left-0'>
                    <Sidebar setIsActive={setIsActive} isActive={isActive} activeTab={activeTab} />
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
