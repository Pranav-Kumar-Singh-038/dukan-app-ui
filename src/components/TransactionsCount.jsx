export function TransactionsCount({ payouts, refunds }) {
    return (
        <div>
            <div className="ml-5 mt-2 font-medium">Transactions | This Month</div>
            <div className="flex m-4 text-xs ">
                <div className="flex border m-2 rounded-xl p-1 w-20 justify-center bg-myLightgrey-500 text-Mygrey-500">
                    <div className="mr-1">Payouts</div>
                    <div>({payouts})</div>
                </div>

                <div className="flex border m-2 rounded-xl p-1 w-20 justify-center bg-myBlue-500 text-white">
                    <div className="mr-1">Refunds</div>
                    <div>({refunds})</div>
                </div>
            </div>
        </div>
    )
}