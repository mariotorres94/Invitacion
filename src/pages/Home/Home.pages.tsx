import { FC, useEffect, useState } from "react";
import { Background, Heart, Sello, Tapa1, Tapa1Desktop, Tapa2, Tapa2Desktop } from "../../assets/images";
import useModal from "../../assets/hooks/modal.hook";
import { EModal } from "../../assets/shared/enums/modal.enum";
import { useScreenSize } from "../../assets/hooks/useScreenSize.hook";
import { useInvitadosStore } from "../../assets/store/invitados.store";
import { motion } from "framer-motion";

export const Home: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { showModal, isModalOpen } = useModal();
    const { invitados, fetchInvitados } = useInvitadosStore();
    const screenSize = useScreenSize();
    const modalCode = EModal.CODE;
    const handleShowModal = () => {
        setIsOpen(true);
        if (showModal) {
            setTimeout(() => {
                showModal(EModal.CODE);
            }, 1000)
        }
    };
    useEffect(() => {
        const modalIsOpen = isModalOpen(modalCode);
        if (!modalIsOpen) {
            setIsOpen(false);
        }
    }, [isModalOpen, modalCode]);
    useEffect(() => {
        fetchInvitados();
    }, [fetchInvitados]);
    if (invitados.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="flex items-center justify-center gap-2 animate-pulse">
                    <img src={Heart} alt="Heart" />
                    <img src={Heart} alt="Heart" />
                    <img src={Heart} alt="Heart" />
                </div>
                <p className="mt-4 text-gray-600 text-xl">Preparando invitación...</p>
            </div>
        );
    }
    return (
        <div
            className="relative top-0 bottom-0 -mt-6 flex justify-center items-center h-[calc(100vh+24px)] bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: `url(${Background})` }}
        >
            <div className={`absolute top-0 -left-6 z-50 md:-left-12 md:-top-3 h-[110vh] transition-transform duration-1000 ease-in ${isOpen ? 'transform -translate-x-1/2' : ''}`}>
                <img src={screenSize === 'mobile' ? Tapa1 : Tapa1Desktop} alt="" className="h-full w-auto" />
            </div>
            <div className="absolute top-68 z-50 md:top-60 cursor-pointer">
                <motion.img
                    src={Sello}
                    alt=""
                    width={screenSize === 'mobile' ? 160 : 250}
                    onClick={handleShowModal}
                    initial={{ scale: 1 }}
                    animate={{
                        scale: [1, 1.05, 1],
                        transition: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 2,
                            ease: "easeInOut"
                        }
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                />
            </div>
            <div className={`absolute top-0 -right-9 md:-right-12 md:-top-4 h-[110vh] transition-transform duration-1000 ease-in ${isOpen ? 'transform translate-x-1/2' : ''}`}>
                <img src={screenSize === 'mobile' ? Tapa2 : Tapa2Desktop} alt="" className="h-full w-auto" />
            </div>
        </div>
    );
}