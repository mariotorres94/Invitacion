import { FC } from 'react';
import useModal from '../../../../assets/hooks/modal.hook';
import { EModal } from '../../../../assets/shared/enums/modal.enum';
import { FlowerModal, QR } from '../../../../assets/images';
import { CloseModal, GifModal } from '../../../../assets/icons';
import { Modal } from '../../Modal.component';
import { Card } from '../../../Card/Card.component';

export const OurDreamstModal: FC = () => {
    const { hideModal } = useModal();
    return (
        <Modal modalId={EModal.OURDREAMS} className='w-[85%] md:w-[45%]'>
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
                            <li className='font-poppins-light'><span className='font-poppins-regular'>Experiencia de viajes:</span> Visitar muchos destinos especiales.</li>
                            <li className='font-poppins-light'><span className='font-poppins-regular'>Nuestro futuro juntos:</span> Inversiones para seguir creciendo como pareja.</li>
                        </ul>
                    </div>
                    <p className='font-poppins-regular'>Tu apoyo, con la bendición de Dios, nos acercará a cada uno de estos sueños.</p>
                    <div className='flex flex-col justify-center items-center px-6'>
                        <span className='font-poppins-regular'>INTERBANK</span>
                        <span className='font-poppins-regular'>Nro. de cuenta: 898 3465026776</span>
                        <span className='font-poppins-regular'>CCI: 00389801346502677645</span>
                    </div>
                    <div className='flex flex-col justify-center items-center text-center'>
                        <h3>Yuri Carbajal Ortega</h3>
                        <img src={QR} alt="QR" width={200}/>
                        <span>Plin</span>
                    </div>
                </div>
                <p className='font-poppins text-center'>¡Gracias por ser parte de este día tan especial para nosotros!</p>
            </Card>
        </Modal>
    );
};