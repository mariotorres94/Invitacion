import { FC } from 'react';
import { Modal } from '../Modal.component';
import { EModal } from '../../../assets/shared/enums/modal.enum';
import { Card } from '../../Card/Card.component';
import { CloseModal } from '../../../assets/icons';
import { FlowerModal, Heart } from '../../../assets/images';
import useModal from '../../../assets/hooks/modal.hook';
import { motion } from "framer-motion";
import { useInvitadosStore } from '../../../assets/store/invitados.store';

export const ThankForConfirmingModal: FC = () => {
    const { hideModal } = useModal();
    const { dataForm } = useInvitadosStore();
    console.log("dataForm ====>",dataForm)
    return (
        <Modal modalId={EModal.THANKFORCONFIRMING} className='w-[85%] md:w-[45%]'>
            <Card
                image={FlowerModal}
                icon={''}
                position="-top-16 md:-top-24"
                width="w-60 md:w-96"
                icon2={CloseModal}
                hideModal={hideModal}
                view={true}
            >
                <div className="py-4 max-w-sm mx-auto bg-white rounded-lg">
                    <h3 className='font-styleScript text-3xl'>{dataForm?.attendance === 'si' ? '¡Gracias por confirmar tu asistencia¡' : 'Lamentamos que no puedas acompañarnos en este día tan especial'} </h3>
                    <div className='flex flex-col justify-center items-center mt-6'>
                        <p className='font-josefin-semibold'>{dataForm?.attendance === 'si' && 'Nos vemos en el gran día...'}</p>
                        <motion.img
                                src={Heart}
                                alt="Heart In Time Line"
                                className="w-8 sm:w-10"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [1, 0.8, 1],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        <div className="w-52 sm:w-[43%] mt-4">
                            {
                                dataForm?.attendance === 'si' ? (
                                    <>
                                        <span className="text-[#193C69] md:text-xl">RECUERDA</span>
                                        <p className="font-josefin-sans-light md:text-xl">Un mes antes del gran día nuestra Wedding Planner (Gloria Galvez) se contactará contigo para reconfirmar tu asistencia.</p>
                                    </>
                                ) : (
                                    <p className="font-josefin-sans-light md:text-xl">¡Te estaremos pensando!</p>
                                )
                            }
                        </div>
                    </div>
                </div>
            </Card>
        </Modal>
    );
};