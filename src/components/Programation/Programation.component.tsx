import { FC } from "react"
import { TimeLine } from "../TimeLine/TimeLine.component";
import { motion } from "framer-motion";
import { useScreenSize } from "../../assets/hooks/useScreenSize.hook";

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
    const screenSize = useScreenSize();
    return (
        <div id={id} className="w-full text-center md:mt-10">
            <div className="flex flex-col gap-4 items-center px-4">
                <h2 className="font-styleScript text-3xl sm:text-4xl md:text-5xl text-[#456EA1]">{title}</h2>
                <p className="md:w-[47%] font-cormorant-upright text-base sm:text-xl sm:px-20 md:text-2xl text-[#809FC3]">{subtitle}</p>
            </div>
            <div className="flex flex-row-reverse justify-between">
                {imgElement?.map((img, index) => (
                    <motion.img
                        src={img}
                        alt="Imagen animada"
                        key={index}
                        className="w-24 sm:w-32 md:w-56"
                        initial={{
                            x: index % 2 === 0 ? (screenSize === 'mobile' ? 50 : 100) : (screenSize === 'mobile' ? -50 : -100),
                            opacity: 0,
                            scale: 0.8,
                        }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                            scale: 1,
                        }}
                        viewport={{
                            once: false,
                            margin: screenSize === 'mobile' ? "0px 0px -50px 0px" : "0px 0px -100px 0px",
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                            delay: index * 0.2,
                        }}
                    />
                ))}
            </div>
            <TimeLine showModal={showModal} />
            <div className="flex flex-row-reverse justify-between">
                {
                    imgElementFooter?.map((img, index) => (
                        <motion.img
                            src={img}
                            alt="Imagen animada"
                            key={index}
                            className="w-24 sm:w-32 md:w-56"
                            initial={{
                                x: index % 2 === 0 ? (screenSize === 'mobile' ? 50 : 100) : (screenSize === 'mobile' ? -50 : -100),
                                opacity: 0,
                                scale: 0.8,
                            }}
                            whileInView={{
                                x: 0,
                                opacity: 1,
                                scale: 1,
                            }}
                            viewport={{
                                once: false,
                                margin: screenSize === 'mobile' ? "0px 0px -50px 0px" : "0px 0px -100px 0px",
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 15,
                                delay: index * 0.2,
                            }}
                        />
                    ))}
            </div>
            <motion.div
                className="flex justify-center items-center w-full mt-10 mb-14 sm:mt-0 sm:mb-0"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                    delay: 0.2
                }}
            >
                <img
                    src={endElement}
                    alt="End"
                    className="w-[75%] sm:w-[45%] md:w-[30%]"
                />
            </motion.div>
        </div>
    )
}