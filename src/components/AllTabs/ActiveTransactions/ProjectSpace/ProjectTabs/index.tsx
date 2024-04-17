'use client'
import React, { useLayoutEffect, useState } from 'react'
import Image from 'next/image';
import { useTabContext } from '../../../../../context/tabContext';

const ProjectTabs = () => {

    const tabs = [
        { name: 'NDA - Signed' },
        { name: 'IOI - Signed' },
        { name: 'LOI - Signed' },
        { name: 'SPA Signing' },
        { name: 'Deal Close' },
        { name: 'Post-Close' },
    ];

    const [activeProjectTab, setActiveProjectTab] = useState(0);

    const handleActiveTab = (index: number) => {
        setActiveProjectTab(index);
    };

    const { activeTab } = useTabContext()
    console.log("🚀 ~ ProjectTabs ~ activeTab:", activeTab)

    useLayoutEffect(() => {
        if (activeTab === 'Project Space') {
            setActiveProjectTab(2)
        }
    }, [])


    return (
        <div className=''>
            <div>
                <h1 className='text-[18px] underline text-cyan-600 font-medium'>Project Space – Rocket LLC</h1>
            </div>
            <div className='flex gap-4 my-2 w-max items-center bg-slate-100 rounded-full border-y-2 px-[27px] py-2'>
                {
                    tabs.map((item, id) => (
                        <>
                            <div className={` ${activeProjectTab >= id ? 'font-semibold text-black' : 'font-medium text-gray-700'} text-[14px] cursor-pointer`}
                                onClick={() => handleActiveTab(id)}
                                key={id}>{item.name}</div>
                            {
                                tabs.length - id != 1 &&

                                <span>
                                    <Image src='/icons/downarrowsvg.svg' alt='' width={15} height={15} className='-rotate-90' />
                                </span>
                            }
                        </>
                    ))
                }
            </div>
        </div>

    )
}

export default ProjectTabs
