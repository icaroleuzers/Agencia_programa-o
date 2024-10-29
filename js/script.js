<script>
document.addEventListener('DOMContentLoaded', function() {
    // Função para alternar o ícone do menu no mobile
    function toggleMenuIcon() {
        const menuButton = document.getElementById('mobileMenuButton');
        
        if (menuButton) {
            menuButton.classList.toggle('active');
        } else {
            console.error('Elemento #mobileMenuButton não encontrado');
        }
    }

    // Função para rolar suavemente até o formulário ao clicar no botão "Entre em contato"
    const contactButton = document.getElementById('contactButton');
    if (contactButton) {
        contactButton.addEventListener('click', function() {
            const form = document.getElementById('contactForm');
            if (form) {
                form.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                console.error('Elemento #contactForm não encontrado');
            }
        });
    } else {
        console.error('Elemento #contactButton não encontrado');
    }

    // Função para exibir a mensagem de confirmação ao enviar o formulário
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Previne o envio real do formulário
            
            // Exibe a mensagem de confirmação
            alert('Mensagem enviada com sucesso!');
            
            // Limpa os campos do formulário após o envio
            contactForm.reset();
        });
    } else {
        console.error('Elemento #contactForm não encontrado');
    }
});
</script>
