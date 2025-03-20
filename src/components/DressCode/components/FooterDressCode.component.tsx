import { FC } from "react"

interface FooterDressCodeProps {
    title: string;
    subTitle: string;
}


export const FooterDressCode:FC<FooterDressCodeProps> = ({ title,subTitle }) => {
    return (
        <div className="w-full text-[#809FC3] sm:mt-5 sm:text-lg sm:px-14 md:text-xl md:px-20">
            <p className="font-cormorant-upright">{title}</p>
            <span className="font-cormorant-upright font-bold">{subTitle}</span>
        </div>
    )
}