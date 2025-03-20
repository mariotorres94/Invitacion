import { FC } from "react"
import { Button } from "../../Button/Button.component";
import { EModal } from "../../../assets/shared/enums/modal.enum";

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
            showModal(EModal.DRESSCODE);
        }
    };
    return (
        <div className="w-full flex flex-col justify-center items-center gap-4">
            <div>
                <h3 className="font-poppins sm:text-xl">{title}</h3>
                <p className="font-josefin-sans-light sm:text-lg">{subTitle}</p>
            </div>
            <div className="w-full flex justify-evenly md:justify-center md:gap-16 items-center py-5 md:py-10">
                {
                    gifts.map((gift, index) => (
                        <div key={index} className="rounded-full shadow-lg overflow-hidden w-20 sm:w-24">
                            <img src={gift} alt="Gift" />
                        </div>
                    ))
                }
            </div>
            <p className="font-poppins-light text-sm">{nota}</p>
            <div className="w-36 h-10 flex justify-center items-center">
                <Button text="Ver detalle" color="#193C69" onclick={handleShowModal}/>
            </div>
        </div>
    )
}