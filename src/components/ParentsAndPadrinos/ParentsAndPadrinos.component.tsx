import { FC } from "react"
import { Card } from "../Card/Card.component";

interface ParentsAndPadrinosProps {
    title?: string;
    titleParentsNovia?: string;
    titleParentsNovio?: string;
    titlePadrinos?: string;
    parentsNovia: string[];
    parentsNovio: string[];
    padrinos: string[];
    imgElement?: string;
    endElement?: string;
}

export const ParentsAndPadrinos:FC<ParentsAndPadrinosProps> = ({ title, titleParentsNovia, parentsNovia, titleParentsNovio, parentsNovio, imgElement, titlePadrinos, padrinos }) => {
    return (
        <Card
            image={imgElement}
            position="-top-12 md:-top-16"
            width="w-64 md:w-96"
            className="sm:w-[70%] md:w-[50%] md:mt-5 shadow-lg border rounded-lg"
        >
            <div className="md:flex md:flex-col md:gap-10 md:mt-10 px-8">
                <h2 className="text-xl font-cormorant-upright font-semibold md:text-2xl lg:text-3xl mb-10 md:mb-0">{title}</h2>
                <div className="flex flex-col sm:flex-row justify-around gap-10">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-cormorant-upright font-semibold md:text-2xl lg:text-3xl">{titleParentsNovia}</h3>
                        <div className="flex flex-col leading-8 gap-2 font-josefin-slab-regular">
                            {parentsNovia.map((parent, index) => (
                                <p className="md:text-xl lg:text-2xl" key={index}>{parent}</p>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 mb-10 md:mb-0">
                        <h3 className="text-xl font-cormorant-upright font-semibold md:text-2xl lg:text-3xl">{titleParentsNovio}</h3>
                        <div className="flex flex-col leading-8 gap-2 font-josefin-slab-regular">
                            {parentsNovio.map((parent, index) => (
                                <p className="md:text-xl lg:text-2xl" key={index}>{parent}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-cormorant-upright font-semibold md:text-2xl lg:text-3xl">{titlePadrinos}</h3>
                    <div className="flex flex-col leading-8 gap-2 font-josefin-slab-regular">
                        {padrinos.map((parent, index) => (
                            <p className="md:text-xl lg:text-2xl" key={index}>{parent}</p>
                        ))}
                    </div>
                </div>
            </div>
        </Card>
    )
}