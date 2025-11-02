// Configuración de toasts
const TOAST_CONFIG = {
    // Toast de bienvenida del asistente
    welcome: {
        id: 'welcomeToast',
        delay: 7000,           // Duración en pantalla (ms)
        initialDelay: 1000     // Retraso antes de mostrar (ms)
    },
    // Toasts rotativos de anuncios
    announcements: {
        ids: ['toastPago', 'toastPrecios', 'toastSolucion'],
        delay: 9000,                // Duración de cada toast (ms)
        rotationInterval: 30000,    // Intervalo entre toasts (ms)
        initialDelay: 3000          // Retraso antes de iniciar rotación (ms)
    }
};

/**
 * Muestra un toast con configuración personalizada
 * @param {string} toastId - ID del elemento toast
 * @param {number} delay - Duración en pantalla (ms)
 */
function showToast(toastId, delay) {
    const toastElement = document.getElementById(toastId);
    if (toastElement) {
        const toast = new bootstrap.Toast(toastElement, { 
            delay: delay,
            autohide: true 
        });
        toast.show();
    }
}

/**
 * Inicializa el toast de bienvenida del asistente
 */
function initWelcomeToast() {
    setTimeout(() => {
        showToast(TOAST_CONFIG.welcome.id, TOAST_CONFIG.welcome.delay);
    }, TOAST_CONFIG.welcome.initialDelay);
}

/**
 * Inicializa el sistema de rotación de toasts de anuncios
 */
function initAnnouncementToasts() {
    let currentToastIndex = 0;
    const announcementIds = TOAST_CONFIG.announcements.ids;

    function showNextAnnouncement() {
        const toastId = announcementIds[currentToastIndex];
        showToast(toastId, TOAST_CONFIG.announcements.delay);
        currentToastIndex = (currentToastIndex + 1) % announcementIds.length;
    }

    // Mostrar primer toast después del delay inicial
    setTimeout(() => {
        showNextAnnouncement();
        // Continuar rotación cada intervalo configurado
        setInterval(showNextAnnouncement, TOAST_CONFIG.announcements.rotationInterval);
    }, TOAST_CONFIG.announcements.initialDelay);
}

/**
 * Inicializa todos los sistemas de toasts
 */
document.addEventListener('DOMContentLoaded', function() {
    initWelcomeToast();
    initAnnouncementToasts();
});
