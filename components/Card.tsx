interface CardProps {
    children: React.ReactNode;
}

export default function Card({children}: { children: React.ReactNode }) {
    return <div className="rounded-lg shadow-md grow my-6 overflow-hidden flex flex-col">{children}</div>
}

export function CardHeader({ children }: CardProps) {
    return (
        <div className="bg-main text-[#ffffff] py-6 px-12 md:px-24">
            {children}
        </div>
    );
}

export function CardBody({ children }: CardProps) {
    return (
        <div className="bg-[#f4f4f4] py-6 px-12 md:px-24 grow">
            {children}
        </div>
    );
}