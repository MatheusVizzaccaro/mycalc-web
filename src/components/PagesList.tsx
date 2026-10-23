import React from "react";

export interface Page {
    name: string;
    address: string;
}

interface PagesListProps {
    pages: Page[];
}

export function PagesList({pages}:PagesListProps) {
    return(
        <div className="flex flex-row gap-5 justify-center items-center">
            {pages.map((page, idx) => (
                <React.Fragment key={page.address}>
                    <a
                        onClick={() => redirect(page.address)}
                        className="cursor-pointer"
                    >
                        {page.name}
                    </a>

                    {idx != 1 && (
                        <div className="h-5 border-l border-1 border-gray-500"></div>
                    )}
                </React.Fragment>
            ))}
        </div>
    )
}

function redirect(path:string) {
    return window.location.href = path;
}

