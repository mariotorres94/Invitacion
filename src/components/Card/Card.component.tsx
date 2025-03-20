import { FC, ReactNode } from "react";
import { EModal } from "../../assets/shared/enums/modal.enum";

interface CardProps {
    children: ReactNode;
    position?: string;
    width?: string;
    image?: string;
    className?: string;
    icon?: string;
    icon2?: string;
    hideModal?: (modal: string, data?: unknown) => void;
    view?: boolean;
}

export const Card: FC<CardProps> = ({ position, image, width, className, children, icon, icon2, hideModal, view=false }) => {
    const handleHideModal = () => {
        if(hideModal) {
            if(EModal.GIFT) {
                hideModal(EModal.GIFT);
            }
            if(EModal.DRESSCODE) {
                hideModal(EModal.DRESSCODE);
            }
            if(EModal.CONFIRMASSISTENT) {
                hideModal(EModal.CONFIRMASSISTENT);
            }
        }
    }
    return (
        <div className={`mx-5 ${className}`}>
            <div className="relative w-full text-center rounded-lg pt-10  md:pt-14 md:px-5 pb-5 text-[#456EA1]">
                <div className="flex justify-center items-center w-full">
                    {
                        view && (
                            <>
                                <div className='absolute -right-8 -top-4 cursor-pointer'>
                                    <img src={icon2} alt="Close" className='w-10' onClick={handleHideModal}/>
                                </div>
                                <div className="absolute -top-2 z-50">
                                    <img src={icon} alt="Icon" className="bg-white rounded-full p-4 w-24 h-24 md:w-32 shadow-md" />
                                </div>
                            </>
                        )
                    }
                    <div className={`absolute ${position}`}>
                        <img src={image} alt="Image" className={`${width} mt-4`} />
                    </div>
                </div>
                <div className="flex flex-col gap-8 pt-16">
                    {children}
                </div>
            </div>
        </div>
    );
};