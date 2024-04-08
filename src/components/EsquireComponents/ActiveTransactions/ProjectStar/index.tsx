import Link from 'next/link'
import React from 'react'

const ProjectStar = () => {
    return (
        <div>
            <div>
                <h1 className='text-[25px] underline text-black font-medium'>vv Project Star – Script LLC</h1>
                <h3 className='text-cyan-600 font-medium'>Transaction Status: Target transaction closing on [x].</h3>
            </div>
            <div className='flex flex-col gap-1 mt-3'>
                <div className='text-black text-[18px] font-medium'>
                    Active Documents
                </div>
                <div>
                    <li className='text-black text-[16px] font-medium'>Stock Purchase Agreemen</li>
                    <Link href='/' className='text-cyan-600 font-medium ml-5 text-4'>Joe@moelis.com, jane@moelis.com</Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectStar
