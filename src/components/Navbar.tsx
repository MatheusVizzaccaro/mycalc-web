import { Logo } from "./Logo"
import { PagesList, type Page } from "./PagesList"

const pages:Page[] = [
    {name: "Login", address: "oláaaa"},
    {name: "Cadastro", address: "olá"}
];

export function Navbar() {
    return(
        <nav className="flex flex-row gap-3 justify-between p-3 bg-gray-300 w-full h-[64px]">
            <Logo></Logo>
            <PagesList pages={pages}></PagesList>
        </nav>
    );
}