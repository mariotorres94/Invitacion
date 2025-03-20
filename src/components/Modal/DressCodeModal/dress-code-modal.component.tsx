import { FC } from 'react';
import { Modal } from '../Modal.component';
import { EModal } from '../../../assets/shared/enums/modal.enum';
import { Card } from '../../Card/Card.component';
import { CloseModal, DiscoBall } from '../../../assets/icons';
import { FlowerModal } from '../../../assets/images';
import useModal from '../../../assets/hooks/modal.hook';

export const DressCodeModal: FC = () => {
    const { hideModal } = useModal();
    return (
        <Modal modalId={EModal.DRESSCODE} className='w-[85%] md:w-[45%]'>
            <Card
                image={FlowerModal}
                icon={DiscoBall}
                position="-top-16 md:-top-24"
                width="w-60 md:w-96"
                icon2={CloseModal}
                hideModal={hideModal}
                view={true}
            >
                <div className='font-poppins-regular text-[#456EA1]'>
                    <h3>Colores reservados para los <span className='font-poppins'>novios</span></h3>
                    <div className='flex justify-around my-5'>
                        <div className='w-16 h-16 rounded-full shadow-xl bg-[#FFFFFF]'></div>
                        <div className='w-16 h-16 rounded-full shadow-xl bg-[#98AEC3]'></div>
                    </div>
                    <h3>Colores sugeridos para <span className='font-poppins'>invitados</span></h3>
                    <div className='flex flex-wrap justify-evenly my-10 gap-4'>
                        <div className='w-16 h-16 rounded-full shadow-xl bg-[#274661]'></div>
                        <div className='w-16 h-16 rounded-full shadow-xl bg-[#BFE1F2]'></div>
                        <div className='w-16 h-16 rounded-full shadow-xl bg-[#D9D9D9]'></div>
                        <div className='w-16 h-16 rounded-full shadow-xl bg-[#EECED1]'></div>
                        <div className='w-16 h-16 rounded-full shadow-xl bg-[#80917E]'></div>
                    </div>
                </div>
            </Card>
        </Modal>
    );
};