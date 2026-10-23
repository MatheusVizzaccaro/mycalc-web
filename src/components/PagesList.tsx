import React from "react";

export interface Page {
    name: string;
    address: string;
    selected: boolean;
}

interface PagesListProps {
    pages: Page[];
}

export function PagesList({pages}:PagesListProps) {
    return(
        <div className="flex flex-row gap-5 justify-center items-center">
            {pages.map((page, idx) => (
                <React.Fragment key={page.address}>
                    <div className="flex flex-col">
                        <a
                            onClick={() => redirect(page.address)}
                            className="cursor-pointer"
                        >
                            {page.name}
                        </a>

                        {page.selected == true && (
                            <div className="bg-gradient-to-r from-[#3B6FF5] to-[#5BD6B0] h-[3px] w-full rounded-lg"></div>
                        )}
                    </div>

                    {idx != pages.length - 1 && (
                        <div className="h-5 border-l border-1 border-black-500 rounded-lg"></div>
                    )}
                </React.Fragment>
            ))}
        </div>
    )
}

function redirect(path:string) {
    return window.location.href = path;
}

