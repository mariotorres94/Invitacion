import { FC } from "react";
import { ContainerCountdown } from "../Countdown/Countdown.component";
import { Guest } from "../Guest/Guest.component";
import { EndGuest, FlowerLFooter, FlowerRFooter, FlowerParent } from "../../assets/images";
import { ParentsAndPadrinos } from "../ParentsAndPadrinos/ParentsAndPadrinos.component";
import { Programation } from "../Programation/Programation.component";
import { FlowerR, FlowerL, CameraAnimation } from "../../assets/images";
import { Portrait } from "../Portrait/Portrait.component";
import { DressCode } from "../DressCode/DressCode.component";
import { Gift } from "../Gift/Gift.component";
import useModal from "../../assets/hooks/modal.hook";
import { useInvitadosStore } from "../../assets/store/invitados.store";

export const Main:FC = () => {
    const { showModal } = useModal();
    const { invitadoActual } = useInvitadosStore();
    if (!invitadoActual) {
        return <div>No se encontró información del invitado</div>;
    }
    return (
        <div className="flex flex-col justify-center items-center gap-10">
            <ContainerCountdown />
            <Guest
                title="Están cordialmente invitados a nuestra boda"
                nameFamily={invitadoActual.Familia}
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
            <div className="flex justify-center items-center w-full">
                <img src={EndGuest} alt="End" className="w-[75%] sm:w-[45%] md:w-[30%]"/>
            </div>
            <Programation
                title="Programación"
                subtitle="“Cada minuto cuenta en esta celebración de amor. Por favor, sé puntual para no perderte ningún momento especial”"
                imgElement={[FlowerR,FlowerL]}
                imgElementFooter={[FlowerRFooter,FlowerLFooter]}
                endElement={EndGuest}
                showModal={showModal}
            />
            <Portrait
                title="Retratos de Nuestro Amor"
                subTitle="Un minuto, un segundo, un instante que queda en la eternidad"
                gif={CameraAnimation}
                endElement={EndGuest}
            />
            <DressCode
                title="Fiesta"
                subTitle="Hagamos juntos una fiesta épica. Aquí algunos detalles a tener en cuenta."
                showModal={showModal}
            />
            <Gift
                title="Regalos"
                subTitle="Si deseas regalarnos algo más que tu hermosa presencia..."
                showModal={showModal}
            />
        </div>
    )
}