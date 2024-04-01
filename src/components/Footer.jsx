export function Footer() {
    return (
        <div className="text-gray-400 text-sm flex flex-col h-24 justify-center items-center">
            <div className="flex">
                <div>----- Made By</div >
                <a href="google.com"><div className="text-blue-600">: Pranav Kumar Singh</div></a>
                <div>, inspired by</div>
                <a href="google.com">
                    <div className="text-blue-600">- Dukaan App UI</div>
                </a>
                <div>-----</div>
            </div>
            <a href="google.com" className="underline">
                <div>Get the source code</div>
            </a>
        </div >
    )
}