import { FC, useEffect, useState } from "react";
import { Place } from "./Components/Place/Place.component";
import { Icons } from "./Components/Icons/Icons.component";
import { Address } from "./Components/Address/Address.component";
import { Church, Hoops, MirrorBall, Meal } from "../../assets/images";
import { Button } from "../Button/Button.component";
import { Heart } from "../../assets/gifts";
import { EModal } from "../../assets/shared/enums/modal.enum";
import { useInvitadosStore } from "../../assets/store/invitados.store";
import { isAfter } from "date-fns";

const timelineEvents: Array<{
    title: string;
    place: string;
    hour: string;
    address: string;
    icon1: string;
    icon2: string;
    textButton?: string;
    view: boolean;
    href?: string;
    target?: "_blank" | "_self";
}> = [
    {
        title: "Ceremonia Religiosa",
        place: "Parroquia El Santísimo Salvador de Pachacámac",
        hour: "11:00 a.m.",
        address: "Jr. Comercio 505, Pachacámac 15823",
        icon1: Church,
        icon2: Heart,
        textButton: 'Ver en mapa',
        view: true,
        href: "https://maps.app.goo.gl/BgnmB6KkdFaaVjGy5",
        target: "_blank"
    },
    {
        title: "Ceremonia Civil",
        place: "Villa Doris",
        hour: "1:30 p.m.",
        address: "Calle 10 Mz. S Lt. 6 Pachacamac",
        icon1: Hoops,
        icon2: Heart,
        textButton: 'Ver en mapa',
        view: true,
        href: "https://maps.app.goo.gl/ZfMvq8ARb79mNSTu5",
        target: "_blank"
    },
    {
        title: "Almuerzo",
        place: "",
        hour: "4:00 p.m.",
        address: "",
        icon1: Meal,
        icon2: "",
        view: false,
    },
    {
        title: "Fiesta",
        place: "",
        hour: "5:00 p.m.",
        address: "",
        icon1: MirrorBall,
        icon2: "",
        view: false,
    },
];

interface TimeLineProps {
    showModal?: (modal: string, data?: unknown) => void;
}

export const TimeLine: FC<TimeLineProps> = ({ showModal }) => {
    const { confirmado, invitadoEncontrado } = useInvitadosStore();
    const stateConfirm = confirmado === '' ? invitadoEncontrado?.Confirmacion : confirmado;
    const disabled = stateConfirm === 'Confirmado' || stateConfirm === 'No asistirá';
    const disabledByPasses = !(invitadoEncontrado && invitadoEncontrado?.Pases > 0);
    const text = disabled ? '¡Gracias por confirmar tu asistencia!' : '¡Confirmar mi asistencia!';
    const [viewButton, setViewButton] = useState<boolean>(false);
    const handleShowModal = () => {
        if (showModal) {
            showModal(EModal.CONFIRMASSISTENT);
        }
    };
    useEffect(() => {
        const dateConfirmated = new Date('2025-04-30T23:59:59Z');
        if(isAfter(new Date(), dateConfirmated)){
            setViewButton(true);
        }
    },[])
    return (
        <div className="w-full flex flex-col gap-4 justify-center items-center">
            <div className="w-[60%] md:relative md:-top-14">
                {timelineEvents.map((event, index) => (
                    <div key={index} className="w-full flex flex-col items-center sm:flex-row sm:justify-center sm:items-center">
                        <Place title={event.title} place={event.place} view={event.view}/>
                        <Icons icon1={event.icon1} icon2={event.icon2} isLast={index === timelineEvents.length - 1} />
                        <Address hour={event.hour} address={event.address} textButton={event.textButton} isLast={index === timelineEvents.length - 1} view={event.view} href={event.href} target={event.target} />
                    </div>
                ))}
            </div>
            <div className="flex flex-col justify-center items-center px-20">
                {
                    !viewButton && (
                        <div className="h-10 flex justify-center items-center md:h-14 md:w-72 ">
                            <Button id="confirm-button" text={text} color={disabled ? '#9CA3AF' : '#193C69'} onclick={handleShowModal} disabled={disabled || disabledByPasses}/>
                        </div>
                    )
                }
                <div className="w-52 sm:w-[43%] mt-4">
                    <span className="text-[#193C69] md:text-xl">IMPORTANTE</span>
                    <p className="font-josefin-sans-light md:text-xl">Puedes registrar y confirmar tu asistencia hasta antes del <span className="text-[#193C69] font-bold">30 de abril</span></p>
                </div>
            </div>
        </div>
    );
};
