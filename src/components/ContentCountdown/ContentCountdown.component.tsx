import { FC, ReactNode } from "react";

interface ContentCountdownProps {
    children: ReactNode;
    position?: string;
    width?: string;
    image?: string;
    contentImage?: string;
    className?: string;
}

export const ContentCountdown: FC<ContentCountdownProps> = ({ position, image, width, className, contentImage, children }) => {
    return (
        <div className={`${className}`}>
            <div className="relative top-4 md:-top-40 w-full text-center px-10 pt-14 pb-10 text bg-cover bg-center">
                <div className="absolute flex justify-center items-center w-full">
                    <div className={`absolute -top-32 -left-20 sm:-top-14 sm:-left-14 flex justify-center`}>
                        <img src={contentImage} alt="Image" className="w-full md:w-[80%]" />
                    </div>
                    <div className={`absolute ${position}`}>
                        <img src={image} alt="Image" className={width} />
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    {children}
                </div>
            </div>
        </div>
    );
}