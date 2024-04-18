import React from 'react'

const CaptaTable = () => {
    const headers2 = ['Holders & Interests', 'Outstanding Quantity', 'Outstanding %', 'Outstanding Quantity', 'Outstanding %', 'Outstanding Quantity', 'Outstanding %'];

    const tableData = [
        ['Sage Capital', '14,000,000', '70%', '--', '--', '--', '--'],
        ['All Other Investment Firms', '5,000,000', '25%', '--', '--', '--', '--'],
        ['Management Team', '500,00', '2.5%', '300', '60%', '600', '60%'],
        ['Board Members', '500,00', '2.5%', '--', '--', '--', '--'],
        ['All Other Employees', '--', '--%', '100', '20%', '200', '20%'],
        ['All Units Remaining', '--', '--%', '100', '20%', '200', '20%'],
        ['All Units Total', '20,000,000', '100%', '500', '100%', '1000', '100%']
    ];

    return (
        <div className='flex flex-col gap-3'>
            <div className='flex justify-between'>
                <div className='font-medium text-[18px] trasking-[12px] text-cyan-600'>The HVAC Company</div>
                <div className='flex gap-5 text-[14px]'>
                    <div className='text-cyan-600 tracking-tight cursor-pointer font-medium hover:underline'>Employment Agreements</div>
                    <div className='text-cyan-600 tracking-tight cursor-pointer font-medium hover:underline'>Issue Units</div>
                    <div className='text-cyan-600 tracking-tight cursor-pointer font-medium hover:underline'>Export to Excel</div>
                </div>
            </div>
            <div>
                <div className='mb-3 font-medium text-[16px] underline'>Most Recent Transactions:</div>
                <div>
                    <table>
                        <tr className='border bg-gray-100 p-3 text-[15px] border-gray-300'>
                            <td className='p-2 font-medium border border-gray-300'>Security</td>
                            <td className='p-2 font-medium border border-gray-300'>Transaction</td>
                            <td className='p-2 font-medium border border-gray-300'>Date</td>
                            <td className='p-2 font-medium border border-gray-300'>Quantity</td>
                        </tr>
                        <tr className='text-[14px]'>
                            <td className='p-2 border border-gray-300'>ES-232</td>
                            <td className='p-2 border border-gray-300'>Issued</td>
                            <td className='p-2 border border-gray-300'>4/1/2024</td>
                            <td className='p-2 border border-gray-300'>100</td>
                        </tr>
                        <tr className='text-[14px]'>
                            <td className='p-2 border border-gray-300'>ES-233</td>
                            <td className='p-2 border border-gray-300'>Issued</td>
                            <td className='p-2 border border-gray-300'>4/1/2024</td>
                            <td className='p-2 border border-gray-300'>100</td>
                        </tr>
                        <tr className='text-[14px]'>
                            <td className='p-2 border border-gray-300'>ES-234</td>
                            <td className='p-2 border border-gray-300'>Issued</td>
                            <td className='p-2 border border-gray-300'>4/1/2024</td>
                            <td className='p-2 border border-gray-300'>100</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div>
                <div className='font-medium text-[16px] underline my-3 text-cyan-600'>Cap Table Summary:</div>
                <div>
                    <table>
                        <thead>
                            <tr className='text-[15px]'>
                                <th></th>
                                <th colSpan={2} className='border font-medium bg-gray-100 p-3 border-gray-300' >Common Shares</th>
                                <th colSpan={2} className='border font-medium bg-gray-100 p-3 border-gray-300'>Management Incentive Units-Class A</th>
                                <th colSpan={2} className='border font-medium bg-gray-100 p-3 border-gray-300'>Management Incentive Units-Class B</th>
                            </tr>
                            <tr className='border bg-gray-100 text-[15px]'>
                                {headers2.map((header, index) => (
                                    <td key={index} className='border px-3 font-medium py-2 border-gray-300'>{header}</td>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, rowIndex) => (
                                <tr key={rowIndex} className={rowIndex === tableData.length - 1 ? 'bg-blue-300 font-medium' : ''}>
                                    {row.map((cell, cellIndex) => (
                                        <td key={cellIndex} className="border p-3 text-[14px] border-gray-300">{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CaptaTable
