import { FC } from "react";
import useModal from "../../hooks/modal.hook";
import { EModal } from "../enums/modal.enum";
import { GiftModal } from "../../../components/Modal/GiftModal/gift-modal.component";
import { DressCodeModal } from "../../../components/Modal/DressCodeModal/dress-code-modal.component";
import { ConfirmAssistentModal } from "../../../components/Modal/ConfirmAssistentModal/confirm-assistent-modal.component";
import { CodeModal } from "../../../components/Modal/CodeModal/code-modal.component";

export const ModalRenderer: FC = () => {
    const { modals } = useModal();

    return (
        <>
            {modals[EModal.GIFT] && <GiftModal />}
            {modals[EModal.DRESSCODE] && <DressCodeModal />}
            {modals[EModal.CONFIRMASSISTENT] && <ConfirmAssistentModal />}
            {modals[EModal.CODE] && <CodeModal />}
        </>
    )
}