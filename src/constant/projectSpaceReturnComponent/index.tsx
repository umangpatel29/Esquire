import React from "react"
import PurchaseTable from "../../components/AllTabs/ActiveTransactions/ProjectSpace/SpacePurchaseTable"


type returnType = {
    [key: string]: React.ReactNode
}

export const PS_RETURNCOMPONENT: returnType = {
    purchaseTable: <PurchaseTable />,
}