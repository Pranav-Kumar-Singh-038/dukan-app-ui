import { AmountProcessedCard } from "./components/AmountProcessedCard"
import { RevenueCard } from "./components/RevenueCard"
import { NextPayoutCard } from "./components/NextPayoutCard"
import {Navbar} from "./components/Navbar"
import { SecondBar } from "./components/SecondBar"
import { TransactionsCount } from "./components/TransactionsCount"

function App() {

  return(
    <div className="grid grid-cols-1">
      {/* <RevenueCard amount={"92,312.20"} orders={"13"}></RevenueCard>
      <AmountProcessedCard amount={"23,92,312.19"}></AmountProcessedCard> */}
      {/* <NextPayoutCard amount={"2,312.23"} orders={"23"} nextPayoutDate={"Today, 04:00 PM"}></NextPayoutCard> */}
      {/* <Navbar></Navbar> */}
      {/* <SecondBar></SecondBar> */}
      {/* <TransactionsCount payouts={"22"} refunds={"6"}></TransactionsCount> */}
    </div>
  )
}

export default App
