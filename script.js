document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Animaciones de entrada (Scroll Fade-in)
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // 2. Menú Hamburguesa para Móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            // Alternar visibilidad del menú en móvil (requeriría un poco de CSS extra para hacerlo "dropdown", 
            // pero funcionalmente esto permitiría añadir la clase)
            if(navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.right = '0';
                navLinks.style.background = '#19291D';
                navLinks.style.width = '100%';
                navLinks.style.padding = '1rem';
            }
        });
    }

    // 3. Demo Botón de Voz (Solo en página Bot)
    const voiceBtn = document.getElementById('voiceDemoBtn');
    if (voiceBtn) {
        voiceBtn.addEventListener('click', () => {
            voiceBtn.style.background = "#ff4444"; // Cambia a rojo
            voiceBtn.style.animation = "none";
            
            // Simula escucha por 2 segundos
            setTimeout(() => {
                alert("Siembra Bot: Escuché tu comando. Procesando respuesta...");
                voiceBtn.style.background = ""; // Vuelve a verde
                voiceBtn.style.animation = "pulse 2s infinite";
            }, 1000);
        });
    }
});