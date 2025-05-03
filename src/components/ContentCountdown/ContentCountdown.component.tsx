import { FC, ReactNode } from "react";
import { motion } from 'framer-motion';

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
            <motion.div
                initial={{ y: -200, opacity: 0 }}
                viewport={{ once: false }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative top-4 md:-top-64 lg:-top-40 w-full text-center px-10 pt-14 pb-10 bg-cover bg-center"
            >
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
            </motion.div>
        </div>
    );
}