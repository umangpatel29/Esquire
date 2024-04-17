'use client'
import React, { useState } from 'react'

const InitiateTransaction = () => {
  const [privateCompany, setPrivateCompany] = useState(true)
  const [publicCompany, setPublicCompany] = useState(true)
  return (
    <div className='flex flex-col gap-2'>
      <div>
        <div className='text-[18px] font-medium'>
          New Investment :
        </div>
        <div className='flex flex-col gap-2 mt-1 ml-3'>
          <div>
            <div className='flex gap-2'>
              <li className='cursor-pointer font-normal text-[16px]'>Private Company Acquisition</li>
              {/* <input type="checkbox" className='cursor-pointer' id='1' />
              <label htmlFor="1" className='cursor-pointer'>Private Company Acquisition</label> */}
            </div>
            {
              privateCompany &&
              <div className='ml-10 text-[14px]'>
                <ul style={{ listStyle: 'square' }}>
                  <li>Auction</li>
                  <li>Solicited </li>
                  <li>Carve-Out</li>
                </ul>
              </div>
            }
          </div>
          <div>
            <div className='flex gap-2'>
              <li className='cursor-pointer text-[16px]'>Private Company Acquisition</li>
            </div>
            {
              publicCompany &&
              <div className='ml-10 text-[14px]'>
                <ul style={{ listStyle: 'square' }}>
                  <li>Solicited</li>
                  <li>Unsolicited </li>
                  <li>Carve-Out</li>
                </ul>
              </div>
            }
          </div>
          <div>
            <div className='flex gap-2'>
              <li className='cursor-pointer text-[16px]'>Growth Equity Investment </li>
              {/* <input type="checkbox" className='cursor-pointer' id='3' />
              <label htmlFor="3" className='cursor-pointer'></label> */}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='text-[18px] font-medium '>
          Existing PortCo :
        </div>
        <div className='flex flex-col gap-1 ml-8 mt-1 '>
          <div>
            <ul style={{ listStyle: 'disc' }}>
              <li className='text-[16px]'>Bolt-on Acquisition</li>
            </ul>
          </div>
          <div>
            <ul style={{ listStyle: 'disc' }}>
              <li className='text-[16px]'>Debt Capital Raise</li>
              <ul style={{ listStyle: 'square' }} className='ml-5 text-[14px]'>
                <li>Credit Financing</li>
                <li>Credit Refinancing </li>
              </ul>
            </ul>
          </div>
          <div>
            <ul style={{ listStyle: 'disc' }}>
              <li className='text-[16px]'>Equity Capital Raise </li>
              <ul style={{ listStyle: 'square' }} className='ml-5 text-[14px]'>
                <li>Equity Financing </li>
                <li>Preferred Equity Refinancing</li>
              </ul>
            </ul>
          </div>
          <div>
            <ul style={{ listStyle: 'disc' }}>
              <li className='text-[16px]'>Disposition </li>
              <ul style={{ listStyle: 'square' }} className='ml-5 text-[14px]'>
                <li>Sale </li>
                <li>IPO</li>
                <li>Other Divestiture (Asset, Real Estate)</li>
              </ul>
            </ul>
          </div>
          <div>
            <ul style={{ listStyle: 'disc' }}>
              <li className='text-[16px]'>Bankruptcy</li>
            </ul>
          </div>
          <div>
            <ul style={{ listStyle: 'disc' }}>
              <li className='text-[16px]'>Executive or Management Agreement </li>
            </ul>
          </div>
          <div>
            <ul style={{ listStyle: 'disc' }}>
              <li className='text-[16px]'>Key Agreement (IP, Commercial Contracts, JV)</li>
            </ul>
          </div>
          <div>
            <ul style={{ listStyle: 'disc' }}>
              <li className='text-[16px]'>Sale Leaseback</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InitiateTransaction
