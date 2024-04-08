import React from 'react';

interface TabsCildrenComponentsProps {
    children: React.ReactNode;
}

const TabsCildrenComponents: React.FC<TabsCildrenComponentsProps> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default TabsCildrenComponents;
