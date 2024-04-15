import ActiveTransactions from "@/components/AllTabs/ActiveTransactions";
import ProjectSpace from "@/components/AllTabs/ActiveTransactions/ProjectSpace";
import ProjectSpot from "@/components/AllTabs/ActiveTransactions/ProjectSpot";
import ProjectStar from "@/components/AllTabs/ActiveTransactions/ProjectStar";
import TableManagement from "@/components/AllTabs/CapTableManagement";
import ContractManagement from "@/components/AllTabs/ContractManagement";
import DiligenceTrackers from "@/components/AllTabs/DiligenceTrackers";
import DeligenceProjectSpace from "@/components/AllTabs/DiligenceTrackers/projectSpace";
import InitiateTransaction from "@/components/AllTabs/InitiateTransactions";
import PortfolioMonitoring from "@/components/AllTabs/PortfolioMonitoring";
import ActiveDiligenceTrackers from "@/components/EsquireComponents/ActiveDiligenceTrackers";
import FormerDiligenceTransactions from "@/components/EsquireComponents/FormerDiligenceTransactions";
import RecentActivity from "@/components/EsquireComponents/RecentActivity";
import FormerTransactions from "@/components/EsquireComponents/formerTransactions";
import React from "react";

export const componentMap = [
    {
        name: 'tab1',
        child: <ActiveTransactions />
    },
    {
        name: 'tab2',
        child: <InitiateTransaction />
    },
    {
        name: 'tab3',
        child: <PortfolioMonitoring />
    },
    {
        name: 'tab4',
        child: <ContractManagement />
    },
    {
        name: 'tab5',
        child: <DiligenceTrackers />
    },
    {
        name: 'tab6',
        child: <TableManagement />
    },
    {
        name: 'Recent Activity',
        child: <RecentActivity />,
    },
    {
        name: 'Project Space',
        child: <ProjectSpace />,
    },
    {
        name: 'Project Star',
        child: <ProjectStar />,
    },
    {
        name: 'Project Spot',
        child: <ProjectSpot />,
    },
    {
        name: 'Former Transactions',
        child: <FormerTransactions />,
    },
    {
        name: 'Active Diligence Trackers',
        child: <ActiveDiligenceTrackers />,
    },
    {
        name: 'Former Diligence Transactions',
        child: <FormerDiligenceTransactions />,
    },
    {
        name: 'Diligence Project Space',
        child: <DeligenceProjectSpace />
    }
];