import { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingProps {
    message?: string;
    spinnerColor?: string;
    textColor?: string;
    size?: 'sm' | 'md' | 'lg';
    isVisible?: boolean;
}

export const Loading: FC<LoadingProps> = ({
    message = 'Enviando...',
    spinnerColor = 'border-t-blue-500',
    textColor = 'text-gray-800',
    size = 'md',
    isVisible = true,
}) => {
    const sizeClasses = {
        sm: {
            spinner: 'w-8 h-8 border-2',
            text: 'text-sm',
            container: 'p-4',
        },
        md: {
            spinner: 'w-12 h-12 border-4',
            text: 'text-lg',
            container: 'p-8',
        },
        lg: {
            spinner: 'w-16 h-16 border-4',
            text: 'text-xl',
            container: 'p-10',
        },
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    key="loading-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999]"
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backdropFilter: 'blur(2px)',
                    }}
                >
                    <motion.div
                        key="loading-content"
                        initial={{ y: -20, scale: 0.95 }}
                        animate={{ y: 0, scale: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ type: 'spring', damping: 10, stiffness: 100 }}
                        className={`bg-white rounded-xl shadow-xl flex flex-col items-center max-w-xs text-center ${sizeClasses[size].container}`}
                        style={{
                            zIndex: 10000,
                        }}
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 1
                            }}
                            className={`${sizeClasses[size].spinner} border-gray-200 rounded-full mb-4 ${spinnerColor}`}
                        />

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.3 }}
                            className={`mt-4 font-medium ${sizeClasses[size].text} ${textColor}`}
                        >
                            {message}
                        </motion.p>

                        <motion.div className="flex mt-4">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    className={`w-2 h-2 rounded-full mx-1 ${spinnerColor.replace('border-t-', 'bg-')}`}
                                    animate={{
                                        y: [0, -5, 0],
                                        opacity: [0.6, 1, 0.6]
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 1.2,
                                        delay: i * 0.2,
                                        repeatType: 'reverse'
                                    }}
                                />
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};