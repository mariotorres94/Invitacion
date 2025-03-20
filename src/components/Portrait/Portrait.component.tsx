import { FC, useEffect, useState } from "react";
import { FOTO104, FOTO173, FOTO237, FOTO241, FOTO246, FOTO310, FOTO329, FOTO359, FOTO365, FOTO80, FOTO88, HeartTimeLine } from "../../assets/images";

interface PortraitProps {
    title: string;
    subTitle: string;
    gif: string;
    imgs?: string[];
    endElement?: string;
}

const imgs = [
    { img: `${FOTO80}`, title: "FOTO80" },
    { img: `${FOTO88}`, title: "FOTO88" },
    { img: `${FOTO104}`, title: "FOTO104" },
    { img: `${FOTO173}`, title: "FOTO173" },
    { img: `${FOTO237}`, title: "FOTO237" },
    { img: `${FOTO241}`, title: "FOTO241" },
    { img: `${FOTO246}`, title: "FOTO246" },
    { img: `${FOTO310}`, title: "FOTO310" },
    { img: `${FOTO329}`, title: "FOTO329" },
    { img: `${FOTO359}`, title: "FOTO359" },
    { img: `${FOTO365}`, title: "FOTO365" },
];

export const Portrait: FC<PortraitProps> = ({ title, subTitle, gif }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imgs.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // const nextImage = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex + 1) % imgs.length);
    // };

    const goToImage = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <>
            <div className="w-full flex gap-6 flex-col mx-auto text-center items-center py-12 border bg-[#B0C4DE] mb-8 sm:mb-14">
                <div className="flex flex-col gap-4 px-10 justify-center items-center">
                    <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-styleScript">{title}</h2>
                    <p className="font-cormorant-upright text-white text-base sm:text-xl md:text-2xl">{subTitle}</p>
                    <img src={gif} alt="" className="w-24"/>
                </div>
                <div className="relative flex items-center justify-center w-full h-[400px] mt-6">
                    {imgs.map((img, index) => {
                        const isActive = index === currentIndex;
                        const isNext =
                            index === (currentIndex + 1) % imgs.length ||
                            (currentIndex === imgs.length - 1 && index === 0);
                        const isPrev =
                            index === (currentIndex - 1 + imgs.length) % imgs.length;

                        return (
                            <div
                                key={index}
                                className={`absolute transition-all duration-500 cursor-pointer ${
                                    isActive
                                        ? "w-[250px] h-[350px] z-20 scale-110"
                                        : "w-[200px] h-[300px] z-10 opacity-50"
                                } ${isPrev ? "-translate-x-40" : isNext ? "translate-x-40" : ""}`}
                                onClick={() => goToImage(index)}
                            >
                                <div
                                    className={`absolute -top-3 left-[108px] flex items-center justify-center z-30 transition-opacity duration-500 ${
                                        isActive ? "opacity-100" : "opacity-0"
                                    }`}
                                >
                                    <img src={HeartTimeLine} alt="" className="w-8 h-8"/>
                                </div>
                                <div className="relative w-full h-full bg-[#D9D9D9] border-4 border-white flex items-center justify-center rounded-lg shadow-lg overflow-hidden">
                                    <img
                                        src={img.img}
                                        alt={img.title}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                                <div
                                    className={`absolute -bottom-4 left-[108px] flex items-center justify-center z-30 transition-opacity duration-500 ${
                                        isActive ? "opacity-100" : "opacity-0"
                                    }`}
                                >
                                    <img src={HeartTimeLine} alt="" className="w-8 h-8"/>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="flex gap-2 mt-4">
                    {imgs.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full cursor-pointer ${
                                currentIndex === index ? "bg-[#E2F1F5]" : "bg-[#D9D9D9]"
                            }`}
                            onClick={() => goToImage(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </>
    );
};
