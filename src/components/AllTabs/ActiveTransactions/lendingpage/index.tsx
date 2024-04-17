'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image';

const ActiveTransactionLendingPage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpenspot, setIsOpenspot] = useState(true);
  const [spot2, setSpot2] = useState(false);
  const [star, setStar] = useState(true);
  const [star2, setStar2] = useState(false);

  const leagalDocs = [
    { name: '', value: ['Stock Purchase Agreement'] },
    { name: '', value: ['Disclosure Schedules'] },
    { name: '', value: ['Operating Agreement'] },
    { name: '', value: ['1L Credit Agreement'] },
    { name: '', value: ['2L Credit Agreement'] },
    { name: '', value: ['Intercreditor Agreement'] },
    { name: '', value: ['Parent Guarantee'] },
    { name: '', value: ['Escrow Agreement'] },
    { name: '', value: ['Transition Services Agreement'] },
    { name: 'Co-Investors:', value: ['Purchase Agreements', 'Subscription Agreements '] },
    { name: 'HSR Filing Not Yet Initiated', value: ['Initiate HSR package for Sage Capital?'] },
  ]

  const transactionDocs = [
    { name: '', value: ['Buy-side QoE', 'Rollforward'] },
    { name: 'Sell-side Materials:', value: ['CIM,', 'Term Sheet,', 'Sell-side QoE', 'Financial Update'] },
    { name: 'Internal Materials:', value: ['Investment Committee Intro Memo,', 'Sales Database'] },
    { name: 'Financing Materials:', value: ['Financing Model'] },
    { name: 'Models:', value: ['IC Intro Memo Model,', 'Latest Equity Model'] },
    { name: 'Third Party Diligence Materials:', value: ['RWI Insurance Offering from Aon,', 'Latest Equity'] },
  ]

  const projectspot = [
    { name: 'LOI not yet drafted.', value: ['Auto-generate LOI?'] },
  ]
  const spot2array = [
    { name: 'Sell-side Materials:', value: ['CIM,', 'Bid Letter,', 'Sell-side QoE'] },
    { name: 'Internal Materials', value: ['Retention Analysis,', 'Margin Analysis'] },
    { name: 'Models: No models logged yet.', value: [' Initiate Quick Model?'] },
  ]

  const ProjectStar = [
    { name: '', value: ['Board Consents '] },
    { name: '', value: ['Stockholder Consents '] },
    { name: '', value: ['Third Party Consents '] },
    { name: '', value: ['Regulatory Approvals '] },
    { name: '', value: ['Certificate of Merger '] },
    { name: '', value: ['Assignment and Assumption Agreement '] },
    { name: '', value: ['Bill of Sale '] },
    { name: '', value: ['Officer’s Certificate'] },
    { name: '', value: ['Closing Certificate'] },
    { name: '', value: ['Legal Opinion '] },
  ]

  const projectStarkey = [
    { name: 'Internal Materials:', value: ['Closing Funds Flow - Latest Draft'] },
    { name: 'Sell-Side Materials:', value: ['PEG Calculation'] },
    { name: 'Models:', value: ['Buy-side QoE,', 'Rollforward'] },
    { name: 'Company Materials:', value: ['Agreed MIP Waterfall'] },
    { name: '', value: ['Invoices '] },
  ]


  return (
    <div className='flex flex-col gap-4'>
      {/* project spacee */}
      <div>
        <div>
          <h1 className='text-[18px] trasking-[12px] underline text-black font-medium'>Project Space – Rocket LLC</h1>
          <h3 className='text-cyan-600 text-[15px]'>Transaction Status: LOI signed on 3/26/2024. Target SPA signing on 4/26/2024.</h3>
        </div>
        <div className='flex flex-col ml-5'>
          <div className='flex flex-col gap-1 mt-2'>
            <div className='flex gap-4 items-center cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
              <li>
                <span className='text-black text-[15px] font-medium'>
                  Key Active Legal Docs:
                </span>
              </li>
              <Image src='/icons/downarrowsvg.svg' alt='' width={15} height={15} className={`${isOpen ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
            </div>

            {
              isOpen && (
                <div className='slide-in'>
                  <div>
                    {
                      leagalDocs && leagalDocs.map((item, index) => (
                        <div key={index}>
                          <ul style={{ listStyleType: 'circle' }} className='ml-11'>
                            <li className='text-black text-[14px]'>{item.name}
                              {item.value.map((value, id) => (
                                <span key={id} className='text-cyan-600 cursor-pointer font-normal hover:font-medium duration-300'> {value}</span>
                              ))}
                            </li>
                          </ul>
                        </div>
                      ))
                    }
                  </div>
                </div>
              )
            }
          </div>
          <div className='flex flex-col gap-1 mt-2'>
            <div className='flex gap-4 items-center cursor-pointer' onClick={() => setIsOpen2(!isOpen2)}>
              <li>
                <span className='text-black text-[15px] font-medium'>
                  Key Transaction Files
                </span>
              </li>
              <Image src='/icons/downarrowsvg.svg' alt='' width={15} height={15} className={`${isOpen2 ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
            </div>

            {
              isOpen2 && (
                <div className={`slide-in`}>
                  <div>
                    {
                      transactionDocs && transactionDocs.map((item, index) => (
                        <div key={index}>
                          <ul style={{ listStyleType: 'circle' }} className='ml-11'>
                            <li className='text-black text-[14px]'>{item.name}
                              {item.value.map((value, id) => (
                                <span key={id} className='text-cyan-600 cursor-pointer font-normal hover:font-medium duration-300'> {value}</span>
                              ))}
                            </li>
                          </ul>
                        </div>
                      ))
                    }
                  </div>
                </div>
              )
            }

          </div>
          <div className='mt-1'>
            <li>
              <span className='text-cyan-600 cursor-pointer text-[15px] font-normal hover:font-medium duration-300'>Master Diligence Tracker</span>
            </li>
          </div>
        </div>
      </div>

      {/* project spot */}
      <div>
        <div>
          <h1 className='text-[18px] trasking-[12px] underline text-black font-medium'>Project Spot - Cleaning LLC</h1>
          <h3 className='text-cyan-600 text-[15px]'>Transaction Status: IOI signed on 3/22/2024. LOIs are due 4/22/2024 at 5PM ET.</h3>
        </div>
        <div className='flex flex-col ml-5'>
          <div className='flex flex-col gap-1 mt-2'>
            <div className='flex gap-4 items-center cursor-pointer' onClick={() => setIsOpenspot(!isOpenspot)}>
              <li>
                <span className='text-black text-[15px] font-medium'>
                  Key Active Legal Docs:
                </span>
              </li>
              <Image src='/icons/downarrowsvg.svg' alt='' width={15} height={15} className={`${isOpenspot ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
            </div>

            {
              isOpenspot && (
                <div className='slide-in'>
                  <div>
                    {
                      projectspot && projectspot.map((item, index) => (
                        <div key={index}>
                          <ul style={{ listStyleType: 'circle' }} className='ml-11'>
                            <li className='text-black text-[14px]'>{item.name}
                              {item.value.map((value, id) => (
                                <span key={id} className='text-cyan-600 cursor-pointer font-normal hover:font-medium duration-300'> {value}</span>
                              ))}
                            </li>
                          </ul>
                        </div>
                      ))
                    }
                  </div>
                </div>
              )
            }
          </div>
          <div className='flex flex-col gap-1 mt-2'>
            <div className='flex gap-4 items-center cursor-pointer' onClick={() => setSpot2(!spot2)}>
              <li>
                <span className='text-black text-[15px] font-medium'>
                  Key Transaction Files
                </span>
              </li>
              <Image src='/icons/downarrowsvg.svg' alt='' width={15} height={15} className={`${spot2 ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
            </div>

            {
              spot2 && (
                <div className='slide-in'>
                  <div>
                    {
                      spot2array && spot2array.map((item, index) => (
                        <div key={index}>
                          <ul style={{ listStyleType: 'circle' }} className='ml-11'>
                            <li className='text-black text-[14px]'>{item.name}
                              {item.value.map((value, id) => (
                                <span key={id} className='text-cyan-600 cursor-pointer font-normal hover:font-medium duration-300'> {value}</span>
                              ))}
                            </li>
                          </ul>
                        </div>
                      ))
                    }
                  </div>
                </div>
              )
            }

          </div>
          <div className='mt-1'>
            <li>
              <span className='text-cyan-600 cursor-pointer text-[15px] font-normal hover:font-medium duration-300'>Master Diligence Tracker</span>
            </li>
          </div>
        </div>
      </div>

      {/* project starss */}
      <div>
        <div>
          <h1 className='text-[18px] trasking-[12px] underline text-black font-medium'>Project Star - Script LLC</h1>
          <h3 className='text-cyan-600 text-[15px]'>Transaction Status: SPA signed on 2/23/2024. Target closing week of 6/15/24.</h3>
        </div>
        <div className='flex flex-col ml-5'>
          <div className='flex flex-col gap-1 mt-2'>
            <div className='flex gap-4 items-center cursor-pointer' onClick={() => setStar(!star)}>
              <li>
                <span className='text-black text-[15px] font-medium'>
                  Key Active Legal Docs:
                </span>
              </li>
              <Image src='/icons/downarrowsvg.svg' alt='' width={15} height={15} className={`${star ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
            </div>

            {
              star && (
                <div className='slide-in'>
                  <div>
                    {
                      ProjectStar && ProjectStar.map((item, index) => (
                        <div key={index}>
                          <ul style={{ listStyleType: 'circle' }} className='ml-11'>
                            <li className='text-black text-[14px]'>{item.name}
                              {item.value.map((value, id) => (
                                <span key={id} className='text-cyan-600 cursor-pointer font-normal hover:font-medium duration-300'> {value}</span>
                              ))}
                            </li>
                          </ul>
                        </div>
                      ))
                    }
                  </div>
                </div>
              )
            }
          </div>
          <div className='flex flex-col gap-1 mt-2'>
            <div className='flex gap-4 items-center cursor-pointer' onClick={() => setStar2(!star2)}>
              <li>
                <span className='text-black text-[15px] font-medium'>
                  Key Transaction Files
                </span>
              </li>
              <Image src='/icons/downarrowsvg.svg' alt='' width={15} height={15} className={`${star2 ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
            </div>

            {
              star2 && (
                <div className='slide-in'>
                  <div>
                    {
                      projectStarkey && projectStarkey.map((item, index) => (
                        <div key={index}>
                          <ul style={{ listStyleType: 'circle' }} className='ml-11'>
                            <li className='text-black text-[14px]'>{item.name}
                              {item.value.map((value, id) => (
                                <span key={id} className='text-cyan-600 cursor-pointer font-normal hover:font-medium duration-300'> {value}</span>
                              ))}
                            </li>
                          </ul>
                        </div>
                      ))
                    }
                  </div>
                </div>
              )
            }

          </div>
          <div className='mt-1'>
            <li>
              <span className='text-cyan-600 cursor-pointer text-[15px] font-normal hover:font-medium duration-300'>Master Diligence Tracker</span>
            </li>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ActiveTransactionLendingPage
