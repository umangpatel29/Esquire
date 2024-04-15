'use client'
import React, { useState } from 'react'

const InitiateTransaction = () => {
  const [privateCompany, setPrivateCompany] = useState(true)
  const [publicCompany, setPublicCompany] = useState(true)
  return (
    <div className='flex flex-col gap-3'>

      <div>
        <div className='text-xl font-semibold '>
          New Investment
        </div>
        <div className='flex flex-col gap-3 mt-2 ml-3'>
          <div>
            <div className='flex gap-2'>
              <input type="checkbox" className='cursor-pointer' id='1' />
              <label htmlFor="1" className='cursor-pointer'>Private Company Acquisition</label>
            </div>
            {
              privateCompany &&
              <div className='ml-10'>
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
              <input type="checkbox" className='cursor-pointer' id='2' />
              <label htmlFor="2" className='cursor-pointer'>Public Company Acquisition </label>
            </div>
            {
              publicCompany &&
              <div className='ml-10'>
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
              <input type="checkbox" className='cursor-pointer' id='3' />
              <label htmlFor="3" className='cursor-pointer'>Growth Equity Investment </label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='text-xl font-semibold '>
          Existing PortCo
        </div>
        <div className='flex flex-col ml-9 mt-2'>
          <div>
            <ul style={{ listStyle: 'square' }}>
              <li>Bolt-on Acquisition</li>
            </ul>
          </div>
          <div>
            <ul style={{ listStyle: 'square' }}>
              <li>Debt Capital Raise</li>
              <ul style={{ listStyle: 'disc' }} className='ml-5'>
                <li>Credit Financing</li>
                <li>Credit Refinancing </li>
              </ul>
            </ul>
          </div>
          <div>
            <ul style={{ listStyle: 'square' }}>
              <li>Equity Capital Raise </li>
              <ul style={{ listStyle: 'disc' }} className='ml-5'>
                <li>Equity Financing </li>
                <li>Preferred Equity Refinancing</li>
              </ul>
            </ul>
          </div>
          <div>
            <ul style={{ listStyle: 'square' }}>
              <li>Disposition </li>
              <ul style={{ listStyle: 'disc' }} className='ml-5'>
                <li>Sale </li>
                <li>IPO</li>
                <li>Other Divestiture (Asset, Real Estate)</li>
              </ul>
            </ul>
          </div>
          <div>
            <ul style={{ listStyle: 'square' }}>
              <li>Bankruptcy</li>
            </ul>
          </div>
          <div>
            <ul style={{ listStyle: 'square' }}>
              <li>Executive or Management Agreement </li>
            </ul>
          </div>
          <div>
            <ul style={{ listStyle: 'square' }}>
              <li>Key Agreement (IP, Commercial Contracts, JV)</li>
            </ul>
          </div>
          <div>
            <ul style={{ listStyle: 'square' }}>
              <li>Sale Leaseback</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InitiateTransaction
