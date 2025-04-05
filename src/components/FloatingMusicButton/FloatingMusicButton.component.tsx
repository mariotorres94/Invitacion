import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faVolumeMute, faHeart } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { Music } from "../../assets/music";
import { useInvitadosStore } from "../../assets/store/invitados.store";

export default function FloatingMusicButton() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [hearts, setHearts] = useState<{id: number, x: number}[]>([]);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { shouldPlayMusic, setShouldPlayMusic } = useInvitadosStore();

    useEffect(() => {
        audioRef.current = new Audio(`${Music}`);
        audioRef.current.loop = true;
        audioRef.current.muted = true;

        return () => {
            audioRef.current?.pause();
        };
    }, []);

    useEffect(() => {
        if (shouldPlayMusic && audioRef.current) {
            audioRef.current.muted = false;
            audioRef.current.play()
                .then(() => {
                    setIsPlaying(true);
                    setShouldPlayMusic(false);
                })
                .catch(e => console.error("Error al reproducir automáticamente:", e));
        }
    }, [shouldPlayMusic, setShouldPlayMusic]);

    useEffect(() => {
        if (!isPlaying) {
            setHearts([]);
            return;
        }

        const interval = setInterval(() => {
            setHearts(prev => [
                ...prev.slice(-5),
                { id: Date.now(), x: Math.random() * 40 - 20 }
            ]);
        }, 800);

        return () => clearInterval(interval);
    }, [isPlaying]);

    const toggleMusic = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(console.error);
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div
            ref={containerRef}
            className="fixed bottom-6 right-6 z-50"
        >
            <button
                onClick={toggleMusic}
                className="relative bg-white/60 backdrop-blur-sm border-2 border-dusty-blue-500 hover:border-dusty-blue-600 text-dusty-blue-500 p-4 rounded-full shadow-lg transition-all hover:scale-110"
            >
                <FontAwesomeIcon
                    icon={isPlaying ? faVolumeMute : faMusic}
                    className="text-xl text-[#98b1ce]"
                />
                <AnimatePresence>
                    {hearts.map((heart) => (
                        <motion.div
                            key={heart.id}
                            initial={{
                                opacity: 1,
                                x: `calc(50% + ${heart.x}px)`,
                                y: 0,
                                scale: 0.6,
                                position: 'absolute',
                                bottom: 8,
                                left: '50%'
                            }}
                            animate={{
                                y: -80,
                                opacity: 0,
                                scale: 1.2,
                                rotate: [0, 15, -10, 0]
                            }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: 1.8,
                                ease: "easeOut"
                            }}
                            className="text-red-300 pointer-events-none"
                            style={{
                                originX: 0.5,
                                originY: 1
                            }}
                        >
                            <FontAwesomeIcon icon={faHeart} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </button>
        </div>
    );
}