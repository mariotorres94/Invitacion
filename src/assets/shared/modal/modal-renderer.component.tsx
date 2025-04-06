import { FC } from "react";
import useModal from "../../hooks/modal.hook";
import { EModal } from "../enums/modal.enum";
import { GiftModal } from "../../../components/Modal/GiftModal/gift-modal.component";
import { DressCodeModal } from "../../../components/Modal/DressCodeModal/dress-code-modal.component";
import { ConfirmAssistentModal } from "../../../components/Modal/ConfirmAssistentModal/confirm-assistent-modal.component";
import { CodeModal } from "../../../components/Modal/CodeModal/code-modal.component";
import { OurDreamstModal } from "../../../components/Modal/GiftModal/OurDreamsModal/our-dreams-modal.component";
import { GiftListModal } from "../../../components/Modal/GiftModal/GiftListModal/GiftListModal.component";
import { ReConfirmAssistentModal } from "../../../components/Modal/ConfirmAssistentModal/reconfirm/reconfirm-modal.component";
import { ThankForConfirmingModal } from "../../../components/Modal/ThankForConfirming/thank-for-confirming-modal.component";

export const ModalRenderer: FC = () => {
    const { modals } = useModal();

    return (
        <>
            {modals[EModal.GIFT] && <GiftModal />}
            {modals[EModal.DRESSCODE] && <DressCodeModal />}
            {modals[EModal.CONFIRMASSISTENT] && <ConfirmAssistentModal />}
            {modals[EModal.CODE] && <CodeModal />}
            {modals[EModal.OURDREAMS] && <OurDreamstModal />}
            {modals[EModal.GIFTLIST] && <GiftListModal />}
            {modals[EModal.RECONFIRMASSISTENT] && <ReConfirmAssistentModal />}
            {modals[EModal.THANKFORCONFIRMING] && <ThankForConfirmingModal />}
        </>
    )
}