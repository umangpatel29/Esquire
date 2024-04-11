'use client'
import React, { useState } from 'react'
import Image from 'next/image';

const ProjectTabs = () => {

    const tabs = [
        { name: 'NDA - Signed' },
        { name: 'IOI - Signed' },
        { name: 'LOI - Signed' },
        { name: 'SPA Signing' },
        { name: 'Deal Close' },
        { name: 'Post-Close' },
    ];

    const [activeTab, setActiveTab] = useState(0);

    const handleActiveTab = (index: number) => {
        setActiveTab(index);
    };

    return (
        <div className=''>
            <div>
                <h1 className='text-[25px] underline text-cyan-600 font-medium'>Project Space – Rocket LLC</h1>
            </div>
            <div className='flex gap-4 my-4 w-max items-center bg-slate-100 rounded-full border-y-2 px-4 py-2'>
                {
                    tabs.map((item, id) => (
                        <>
                            <div className={` ${activeTab >= id ? 'font-semibold text-black' : 'font-medium text-gray-700'} text-[16px] cursor-pointer`}
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
