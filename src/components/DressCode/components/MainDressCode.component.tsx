import { FC } from "react"
import { Button } from "../../Button/Button.component";
import { EModal } from "../../../assets/shared/enums/modal.enum";
import { motion } from "framer-motion";
import { container, floatAnimation, item } from "../../../assets/utils/programation.utils";
interface MainDressCodeProps {
    title: string;
    subTitle: string;
    gifts: string[];
    nota?: string;
    showModal?: (modal: string, data?: unknown) => void;
}

export const MainDressCode: FC<MainDressCodeProps> = ({ title, subTitle, gifts, nota, showModal }) => {
    const handleShowModal = () => {
        if (showModal) {
            if(EModal.DRESSCODE){
                showModal(EModal.DRESSCODE);
            }
        }
    };
    return (
        <div className="w-full flex flex-col justify-center items-center gap-4">
            <div className="md:flex md:flex-col md:gap-4">
                <h3 className="font-poppins sm:text-xl md:text-2xl">{title}</h3>
                <p className="font-josefin-sans-light sm:text-lg md:text-xl">{subTitle}</p>
            </div>
            <div className="w-full">
                <motion.div
                    className="w-full flex justify-evenly md:justify-center md:gap-16 items-center py-5 md:py-10"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    {gifts.map((gift, index) => (
                        <motion.div
                            key={index}
                            className="rounded-full shadow-lg w-20 sm:w-24 md:w-36 flex justify-center items-center p-1 bg-white/10"
                            variants={item}
                        >
                            <motion.img
                                src={gift}
                                alt="Gift"
                                className="w-full h-full object-contain p-2"
                                animate={floatAnimation}
                                style={{
                                    maxWidth: "85%",
                                    maxHeight: "85%",
                                }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <p className="w-[50%] font-poppins-light text-sm md:text-xl">{nota}</p>
            <div className="w-36 h-10 flex justify-center items-center md:w-44 md:h-12">
                <Button text="Ver detalle" color="#193C69" onclick={handleShowModal} />
            </div>
        </div>
    )
}