import { FC } from "react";
import { FooterBg, FooterBgDesktop } from "../../assets/images";
import { useScreenSize } from '../../assets/hooks/useScreenSize.hook';

interface FooterProps {
    logo: string;
    links: string[];
    mensaje: string;
    wedding: string;
}

export const Footer:FC<FooterProps> = ({ logo, links, mensaje, wedding }) => {
    const titleParts = logo.split("&");
    const screenSize = useScreenSize();
    const bgImage = screenSize === "mobile" ? FooterBg : FooterBgDesktop;
    return (
        <div
            className="relative top-14 -mt-10 flex flex-col gap-4 items-center justify-center w-full bg-cover bg-center pt-28 h-[55vh] sm:h-[60vh] sm:pt-20 sm:px-5 md:px-16"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="w-full flex flex-col-reverse gap-4 sm:flex-row-reverse justify-between items-center mb-5">
                <div className="flex justify-center items-center text-right px-4">
                    <div className="flex flex-col gap-4 text-[#456EA1] text-xs text-center sm:text-right sm:text-base md:text-lg">
                        {
                            links.map((link, index) => (
                                <a href="" key={index} className="underline">{link}</a>
                            ))
                        }
                        <p className="font-cormorant-upright no-underline text-sm sm:text-base">{wedding}</p>
                    </div>
                </div>
                <h1 className="flex font-extrabold gap-4 md:gap-8 font-tangerine text-4xl sm:text-5xl md:text-7xl text-[#456EA1] mb-2 md:mb-0">
                    {titleParts[0]}
                    <div className="relative top-1 left-0.5 md:top-4 inline-block bg-[#88AAC8] w-6 h-6 md:w-9 md:h-9 rounded-full mx-auto">
                        <span className="absolute right-1.5 top-0.5 md:right-2 font-petit-formal text-sm md:text-2xl font-black text-[#FFFFFF]">&</span>
                    </div>
                    {titleParts[1]}
                </h1>
            </div>
            <p className="text-xs sm:text-base mb-5">{mensaje}</p>
        </div>
    )
}