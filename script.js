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


    // --- Menu Mobile Toggle ---
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }


    // --- Rolagem Suave para links âncora ---
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Previne o comportamento padrão do link
            e.preventDefault();
            
            // Fecha o menu mobile se estiver aberto
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
            
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