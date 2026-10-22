import { Logo } from "./Logo"

export function Navbar() {
    return(
        <nav className="flex flex-row gap-3 p-3 bg-gray-300 w-full h-[64px]">
            <Logo></Logo>
        </nav>
    )
}