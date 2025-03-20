import { FC, useMemo } from "react";
import { ContentCountdownDesktop, HeartMain, ContentCountdownFlower } from "../../assets/images";
import Countdown from "react-countdown";
import { ContentCountdown } from "../ContentCountdown/ContentCountdown.component";
import { formatTwoDigits } from "../../assets/utils/countdown.utils";

export const ContainerCountdown: FC = () => {
    const dateMarried = useMemo(() => new Date("2025-07-26T12:00:00"), []);
    const renderer = ({ days, hours, minutes, seconds }: { days: number; hours: number; minutes: number; seconds: number }) => {
        return (
            <div className="absolute top-8 right-1 sm:top-52 md:top-40 inset-x-0 flex justify-center text-center">
                <div>
                    <h3 className="text-5xl font-styleScript text-[#456EA1] md:text-7xl">Falta</h3>
                    <div className="flex justify-center items-center mt-4">
                        <div className="flex flex-col border-r-2 border-[#AEDCEB] px-2">
                            <div className="font-strait font-bold text-xl sm:text-4xl md:text-5xl text-[#002E5A] drop-shadow-xl">
                                {formatTwoDigits(days)}
                            </div>
                            <div className="font-poppins text-[#818B94]">DÍAS</div>
                        </div>
                        <div className="flex flex-col border-r-2 border-[#AEDCEB] px-2">
                            <div className="font-strait font-bold text-xl sm:text-4xl md:text-5xl text-[#002E5A] drop-shadow-xl">
                                {formatTwoDigits(hours)}
                            </div>
                            <div className="font-poppins text-[#818B94]">HRS</div>
                        </div>
                        <div className="flex flex-col border-r-2 border-[#AEDCEB] px-2">
                            <div className="font-strait font-bold text-xl sm:text-4xl md:text-5xl text-[#002E5A] drop-shadow-xl">
                                {formatTwoDigits(minutes)}
                            </div>
                            <div className="font-poppins text-[#818B94]">MIN</div>
                        </div>
                        <div className="flex flex-col px-2">
                            <div className="font-strait font-bold text-xl sm:text-4xl md:text-5xl text-[#002E5A] drop-shadow-xl">
                                {formatTwoDigits(seconds)}
                            </div>
                            <div className="font-poppins text-[#818B94]">SEG</div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-4">
                        <img src={HeartMain} alt="Heart" className="w-[30px]" />
                    </div>
                </div>
            </div>
        );
    };
    return (
        <ContentCountdown
            image={ContentCountdownFlower}
            position="-top-40 -left-24 sm:-top-14 sm:-left-14 md:-top-28 md:-left-14"
            width="w-52 md:w-[60%]"
            className="w-[70%] md:w-[40%]"
            contentImage={ContentCountdownDesktop}
        >
            <Countdown date={dateMarried} renderer={renderer}/>
        </ContentCountdown>
    )
}