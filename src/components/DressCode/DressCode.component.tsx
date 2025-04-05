import { FC } from "react"
import { FlowerDresscode, FlowerSeparate } from "../../assets/images";
import { Card } from "../Card/Card.component";
import { HeaderDressCode } from "./components/HeaderDressCode.component";
import { MainDressCode } from "./components/MainDressCode.component";
import { FooterDressCode } from "./components/FooterDressCode.component";
import { DressCodeMan, DressCodeWomen } from "../../assets/icons";
import { motion } from "framer-motion";

interface DressCodeProps {
    id?: string;
    title: string;
    subTitle: string;
    showModal: (modal: string, data?: unknown) => void;
}

export const DressCode: FC<DressCodeProps> = ({ id, title, subTitle, showModal }) => {
    return (
        <Card
            image={FlowerDresscode}
            position="-top-10 -left-6 sm:-top-10 sm:-top-14 sm:-left-14 lg:-top-24 lg:-left-24"
            width="w-40 sm:w-60 lg:w-96"
            className="sm:w-[70%] md:w-[50%] shadow-lg border rounded-lg md:pb-6"
        >
            <div id={id} className="flex flex-col gap-4 justify-center items-center text-center mx-10">
                <HeaderDressCode
                    title={title}
                    subtitle={subTitle}
                />
                <motion.div
                    className="sm:w-[70%] md:w-[60%]"
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{
                        type: "spring",
                        damping: 10,
                        stiffness: 100,
                        delay: 0.2
                    }}
                >
                    <img
                        src={FlowerSeparate}
                        alt="Gift"
                        className="w-full"
                    />
                </motion.div>
                <MainDressCode
                    title="Dress Code"
                    subTitle="Elegante"
                    gifts={[DressCodeWomen, DressCodeMan]}
                    nota="Una orientación para tu vestuario"
                    showModal={showModal}
                />
                <motion.div
                    className="sm:w-[70%] md:w-[60%]"
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{
                        type: "spring",
                        damping: 10,
                        stiffness: 100,
                        delay: 0.2
                    }}
                >
                    <img
                        src={FlowerSeparate}
                        alt="Gift"
                        className="w-full"
                    />
                </motion.div>
                <FooterDressCode
                    title="Nuestra amor es brillante y lleno de color, y queremos que nuestra boda refleje eso."
                    subTitle="Por favor, dejemos el negro para otra ocasión"
                />
            </div>
        </Card>
    )
}