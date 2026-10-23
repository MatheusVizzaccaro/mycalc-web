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
            {pages.map((page) => (
                <div>
                    {page.name}
                </div>
            ))}
        </div>
    )
}
