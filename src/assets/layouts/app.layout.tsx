import { FC } from "react";
import { Home } from "../../pages/Home/Home.pages";
import { Routes, Route } from "react-router-dom";
import { Invitation } from "../../pages/Invitation/Invitation.pages";

export const AppLayout: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/invitacion" element={<Invitation />}></Route>
        </Routes>
        // <div className="flex w-full min-h-screen bg-[#93b7c4]/[0.08]">
        //     <div className="flex w-full min-h-screen">
        //         <Home />
        //     </div>
        // </div>
    )
}