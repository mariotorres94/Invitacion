import { FC } from "react";
import { BgRecortePaper } from "../../assets/images";

interface GuestProps {
    title: string;
    nameFamily: string;
    subtitle: string;
    imgElement?: string;
}

export const Guest: FC<GuestProps> = ({ title, nameFamily, subtitle }) => {
    return (
        <div className="flex flex-col gap-4 items-center text-center mt-48 sm:mt-72 text-[#809FC3]">
            <h2 className="w-[60%] text-lg sm:text-xl md:text-2xl font-josefin-slab-regular">{title}</h2>
            <div className="w-screen relative overflow-hidden -mx-4">
                <img src={BgRecortePaper} alt="Paper" className="w-full h-auto object-cover" />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <h1 className="relative z-10 text-3xl md:text-7xl font-tangerine-bold font-extrabold">
                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-[#809fc33e]"></span>
                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-60 h-0.5 bg-[#809fc3c4]"></span>
                        {nameFamily}
                        <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-60 h-0.5 bg-[#809fc3c4]"></span>
                        <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-[#809fc33e]"></span>
                    </h1>
                </div>
            </div>
            <p className="w-[70%] text-lg sm:text-xl md:text-2xl font-cormorant mb-6 sm:px-20 leading-8">{subtitle}</p>
        </div>
    );
};