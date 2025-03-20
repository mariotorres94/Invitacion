import { FC } from "react";
import Heart from "../../assets/images/heart.svg";
import { useScreenSize } from "../../assets/hooks/useScreenSize.hook";

interface HeaderProps {
    bgImage: string;
    bgFlower?: string[];
    title: string;
    subTitle: string;
    date: string;
    typeScreen: string;
    versicule: string;
}

export const Header: FC<HeaderProps> = ({ bgImage, title, subTitle, date, typeScreen, versicule }) => {
    const titleParts = title.split("&");
    const screenSize = useScreenSize();
    const sizeImage = screenSize === "mobile" ? '75vh' : '100vh';

    return (
        <header
            className="w-full h-screen flex flex-col justify-center bg-cover bg-center text-center text-white lg:pb-72"
            style={{
                backgroundImage: `url(${bgImage})`,
                height: `${sizeImage}`,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                backgroundBlendMode: 'multiply',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute top-10 w-full flex flex-col justify-center items-center">
                {(typeScreen === "mobile" || typeScreen === "tablet") && (
                    <div>
                        <div className="flex flex-col items-center">
                            <h2 className="w-[80%] font-cormorant sm:text-lg lg:text-2xl leading-6 text-center">
                                {subTitle}
                            </h2>
                        </div>
                        <span className="font-bold text-sm mt-4">{versicule}</span>
                    </div>
                )}
            </div>
            <div className="relative top-10 md:top-20 flex flex-col gap-6 items-center">
                <div className="text-center">
                    <span className="relative inline-block">
                        <span className="absolute left-0 top-1/2 w-[75px] lg:w-[200px] h-px bg-white transform -translate-x-full"></span>
                        <span className="mx-4 font-bold sm:text-xl lg:text-3xl">{date}</span>
                        <span className="absolute right-0 top-1/2 w-[75px] lg:w-[200px] h-px bg-white transform translate-x-full"></span>
                    </span>
                </div>
                <h1 className="flex flex-col md:flex-row items-center justify-center font-extrabold gap-6 font-tangerine text-6xl sm:text-7xl lg:text-9xl">
                    {titleParts[0]}
                    <div className="relative inline-block bg-[#88AAC8] w-10 h-10 md:w-12 md:h-12 rounded-full mx-auto">
                        <span className="absolute right-2.5 top-1.5 font-petit-formal text-2xl lg:text-4xl font-black">&</span>
                    </div>
                    {titleParts[1]}
                </h1>
                <div className="relative">
                    <img src={Heart} alt="Heart" className="mx-auto relative z-10 w-7 h-7 md:w-14 md:h-14" />
                    <span className="absolute left-1/2 top-1/2 w-[290px] lg:w-[640px] h-px bg-white transform -translate-x-1/2 translate-y-1/2"></span>
                </div>
            </div>
            {typeScreen === "desktop" && (
                <div className="md:flex md:flex-col md:justify-center md:items-center mt-20">
                    <h2 className="w-[40%] font-cormorant md:pt-10 lg:text-2xl">{subTitle}</h2>
                    <span className="font-bold text-sm mt-4">{versicule}</span>
                </div>
            )}
        </header>
    );
};