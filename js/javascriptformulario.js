<meta charset="UTF-8"></meta>
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('inscripcionForm');

    form.addEventListener('submit', (event) => {
        let edadInput = form.elements['edad'];
        let emailInput = form.elements['email'];
        let edad = parseInt(edadInput.value, 10);
        let email = emailInput.value.trim();

        if (isNaN(edad) || edad < 6) {
            alert('La edad debe ser al menos 6 años.');
            edadInput.focus();
            event.preventDefault();
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, introduce un correo electrónico válido.');
            emailInput.focus();
            event.preventDefault();
            return;
        }
    });
});