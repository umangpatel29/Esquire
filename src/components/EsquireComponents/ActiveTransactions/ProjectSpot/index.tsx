import Link from 'next/link'
import React from 'react'

const ProjectSpot = () => {
    return (
        <div>
            <div>
                <h1 className='text-[25px] underline text-black font-medium'>v Project Spot – Cleaning LLC</h1>
                <h3 className='text-cyan-600 font-medium'>Transaction Status: Initiated as a new investment opportunity on 3/22/2024.</h3>
            </div>
            <div className='flex flex-col gap-1 mt-3'>
                <div className='text-black text-[18px] font-medium'>
                    Active Documents
                </div>
                <div>
                    <li className='text-black text-[16px] font-medium'>NDA</li>
                    <Link href='/' className='text-cyan-600 font-medium ml-5 text-4'>Joe@barclays.com, jane@barclays.com</Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectSpot
