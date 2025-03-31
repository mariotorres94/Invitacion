import { FC, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../../components/Button/Button.component";
import { useNavigate } from "react-router-dom";
import { useHydratedInvitadosStore } from "../../assets/store/invitados.store";

type FormData = {
    code: string;
};

export const Home: FC = () => {
    const navigate = useNavigate();
    const store = useHydratedInvitadosStore();
    const { invitados, loading, error, fetchInvitados, setInvitadoActual } = store;
    const { control, handleSubmit, formState: { errors }, setError } = useForm<FormData>();
    const onSubmit = (data: FormData) => {
        const codigoIngresado = data.code.trim();
        const invitadoEncontrado = invitados.find(invitado =>
            invitado.ID.toString() === codigoIngresado
        );
        if (invitadoEncontrado) {
            setInvitadoActual(invitadoEncontrado)
            navigate('/invitacion');
        } else {
            setError('code', {
                type: 'manual',
                message: 'Código no válido. Por favor, verifique e intente nuevamente.'
            });
        }
    };
    useEffect(() => {
        if (store._hasHydrated && invitados.length === 0) {
            fetchInvitados();
        }
    }, [store._hasHydrated, invitados.length, fetchInvitados]);
    if (loading) return <div>Cargando ...</div>
    if (error) return <div>Error: {error}</div>
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4">
                <Controller
                    name="code"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Por favor ingresa tu nombre completo' }}
                    render={({ field }) => (
                        <input
                            {...field}
                            type="text"
                            placeholder="Ingrese su código de autorización"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    )}
                />
                {errors.code && <p className="text-red-500 text-sm">{errors.code.message}</p>}
            </div>
            <div className="w-full mt-4 h-10 flex justify-center items-center">
                <Button text="Enviar" color="#193C69" />
            </div>
        </form>
    );
}