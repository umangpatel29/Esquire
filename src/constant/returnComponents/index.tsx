import ProjectSpace from "@/components/EsquireComponents/ActiveTransactions/ProjectSpace";
import ProjectSpot from "@/components/EsquireComponents/ActiveTransactions/ProjectSpot";
import ProjectStar from "@/components/EsquireComponents/ActiveTransactions/ProjectStar";
import RecentActivity from "@/components/EsquireComponents/RecentActivity";
import ActiveDiligenceTrackers from "@/components/EsquireComponents/ActiveDiligenceTrackers";
import FormerDiligenceTransactions from "@/components/EsquireComponents/FormerDiligenceTransactions";
import FormerTransactions from "@/components/EsquireComponents/formerTransactions";
import ActiveTransactions from "@/components/EsquireComponents/ActiveTransactions";
import DiligenceTrackers from "@/components/EsquireComponents/DiligenceTrackers";
import InitiateTransaction from "@/components/EsquireComponents/InitiateTransactions";
import ManageCollaborate from "@/components/EsquireComponents/ManageCollaborators";
import PortfolioMonitoring from "@/components/EsquireComponents/PortfolioMonitoring";

export const componentMap = [
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
        name: 'Active Transactions',
        child: <ActiveTransactions />
    },
    {
        name: 'Diligence Trackers',
        child: <DiligenceTrackers />
    },
    {
        name: 'Initiate Transaction',
        child: <InitiateTransaction />
    },
    {
        name: 'Manage Collaborators',
        child: <ManageCollaborate />
    },
    {
        name: 'Portfolio Monitoring',
        child: <PortfolioMonitoring />
    },

];