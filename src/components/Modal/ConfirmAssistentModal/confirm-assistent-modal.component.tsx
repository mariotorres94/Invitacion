import { FC, useEffect } from 'react';
import { Modal } from '../Modal.component';
import { EModal } from '../../../assets/shared/enums/modal.enum';
import { Card } from '../../Card/Card.component';
import { Aros, CloseModal } from '../../../assets/icons';
import { FlowerModal, FlowerSeparate } from '../../../assets/images';
import useModal from '../../../assets/hooks/modal.hook';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '../../Button/Button.component';
import { useInvitadosStore } from '../../../assets/store/invitados.store';
import { ConfirmacionData } from '../../../assets/interface/form.interface';
import { DataService } from '../../../assets/service/data.service';
import { useLoading } from '../../../assets/hooks/useLoading.hook';

export const ConfirmAssistentModal: FC = () => {
    const { hideModal, showModal } = useModal();
    const { control, handleSubmit, formState: { errors }, watch } = useForm<ConfirmacionData>();
    const { setIsLoading } = useLoading();
    const onSubmit = async (data: ConfirmacionData) => {
        try {
            let guests = null;

            if (data.guest && invitadoEncontrado && invitadoEncontrado?.Pases > 1) {
                const validGuests = data.guest
                    .map(g => ({ ...g, name: g.name.trim() }))
                    .filter(g => g.name !== '');

                guests = validGuests.length > 0 ? validGuests : null;
            }
            const submissionData = {
                ...data,
                familyCode: invitadoEncontrado?.ID,
                guest: guests,
            }
            setDataForm(submissionData);
            if(data.attendance === 'si') {
                showModal(EModal.RECONFIRMASSISTENT);
            } else {
                setIsLoading(true);
                const response = await DataService.sendConfirmaciones(submissionData);
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
        } catch (error) {
            console.error('Error en onSubmit:', error);
        }
    };
    const attendance = watch('attendance');
    const { invitadoEncontrado, loadFromStorage, setDataForm,setConfirmado } = useInvitadosStore();
    useEffect(() => {
        loadFromStorage();
    }, [loadFromStorage]);
    return (
        <Modal modalId={EModal.CONFIRMASSISTENT} className='w-[85%] md:w-[45%]'>
            <Card
                image={FlowerModal}
                icon={Aros}
                position="-top-16 md:-top-24"
                width="w-60 md:w-96"
                icon2={CloseModal}
                hideModal={hideModal}
                view={true}
            >
                <div className="py-4 max-w-sm mx-auto bg-white rounded-lg">
                    <h3 className='font-styleScript text-3xl'>¿Confirmar tu asistencia?</h3>
                    <p className='font-josefin-semibold'>Sabado 26 de Julio, 2025</p>

                    <form onSubmit={handleSubmit(onSubmit)} className='overflow-y-auto max-h-[30vh] md:max-h-none'>
                        <div className="mt-4">
                            <Controller
                                name="attendance"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Por favor selecciona una opción' }}
                                render={({ field }) => (
                                    <div className='flex justify-between items-center font-josefin-sans-regular'>
                                        <label className="flex items-center mb-2">
                                            <input
                                                {...field}
                                                type="radio"
                                                value="si"
                                                className="form-radio h-4 w-4 text-[#193C69] transition duration-150 ease-in-out"
                                            />
                                            <span className="ml-2 text-sm">¡Sí, confirmo!</span>
                                        </label>

                                        <label className="flex items-center">
                                            <input
                                                {...field}
                                                type="radio"
                                                value="no"
                                                className="form-radio h-4 w-4 text-[#193C69] transition duration-150 ease-in-out"
                                            />
                                            <span className="ml-2 text-sm">No puedo </span>
                                        </label>
                                    </div>
                                )}
                            />
                            {errors.attendance && <p className="text-red-500 text-sm">{errors.attendance.message}</p>}
                        </div>
                        {
                            attendance === 'si' && invitadoEncontrado &&  invitadoEncontrado?.Pases > 0 && (
                                <>
                                    <p className='font-josefin-sans-light'>Tienes {invitadoEncontrado?.Pases} {invitadoEncontrado?.Pases === 1 ? 'pase' : 'pases'}</p>
                                    <div className="mt-4">
                                        <Controller
                                            name="fullName"
                                            control={control}
                                            defaultValue=""
                                            rules={{ required: 'Por favor ingresa tu nombre completo' }}
                                            render={({ field }) => (
                                                <input
                                                    {...field}
                                                    type="text"
                                                    placeholder="Ingrese su nombre completo"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                                />
                                            )}
                                        />
                                        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
                                    </div>

                                    <div className="mt-4">
                                        <Controller
                                            name="phoneNumber"
                                            control={control}
                                            defaultValue=""
                                            rules={{ required: 'Por favor ingresa tu número de celular' }}
                                            render={({ field }) => (
                                                <input
                                                    {...field}
                                                    type="text"
                                                    placeholder="Ingrese su número de celular"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                                />
                                            )}
                                        />
                                        {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
                                    </div>
                                </>
                            )
                        }
                        {
                            attendance === 'si' && invitadoEncontrado &&  invitadoEncontrado?.Pases > 0   && (
                                <>
                                    <div className="mx-auto w-[70%] sm:w-[70%] md:w-[60%] py-4">
                                        <img src={FlowerSeparate} alt="Flower" />
                                    </div>
                                    {
                                        invitadoEncontrado && invitadoEncontrado.Pases > 1 && (
                                            <div className='space-y-4'>
                                                {[...Array(invitadoEncontrado && invitadoEncontrado.Pases - 1)].map((_, index) => (
                                                    <div key={index}>
                                                        <Controller
                                                            name={`guest.${index}.name`}
                                                            control={control}
                                                            defaultValue=""
                                                            render={({ field }) => (
                                                                <input
                                                                    {...field}
                                                                    type="text"
                                                                    placeholder={`Nombre completo del acompañante ${index + 1}`}
                                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                                                />
                                                            )}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        )
                                    }
                                </>
                            )
                        }
                        <div className="w-full mt-4 h-10 flex justify-center items-center">
                            <Button text="Enviar" color="#193C69" />
                        </div>
                    </form>
                    <div className="text-sm w-44 mx-auto sm:w-[43%] mt-4">
                        <span className="text-[#193C69] font-josefin-sans-regular">IMPORTANTE</span>
                        <p className="font-josefin-sans-light">Puedes registrar y confirmar tu asistencia hasta antes del <span className="text-[#193C69] font-josefin-sans-regular">15 de junio</span></p>
                    </div>
                </div>
            </Card>
        </Modal>
    );
};