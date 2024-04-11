import RecentActivity from "@/components/EsquireComponents/RecentActivity";
import ActiveDiligenceTrackers from "@/components/EsquireComponents/ActiveDiligenceTrackers";
import FormerDiligenceTransactions from "@/components/EsquireComponents/FormerDiligenceTransactions";
import FormerTransactions from "@/components/EsquireComponents/formerTransactions";
import ProjectSpace from "@/components/AllTabs/ActiveTransactions/ProjectSpace";
import ProjectStar from "@/components/AllTabs/ActiveTransactions/ProjectStar";
import ProjectSpot from "@/components/AllTabs/ActiveTransactions/ProjectSpot";
import ActiveTransactions from "@/components/AllTabs/ActiveTransactions";
import DiligenceTrackers from "@/components/AllTabs/DiligenceTrackers";
import InitiateTransaction from "@/components/AllTabs/InitiateTransactions";
import ContactManagement from "@/components/AllTabs/ConteactManagement";
import PortfolioMonitoring from "@/components/AllTabs/PortfolioMonitoring";
import TableManagement from "@/components/AllTabs/CapTableManagement";

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
        child: <ContactManagement />
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
];