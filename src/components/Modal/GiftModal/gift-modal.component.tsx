import { FC } from 'react';
import { Modal } from '../Modal.component';
import { EModal } from '../../../assets/shared/enums/modal.enum';
import { Card } from '../../Card/Card.component';
import { CloseModal, GifModal } from '../../../assets/icons';
import { FlowerModal } from '../../../assets/images';
import useModal from '../../../assets/hooks/modal.hook';
import { Button } from '../../Button/Button.component';

export const GiftModal: FC = () => {
    const { hideModal, showModal } = useModal();
    const handleShowModal = (modalType: EModal) => {
        hideModal(EModal.GIFT);
        showModal(modalType);
    };
    return (
        <Modal modalId={EModal.GIFT} className='w-[85%] md:w-[45%]'>
            <Card
                image={FlowerModal}
                icon={GifModal}
                position="-top-16 md:-top-24"
                width="w-60 md:w-96"
                icon2={CloseModal}
                hideModal={hideModal}
                view={true}
            >
                <div className='flex flex-col gap-10 items-center py-14 mx-5 md:mt-10'>
                    <div className="w-full h-10 flex justify-center items-center md:w-44 md:h-12">
                        <Button text="Apóyanos en Nuestros Sueños" color="#193C69" onclick={() => handleShowModal(EModal.OURDREAMS)}/>
                    </div>
                    <div className="w-full h-10 flex justify-center items-center md:w-44 md:h-12">
                        <Button text="Lista de regalos" color="#193C69" onclick={() => handleShowModal(EModal.GIFTLIST)} />
                    </div>
                </div>
            </Card>
        </Modal>
    );
};