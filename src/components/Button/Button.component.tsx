import { FC } from "react";
import { motion } from "framer-motion";
import { Location } from "../../assets/images";

interface ButtonProps {
    id?: string;
    text: string;
    color?: string;
    icon?: boolean;
    href?: string;
    onclick?: () => void;
    target?: "_blank" | "_self";
    disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({ id, text, color, icon, href, onclick, target = "_self", disabled = false }) => {
    const handleClick = () => {
        if (disabled) return;
        if (href) {
            if (target === "_blank") {
                window.open(href, "_blank");
            } else {
                window.location.href = href;
            }
        } else if (onclick) {
            onclick();
        }
    };
    return (
        <motion.button
            id={id}
            onClick={handleClick}
            disabled={disabled}
            style={{
                backgroundColor: disabled ? '#9CA3AF' : color
            }}
            className={`
                w-full h-full flex gap-2 items-center justify-center py-1 rounded-md
                text-white font-poppins text-[12px] md:text-lg px-4
                ${disabled ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'}
            `}
            initial={{ scale: 1 }}
            animate={{
                scale: disabled ? 1 : [1, 1.03, 1],
                transition: {
                    repeat: disabled ? 0 : Infinity,
                    repeatType: "loop",
                    duration: 1.5,
                    ease: "easeInOut"
                }
            }}
            whileHover={{
                scale: disabled ? 1 : 1.05,
                transition: { duration: 0.2 }
            }}
            whileTap={{
                scale: disabled ? 1 : 0.98,
                transition: { duration: 0.1 }
            }}
        >
            {icon && <motion.img
                src={Location}
                alt="Location"
                className="w-4 md:w-6"
                animate={{
                    x: disabled ? 0 : [0, 2, -2, 0],
                    transition: {
                        repeat: disabled ? 0 : Infinity,
                        duration: 2
                    }
                }}
            />}
            <motion.span
                animate={{
                    opacity: disabled ? 1 : [1, 0.9, 1],
                    transition: {
                        repeat: disabled ? 0 : Infinity,
                        duration: 1.5
                    }
                }}
            >
                {text}
            </motion.span>
        </motion.button>
    )
}