import { FC } from "react"
import { DressWomen, DressMan } from "../../assets/gifts";
import { FlowerDresscode, FlowerSeparate } from "../../assets/images";
import { Card } from "../Card/Card.component";
import { HeaderDressCode } from "./components/HeaderDressCode.component";
import { MainDressCode } from "./components/MainDressCode.component";
import { FooterDressCode } from "./components/FooterDressCode.component";

interface DressCodeProps {
    title: string;
    subTitle: string;
    showModal: (modal: string, data?: unknown) => void;
}

export const DressCode: FC<DressCodeProps> = ({ title, subTitle, showModal }) => {
    return (
        <Card
            image={FlowerDresscode}
            position="-top-10 -left-6 sm:-top-10 sm:-top-14 sm:-left-14"
            width="w-40 sm:w-60"
            className="sm:w-[70%] md:w-[50%] shadow-lg border rounded-lg"
        >
            <div className="flex flex-col gap-4 justify-center items-center text-center mx-10">
                <HeaderDressCode
                    title={title}
                    subtitle={subTitle}
                />
                <div className="sm:w-[70%] md:w-[60%]">
                    <img src={FlowerSeparate} alt="Flower" />
                </div>
                <MainDressCode
                    title="Dress Code"
                    subTitle="Elegante"
                    gifts={[DressWomen, DressMan]}
                    nota="¡Aquí una orientación para tu vestuario!"
                    showModal={showModal}
                />
                <div className="sm:w-[70%] md:w-[60%]">
                    <img src={FlowerSeparate} alt="Flower" />
                </div>
                <FooterDressCode
                    title="Nuestra amor es brillante y lleno de color, y queremos que nuestra boda refleje eso."
                    subTitle="Por favor, dejemos el negro para otra ocasión"
                />
            </div>
        </Card>
    )
}