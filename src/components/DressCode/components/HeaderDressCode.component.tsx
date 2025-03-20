import { FC } from "react";

interface HeaderDressCodeProps {
    title: string;
    subtitle: string;
}

export const HeaderDressCode:FC<HeaderDressCodeProps> = ({ title, subtitle }) => {
    return (
        <div className="text-center flex flex-col gap-4">
            <h2 className="font-styleScript text-3xl sm:text-4xl md:text-5xl">{title}</h2>
            <p className="font-cormorant-upright text-base sm:text-lg sm:px-24 md:text-xl">{subtitle}</p>
        </div>
    )
}