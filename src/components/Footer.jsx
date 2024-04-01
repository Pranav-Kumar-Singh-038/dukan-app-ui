export function Footer() {
    return (
        <div className="text-gray-400 text-sm flex flex-col h-24 justify-center items-center">
            <div className="flex">
                <div>----- Made By</div >
                <a href="https://www.linkedin.com/in/pranav-kumar-singh-1a365124a/"><div className="text-blue-600">: Pranav Kumar Singh</div></a>
                <div>, inspired by</div>
                <a href="https://dukan-app-ui.netlify.app/">
                    <div className="text-blue-600">- Dukaan App UI</div>
                </a>
                <div>-----</div>
            </div>
            <a href="https://github.com/Pranav-Kumar-Singh-038/dukan-app-ui" className="underline">
                <div>Get the source code</div>
            </a>
        </div >
    )
}
