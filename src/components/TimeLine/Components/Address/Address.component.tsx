import { FC } from "react";
import { Button } from "../../../Button/Button.component";

interface AddressProps {
    hour: string;
    address: string;
    textButton?: string;
    isLast?: boolean;
    view: boolean;
    href?: string;
    target?: "_blank" | "_self";
}

export const Address: FC<AddressProps> = ({ hour, address, textButton, isLast, view, href, target="_self" }) => {
    return (
        <div className="w-[40%] flex flex-col gap-4 py-4 sm:py-0">
            <h3 className="font-josefin-sans-regular text-xl sm:text-2xl md:text-3xl font-bold text-[#809FC3]">{hour}</h3>
            <div className="flex flex-col justify-center items-center py-auto gap-2 text-[#809FC3] sm:text-lg md:text-2xl font-josefin-slab-regular">
                {
                    view && (
                        <span className="font-bold">Dirección</span>
                    )
                }
                <p>{address}</p>
                {
                    view && (
                        <div className="w-36 h-10 flex justify-center items-center md:mt-4 md:w-52 md:h-14">
                            <Button text={textButton ?? ''} color="#456EA1" icon={view} href={href} target={target} />
                        </div>
                    )
                }
            </div>
            {!isLast && (
                <div className="w-0.5 h-[70px] bg-[#809FC3] mx-auto drop-shadow-md sm:hidden"></div>
            )}
        </div>
    )
}