// TabContext.ts
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TabContextProps {
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
    activeHeader: string;
    setActiveHeader: React.Dispatch<React.SetStateAction<string>>;
}

const initialContext: TabContextProps = {
    activeTab: 'tab1',
    setActiveTab: () => { },
    activeHeader: 'tab1',
    setActiveHeader: () => { },
};

const TabContext = createContext<TabContextProps>(initialContext);

interface TabProviderProps {
    children: ReactNode;
}

export const TabProvider: React.FC<TabProviderProps> = ({ children }) => {
    const [activeTab, setActiveTab] = useState(initialContext.activeTab);
    const [activeHeader, setActiveHeader] = useState(initialContext.activeHeader);

    return (
        <TabContext.Provider value={{ activeTab, setActiveTab, activeHeader, setActiveHeader }}>
            {children}
        </TabContext.Provider>
    );
};

export const useTabContext = () => useContext(TabContext);
