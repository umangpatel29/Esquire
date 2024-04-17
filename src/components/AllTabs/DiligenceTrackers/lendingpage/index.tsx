import React from 'react'

const DeligensLendingPage = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div>
        <div>
          <h1 className='text-[18px] trasking-[12px] underline text-black font-medium'>Project Space – Rocket LLC</h1>
          <h3 className='text-cyan-600 text-[15px]'>Transaction Status: LOI signed on 3/26/2024. Target SPA signing on 4/26/2024.</h3>
        </div>
        <div className='px-10 mt-1'>
          <ul style={{ listStyleType: 'disc' }} className='text-blue-600 font-medium text-[14px]' >
            <li className='cursor-pointer'>Master Diligence Tracker</li>
            <li className='cursor-pointer'>Master Outreach Tracker </li>
            <li className='cursor-pointer'>Trackers by Process</li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <h1 className='text-[18px] trasking-[12px] underline text-black font-medium'>Project Spot - Cleaning LLC</h1>
          <h3 className='text-cyan-600 text-[15px]'>Transaction Status: IOI signed on 3/22/2024. LOIs are due 4/22/2024 at 5PM ET.</h3>
        </div>
        <div className='px-10 mt-1'>
          <ul style={{ listStyleType: 'disc' }} className='text-blue-600 font-medium text-[14px]'>
            <li className='cursor-pointer'>Master Diligence Tracker</li>
            <li className='cursor-pointer'>Master Outreach Tracker </li>
            <li className='cursor-pointer'>Trackers by Process</li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <h1 className='text-[18px] trasking-[12px] underline text-black font-medium'>Project Star - Script LLC</h1>
          <h3 className='text-cyan-600 text-[15px]'>Transaction Status: SPA signed on 2/23/2024. Target closing week of 6/15/24.</h3>
        </div>
        <div className='px-10 mt-1'>
          <ul style={{ listStyleType: 'disc' }} className='text-blue-600 font-medium text-[14px]'>
            <li className='cursor-pointer'>Master Diligence Tracker</li>
            <li className='cursor-pointer'>Master Outreach Tracker </li>
            <li className='cursor-pointer'>Trackers by Process</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DeligensLendingPage;
