import logo from "../assets/logo.svg"

export function Logo() {
    return (
        <div className="flex flex-row gap-1 justify-center items-center">
            <img src={logo} className="w-10 h-10"></img>
            <div>MyCalc</div>
        </div>
    )
}