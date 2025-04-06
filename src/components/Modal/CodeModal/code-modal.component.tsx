import { FC } from 'react';
import { Modal } from '../Modal.component';
import { EModal } from '../../../assets/shared/enums/modal.enum';
import { Card } from '../../Card/Card.component';
import { FlowerModal } from '../../../assets/images';
import useModal from '../../../assets/hooks/modal.hook';
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { Button } from '../../Button/Button.component';
import { CloseModal } from '../../../assets/icons';
import { useInvitadosStore } from '../../../assets/store/invitados.store';
import { DataInvitado } from '../../../assets/models/invitado.model';

type FormData = {
    code: string;
};

export const CodeModal: FC = () => {
    const { hideModal } = useModal();
    const navigate = useNavigate();
    const { invitados, setInvitadoEncontrado, setShouldPlayMusic } = useInvitadosStore();
    const { control, handleSubmit, formState: { errors }, setError } = useForm<FormData>();
    const onSubmit = (data: FormData) => {
        const codigoIngresado = data.code.trim();
        const invitadoEncontrado = invitados.find(invitado =>
            invitado.ID.toString() === codigoIngresado
        );
        if (invitadoEncontrado) {
            const dataInvitadoStore: DataInvitado = {
                ID: invitadoEncontrado.ID,
                Familia: invitadoEncontrado.Familia,
                Pases: invitadoEncontrado.Pases,
                Confirmacion: invitadoEncontrado.Confirmacion,
            };
            hideModal(EModal.CODE);
            setInvitadoEncontrado(dataInvitadoStore);
            setShouldPlayMusic(true);
            navigate('/invitacion');
        } else {
            setError('code', {
                type: 'manual',
                message: 'Código no válido. Por favor, verifique e intente nuevamente.'
            });
        }
    };
    return (
        <Modal modalId={EModal.CODE} className='w-[85%] md:w-[45%]'>
            <Card
                image={FlowerModal}
                position="-top-16 md:-top-24"
                width="w-60 md:w-96"
                icon2={CloseModal}
                hideModal={hideModal}
            >
                <div className='font-poppins-regular text-[#456EA1]'>
                    <h3>Ingresa tu <span className='font-poppins'>código de acceso</span></h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mt-4">
                            <Controller
                                name="code"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Por favor ingresa tu código' }}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="text"
                                        placeholder=""
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    />
                                )}
                            />
                            {errors.code && <p className="text-left pt-3 text-red-500 text-sm">{errors.code.message}</p>}
                        </div>
                        <div className="w-full mt-4 h-10 flex justify-center items-center">
                            <Button text="Acceder" color="#193C69" />
                        </div>
                    </form>
                </div>
            </Card>
        </Modal>
    );
};