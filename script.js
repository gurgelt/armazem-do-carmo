document.addEventListener('DOMContentLoaded', () => {

    // --- Efeito da Navbar ao Rolar ---
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });


    // --- Rolagem Suave para links âncora ---
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Previne o comportamento padrão do link
            e.preventDefault();
            
            // Pega o ID da seção (ex: '#sobre')
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Calcula a posição da seção
            const offsetTop = targetSection.offsetTop;

            // Rola suavemente até a posição
            window.scrollTo({
                top: offsetTop - 70, // -70 para compensar a altura da navbar fixa
                behavior: 'smooth'
            });
        });
    });

});