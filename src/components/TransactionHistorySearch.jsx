export function TransactionHistorySearch() {
    return (<div className="flex justify-between  p-3">

        <div className="flex bg-white border w-72 rounded justify-around items-center">
            <svg className="stroke-mySearchgrey-500 w-4 h-6  " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" >
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input className=" focus:outline-none bg-white text-xs  w-56" placeholder="Order ID or Transaction ID"></input>
        </div>

        <div className="flex justify-around  w-32">
            <div className="flex rounded w-16 justify-around items-center border">
                <div className=" text-xs">Sort</div>
                <div className="flex items-center">
                    <svg className="w-3 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                    </svg>
                </div>
            </div>

            <div className="flex rounded w-8 justify-around items-center border">
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>

                </div>
            </div>
        </div>
    </div>)

}