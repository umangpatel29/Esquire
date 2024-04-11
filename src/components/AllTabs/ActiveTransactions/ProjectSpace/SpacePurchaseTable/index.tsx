'use client'
import Image from 'next/image';
import React, { useState } from 'react'

const PurchaseTable = () => {
    const [isOpenTable, setISopenTable] = useState(false)

    const headers = ['Version', 'Version Type', 'Date Uploaded', 'Document', 'Relavennt Support'];
    const data = [
        ['Project Space SPA V1', 'Autogenerated', '3/2/2024 at 5:00PM', '/icons/pdficon.svg', '/icons/wordfile.svg', 'EsquireAI prompt'],
        ['Project Space SPA V2', 'From Counsel', '3/6/2024 at 6:00PM', '/icons/pdficon.svg', '/icons/wordfile.svg', 'Email with Sage Capital Comments', 'Redline'],
        ['Project Space SPA V3', 'Sent Externally', '3/8/2024 at 8:00PM', '/icons/pdficon.svg', '/icons/wordfile.svg', 'NWC Math for PEG', 'Redline'],
        ['Project Space SPA V4', 'External Counter', '3/15/2024 at 9:00PM', '/icons/pdficon.svg', '/icons/wordfile.svg', 'Indebtedness Calc', 'Redline'],
        ['Project Space SPA V5', '-', '3/20/2024 at 11:00PM', '/icons/pdficon.svg', '/icons/wordfile.svg', 'Indebtedness Calc', 'Redline']
    ];

    return (
        <div className='w-full flex flex-col gap-4'>
            <div>
                <div className='flex gap-4 items-center cursor-pointer' onClick={() => setISopenTable(!isOpenTable)}>
                    <div className='text-black text-[18px] font-medium'>
                        Stock Purchase Agreement
                    </div>
                    <Image src='/icons/downarrowsvg.svg' alt='' width={15} height={15} className={`${isOpenTable ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                </div>
                <p className='text-cyan-600 font-medium'>See Previous Prompts and comparisons</p>
            </div>
            {
                isOpenTable &&
                <table className='w-full slide-in'>
                    <thead>
                        <tr className='border'>
                            {headers.map((item, index) => (
                                <th key={index} className='text-start p-3 border underline'>{item}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index} className='border'>
                                <td className='text-start border p-2'>{row[0]}</td>
                                <td className='text-start border p-2'>{row[1]}</td>
                                <td className='text-start border p-2'>{row[2]}</td>
                                <td className='text-start border p-2'>{row[3] && <>
                                    <div className='flex gap-5 items-center'>
                                        <Image src={row[3]} alt="Icon" width="23" height="23" className='cursor-pointer' />
                                        <Image src={row[4]} alt="Icon" width="20" height="20" className='cursor-pointer' />
                                        <span className='text-red-500 text-[12px] ml-2 font-medium'>{row[6]}</span>
                                    </div>
                                </>
                                }
                                </td>
                                <td className='text-start border p-2'>- {row[5]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div >
    )
}

export default PurchaseTable