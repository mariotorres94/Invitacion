const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
};

export const handleLinkClick = (link: string) => {
    let targetId = '';

    switch (link) {
        case 'Confirmar asistencia':
            targetId = 'confirm-button';
            scrollToSection(targetId);
            setTimeout(() => {
                const confirmButton = document.querySelector('#confirm-button') as HTMLElement;
                if (confirmButton) {
                    confirmButton.click();
                }
            }, 500);
            break;
        case 'Programación':
            targetId = 'programacion-section';
            scrollToSection(targetId);
            break;
        case 'Detalles a considerar':
            targetId = 'dresscode-section';
            scrollToSection(targetId);
            break;
        default:
            break;
    }
};