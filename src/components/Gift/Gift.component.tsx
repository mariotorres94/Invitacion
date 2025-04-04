import { FC } from "react"
import { GiftSeparate } from "../../assets/images"
import { Button } from "../Button/Button.component";
import { EModal } from "../../assets/shared/enums/modal.enum";
import { GiftIcon } from "../../assets/icons";
import { motion } from "framer-motion";

interface GiftProps {
    title: string;
    subTitle?: string;
    showModal: (modal: string, data?: unknown) => void;
}

export const Gift: FC<GiftProps> = ({ title, showModal }) => {
    const handleShowModal = () => {
        if (showModal) {
            showModal(EModal.GIFT);
        }
    };
    return (
        <div className="text-center sm:mt-3 md:flex md:flex-col md:gap-4">
            <div className="w-[70%] sm:w-[50%] m-auto mb-6">
                <img src={GiftSeparate} alt="" />
            </div>
            <div className="flex flex-col gap-4 items-center px-4 mx-5 md:mt-10">
                <h2 className="font-styleScript text-3xl sm:text-4xl md:text-5xl text-[#456EA1]">{title}</h2>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center mx-24">
                <motion.div
                    className="pt-4 mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: 1,
                        y: [0, -10, 0],
                        scale: [1, 1.05, 1]
                    }}
                    transition={{
                        opacity: { duration: 1 },
                        y: { duration: 3, repeat: Infinity },
                        scale: { duration: 2, repeat: Infinity }
                    }}
                >
                    <img src={GiftIcon} alt="Regalo" width={60} height={60} />
                </motion.div>
                <div className="w-36 h-10 flex justify-center items-center md:mt-4">
                    <Button text="Ver más" color="#193C69" onclick={handleShowModal} />
                </div>
            </div>
        </div>
    )
}