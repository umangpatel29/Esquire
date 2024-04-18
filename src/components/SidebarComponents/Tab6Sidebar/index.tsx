import React, { useState } from 'react';
import Image from 'next/image';

interface CompanyState {
    isOpen: boolean;
    securities: Record<string, boolean>;
}

const Tab6Sidebar: React.FC = () => {
    const [companies, setCompanies] = useState<Record<string, CompanyState>>({
        'The HVAC Company': { isOpen: true, securities: { securities1: false } },
        'The Rocket Company': { isOpen: true, securities: { securities2: false } },
        'Company': { isOpen: true, securities: { securities2: false } },
        'Dental Rentals': { isOpen: true, securities: { securities2: false } },
    });

    const toggleCompany = (companyId: string) => {
        setCompanies((prevState) => ({
            ...prevState,
            [companyId]: { ...prevState[companyId], isOpen: !prevState[companyId].isOpen },
        }));
    };

    const toggleSecurity = (companyId: string, securityId: string) => {
        setCompanies((prevState) => ({
            ...prevState,
            [companyId]: {
                ...prevState[companyId],
                securities: { ...prevState[companyId].securities, [securityId]: !prevState[companyId].securities[securityId] },
            },
        }));
    };

    const CapTableManagementConstant2 = [
        { name: 'Dashboard', value: [] },
        { name: 'Cap Table', value: [] },
        { name: 'Waterfall Modeling', value: [] },
        { name: 'Draft Option Grant', value: [] },
        { name: 'Draft Certificate', value: [] },
        { name: 'Securities', value: ['Shares', 'Equity Awards', 'Warrents', 'Covertibles', 'Manage Share', 'Classes', 'Equity Plans', 'Securities', 'Template'] },
        { name: 'Manage Stakeholders', value: [] },
        { name: 'Compliance & Tax', value: [] },
    ];

    return (
        <>
            <div className='pl-3 mt-2'>
                <h1 className='text-[15px] font-medium leading-[25px] uppercase'>My PortCos</h1>
                {Object.entries(companies).map(([companyId, company], index) => (
                    <div key={companyId} className='mt-3'>
                        <div className='flex gap-4 items-center cursor-pointer' onClick={() => toggleCompany(companyId)}>
                            <div className={`text-black font-${index === 0 ? 'medium' : 'normal'}`}>
                                <ul style={{ listStyle: 'disc' }} className='ml-1'>
                                    <li className={`ml-4 text-sm text-black cursor-pointer`}>{`${companyId}`}</li>
                                </ul>
                            </div>
                            <Image src='/icons/downarrowsvg.svg' alt='' width={13} height={13} className={`${company.isOpen ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                        </div>
                        {company.isOpen && (
                            <div className='text-[14px] ml-6 flex flex-col mt-1 gap-1 slide-in'>
                                {CapTableManagementConstant2.map((item, idx) => (
                                    <div key={idx} className='cursor-pointer'>
                                        <div className='flex gap-2 items-center cursor-pointer' onClick={() => toggleSecurity(companyId, `securities${idx + 1}`)}>
                                            <div className='text-black text-[13px] leading-[25px]'>
                                                <ul style={{ listStyle: 'square' }} className=''>
                                                    <li className={`cursor-pointer  font-${index === 0 && idx === 0 ? 'medium' : 'normal'} ml-4`}>{item.name}</li>
                                                </ul>
                                            </div>
                                            {
                                                item.value.length > 0 && <Image src='/icons/downarrowsvg.svg' alt='' width={13} height={13} className={`${company.securities[`securities${idx + 1}`] ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}`} />
                                            }
                                        </div>
                                        {company.securities[`securities${idx + 1}`] && item.value.length > 0 && (
                                            <ul style={{ listStyleType: 'circle' }} className='flex flex-col gap-1 slide-in'>
                                                {
                                                    item.value.map((subItem, subIdx) => (
                                                        <li key={subIdx} className='cursor-pointer hover:font-medium ml-9'>{subItem}</li>
                                                    ))
                                                }
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Tab6Sidebar;
