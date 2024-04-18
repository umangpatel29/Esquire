'use client'
import React, { useState } from 'react'

const InitiateTransaction = () => {
  const [privateCompany, setPrivateCompany] = useState(true)
  const [publicCompany, setPublicCompany] = useState(true)
  return (
    <div className='flex flex-col gap-2'>
      <div>
        <div className='text-[17px] font-medium underline'>
          New Investment:
        </div>
        <div className='flex flex-col gap-2 mt-1 ml-3'>
          <div>
            <div className='flex gap-2'>
              <li className='font-normal text-[15px]'>Private Company Acquisition</li>
            </div>
            {
              privateCompany &&
              <div className='ml-10 text-[14px] '>
                <ul style={{ listStyle: 'square' }}>
                  <li>
                    <span className='text-cyan-600 cursor-pointer font-medium hover:font-semibold duration-300 font medium'>Solicited</span>
                  </li>
                  <li>
                    <span className='text-cyan-600 cursor-pointer hover:font-semibold duration-300 font medium'>Unsolicited</span>
                  </li>
                  <li>
                    <span className='text-cyan-600 cursor-pointer hover:font-semibold duration-300 font medium'>Carve-Out</span>
                  </li>
                </ul>
              </div>
            }
          </div>
          <div>
            <div className='flex gap-2'>
              <li className='text-[15px]'>Private Company Acquisition</li>
            </div>
            {
              publicCompany &&
              <div className='ml-10 text-[14px]'>
                <ul style={{ listStyle: 'square' }}>
                  <li>
                    <span className='text-cyan-600 cursor-pointer hover:font-semibold duration-300 font medium'>Solicited</span>
                  </li>
                  <li>
                    <span className='text-cyan-600 cursor-pointer hover:font-semibold duration-300 font medium'>Unsolicited</span>
                  </li>
                  <li>
                    <span className='text-cyan-600 cursor-pointer hover:font-semibold duration-300 font medium'>Carve-Out</span>
                  </li>
                </ul>
              </div>
            }
          </div>
          <div>
            <div className='flex gap-2'>
              <li>
                <span className='cursor-pointer text-[15px] text-cyan-600 cursor-pointer hover:font-semibold duration-300 font medium'>Growth Equity Investment </span>
              </li>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='text-[17px] font-medium underline'>
          Existing PortCo:
        </div>
        <div className='flex flex-col gap-1 ml-8 mt-1 '>
          <div>
            <ul style={{ listStyle: 'disc' }}>
              <li>
                <span className='text-[15px] text-cyan-600 cursor-pointer hover:font-semibold duration-300 font medium'>Bolt-on Acquisition</span>
              </li>
            </ul>
          </div>
          <div>
            <ul style={{ listStyle: 'disc' }}>
              <li className='text-[15px]'>Debt Capital Raise</li>
              <ul style={{ listStyle: 'square' }} className='ml-5 text-[14px]'>
                <li>
                  <span className='text-cyan-600 cursor-pointer hover:font-semibold duration-300 font medium'>Credit Financing</span>
                </li>
                <li>
                  <span className='text-cyan-600 cursor-pointer hover:font-semibold duration-300 font medium'>Credit Refinancing </span>
                </li>
              </ul>
            </ul>
          </div>
          <div>
            <ul style={{ listStyle: 'disc' }}>
              <li className='text-[15px]'>Equity Capital Raise </li>
              <ul style={{ listStyle: 'square' }} className='ml-5 text-[14px]'>
                <li>
                  <span className='text-cyan-600 cursor-pointer hover:font-semibold duration-300 font medium'>Equity Financing </span>
                </li>
                <li>
                  <span className='text-cyan-600 cursor-pointer hover:font-semibold duration-300 font medium'>Preferred Equity Refinancing</span>
                </li>
              </ul>
            </ul>
          </div>
          <div>
            <ul style={{ listStyle: 'disc' }}>
              <li className='text-[15px]'>Disposition </li>
              <ul style={{ listStyle: 'square' }} className='ml-5 text-[14px]'>
                <li>
                  <span className='text-cyan-600 cursor-pointer hover:font-semibold duration-300 font medium'>Sale </span>
                </li>
                <li>
                  <span className='text-cyan-600 cursor-pointer hover:font-semibold duration-300 font medium'>IPO</span>
                </li>
                <li>
                  <span className='text-cyan-600 cursor-pointer hover:font-semibold duration-300 font medium'>Other Divestiture (Asset, Real Estate)</span>
                </li>
              </ul>
            </ul>
          </div>
          <div>
            <ul style={{ listStyle: 'disc' }}>
              <li>
                <span className='text-[15px] text-cyan-600 cursor-pointer hover:font-semibold duration-300 font medium'>Bankruptcy</span>
              </li>
            </ul>
          </div>
          <div>
            <ul style={{ listStyle: 'disc' }}>
              <li>
                <span className='text-[15px] text-cyan-600 cursor-pointer hover:font-semibold duration-300 font medium'>Executive or Management Agreement </span>
              </li>
            </ul>
          </div>
          <div>
            <ul style={{ listStyle: 'disc' }}>
              <li>
                <span className='text-[15px] text-cyan-600 cursor-pointer hover:font-semibold duration-300 font medium'>Key Agreement (IP, Commercial Contracts, JV)</span>
              </li>
            </ul>
          </div>
          <div>
            <ul style={{ listStyle: 'disc' }}>
              <li>
                <span className='text-[15px] text-cyan-600 cursor-pointer hover:font-semibold duration-300 font medium'>Sale Leaseback</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InitiateTransaction
