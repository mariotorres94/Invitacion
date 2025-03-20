import { FC } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import useModal from '../../assets/hooks/modal.hook';

const backdropVariants: Variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

const modalVariants = (direction: 'up' | 'down' | undefined): Variants => ({
    hidden: { opacity: 0, y: direction === 'down' ? '100vh' : '-100vh' },
    visible: { opacity: 1, y: '0', transition: { delay: 0.2 } },
});

type ModalProps = {
    modalId: string;
    children: React.ReactNode;
    showCloseButton?: boolean;
    width?: string;
    height?: string;
    className?: string;
    hideOnBackdropClick?: boolean;
    high?: boolean;
    end?: boolean;
    direction?: 'up' | 'down';
    backdropVariants?: Variants;
    modalVariants?: Variants;
};

const hasWidthInClassName = (className: string | undefined) => {
    return className ? /w-\d+\/\d+|w-\d+/.test(className) : false;
};

export const Modal: FC<ModalProps> = ({
    modalId,
    children,
    width,
    height = 'auto',
    className,
    high,
    end,
    direction = 'up',
    hideOnBackdropClick = true,
    backdropVariants: customBackdropVariants,
    modalVariants: customModalVariants,
}) => {
    const { modals, hideModal } = useModal();
    const showModal = modals[modalId];
    const computedWidth = hasWidthInClassName(className) ? undefined : width;
    const styleHigh = high === undefined ? 'items-center md:items-center' : 'items-start md:items-start';

    const handleBackdropClick = () => {
        if (hideOnBackdropClick) {
            hideModal(modalId);
        }
    };

    return (
        <AnimatePresence>
        {showModal && (
            <motion.div
                className={`fixed inset-0 bg-black bg-opacity-50 z-[600] flex ${end !== undefined ? 'items-end md:items-end' : styleHigh} justify-center overflow-y-scroll`}
                variants={customBackdropVariants || backdropVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                onClick={handleBackdropClick}
            >
                <motion.div
                    className={`bg-white ${end !== undefined ? 'rounded-t-[20px]' : 'rounded-lg'} shadow-lg py-1 pl-1 ${className}`}
                    style={{ width: computedWidth, height }}
                    variants={customModalVariants || modalVariants(direction)}
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </motion.div>
            </motion.div>
        )}
        </AnimatePresence>
    );
};