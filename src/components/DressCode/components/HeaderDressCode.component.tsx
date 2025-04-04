import { FC } from "react";

interface HeaderDressCodeProps {
    title: string;
    subtitle: string;
}

export const HeaderDressCode:FC<HeaderDressCodeProps> = ({ title, subtitle }) => {
    return (
        <div className="md:w-[80%] text-center flex flex-col gap-4 mx-auto">
            <h2 className="font-styleScript text-3xl sm:text-4xl md:text-5xl">{title}</h2>
            <p className="font-cormorant-upright text-base sm:text-lg sm:px-24 md:text-2xl">{subtitle}</p>
        </div>
    )
}