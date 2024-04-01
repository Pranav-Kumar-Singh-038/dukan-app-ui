export function SecondBar() {
    return (<div className="flex justify-between p-3">

        <div className="text-lg font-medium">Overview</div>

        <div className="flex w-24 justify-around items-center border">
            <div className=" text-xs">This Month</div>
            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </div>
    </div>)

}