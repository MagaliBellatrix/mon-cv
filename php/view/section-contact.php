<section class="section-contact">
            <h2>Formulaire de contact</h2>
            <form method="POST" action="api-json.php">
            <label for="nom">
                    <input type="text" name="nom" required placeholder="Entrez votre nom">
                </label>
                <label for="email">
                    <input type="email" name="email" required placeholder="Entrez votre email">
                </label>
                <label for="message">
                    <textarea name="message" cols="80" rows="5" required placeholder="Entrez votre message"></textarea>
                </label>
                <button type="submit">ENVOYER VOTRE MESSAGE</button>
                <div class="confirmation">
                    <!-- ICI AVEC AJAX, ON AFFICHERA LE MESSAGE DE CONFIRMATION -->
                </div>
                <!-- INFO TECHNIQUE POUR DIFFERENCIER LES FORMULAIRES -->
                <input type="hidden" name="idFormulaire" value="contact">
            </form>
        </section>