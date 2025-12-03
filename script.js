document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. Animaciones de entrada (Scroll Fade-in)
    // ==========================================
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Opcional: dejar de observar una vez animado
                // observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // ==========================================
    // 2. Menú Hamburguesa para Móvil
    // ==========================================
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            const isClosed = navLinks.style.display === 'none' || navLinks.style.display === '';
            
            if (!isClosed) {
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
                navLinks.style.zIndex = '1000';
            }
        });
    }

    // ==========================================
    // 3. Demo Botón de Voz (Solo página Bot)
    // ==========================================
    const voiceBtn = document.getElementById('voiceDemoBtn');
    if (voiceBtn) {
        voiceBtn.addEventListener('click', () => {
            voiceBtn.style.background = "#ff4444"; 
            voiceBtn.style.animation = "none";
            
            setTimeout(() => {
                alert("Siembra Bot: Escuché tu comando. Procesando respuesta...");
                voiceBtn.style.background = ""; 
                voiceBtn.style.animation = "pulse 2s infinite";
            }, 1000);
        });
    }
    
    // NOTA: Se ha eliminado la lógica del carrusel (Paso 4)
});

// ==========================================
    // 5. Carrusel Automático (Sección De la Tierra a la Nube)
    // ==========================================
    const carouselImages = document.querySelectorAll('.carousel-img');
    
    if (carouselImages.length > 0) {
        let currentImgIndex = 0;
        const changeInterval = 3500; // Tiempo en milisegundos (3.5 segundos)

        setInterval(() => {
            // 1. Quitar la clase 'active' de la imagen actual
            carouselImages[currentImgIndex].classList.remove('active');

            // 2. Calcular el índice de la siguiente imagen
            currentImgIndex = (currentImgIndex + 1) % carouselImages.length;

            // 3. Agregar la clase 'active' a la siguiente imagen
            carouselImages[currentImgIndex].classList.add('active');
        }, changeInterval);
    }