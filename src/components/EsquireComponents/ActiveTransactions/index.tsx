import Link from 'next/link'
import React from 'react'

const ActiveTransactions = () => {
    return (
        <div className='flex flex-col gap-3'>
            <div>
                <div>
                    <h1 className='text-[25px] underline text-black font-medium'>v Project Space – Rocket LLC</h1>
                    <h3 className='text-cyan-600 font-medium'>Transaction Status: LOI Signed on 3/26/2024.</h3>
                </div>
                <div className='flex flex-col gap-1 mt-3'>
                    <div className='text-black text-[18px] font-medium'>
                        Active Documents
                    </div>
                    <div>
                        <li className='text-black text-[16px] font-medium'>Stock Purchase Agreement</li>
                        <Link href='/   ' className='text-cyan-600 font-medium ml-5 text-4'>Joe@moelis.com, jane@moelis.com</Link>
                    </div>
                    <div>
                        <li className='text-black text-[16px] font-medium'>Operating Agreement</li>
                        <Link href='/' className='text-cyan-600 font-medium ml-5 text-4'>Joe@rocket.com, jane@rocket.com</Link>
                    </div>
                    <div>
                        <li className='text-black text-[16px] font-medium'>1L Credit Agreement</li>
                        <Link href='/' className='text-cyan-600 font-medium ml-5 text-4'>Joe@hps.com, jane@hps.com</Link>
                    </div>
                </div>
            </div>
          
          
        </div>
    )
}

export default ActiveTransactions
