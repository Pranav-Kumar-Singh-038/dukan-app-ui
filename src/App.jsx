import { AmountProcessedCard } from "./components/AmountProcessedCard"
import { RevenueCard } from "./components/RevenueCard"
import { NextPayoutCard } from "./components/NextPayoutCard"
import { Navbar } from "./components/Navbar"
import { SecondBar } from "./components/SecondBar"
import { TransactionsCount } from "./components/TransactionsCount"
import { TransactionHistorySearch } from "./components/TransactionHistorySearch"
import { TransactionHistoryTable } from "./components/TransactionHistoryTable"
import { Footer } from "./components/Footer"
import { Dashboard } from "./components/Dashboard"
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"

import { toggleAtom } from "./store/atoms/toggleatom"
import { useState, useEffect } from 'react'

function App() {
  return (
    <RecoilRoot>
      <Main></Main>
    </RecoilRoot>
  )

}

function Main() {
  let Logic = useRecoilValue(toggleAtom);
  const setLogic = useSetRecoilState(toggleAtom)
  const [isBelowThreshold, setIsBelowThreshold] = useState(window.innerWidth < 768);



  const data = [
    { orderId: "#281209", status: "Successful", transactionId: "131634495747", refundDate: "Today, 08:45 PM", orderAmount: "₹1,125.00" },
    { orderId: "#281208", status: "Processing", transactionId: "131634495747", refundDate: "Yesterday, 8:45 PM", orderAmount: "₹1,125.00" },
    { orderId: "#281207", status: "Failed", transactionId: "131634495747", refundDate: "12 Jul 2023, 3:00 PM", orderAmount: "₹1,125.00" },
    { orderId: "#281206", status: "Successful", transactionId: "131634495747", refundDate: "12 Jul 2023, 3:00 PM", orderAmount: "₹1,125.00" },
    { orderId: "#281205", status: "Processing", transactionId: "131634495747", refundDate: "12 Jul 2023, 3:00 PM", orderAmount: "₹1,125.00" },
    { orderId: "#281204", status: "Failed", transactionId: "131634495747", refundDate: "12 Jul 2023, 1:00 PM", orderAmount: "₹1,125.00" },
    { orderId: "#281203", status: "Successful", transactionId: "131634495747", refundDate: "11 Jul 2023, 3:00 PM", orderAmount: "₹1,125.00" },
    { orderId: "#281202", status: "Successful", transactionId: "131634495747", refundDate: "11 Jul 2023, 3:00 PM", orderAmount: "₹1,125.00" },
    { orderId: "#281201", status: "Failed", transactionId: "131634495747", refundDate: "11 Jul 2023, 3:00 PM", orderAmount: "₹1,125.00" },
    { orderId: "#281200", status: "Successful", transactionId: "131634495747", refundDate: "10 Jul 2023, 3:00 PM", orderAmount: "₹1,125.00" },
    { orderId: "#281199", status: "Successful", transactionId: "131634495747", refundDate: "10 Jul 2023, 3:00 PM", orderAmount: "₹1,125.00" },
    { orderId: "#281198", status: "Failed", transactionId: "131634495747", refundDate: "10 Jul 2023, 3:00 PM", orderAmount: "₹1,125.00" },
    { orderId: "#281197", status: "Successful", transactionId: "131634495747", refundDate: "9 Jul 2023, 3:00 PM", orderAmount: "₹1,125.00" },
    { orderId: "#281196", status: "Successful", transactionId: "131634495747", refundDate: "9 Jul 2023, 3:00 PM", orderAmount: "₹1,125.00" },
    { orderId: "#281195", status: "Failed", transactionId: "131634495747", refundDate: "9 Jul 2023, 3:00 PM", orderAmount: "₹1,125.00" },
    { orderId: "#281194", status: "Successful", transactionId: "131634495747", refundDate: "8 Jul 2023, 3:00 PM", orderAmount: "₹1,125.00" },
    { orderId: "#281193", status: "Successful", transactionId: "131634495747", refundDate: "8 Jul 2023, 3:00 PM", orderAmount: "₹1,125.00" },
    { orderId: "#281192", status: "Failed", transactionId: "131634495747", refundDate: "8 Jul 2023, 3:00 PM", orderAmount: "₹1,125.00" },
    { orderId: "#281191", status: "Successful", transactionId: "131634495747", refundDate: "7 Jul 2023, 3:00 PM", orderAmount: "₹1,125.00" },
    { orderId: "#281190", status: "Successful", transactionId: "131634495747", refundDate: "7 Jul 2023, 3:00 PM", orderAmount: "₹1,125.00" }]

  useEffect(() => {

    function handleResize() {
      const currentIsBelowThreshold = window.innerWidth < 768;
      if (currentIsBelowThreshold !== isBelowThreshold) {
        setIsBelowThreshold(currentIsBelowThreshold);
        if (!isBelowThreshold) {
          setLogic(false);
        }
      }
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isBelowThreshold]);


  return (
    <div className={`flex min-h-screen`}>
      <div className="fixed">
        <Dashboard />
      </div>
      <div className={`relative flex-1 h-screen ${Logic ? 'ml-40 lg:opacity-100 lg:pointer-events-auto md:pointer-events-none pointer-events-none' : 'lg:ml-40 opacity-100'}`}>
        {Logic && (
          <div className={`fixed h-screen inset-0 bg-black bg-opacity-20 flex justify-center items-center z-10 lg:hidden `}>
          </div>
        )}
        <Navbar />
        <SecondBar />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <NextPayoutCard amount={"2,312.23"} orders={"23"} nextPayoutDate={"Today, 04:00 PM"} />
          <RevenueCard amount={"92,312.20"} orders={"13"} />
          <AmountProcessedCard amount={"23,92,312.19"} />
        </div>
        <TransactionsCount payouts={"22"} refunds={"6"} />
        <TransactionHistorySearch />
        <TransactionHistoryTable data={data} />
        <Footer />
      </div>

    </div>)
}

export default App
