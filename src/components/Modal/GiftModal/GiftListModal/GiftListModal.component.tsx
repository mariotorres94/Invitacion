import { FC } from 'react';
import useModal from '../../../../assets/hooks/modal.hook';
import { EModal } from '../../../../assets/shared/enums/modal.enum';
import { FlowerModal } from '../../../../assets/images';
import { CloseModal, GifModal } from '../../../../assets/icons';
import { Modal } from '../../Modal.component';
import { Card } from '../../../Card/Card.component';

export const GiftListModal: FC = () => {
    const { hideModal } = useModal();
    return (
        <Modal modalId={EModal.GIFTLIST} className='w-[85%] md:w-[45%]'>
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
                    <h2 className='font-poppins'>Si deseas regalarnos algo especial, esta es nuestra lista de regalos:</h2>
                    <p className='font-poppins-light'>Para acceder, solo sigue estos pasos:</p>
                    <ul className='list-decimal pl-5 font-poppins-regular leading-6'>
                        <li>Ingresa <a href="https://www.noviosfalabella.com.pe/public/resultadoBusquedaNovios.do?categoria=todas&idsJerarquias=&nombreCategoria=&nivelCategoria=&codigoEvento=&dvEvento=&radTipoBusqueda=1&txtBusqueda=716220-00" target="_blank" rel="noopener noreferrer" className="text-red-400 font-bold underline underline-offset-2 hover:underline-offset-4 transition-all">AQUI!</a></li>
                        <li>Selecciona nuestro nombre</li>
                        <li>Elige el regalo que te gustaría darnos y sigue el proceso de compra guiado.</li>
                    </ul>
                </div>
                <p className='font-poppins text-center'>¡Gracias por ser parte de este día tan especial para nosotros!</p>
            </Card>
        </Modal>
    );
};