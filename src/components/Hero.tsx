import logo from "../assets/logo.svg"

export function Hero() {
    return(
        <div className="flex flex-row gap-3 p-5 items-center drop-shadow-lg shadow-black/40">
            <img src={logo} className="w-150 h-150"></img>
            <h1 className="text-5xl font-bold">A maioria das calculadoras te dão apenas um resultado, o <span className="bg-gradient-to-r from-[#3B6FF5] to-[#5BD6B0] bg-clip-text text-transparent">MyCalc</span> vai além disso.</h1>
        </div>
    )
}