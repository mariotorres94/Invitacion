import { FC } from "react";
import { Header } from "../../components/Header/Header.component";
import { useScreenSize } from "../../assets/hooks/useScreenSize.hook";
import { BgHeader } from "../../assets/images";
import { Main } from "../../components/Main/Main.component";
import { Footer } from '../../components/Footer/Footer.component';
import { Loading } from "../../components/Loading/Loading.component";
import { useLoading } from "../../assets/hooks/useLoading.hook";

export const Invitation:FC = () => {
    const screenSize = useScreenSize();
    const { isLoading } = useLoading();
    return (
        <div className="w-full overflow-hidden">
            {isLoading && <Loading />}
            <Header
                bgImage={BgHeader}
                title="Yuri & Mario"
                subTitle="“El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso”"
                date="26 de Julio, 2025"
                typeScreen={screenSize}
                versicule="I Corintios 13:4-8"
            />
            <Main />
            <Footer
                logo="Yuri & Mario"
                links={['Confirmar asistencia', 'Programación', 'Detalles a considerar']}
                mensaje="Creado con ❤️ por MAYU"
                wedding="Gloria Galvez (Weeding Planner)"
            />
        </div>
    );
}