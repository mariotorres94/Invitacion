import { FC } from 'react';
import { Modal } from '../../Modal.component';
import { Card } from '../../../Card/Card.component';
import { EModal } from '../../../../assets/shared/enums/modal.enum';
import { FlowerModal } from '../../../../assets/images';
import useModal from '../../../../assets/hooks/modal.hook';
import { useInvitadosStore } from '../../../../assets/store/invitados.store';
import { Button } from '../../../Button/Button.component';
import { DataService } from '../../../../assets/service/data.service';
import { useLoading } from '../../../../assets/hooks/useLoading.hook';
import { contarInvitados } from '../../../../assets/utils/modal.utils';

export const ReConfirmAssistentModal: FC = () => {
    const { hideModal, showModal } = useModal();
    const { dataForm, setConfirmado } = useInvitadosStore();
    const { setIsLoading } = useLoading();
    const handleHideModal = () => {
        hideModal(EModal.RECONFIRMASSISTENT);
    }
    const cantidadInvitados = contarInvitados(dataForm!);
    const pases = JSON.parse(localStorage.getItem('invitadoEncontrado') || 'null');
    const handleSendModal = async () => {
        setIsLoading(true);
        const response = await DataService.sendConfirmaciones(dataForm!);
        if (response && response.success) {
            const confirmacion = response.updateData?.confirmacion;
            if(confirmacion){
                setConfirmado(response.updateData.confirmacion);
                setIsLoading(false);
                hideModal(EModal.CONFIRMASSISTENT);
                hideModal(EModal.RECONFIRMASSISTENT);
                showModal(EModal.THANKFORCONFIRMING);
            }
        } else {
            throw new Error(response?.message || 'Error al enviar la confirmación.');
        }
    }
    return (
        <Modal modalId={EModal.RECONFIRMASSISTENT} className='w-[85%] md:w-[45%]'>
            <Card
                image={FlowerModal}
                icon={''}
                position="-top-16 md:-top-24"
                width="w-60 md:w-96"
                icon2={''}
                hideModal={hideModal}
                view={true}
            >
                <div className='flex flex-col gap-4 leading-8'>
                    <h3 className='font-styleScript text-4xl'>Confirmación de Registro</h3>
                    <p className='font-josefin-semibold text-xl'>Has registrado a:</p>
                    <ul className='list-disc pl-5 text-lg'>
                        <li className='font-josefin-semibold'>{dataForm?.fullName}</li>
                        {dataForm?.guest && dataForm?.guest.length > 0 && (
                            <>
                                {dataForm?.guest.map((guest, index) => (
                                    <li key={index} className='font-josefin-semibold'>{guest.name}</li>
                                ))}
                            </>
                        )}
                    </ul>
                </div>
                {
                    cantidadInvitados !== pases.Pases &&(
                        <p>Ten en cuenta que solo se han asignado {cantidadInvitados} de los {pases.Pases} pases disponibles.</p>
                    )
                }
                <p>Una vez que confirmes, no podrás modificar esta selección.</p>
                <div className='flex justify-between items-center'>
                    <div className="w-28 h-10 flex justify-center items-center md:w-44 md:h-12">
                        <Button text="Cancelar" color="#ed4545" onclick={handleHideModal} />
                    </div>
                    <div className="w-28 h-10 flex justify-center items-center md:w-44 md:h-12">
                        <Button text="Enviar" color="#193C69" onclick={handleSendModal} />
                    </div>
                </div>
            </Card>
        </Modal>
    );
};