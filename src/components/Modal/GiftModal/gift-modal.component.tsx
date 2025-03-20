import { FC } from 'react';
import { Modal } from '../Modal.component';
import { EModal } from '../../../assets/shared/enums/modal.enum';
import { Card } from '../../Card/Card.component';
import { CloseModal, GifModal } from '../../../assets/icons';
import { FlowerModal } from '../../../assets/images';
import useModal from '../../../assets/hooks/modal.hook';

export const GiftModal: FC = () => {
    const { hideModal } = useModal();
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
                <div className='flex flex-col gap-6 text-left text-[#456EA1] text-sm overflow-y-auto max-h-[45vh] md:max-h-none'>
                    <div className='text-base'>
                        <span className='font-poppins'>Como dice la canción ...</span>
                        <p className='font-poppins-extralight-italic'>"Tres cosas hay en la vida: Salud, dinero y amor."</p>
                    </div>
                    <div className='leading-6'>
                        <p className='font-poppins-light'>Por gracia de Dios, estamos sanitos y, sobre todo, nos amamos profundamente. Es por eso que, guiados por su voluntad, decidimos unirnos en matrimonio.</p>
                        <p className='font-poppins-light'>En lugar de regalos materiales, nos haría muy felices recibir una contribución para cumplir juntos nuestros sueños. Estos son algunos de nuestros proyectos:</p>
                        <ul className='list-disc pl-5'>
                            <li className='font-poppins-light'><span className='font-poppins-regular'>Nuestro hogar:</span> Ayúdanos a hacer realidad la casa de nuestros sueños.</li>
                            <li className='font-poppins-light'><span className='font-poppins-regular'>Viaje de luna de miel:</span> Queremos celebrar este hermoso momento en un destino especial.</li>
                            <li className='font-poppins-light'><span className='font-poppins-regular'>Nuestro futuro juntos:</span> Inversiones para seguir creciendo como pareja.</li>
                        </ul>
                    </div>
                    <p className='font-poppins-regular'>Tu apoyo, con la bendición de Dios, nos acercará a cada uno de estos sueños.</p>
                    <div className='flex flex-col justify-start items-start px-10'>
                        <span className='font-poppins-regular'>BBVA</span>
                        <span className='font-poppins-regular'>Nro. de cuenta:</span>
                        <span className='font-poppins-regular'>CCI:</span>
                    </div>
                </div>
                <p className='font-poppins text-center'>¡Gracias por ser parte de este día tan especial para nosotros!</p>
            </Card>
        </Modal>
    );
};