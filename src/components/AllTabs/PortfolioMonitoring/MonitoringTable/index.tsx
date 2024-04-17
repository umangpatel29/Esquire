import React from 'react';

function MonitoringTable() {
    const headers2 = ['', 'Initial Investment', 'Revenue', 'PF Adj. EBITDA', 'Financing EBITDA', 'Adj. EBITDA', 'PF Adj. EBITDA - Var to Budget', 'Total EV', 'Equity Value', 'MOIC', 'IRR', 'Current Mark', 'Total Debt', 'Cash', 'Net Debt', 'Total Leverage', 'Net Leverage'];
    const rows = [
        ['The Rocket Company', '$5,660', '$35,000', '$10,500', '$9,975', '$7,350', '--', '$78,750', '$85,965', '2.02X', '25%', '$11,433', '$12,735', '$19,950', '($7,215)', '1.28x', '(0.72x)'],
        ['The HVAC Company', '$6,640', '$26,000', '$7,800', '$7,410', '$5,460', '(5.0%)', '$58,500', '$47,265', '2.50x', '23%', '$16,600', '$14,940', '$3,705', '$11,235', '2.02x', '1.52x'],
        ['The Computer Company', '$6,303', '$14,000', '$4,200', '$3,990', '$2,940', '8.0%', '$31,500', '$25,298', '2.20x', '20%', '$13,867', '$14,182', '$7,980', '$6,202', '3.55x', '1.55x'],
        ['Dental Rentals', '$3,303', '$27,000', '$8,100', '$7,695', '$5,670', '(15.0%)', '$60,750', '$68,708', '2.23x', '27%', '$7,366', '$7,432', '$15,390', '($7,958)', '0.97x', '(1.03x)'],
        ['Total', '$21,906', '$102,000', '$30,600', '$29,070', '$30,524', '(4.1%)', '$229,500', '$227,237', '2.25x', '23%', '$49,265', '$49,289 ', '$47,025 ', '$2,264 ', '1.70x', '0.08x'],
    ];

    const customClass = 'text-center border font-medium text-[16px] underline px-7 py-2';

    return (
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr className='border-b-2 w-full'>
                        <th className={customClass} colSpan={6} style={{ paddingTop: '15px', paddingBottom: '10px' }}>Key LTM Financials</th>
                        <th className={customClass} colSpan={7}>Valuation</th>
                        <th className={customClass} colSpan={5}>Credit Metrics</th>
                    </tr>
                    <tr className='w-full'>
                        {headers2.map((header, index) => (
                            <th key={index} className={`${customClass}`} >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td
                                    key={cellIndex}
                                    className={`px-5 py-3 border text-[14px]
                                        ${rowIndex === 4 ? 'font-medium text-[15px] bg-gray-100' : ''} 
                                        ${rowIndex === 0 && cellIndex === 14 ? 'text-red-500' : ''}
                                        ${rowIndex === 3 && cellIndex === 14 ? 'text-red-500' : ''}
                                        ${rowIndex === 1 && cellIndex === 7 ? 'bg-yellow-50 text-end' : 'text-end'}
                                        ${rowIndex === 3 && cellIndex === 7 ? 'bg-[#f7beb0af] text-end' : 'text-end'}
                                    `}
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}

                </tbody>
            </table>
        </div >
    );
}

export default MonitoringTable;
