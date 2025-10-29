document.addEventListener('DOMContentLoaded', function() {

    // 1. Selecciona los elementos por sus IDs
    const panel = document.getElementById('chatbotPanel');
    const btnAbrir = document.getElementById('chatbotOpenBtn');
    const btnCerrar = document.getElementById('chatbotCloseBtn');

    // Revisa si los elementos existen
    if (panel && btnAbrir && btnCerrar) {
        
        // 2. Función para ABRIR el panel
        function abrirPanel() {
            panel.classList.add('is-open');
            document.body.classList.add('chatbot-open');
        }

        // 3. Función para CERRAR el panel
        function cerrarPanel() {
            panel.classList.remove('is-open');
            document.body.classList.remove('chatbot-open');
        }

        // 4. Asigna los eventos de clic
        btnAbrir.addEventListener('click', abrirPanel);
        btnCerrar.addEventListener('click', cerrarPanel);

        // 5. Opcional: Cerrar con la tecla ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && panel.classList.contains('is-open')) {
                cerrarPanel();
            }
        });
    
    } else {
        console.error("Error: No se encontraron los elementos del chat personalizado.");
        if (!panel) console.error("Falta: #chatbotPanel");
        if (!btnAbrir) console.error("Falta: #chatbotOpenBtn");
        if (!btnCerrar) console.error("Falta: #chatbotCloseBtn");
    }
});