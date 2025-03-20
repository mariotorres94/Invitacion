import { FC } from "react";
import { Header } from "../../components/Header/Header.component";
import { useScreenSize } from "../../assets/hooks/useScreenSize.hook";
import { BgHeader } from "../../assets/images";
import { Main } from "../../components/Main/Main.component";
import { Footer } from '../../components/Footer/Footer.component';

export const Invitation:FC = () => {
    const screenSize = useScreenSize();
    return (
        <div className="w-full overflow-hidden">
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