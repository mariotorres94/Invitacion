import { FC } from "react";

interface IconsProps {
    icon1: string;
    icon2?: string;
    isLast?: boolean;
}

export const Icons: FC<IconsProps> = ({ icon1, icon2, isLast }) => {
    return (
        <div className="w-[20%] flex flex-col gap-4 justify-center items-center">
            <div className="mx-auto">
                <img src={icon1} alt="Church" className="w-16 sm:w-32 sm:h-36"/>
            </div>
            <div className="mx-auto">
                {
                    icon2 && (
                        <img src={icon2} alt="Heart In Time Line" className="w-8 sm:w-10"/>
                    )
                }
            </div>
            {!isLast && (
                <div className="w-0.5 h-[70px] sm:h-[150px] bg-[#809FC3] mx-auto drop-shadow-md"></div>
            )}
        </div>
    )
}