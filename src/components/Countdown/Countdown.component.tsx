import { FC, useMemo } from "react";
import { ContentCountdownDesktop, ContentCountdownFlower } from "../../assets/images";
import Countdown from "react-countdown";
import { ContentCountdown } from "../ContentCountdown/ContentCountdown.component";
import { formatTwoDigits } from "../../assets/utils/countdown.utils";
import { HeartMain } from "../../assets/icons";
import { motion } from "framer-motion";
import { isSameDay } from "date-fns";

export const ContainerCountdown: FC = () => {
    const dateMarried = useMemo(() => new Date("2025-07-26T00:00:00"), []);
    const renderer = ({ days, hours, minutes, seconds }: { days: number; hours: number; minutes: number; seconds: number }) => {
        return (
            <div className="absolute top-8 right-1 sm:top-52 md:top-40 lg:top-32 lg:-right-4 inset-x-0 flex justify-center text-center">
                <div className="lg:flex lg:flex-col lg:gap-4 lg:justify-center lg:items-center">
                    <h3 className="text-5xl font-styleScript text-[#456EA1] md:text-7xl lg:text-8xl">Falta</h3>
                    <div className="flex justify-center items-center mt-4">
                        <div className="flex flex-col border-r-2 border-[#AEDCEB] px-2">
                            <div className="font-strait font-bold text-xl sm:text-4xl md:text-5xl lg:text-6xl text-[#002E5A] drop-shadow-xl">
                                {formatTwoDigits(days)}
                            </div>
                            <div className="font-poppins text-[#818B94] lg:text-2xl">DÍAS</div>
                        </div>
                        <div className="flex flex-col border-r-2 border-[#AEDCEB] px-2">
                            <div className="font-strait font-bold text-xl sm:text-4xl md:text-5xl lg:text-6xl text-[#002E5A] drop-shadow-xl">
                                {formatTwoDigits(hours)}
                            </div>
                            <div className="font-poppins text-[#818B94] lg:text-2xl">HRS</div>
                        </div>
                        <div className="flex flex-col border-r-2 border-[#AEDCEB] px-2">
                            <div className="font-strait font-bold text-xl sm:text-4xl md:text-5xl lg:text-6xl text-[#002E5A] drop-shadow-xl">
                                {formatTwoDigits(minutes)}
                            </div>
                            <div className="font-poppins text-[#818B94] lg:text-2xl">MIN</div>
                        </div>
                        <div className="flex flex-col px-2">
                            <div className="font-strait font-bold text-xl sm:text-4xl md:text-5xl lg:text-6xl text-[#002E5A] drop-shadow-xl">
                                {formatTwoDigits(seconds)}
                            </div>
                            <div className="font-poppins text-[#818B94] lg:text-2xl">SEG</div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-4">
                        <div className="flex justify-center items-center mt-4">
                            <motion.img
                                src={HeartMain}
                                alt="Heart"
                                className="w-[35px] lg:w-[50px]"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [1, 0.8, 1],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    const rendererTheDayHasArrived = () => {
        return (
            <div className="absolute top-12 right-1 sm:top-52 md:top-40 lg:top-52 lg:-right-4 inset-x-0 flex justify-center text-center">
                <div className="lg:w-96 lg:flex lg:flex-col lg:gap-4 lg:justify-center lg:items-center">
                    <h3 className="text-5xl font-styleScript text-[#456EA1] md:text-7xl">¡El gran día ha llegado!</h3>
                    <div className="flex justify-center items-center mt-4">
                        <motion.img
                            src={HeartMain}
                            alt="Heart"
                            className="w-[35px] lg:w-[50px]"
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [1, 0.8, 1],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
    return (
        <ContentCountdown
            image={ContentCountdownFlower}
            position="-top-40 -left-24 sm:-top-14 sm:-left-14 md:-top-28 md:-left-14"
            width="w-52 md:w-[60%]"
            className="w-[70%] md:w-[40%]"
            contentImage={ContentCountdownDesktop}
        >
            <Countdown date={dateMarried} renderer={isSameDay(new Date(), dateMarried) ? rendererTheDayHasArrived : renderer} />
        </ContentCountdown>
    )
}