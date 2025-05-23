import { FC, useEffect } from "react";
import { ContainerCountdown } from "../Countdown/Countdown.component";
import { Guest } from "../Guest/Guest.component";
import { EndGuest, FlowerLFooter, FlowerRFooter, FlowerParent } from "../../assets/images";
import { ParentsAndPadrinos } from "../ParentsAndPadrinos/ParentsAndPadrinos.component";
import { Programation } from "../Programation/Programation.component";
import { FlowerR, FlowerL } from "../../assets/images";
import { Portrait } from "../Portrait/Portrait.component";
import { DressCode } from "../DressCode/DressCode.component";
import { Gift } from "../Gift/Gift.component";
import useModal from "../../assets/hooks/modal.hook";
import { useInvitadosStore } from "../../assets/store/invitados.store";
import { motion } from "framer-motion";
import FloatingMusicButton from "../FloatingMusicButton/FloatingMusicButton.component";

export const Main: FC = () => {
    const { showModal } = useModal();
    const { invitadoEncontrado, loadFromStorage } = useInvitadosStore();
    useEffect(() => {
        loadFromStorage();
    }, [loadFromStorage]);
    return (
        <div className="flex flex-col justify-center items-center gap-10">
            <FloatingMusicButton />
            <ContainerCountdown />
            <Guest
                title="Están cordialmente invitados a nuestra boda"
                nameFamily={invitadoEncontrado?.Familia ?? ''}
                subtitle="¡Acompáñanos en el día más especial de nuestras vidas!"
            />
            <ParentsAndPadrinos
                title="Con la bendición de Dios y de nuestros padres"
                titleParentsNovia="Padres de la Novia"
                parentsNovia={["Ebelina Ortega Veramendi", "Eber Carbajal Espinoza"]}
                titleParentsNovio="Padres del Novio"
                parentsNovio={["Yanina Torres Chumpitaz", "David Enrique Torres Castilla"]}
                titlePadrinos="Acompañados de nuestros padrinos"
                padrinos={["Margarita Chumpitaz Luyo", "Mario Torres Saravia"]}
                imgElement={FlowerParent}
                endElement={EndGuest}
            />
            <motion.div
                className="flex justify-center items-center w-full"
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                    delay: 0.2
                }}
            >
                <img
                    src={EndGuest}
                    alt="End"
                    className="w-[75%] sm:w-[45%] md:w-[30%]"
                />
            </motion.div>
            <Programation
                id="programacion-section"
                title="Programación"
                subtitle="“Cada minuto cuenta en esta celebración de amor. Por favor, sé puntual para no perderte ningún momento especial”"
                imgElement={[FlowerR, FlowerL]}
                imgElementFooter={[FlowerRFooter, FlowerLFooter]}
                endElement={EndGuest}
                showModal={showModal}
            />
            <Portrait
                title="Retratos de Nuestro Amor"
                subTitle="Un minuto, un segundo, un instante que queda en la eternidad"
                endElement={EndGuest}
            />
            <DressCode
                id="dresscode-section"
                title="Fiesta"
                subTitle="Hagamos juntos una fiesta épica. Aquí algunos detalles a tener en cuenta."
                showModal={showModal}
            />
            <Gift
                title="Regalos"
                showModal={showModal}
            />
        </div>
    )
}