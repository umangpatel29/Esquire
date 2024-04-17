import React from 'react'
import MonitoringTable from './MonitoringTable'

const PortfolioMonitoring = () => {
    return (
        <div className='w-full'>
            <h1 className='text-[18px] trasking-[12px] font-medium mb-4'>Portfolio Monitoring and Marks :</h1>
            <div className='border'>
                <MonitoringTable />
            </div>
        </div>
    )
}

export default PortfolioMonitoring
