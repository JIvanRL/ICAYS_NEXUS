// Efecto de escritura tipo máquina de escribir con luz para ICAYS
document.addEventListener('DOMContentLoaded', function() {
    const topLetters = document.querySelectorAll('#icays-light-top .icays-typewriter-letter');
    const bottomLetters = document.querySelectorAll('#icays-light-bottom .icays-typewriter-letter');
    
    function typeWriterEffect(letters, delay = 200) {
        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.classList.add('visible');
            }, index * delay);
        });
    }
    
    // Animar las letras superiores e inferiores
    typeWriterEffect(topLetters, 150);
    typeWriterEffect(bottomLetters, 150);
    
    // Repetir la animación cada 5 segundos
    setInterval(() => {
        // Remover la clase visible
        topLetters.forEach(letter => letter.classList.remove('visible'));
        bottomLetters.forEach(letter => letter.classList.remove('visible'));
        
        // Volver a animar después de un breve delay
        setTimeout(() => {
            typeWriterEffect(topLetters, 150);
            typeWriterEffect(bottomLetters, 150);
        }, 500);
    }, 5000);
});
