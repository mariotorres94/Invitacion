import { useState, useEffect } from "react";

type ScreenSize = "mobile" | "tablet" | "laptop" | "desktop";

export const useScreenSize = (): ScreenSize => {
    const getSize = (): ScreenSize => {
        const width = window.innerWidth;
        if (width < 640) return "mobile";
        if (width < 1024) return "tablet";
        if (width < 1280) return "laptop";
        return "desktop";
    };

    const [screenSize, setScreenSize] = useState<ScreenSize>(getSize);

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(getSize());
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return screenSize;
};
