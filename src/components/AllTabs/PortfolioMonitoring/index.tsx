import React from 'react'
import MonitoringTable from './MonitoringTable'

const PortfolioMonitoring = () => {
    return (
        <div className='w-full'>
            <h1 className='text-[17px] trasking-[12px] font-medium mb-3'>Portfolio Monitoring and Marks :</h1>
            <div className='border'>
                <MonitoringTable />
            </div>
        </div>
    )
}

export default PortfolioMonitoring
