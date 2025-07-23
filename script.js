   // --- LOGIQUE DE VALIDATION EN JAVASCRIPT ---

        // On sélectionne les éléments du HTML dont on a besoin
        const form = document.getElementById('loginForm');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');

        // On écoute l'événement "submit" sur le formulaire
        form.addEventListener('submit', function(event) {
            // On empêche le comportement par défaut du formulaire (qui est de recharger la page)
            event.preventDefault();

            let isFormValid = true;

            // --- Validation de l'email ---
            // Un "regex" simple pour vérifier que le format de l'email est correct
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput.value.trim() === '' || !emailRegex.test(emailInput.value)) {
                emailError.classList.add('visible');
                isFormValid = false;
            } else {
                emailError.classList.remove('visible');
            }

            // --- Validation du mot de passe ---
            if (passwordInput.value.trim() === '') {
                passwordError.classList.add('visible');
                isFormValid = false;
            } else {
                passwordError.classList.remove('visible');
            }

            // Si le formulaire est valide, on peut continuer
            if (isFormValid) {
                // Pour la démo, on affiche une simple alerte.
                // Dans une vraie application, c'est ici qu'on enverrait les données à un serveur.
                alert('Connexion réussie ! (simulation)');
            }
        });
