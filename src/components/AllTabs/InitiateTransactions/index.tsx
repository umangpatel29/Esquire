import React from 'react'

const InitiateTransaction = () => {
  return (
    <div className='flex flex-col gap-3'>
      <div>
        <div className='text-xl font-semibold '>
          Existing PortCo
        </div>
        <div>
          <li>New Add-On Acquisition</li>
          <li>Refinancing – Credit</li>
          <li>Refinancing – Preferred</li>
          <li>Equity Capital Fundraise</li>
          <li>IPO</li>
          <li>Sale Process</li>
          <li>Divestiture (Asset, Real Estate)</li>
          <li>Commercial Contracts</li>
          <li>Employment Agreements</li>
          <li>Operating and Capital Leases</li>
          <li>Sale Leaseback</li>
          <li>Bankruptcy</li>
        </div>
      </div>
      <div>
        <div className='text-xl font-semibold '>
          New Investment Opportunity
        </div>
        <div>
          <li>Private Company LBO</li>
          <li>Public Company Take Private</li>
          <li>Carve-Out</li>
        </div>
      </div>
    </div>
  )
}

export default InitiateTransaction
