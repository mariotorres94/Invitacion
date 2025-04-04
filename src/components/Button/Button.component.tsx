import { FC } from "react";
import { Location } from "../../assets/images";

interface ButtonProps {
    id?: string;
    text: string;
    color?: string;
    icon?: boolean;
    href?: string;
    onclick?: () => void;
    target?: "_blank" | "_self";
}

export const Button: FC<ButtonProps> = ({ id, text, color, icon, href, onclick, target="_self" }) => {
    const handleClick = () => {
        if (href) {
            if (target === "_blank") {
                window.open(href, "_blank");
            } else {
                window.location.href = href;
            }
        } else if (onclick) {
            onclick();
        }
    };
    return (
        <button id={id} onClick={handleClick} style={{ backgroundColor: color }} className={`w-full h-full flex gap-2 items-center justify-center py-1 rounded-md text-white font-poppins text-[12px] md:text-lg px-4`}>{icon && (<><img src={Location} alt="Location" className="w-4 md:w-6"/></>)} {text}</button>
    )
}