import { FC } from "react";

interface PlaceProps {
    title: string;
    place: string;
    view: boolean;
}

export const Place: FC<PlaceProps> = ({ title, place, view }) => {
    return (
        <div className="w-[35%] flex flex-col gap-4 py-5">
            <h3 className="font-josefin-sans-regular text-xl sm:text-2xl font-bold text-[#809FC3]">{title}</h3>
            <div className="flex flex-col gap-4 text-[#809FC3] sm:text-lg font-josefin-slab-regular">
                {
                    view && (
                        <span className="font-bold">Lugar</span>
                    )
                }
                <p>{place}</p>
            </div>
        </div>
    )
}