import { FC } from "react"
import { TimeLine } from "../TimeLine/TimeLine.component";

interface ProgramationProps {
    id?: string;
    title: string;
    subtitle: string;
    imgElement?: string[];
    imgElementFooter?: string[];
    endElement?: string;
    showModal: (modal: string, data?: unknown) => void;
}

export const Programation: FC<ProgramationProps> = ({ id, title, subtitle, imgElement, imgElementFooter, endElement, showModal }) => {
    return (
        <div id={id} className="w-full text-center md:mt-10">
            <div className="flex flex-col gap-4 items-center px-4">
                <h2 className="font-styleScript text-3xl sm:text-4xl md:text-5xl text-[#456EA1]">{title}</h2>
                <p className="md:w-[47%] font-cormorant-upright text-base sm:text-xl sm:px-20 md:text-2xl text-[#809FC3]">{subtitle}</p>
            </div>
            <div className="flex flex-row-reverse justify-between">
                {
                    imgElement?.map((img, index) => (
                        <img src={img} alt="Programation" key={index} className="w-24 sm:w-32 md:w-48"/>
                ))}
            </div>
            <TimeLine showModal={showModal} />
            <div className="flex flex-row-reverse justify-between">
                {
                    imgElementFooter?.map((img, index) => (
                        <img src={img} alt="Programation" key={index} className="w-24 sm:w-32 md:w-48"/>
                ))}
            </div>
            <div className="flex justify-center items-center w-full mt-10 mb-14 sm:mt-0 sm:mb-0">
                <img src={endElement} alt="End" className="w-[75%] sm:w-[45%] md:w-[30%]"/>
            </div>
        </div>
    )
}