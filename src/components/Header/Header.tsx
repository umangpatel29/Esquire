import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='bg-white flex px-16 justify-between h-[90px] shadow-lg border items-center'>
            <div className=''>
                <Image src='/icons/logo.svg' alt='' width={200} height={100} />
                {/* <h1 className='text-2xl font-bold '>Esquire</h1> */}
            </div>
            <div className="flex px-3 py-2 items-center gap-2 border rounded-full">
                <Image src='/icons/searchnav.svg' alt='' width={20} height={20} />
                <input
                    type="text"
                    placeholder="Type to search..."
                    className="bg-transparent pr-4 font-medium focus:outline-none w-[500px]"
                />
            </div>
            <div className='flex gap-5 items-center'>
                <p className='cursor-pointer font-medium'>Welcome Sophia</p> |
                <Link href='' className='cursor-pointer font-medium'>Help</Link> |
                <Link href='' className='cursor-pointer font-medium'>Settings</Link> |
                <Link href='' className='cursor-pointer font-medium'>Export</Link> |
                <button className='border rounded-md text-black cursor-pointer font-medium px-4 py-2 bg-slate-100'>Log Out</button>
            </div>
        </div>
    )
}

export default Header
