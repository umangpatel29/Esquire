import React, { useState } from 'react'
import ProjectTabs from './ProjectTabs'
import Financing from './Financing'
import Image from 'next/image';
import { PS_RETURNCOMPONENT } from '../../../../constant/projectSpaceReturnComponent';
import PromptBar from './Promptbar';

const ProjectSpace = () => {

    const [spaceDocument, setSpaceDocument] = useState('financing');

    return (
        <div className=''>
            <div>
                <button className={` ${spaceDocument === 'financing' ? 'hidden' : 'slide-in'} text-[14px] font-medium flex gap-1 items-center`} onClick={() => setSpaceDocument('financing')}>
                    <Image src='/icons/downarrowsvg.svg' alt='' width={11} height={11} className='rotate-90' />
                    <span>Go Back</span>
                </button>
            </div>
            <ProjectTabs />
            <PromptBar />
            <div className='mt-2'>
                {
                    spaceDocument === 'financing' && (
                        <Financing onchange={setSpaceDocument} />
                    )
                }
                {
                    spaceDocument !== '' && (
                        <>
                            {PS_RETURNCOMPONENT[spaceDocument]}
                        </>
                    )
                }
            </div>
            <div>
            </div>
        </div>
    );
}

export default ProjectSpace;
