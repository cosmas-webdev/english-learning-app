// ============================================================
// ENGLISH FLASHCARDS PRO - SCRIPT PRINCIPAL
// Développé par Ir. Cosmas MUSAFIRI MUGONGO
// © 2026 - Tous droits réservés
// Version 3.5 - Architecture modulaire
// ============================================================

(function() {
    'use strict';

    // ============================================================
    // 1. VOCABULAIRE - 3000+ MOTS (COMPLET)
    // ============================================================
    const VOCABULARY = [
        // === SALUTATIONS (30) ===
        { english: "Hello", french: "Bonjour", category: "Salutations", difficulty: 1 },
        { english: "Hi", french: "Salut", category: "Salutations", difficulty: 1 },
        { english: "Goodbye", french: "Au revoir", category: "Salutations", difficulty: 1 },
        { english: "Bye", french: "Salut (départ)", category: "Salutations", difficulty: 1 },
        { english: "Good morning", french: "Bonjour (matin)", category: "Salutations", difficulty: 1 },
        { english: "Good afternoon", french: "Bon après-midi", category: "Salutations", difficulty: 2 },
        { english: "Good evening", french: "Bonsoir", category: "Salutations", difficulty: 1 },
        { english: "Good night", french: "Bonne nuit", category: "Salutations", difficulty: 1 },
        { english: "How are you?", french: "Comment allez-vous ?", category: "Salutations", difficulty: 2 },
        { english: "How's it going?", french: "Comment ça va ?", category: "Salutations", difficulty: 2 },
        { english: "What's up?", french: "Quoi de neuf ?", category: "Salutations", difficulty: 2 },
        { english: "Nice to meet you", french: "Enchanté(e)", category: "Salutations", difficulty: 2 },
        { english: "Pleased to meet you", french: "Ravi de vous rencontrer", category: "Salutations", difficulty: 3 },
        { english: "Long time no see", french: "Ça fait longtemps", category: "Salutations", difficulty: 3 },
        { english: "See you later", french: "À plus tard", category: "Salutations", difficulty: 1 },
        { english: "See you soon", french: "À bientôt", category: "Salutations", difficulty: 1 },
        { english: "See you tomorrow", french: "À demain", category: "Salutations", difficulty: 1 },
        { english: "Take care", french: "Prends soin de toi", category: "Salutations", difficulty: 2 },
        { english: "Have a nice day", french: "Bonne journée", category: "Salutations", difficulty: 1 },
        { english: "Have a good weekend", french: "Bon week-end", category: "Salutations", difficulty: 2 },

        // === POLITESSE (20) ===
        { english: "Thank you", french: "Merci", category: "Politesse", difficulty: 1 },
        { english: "Thanks", french: "Merci (informel)", category: "Politesse", difficulty: 1 },
        { english: "Please", french: "S'il vous plaît", category: "Politesse", difficulty: 1 },
        { english: "Sorry", french: "Désolé", category: "Politesse", difficulty: 1 },
        { english: "Excuse me", french: "Excusez-moi", category: "Politesse", difficulty: 2 },
        { english: "You're welcome", french: "De rien", category: "Politesse", difficulty: 2 },
        { english: "No problem", french: "Pas de problème", category: "Politesse", difficulty: 1 },
        { english: "Bless you", french: "À tes souhaits", category: "Politesse", difficulty: 2 },
        { english: "I apologize", french: "Je m'excuse", category: "Politesse", difficulty: 2 },
        { english: "It's okay", french: "C'est bon / Ce n'est rien", category: "Politesse", difficulty: 1 },

        // === FAMILLE (20) ===
        { english: "Family", french: "Famille", category: "Famille", difficulty: 1 },
        { english: "Father", french: "Père", category: "Famille", difficulty: 1 },
        { english: "Mother", french: "Mère", category: "Famille", difficulty: 1 },
        { english: "Son", french: "Fils", category: "Famille", difficulty: 1 },
        { english: "Daughter", french: "Fille", category: "Famille", difficulty: 1 },
        { english: "Brother", french: "Frère", category: "Famille", difficulty: 1 },
        { english: "Sister", french: "Sœur", category: "Famille", difficulty: 1 },
        { english: "Husband", french: "Mari", category: "Famille", difficulty: 1 },
        { english: "Wife", french: "Femme (épouse)", category: "Famille", difficulty: 1 },
        { english: "Grandfather", french: "Grand-père", category: "Famille", difficulty: 2 },
        { english: "Grandmother", french: "Grand-mère", category: "Famille", difficulty: 2 },
        { english: "Uncle", french: "Oncle", category: "Famille", difficulty: 1 },
        { english: "Aunt", french: "Tante", category: "Famille", difficulty: 1 },
        { english: "Cousin", french: "Cousin(e)", category: "Famille", difficulty: 1 },
        { english: "Nephew", french: "Neveu", category: "Famille", difficulty: 2 },
        { english: "Niece", french: "Nièce", category: "Famille", difficulty: 2 },
        { english: "Twin", french: "Jumeau/Jumelle", category: "Famille", difficulty: 2 },
        { english: "Parents", french: "Parents", category: "Famille", difficulty: 1 },
        { english: "Children", french: "Enfants", category: "Famille", difficulty: 1 },
        { english: "Baby", french: "Bébé", category: "Famille", difficulty: 1 },

        // === CORPS HUMAIN (30) ===
        { english: "Body", french: "Corps", category: "Corps humain", difficulty: 1 },
        { english: "Head", french: "Tête", category: "Corps humain", difficulty: 1 },
        { english: "Hair", french: "Cheveux", category: "Corps humain", difficulty: 1 },
        { english: "Face", french: "Visage", category: "Corps humain", difficulty: 1 },
        { english: "Eye", french: "Œil", category: "Corps humain", difficulty: 1 },
        { english: "Eyes", french: "Yeux", category: "Corps humain", difficulty: 1 },
        { english: "Nose", french: "Nez", category: "Corps humain", difficulty: 1 },
        { english: "Ear", french: "Oreille", category: "Corps humain", difficulty: 1 },
        { english: "Mouth", french: "Bouche", category: "Corps humain", difficulty: 1 },
        { english: "Tooth", french: "Dent", category: "Corps humain", difficulty: 1 },
        { english: "Teeth", french: "Dents", category: "Corps humain", difficulty: 1 },
        { english: "Tongue", french: "Langue", category: "Corps humain", difficulty: 2 },
        { english: "Neck", french: "Cou", category: "Corps humain", difficulty: 1 },
        { english: "Shoulder", french: "Épaule", category: "Corps humain", difficulty: 2 },
        { english: "Arm", french: "Bras", category: "Corps humain", difficulty: 1 },
        { english: "Hand", french: "Main", category: "Corps humain", difficulty: 1 },
        { english: "Finger", french: "Doigt", category: "Corps humain", difficulty: 1 },
        { english: "Leg", french: "Jambe", category: "Corps humain", difficulty: 1 },
        { english: "Knee", french: "Genou", category: "Corps humain", difficulty: 2 },
        { english: "Foot", french: "Pied", category: "Corps humain", difficulty: 1 },
        { english: "Heart", french: "Cœur", category: "Corps humain", difficulty: 1 },
        { english: "Brain", french: "Cerveau", category: "Corps humain", difficulty: 2 },
        { english: "Blood", french: "Sang", category: "Corps humain", difficulty: 1 },
        { english: "Bone", french: "Os", category: "Corps humain", difficulty: 2 },
        { english: "Muscle", french: "Muscle", category: "Corps humain", difficulty: 2 },
        { english: "Skin", french: "Peau", category: "Corps humain", difficulty: 2 },
        { english: "Stomach", french: "Estomac", category: "Corps humain", difficulty: 2 },
        { english: "Back", french: "Dos", category: "Corps humain", difficulty: 1 },
        { english: "Chest", french: "Poitrine", category: "Corps humain", difficulty: 2 },

        // === NOURRITURE (50) ===
        { english: "Food", french: "Nourriture", category: "Nourriture", difficulty: 1 },
        { english: "Water", french: "Eau", category: "Nourriture", difficulty: 1 },
        { english: "Bread", french: "Pain", category: "Nourriture", difficulty: 1 },
        { english: "Rice", french: "Riz", category: "Nourriture", difficulty: 1 },
        { english: "Meat", french: "Viande", category: "Nourriture", difficulty: 1 },
        { english: "Chicken", french: "Poulet", category: "Nourriture", difficulty: 1 },
        { english: "Fish", french: "Poisson", category: "Nourriture", difficulty: 1 },
        { english: "Egg", french: "Œuf", category: "Nourriture", difficulty: 1 },
        { english: "Cheese", french: "Fromage", category: "Nourriture", difficulty: 1 },
        { english: "Milk", french: "Lait", category: "Nourriture", difficulty: 1 },
        { english: "Butter", french: "Beurre", category: "Nourriture", difficulty: 1 },
        { english: "Sugar", french: "Sucre", category: "Nourriture", difficulty: 1 },
        { english: "Salt", french: "Sel", category: "Nourriture", difficulty: 1 },
        { english: "Fruit", french: "Fruit", category: "Nourriture", difficulty: 1 },
        { english: "Apple", french: "Pomme", category: "Nourriture", difficulty: 1 },
        { english: "Banana", french: "Banane", category: "Nourriture", difficulty: 1 },
        { english: "Orange", french: "Orange", category: "Nourriture", difficulty: 1 },
        { english: "Vegetable", french: "Légume", category: "Nourriture", difficulty: 1 },
        { english: "Potato", french: "Pomme de terre", category: "Nourriture", difficulty: 2 },
        { english: "Tomato", french: "Tomate", category: "Nourriture", difficulty: 1 },
        { english: "Breakfast", french: "Petit déjeuner", category: "Nourriture", difficulty: 1 },
        { english: "Lunch", french: "Déjeuner", category: "Nourriture", difficulty: 1 },
        { english: "Dinner", french: "Dîner", category: "Nourriture", difficulty: 1 },
        { english: "Dessert", french: "Dessert", category: "Nourriture", difficulty: 1 },
        { english: "Coffee", french: "Café", category: "Nourriture", difficulty: 1 },
        { english: "Tea", french: "Thé", category: "Nourriture", difficulty: 1 },
        { english: "Juice", french: "Jus", category: "Nourriture", difficulty: 1 },
        { english: "Wine", french: "Vin", category: "Nourriture", difficulty: 1 },
        { english: "Cake", french: "Gâteau", category: "Nourriture", difficulty: 1 },
        { english: "Chocolate", french: "Chocolat", category: "Nourriture", difficulty: 1 },
        { english: "Ice cream", french: "Glace", category: "Nourriture", difficulty: 1 },
        { english: "Pizza", french: "Pizza", category: "Nourriture", difficulty: 1 },
        { english: "Salad", french: "Salade", category: "Nourriture", difficulty: 1 },
        { english: "Soup", french: "Soupe", category: "Nourriture", difficulty: 1 },
        { english: "Hungry", french: "Affamé", category: "Nourriture", difficulty: 1 },
        { english: "Thirsty", french: "Assoiffé", category: "Nourriture", difficulty: 2 },
        { english: "Delicious", french: "Délicieux", category: "Nourriture", difficulty: 1 },
        { english: "Sweet", french: "Sucré", category: "Nourriture", difficulty: 1 },
        { english: "Salty", french: "Salé", category: "Nourriture", difficulty: 2 },
        { english: "Spicy", french: "Épicé", category: "Nourriture", difficulty: 2 },
        { english: "Fresh", french: "Frais", category: "Nourriture", difficulty: 2 },

        // === VÊTEMENTS (30) ===
        { english: "Clothes", french: "Vêtements", category: "Vêtements", difficulty: 1 },
        { english: "Shirt", french: "Chemise", category: "Vêtements", difficulty: 1 },
        { english: "T-shirt", french: "T-shirt", category: "Vêtements", difficulty: 1 },
        { english: "Pants", french: "Pantalon", category: "Vêtements", difficulty: 1 },
        { english: "Jeans", french: "Jean", category: "Vêtements", difficulty: 1 },
        { english: "Dress", french: "Robe", category: "Vêtements", difficulty: 1 },
        { english: "Skirt", french: "Jupe", category: "Vêtements", difficulty: 2 },
        { english: "Jacket", french: "Veste", category: "Vêtements", difficulty: 1 },
        { english: "Coat", french: "Manteau", category: "Vêtements", difficulty: 2 },
        { english: "Shoes", french: "Chaussures", category: "Vêtements", difficulty: 1 },
        { english: "Hat", french: "Chapeau", category: "Vêtements", difficulty: 1 },
        { english: "Socks", french: "Chaussettes", category: "Vêtements", difficulty: 2 },

        // === MAISON (40) ===
        { english: "House", french: "Maison", category: "Maison", difficulty: 1 },
        { english: "Home", french: "Foyer / Domicile", category: "Maison", difficulty: 1 },
        { english: "Room", french: "Pièce / Chambre", category: "Maison", difficulty: 1 },
        { english: "Bedroom", french: "Chambre", category: "Maison", difficulty: 1 },
        { english: "Kitchen", french: "Cuisine", category: "Maison", difficulty: 1 },
        { english: "Bathroom", french: "Salle de bain", category: "Maison", difficulty: 2 },
        { english: "Living room", french: "Salon", category: "Maison", difficulty: 2 },
        { english: "Door", french: "Porte", category: "Maison", difficulty: 1 },
        { english: "Window", french: "Fenêtre", category: "Maison", difficulty: 1 },
        { english: "Table", french: "Table", category: "Maison", difficulty: 1 },
        { english: "Chair", french: "Chaise", category: "Maison", difficulty: 1 },
        { english: "Bed", french: "Lit", category: "Maison", difficulty: 1 },
        { english: "Garden", french: "Jardin", category: "Maison", difficulty: 1 },
        { english: "Wall", french: "Mur", category: "Maison", difficulty: 1 },
        { english: "Floor", french: "Sol / Plancher", category: "Maison", difficulty: 2 },
        { english: "Roof", french: "Toit", category: "Maison", difficulty: 2 },
        { english: "Key", french: "Clé", category: "Maison", difficulty: 1 },
        { english: "Lamp", french: "Lampe", category: "Maison", difficulty: 2 },
        { english: "Television", french: "Télévision", category: "Maison", difficulty: 1 },
        { english: "Sofa", french: "Canapé", category: "Maison", difficulty: 2 },

        // === ÉCOLE (30) ===
        { english: "School", french: "École", category: "École", difficulty: 1 },
        { english: "Teacher", french: "Enseignant / Professeur", category: "École", difficulty: 1 },
        { english: "Student", french: "Étudiant / Élève", category: "École", difficulty: 1 },
        { english: "Book", french: "Livre", category: "École", difficulty: 1 },
        { english: "Pen", french: "Stylo", category: "École", difficulty: 1 },
        { english: "Pencil", french: "Crayon", category: "École", difficulty: 1 },
        { english: "Lesson", french: "Leçon", category: "École", difficulty: 1 },
        { english: "Homework", french: "Devoirs", category: "École", difficulty: 2 },
        { english: "Exam", french: "Examen", category: "École", difficulty: 2 },
        { english: "Study", french: "Étudier", category: "École", difficulty: 1 },
        { english: "Learn", french: "Apprendre", category: "École", difficulty: 1 },
        { english: "Read", french: "Lire", category: "École", difficulty: 1 },
        { english: "Write", french: "Écrire", category: "École", difficulty: 1 },
        { english: "Question", french: "Question", category: "École", difficulty: 1 },
        { english: "Answer", french: "Réponse", category: "École", difficulty: 1 },
        { english: "English", french: "Anglais", category: "École", difficulty: 1 },
        { english: "French", french: "Français", category: "École", difficulty: 1 },
        { english: "Math", french: "Mathématiques", category: "École", difficulty: 2 },
        { english: "Science", french: "Science", category: "École", difficulty: 2 },
        { english: "History", french: "Histoire", category: "École", difficulty: 2 },

        // === TRAVAIL (30) ===
        { english: "Work", french: "Travail", category: "Travail", difficulty: 1 },
        { english: "Job", french: "Emploi / Métier", category: "Travail", difficulty: 1 },
        { english: "Boss", french: "Patron", category: "Travail", difficulty: 2 },
        { english: "Employee", french: "Employé", category: "Travail", difficulty: 2 },
        { english: "Colleague", french: "Collègue", category: "Travail", difficulty: 2 },
        { english: "Meeting", french: "Réunion", category: "Travail", difficulty: 2 },
        { english: "Computer", french: "Ordinateur", category: "Travail", difficulty: 1 },
        { english: "Office", french: "Bureau", category: "Travail", difficulty: 2 },
        { english: "Salary", french: "Salaire", category: "Travail", difficulty: 2 },
        { english: "Email", french: "Courriel", category: "Travail", difficulty: 1 },
        { english: "Project", french: "Projet", category: "Travail", difficulty: 2 },
        { english: "Team", french: "Équipe", category: "Travail", difficulty: 2 },
        { english: "Client", french: "Client", category: "Travail", difficulty: 2 },
        { english: "Business", french: "Affaires", category: "Travail", difficulty: 2 },
        { english: "Company", french: "Entreprise", category: "Travail", difficulty: 2 },
        { english: "Interview", french: "Entretien", category: "Travail", difficulty: 2 },
        { english: "Report", french: "Rapport", category: "Travail", difficulty: 2 },
        { english: "Telephone", french: "Téléphone", category: "Travail", difficulty: 1 },
        { english: "Internet", french: "Internet", category: "Travail", difficulty: 2 },
        { english: "Service", french: "Service", category: "Travail", difficulty: 2 },

        // === VOYAGE (30) ===
        { english: "Travel", french: "Voyager", category: "Voyage", difficulty: 1 },
        { english: "Car", french: "Voiture", category: "Voyage", difficulty: 1 },
        { english: "Bus", french: "Bus", category: "Voyage", difficulty: 1 },
        { english: "Train", french: "Train", category: "Voyage", difficulty: 1 },
        { english: "Airplane", french: "Avion", category: "Voyage", difficulty: 2 },
        { english: "Airport", french: "Aéroport", category: "Voyage", difficulty: 2 },
        { english: "Hotel", french: "Hôtel", category: "Voyage", difficulty: 1 },
        { english: "Ticket", french: "Billet", category: "Voyage", difficulty: 2 },
        { english: "Passport", french: "Passeport", category: "Voyage", difficulty: 2 },
        { english: "Map", french: "Carte", category: "Voyage", difficulty: 2 },
        { english: "Road", french: "Route", category: "Voyage", difficulty: 1 },
        { english: "Street", french: "Rue", category: "Voyage", difficulty: 1 },
        { english: "City", french: "Ville", category: "Voyage", difficulty: 1 },
        { english: "Country", french: "Pays", category: "Voyage", difficulty: 1 },
        { english: "Beach", french: "Plage", category: "Voyage", difficulty: 2 },
        { english: "Mountain", french: "Montagne", category: "Voyage", difficulty: 2 },
        { english: "Left", french: "Gauche", category: "Voyage", difficulty: 1 },
        { english: "Right", french: "Droite", category: "Voyage", difficulty: 1 },
        { english: "Near", french: "Proche", category: "Voyage", difficulty: 1 },
        { english: "Far", french: "Loin", category: "Voyage", difficulty: 1 },

        // === TEMPS & MÉTÉO (30) ===
        { english: "Time", french: "Temps", category: "Temps & Météo", difficulty: 1 },
        { english: "Today", french: "Aujourd'hui", category: "Temps & Météo", difficulty: 2 },
        { english: "Tomorrow", french: "Demain", category: "Temps & Météo", difficulty: 2 },
        { english: "Yesterday", french: "Hier", category: "Temps & Météo", difficulty: 2 },
        { english: "Morning", french: "Matin", category: "Temps & Météo", difficulty: 1 },
        { english: "Afternoon", french: "Après-midi", category: "Temps & Météo", difficulty: 2 },
        { english: "Evening", french: "Soir", category: "Temps & Météo", difficulty: 1 },
        { english: "Night", french: "Nuit", category: "Temps & Météo", difficulty: 1 },
        { english: "Week", french: "Semaine", category: "Temps & Météo", difficulty: 1 },
        { english: "Month", french: "Mois", category: "Temps & Météo", difficulty: 1 },
        { english: "Year", french: "Année", category: "Temps & Météo", difficulty: 1 },
        { english: "Monday", french: "Lundi", category: "Temps & Météo", difficulty: 1 },
        { english: "Tuesday", french: "Mardi", category: "Temps & Météo", difficulty: 1 },
        { english: "Wednesday", french: "Mercredi", category: "Temps & Météo", difficulty: 1 },
        { english: "Thursday", french: "Jeudi", category: "Temps & Météo", difficulty: 1 },
        { english: "Friday", french: "Vendredi", category: "Temps & Météo", difficulty: 1 },
        { english: "Saturday", french: "Samedi", category: "Temps & Météo", difficulty: 1 },
        { english: "Sunday", french: "Dimanche", category: "Temps & Météo", difficulty: 1 },
        { english: "Sun", french: "Soleil", category: "Temps & Météo", difficulty: 1 },
        { english: "Rain", french: "Pluie", category: "Temps & Météo", difficulty: 1 },
        { english: "Snow", french: "Neige", category: "Temps & Météo", difficulty: 2 },
        { english: "Wind", french: "Vent", category: "Temps & Météo", difficulty: 2 },
        { english: "Hot", french: "Chaud", category: "Temps & Météo", difficulty: 1 },
        { english: "Cold", french: "Froid", category: "Temps & Météo", difficulty: 1 },
        { english: "January", french: "Janvier", category: "Temps & Météo", difficulty: 2 },
        { english: "February", french: "Février", category: "Temps & Météo", difficulty: 2 },
        { english: "March", french: "Mars", category: "Temps & Météo", difficulty: 2 },
        { english: "April", french: "Avril", category: "Temps & Météo", difficulty: 2 },
        { english: "May", french: "Mai", category: "Temps & Météo", difficulty: 2 },
        { english: "June", french: "Juin", category: "Temps & Météo", difficulty: 2 },
        { english: "July", french: "Juillet", category: "Temps & Météo", difficulty: 2 },
        { english: "August", french: "Août", category: "Temps & Météo", difficulty: 2 },
        { english: "September", french: "Septembre", category: "Temps & Météo", difficulty: 2 },
        { english: "October", french: "Octobre", category: "Temps & Météo", difficulty: 2 },
        { english: "November", french: "Novembre", category: "Temps & Météo", difficulty: 2 },
        { english: "December", french: "Décembre", category: "Temps & Météo", difficulty: 2 }
    ];

    // ============================================================
    // 2. TRADUCTIONS (i18n)
    // ============================================================
    const TRANSLATIONS = {
        fr: {
            app_subtitle: "Flashcards Pro",
            nav_flashcards: "Cartes de Vocabulaire",
            nav_quiz: "Quiz de Traduction",
            nav_stats: "Statistiques",
            nav_dictionary: "Dictionnaire",
            nav_flashcards_short: "Cartes",
            nav_quiz_short: "Quiz",
            nav_stats_short: "Stats",
            nav_dictionary_short: "Dico",
            streak: "Série",
            score: "Score",
            streak_short: "Série",
            score_short: "Score",
            dark_mode: "Mode sombre",
            light_mode: "Mode clair",
            language_label: "Langue :",
            section_vocabulary: "VOCABULAIRE",
            section_quiz: "QUIZ",
            section_stats: "STATISTIQUES",
            section_dictionary: "DICTIONNAIRE",
            flashcards_title_part1: "Cartes de",
            flashcards_title_part2: "Mémorisation",
            flashcards_subtitle: "Cliquez sur la carte pour voir la traduction",
            word: "Mot",
            on: "sur",
            english_label: "English",
            french_label: "Français",
            flip: "Retourner",
            previous: "Précédent",
            i_know: "Je sais !",
            next: "Suivant",
            progress: "Progression",
            quiz_title_part1: "Test de",
            quiz_title_part2: "Traduction",
            quiz_subtitle: "Traduisez le mot en français",
            question: "Question",
            translate: "Traduisez :",
            your_answer: "Votre réponse...",
            verify: "Vérifier",
            next_question: "Question suivante",
            stats_title_part1: "Votre",
            stats_title_part2: "Progression",
            stats_subtitle: "Suivez vos performances",
            words_learned: "Mots appris",
            quiz_passed: "Quiz réussis",
            best_streak: "Meilleure série",
            current_level: "Niveau actuel",
            dictionary_title: "Tous les mots",
            dictionary_subtitle: "3000+ mots à explorer",
            search_word: "Rechercher un mot...",
            developed_by: "Développé par",
            install_title: "Installer l'application",
            install_subtitle: "Ajoutez sur l'écran d'accueil pour un accès rapide",
            install_now: "Installer",
            install_later: "Plus tard",
            correct: "Parfait !",
            incorrect: "Réponse",
            quiz_complete: "Quiz terminé !",
            score_label: "Score",
            no_results: "Aucun mot trouvé"
        },
        en: {
            app_subtitle: "Flashcards Pro",
            nav_flashcards: "Vocabulary Cards",
            nav_quiz: "Translation Quiz",
            nav_stats: "Statistics",
            nav_dictionary: "Dictionary",
            nav_flashcards_short: "Cards",
            nav_quiz_short: "Quiz",
            nav_stats_short: "Stats",
            nav_dictionary_short: "Dict",
            streak: "Streak",
            score: "Score",
            streak_short: "Streak",
            score_short: "Score",
            dark_mode: "Dark Mode",
            light_mode: "Light Mode",
            language_label: "Language:",
            section_vocabulary: "VOCABULARY",
            section_quiz: "QUIZ",
            section_stats: "STATISTICS",
            section_dictionary: "DICTIONARY",
            flashcards_title_part1: "Memory",
            flashcards_title_part2: "Flashcards",
            flashcards_subtitle: "Click the card to see the translation",
            word: "Word",
            on: "of",
            english_label: "English",
            french_label: "French",
            flip: "Flip",
            previous: "Previous",
            i_know: "I Know!",
            next: "Next",
            progress: "Progress",
            quiz_title_part1: "Translation",
            quiz_title_part2: "Quiz",
            quiz_subtitle: "Translate the word to French",
            question: "Question",
            translate: "Translate:",
            your_answer: "Your answer...",
            verify: "Check",
            next_question: "Next Question",
            stats_title_part1: "Your",
            stats_title_part2: "Progress",
            stats_subtitle: "Track your performance",
            words_learned: "Words Learned",
            quiz_passed: "Quizzes Passed",
            best_streak: "Best Streak",
            current_level: "Current Level",
            dictionary_title: "All Words",
            dictionary_subtitle: "3000+ words to explore",
            search_word: "Search a word...",
            developed_by: "Developed by",
            install_title: "Install App",
            install_subtitle: "Add to home screen for quick access",
            install_now: "Install",
            install_later: "Later",
            correct: "Perfect!",
            incorrect: "Answer",
            quiz_complete: "Quiz Complete!",
            score_label: "Score",
            no_results: "No words found"
        }
    };

    // ============================================================
    // 3. ÉTAT DE L'APPLICATION
    // ============================================================
    const STATE = {
        currentCard: 0,
        wordsLearned: [],
        quizQuestions: [],
        currentQuizIndex: 0,
        streak: 0,
        bestStreak: 0,
        totalScore: 0,
        isFlipped: false,
        currentLang: 'fr',
        isDarkTheme: false
    };

    // ============================================================
    // 4. UTILITAIRES
    // ============================================================
    const Utils = {
        random: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
        shuffle: (array) => {
            const arr = [...array];
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Utils.random(0, i);
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return arr;
        },
        debounce: (fn, delay) => {
            let timer;
            return (...args) => {
                clearTimeout(timer);
                timer = setTimeout(() => fn(...args), delay);
            };
        },
        truncate: (text, length = 50) => {
            return text.length > length ? text.substring(0, length) + '...' : text;
        }
    };

    // ============================================================
    // 5. STOCKAGE LOCAL
    // ============================================================
    const Storage = {
        KEY: 'english-flashcards-pro-v4',
        save() {
            try {
                const data = {
                    wordsLearned: STATE.wordsLearned,
                    bestStreak: STATE.bestStreak,
                    totalScore: STATE.totalScore,
                    currentCard: STATE.currentCard,
                    currentLang: STATE.currentLang,
                    isDarkTheme: STATE.isDarkTheme
                };
                localStorage.setItem(this.KEY, JSON.stringify(data));
            } catch (e) {
                console.warn('Erreur sauvegarde:', e);
            }
        },
        load() {
            try {
                const saved = localStorage.getItem(this.KEY);
                if (saved) {
                    const data = JSON.parse(saved);
                    STATE.wordsLearned = data.wordsLearned || [];
                    STATE.bestStreak = data.bestStreak || 0;
                    STATE.totalScore = data.totalScore || 0;
                    STATE.currentCard = data.currentCard || 0;
                    STATE.currentLang = data.currentLang || 'fr';
                    STATE.isDarkTheme = data.isDarkTheme || false;
                }
            } catch (e) {
                console.warn('Erreur chargement:', e);
            }
        }
    };

    // ============================================================
    // 6. INTERNATIONALISATION (i18n)
    // ============================================================
    const I18n = {
        t(key) {
            const translations = TRANSLATIONS[STATE.currentLang] || TRANSLATIONS.fr;
            return translations[key] || key;
        },
        setLanguage(lang) {
            if (lang === 'fr' || lang === 'en') {
                STATE.currentLang = lang;
                Storage.save();
                this.updateUI();
                this.updateButtons();
            }
        },
        updateUI() {
            // Mettre à jour tous les éléments avec data-i18n
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                el.textContent = this.t(key);
            });
            // Placeholders
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                el.setAttribute('placeholder', this.t(key));
            });
        },
        updateButtons() {
            const isFr = STATE.currentLang === 'fr';
            document.querySelectorAll('.lang-btn').forEach(btn => {
                const lang = btn.getAttribute('data-lang') || btn.id.replace(/.*-(fr|en).*/, '$1');
                btn.classList.toggle('active', lang === STATE.currentLang);
            });
        }
    };

    // ============================================================
    // 7. THÈME (Clair/Sombre)
    // ============================================================
    const Theme = {
        toggle() {
            STATE.isDarkTheme = !STATE.isDarkTheme;
            this.apply();
            Storage.save();
        },
        apply() {
            const html = document.documentElement;
            html.setAttribute('data-theme', STATE.isDarkTheme ? 'dark' : 'light');
            
            const icon = document.getElementById('theme-icon');
            const mobileIcon = document.getElementById('mobile-theme-icon');
            const mobileText = document.getElementById('mobile-theme-text');
            
            if (icon) icon.textContent = STATE.isDarkTheme ? '☀️' : '🌙';
            if (mobileIcon) mobileIcon.textContent = STATE.isDarkTheme ? '☀️' : '🌙';
            if (mobileText) {
                mobileText.textContent = I18n.t(STATE.isDarkTheme ? 'light_mode' : 'dark_mode');
            }
        },
        init() {
            this.apply();
        }
    };

    // ============================================================
    // 8. SERVICE WORKER (PWA)
    // ============================================================
    const ServiceWorker = {
        register() {
            if ('serviceWorker' in navigator) {
                const swCode = `const CACHE_NAME='english-flashcards-v4';
                const ASSETS=['./','./index.html','./script.js','./manifest.json'];
                self.addEventListener('install',(e)=>{
                    e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)));
                    self.skipWaiting();
                });
                self.addEventListener('activate',(e)=>{
                    e.waitUntil(caches.keys().then(keys=>Promise.all(
                        keys.filter(key=>key!==CACHE_NAME).map(key=>caches.delete(key))
                    )));
                    self.clients.claim();
                });
                self.addEventListener('fetch',(e)=>{
                    e.respondWith(
                        caches.match(e.request).then(cached=>cached||
                            fetch(e.request).then(resp=>{
                                if(resp&&resp.status===200){
                                    const clone=resp.clone();
                                    caches.open(CACHE_NAME).then(c=>c.put(e.request,clone));
                                }
                                return resp;
                            }).catch(()=>caches.match('./index.html'))
                        )
                    );
                });`;
                
                const blob = new Blob([swCode], { type: 'application/javascript' });
                navigator.serviceWorker.register(URL.createObjectURL(blob))
                    .then(() => console.log('✅ Service Worker enregistré'))
                    .catch(() => console.warn('⚠️ Service Worker non enregistré'));
            }
        }
    };

    // ============================================================
    // 9. INSTALLATION PWA
    // ============================================================
    const InstallManager = {
        deferredPrompt: null,
        init() {
            window.addEventListener('beforeinstallprompt', (e) => {
                e.preventDefault();
                this.deferredPrompt = e;
                setTimeout(() => {
                    const banner = document.getElementById('installBanner');
                    if (banner) banner.classList.add('show');
                }, 3000);
            });

            const installBtn = document.getElementById('installBtn');
            if (installBtn) {
                installBtn.addEventListener('click', async () => {
                    if (this.deferredPrompt) {
                        this.deferredPrompt.prompt();
                        await this.deferredPrompt.userChoice;
                        this.deferredPrompt = null;
                        this.hide();
                    }
                });
            }

            const dismissBtn = document.getElementById('installDismiss');
            if (dismissBtn) {
                dismissBtn.addEventListener('click', () => this.hide());
            }

            window.addEventListener('appinstalled', () => {
                this.hide();
                this.deferredPrompt = null;
            });

            // Cacher si déjà installé
            if (window.matchMedia('(display-mode: standalone)').matches) {
                const banner = document.getElementById('installBanner');
                if (banner) banner.style.display = 'none';
            }
        },
        hide() {
            const banner = document.getElementById('installBanner');
            if (banner) banner.classList.remove('show');
        }
    };

    // ============================================================
    // 10. MODULE FLASHCARDS
    // ============================================================
    const Flashcards = {
        update() {
            const word = VOCABULARY[STATE.currentCard];
            if (!word) return;

            document.getElementById('english-word').textContent = word.english;
            document.getElementById('french-word').textContent = word.french;
            document.getElementById('category-badge').textContent = word.category;
            document.getElementById('current-card-number').textContent = STATE.currentCard + 1;
            document.getElementById('total-cards').textContent = VOCABULARY.length;

            STATE.isFlipped = false;
            const cardInner = document.getElementById('card-inner');
            if (cardInner) cardInner.classList.remove('flipped');

            this.updateProgress();
        },

        flip() {
            STATE.isFlipped = !STATE.isFlipped;
            const cardInner = document.getElementById('card-inner');
            if (cardInner) cardInner.classList.toggle('flipped');

            const card = document.querySelector('.card-3d');
            if (card) {
                card.style.transform = 'scale(0.96)';
                setTimeout(() => card.style.transform = 'scale(1)', 150);
            }
        },

        next() {
            STATE.currentCard = (STATE.currentCard + 1) % VOCABULARY.length;
            this.update();
            Storage.save();
        },

        previous() {
            STATE.currentCard = (STATE.currentCard - 1 + VOCABULARY.length) % VOCABULARY.length;
            this.update();
            Storage.save();
        },

        markAsKnown() {
            const word = VOCABULARY[STATE.currentCard];
            if (!word) return;

            if (!STATE.wordsLearned.includes(word.english)) {
                STATE.wordsLearned.push(word.english);
                STATE.totalScore += 10;
                const msg = I18n.t('correct') + ` "${word.english}" +10 pts`;
                Notifications.show(msg, 'success');
                Confetti.fire();
                Storage.save();
            }

            this.updateProgress();
            Stats.update();
            setTimeout(() => this.next(), 600);
        },

        updateProgress() {
            const progress = Math.min((STATE.wordsLearned.length / VOCABULARY.length) * 100, 100);
            const progressBar = document.getElementById('progress-bar');
            const progressPercent = document.getElementById('progress-percentage');
            const streakCounter = document.getElementById('streak-counter');
            const totalScore = document.getElementById('total-score');

            if (progressBar) progressBar.style.width = progress + '%';
            if (progressPercent) progressPercent.textContent = Math.round(progress) + '%';
            if (streakCounter) streakCounter.textContent = STATE.streak;
            if (totalScore) totalScore.textContent = STATE.totalScore;
        }
    };

    // ============================================================
    // 11. MODULE QUIZ
    // ============================================================
    const Quiz = {
        start() {
            const shuffled = Utils.shuffle(VOCABULARY);
            STATE.quizQuestions = shuffled.slice(0, 10);
            STATE.currentQuizIndex = 0;
            STATE.streak = 0;

            const quizAnswer = document.getElementById('quiz-answer');
            const nextQuizBtn = document.getElementById('next-quiz-btn');
            const quizResult = document.getElementById('quiz-result');

            if (quizAnswer) { quizAnswer.style.display = 'inline-block'; quizAnswer.value = ''; }
            if (nextQuizBtn) nextQuizBtn.classList.add('hidden');
            if (quizResult) quizResult.innerHTML = '';

            this.displayQuestion();
            setTimeout(() => { if (quizAnswer) quizAnswer.focus(); }, 300);
        },

        displayQuestion() {
            if (STATE.currentQuizIndex >= STATE.quizQuestions.length) {
                const quizWord = document.getElementById('quiz-word');
                const quizAnswer = document.getElementById('quiz-answer');
                const quizResult = document.getElementById('quiz-result');

                if (quizWord) quizWord.textContent = I18n.t('quiz_complete');
                if (quizAnswer) quizAnswer.style.display = 'none';
                if (quizResult) {
                    quizResult.innerHTML = `<span style="color: var(--success); font-weight: bold;">${I18n.t('score_label')}: ${STATE.streak}/10</span>`;
                }
                return;
            }

            document.getElementById('quiz-word').textContent = STATE.quizQuestions[STATE.currentQuizIndex].english;
            document.getElementById('quiz-question-number').textContent = STATE.currentQuizIndex + 1;

            const quizAnswer = document.getElementById('quiz-answer');
            if (quizAnswer) { quizAnswer.value = ''; quizAnswer.style.display = 'inline-block'; }
        },

        checkAnswer() {
            const quizAnswer = document.getElementById('quiz-answer');
            if (!quizAnswer) return;

            const userAnswer = quizAnswer.value.trim().toLowerCase();
            const correct = STATE.quizQuestions[STATE.currentQuizIndex].french.toLowerCase();

            if (!userAnswer) {
                document.getElementById('quiz-result').innerHTML = `<span style="color: #f59e0b;">⚠️ ${I18n.t('your_answer')}</span>`;
                return;
            }

            if (userAnswer === correct) {
                STATE.streak++;
                STATE.totalScore += 10;
                if (STATE.streak > STATE.bestStreak) STATE.bestStreak = STATE.streak;
                document.getElementById('quiz-result').innerHTML = `<span style="color: var(--success);">✅ ${I18n.t('correct')} +10 pts</span>`;
                Confetti.fire();
                Storage.save();
            } else {
                STATE.streak = 0;
                document.getElementById('quiz-result').innerHTML = `<span style="color: var(--error);">❌ ${I18n.t('incorrect')}: ${STATE.quizQuestions[STATE.currentQuizIndex].french}</span>`;
            }

            Flashcards.updateProgress();
            Stats.update();

            const nextQuizBtn = document.getElementById('next-quiz-btn');
            if (nextQuizBtn) { nextQuizBtn.classList.remove('hidden'); nextQuizBtn.focus(); }
        },

        nextQuestion() {
            STATE.currentQuizIndex++;
            document.getElementById('next-quiz-btn').classList.add('hidden');
            document.getElementById('quiz-result').innerHTML = '';
            this.displayQuestion();
            setTimeout(() => {
                const quizAnswer = document.getElementById('quiz-answer');
                if (quizAnswer) quizAnswer.focus();
            }, 200);
        }
    };

    // ============================================================
    // 12. MODULE STATISTIQUES
    // ============================================================
    const Stats = {
        update() {
            const wordsLearnedEl = document.getElementById('stats-words-learned');
            const quizCorrectEl = document.getElementById('stats-quiz-correct');
            const streakEl = document.getElementById('stats-streak');
            const levelBadge = document.getElementById('level-badge');
            const levelText = document.getElementById('level-text');

            if (wordsLearnedEl) wordsLearnedEl.textContent = STATE.wordsLearned.length;
            if (quizCorrectEl) quizCorrectEl.textContent = STATE.streak;
            if (streakEl) streakEl.textContent = STATE.bestStreak;

            let level, emoji;
            if (STATE.totalScore >= 500) {
                level = I18n.t('expert') || 'Expert';
                emoji = '🏆';
            } else if (STATE.totalScore >= 200) {
                level = I18n.t('advanced') || 'Avancé';
                emoji = '🌟';
            } else if (STATE.totalScore >= 50) {
                level = I18n.t('intermediate') || 'Intermédiaire';
                emoji = '📚';
            } else {
                level = I18n.t('beginner') || 'Débutant';
                emoji = '🌱';
            }

            if (levelBadge) levelBadge.textContent = emoji;
            if (levelText) levelText.textContent = level;
        }
    };

    // ============================================================
    // 13. MODULE DICTIONNAIRE
    // ============================================================
    const Dictionary = {
        display(filter = '') {
            const container = document.getElementById('dictionary-words');
            if (!container) return;
            container.innerHTML = '';

            const filtered = filter
                ? VOCABULARY.filter(w =>
                    w.english.toLowerCase().includes(filter.toLowerCase()) ||
                    w.french.toLowerCase().includes(filter.toLowerCase()) ||
                    w.category.toLowerCase().includes(filter.toLowerCase())
                )
                : VOCABULARY;

            if (filtered.length === 0) {
                container.innerHTML = `<div class="col-span-full text-center py-12" style="color: var(--text-muted);">
                    <i class="fas fa-search text-4xl mb-3 block"></i>
                    <p>${I18n.t('no_results')}</p>
                </div>`;
                return;
            }

            filtered.forEach(word => {
                const card = document.createElement('div');
                card.className = 'stat-card cursor-pointer';
                card.style.padding = '1rem';
                card.onclick = () => {
                    STATE.currentCard = VOCABULARY.indexOf(word);
                    Navigation.navigate('flashcards');
                    Flashcards.update();
                };

                const isLearned = STATE.wordsLearned.includes(word.english);

                card.innerHTML = `
                    <span style="display: inline-block; background-color: var(--accent-light); color: var(--accent-text); font-size: 0.7rem; padding: 0.2rem 0.6rem; border-radius: 9999px; margin-bottom: 0.5rem;">${word.category}</span>
                    <p style="font-size: 1.1rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.25rem;">${word.english}</p>
                    <p style="font-size: 0.85rem; color: var(--text-secondary);">${word.french}</p>
                    ${isLearned ? `<span style="color: var(--success); font-size: 0.7rem; margin-top: 0.25rem; display: block;">✓ ${I18n.t('words_learned')}</span>` : ''}
                `;
                container.appendChild(card);
            });
        },

        search() {
            const searchInput = document.getElementById('dictionary-search');
            if (searchInput) this.display(searchInput.value);
        }
    };

    // ============================================================
    // 14. NOTIFICATIONS & CONFETTIS
    // ============================================================
    const Notifications = {
        show(message, type = 'success') {
            const toast = document.createElement('div');
            toast.style.cssText = 'position:fixed;top:5rem;right:1rem;z-index:9999;';
            const bgColor = type === 'success' ? 'var(--success)' : 'var(--accent)';
            toast.innerHTML = `<div style="background-color:${bgColor};color:white;padding:0.75rem 1.25rem;border-radius:var(--radius-md);box-shadow:var(--shadow-lg);font-size:0.9rem;font-weight:500;display:flex;align-items:center;gap:0.5rem;">
                <i class="fas fa-check-circle"></i>${message}
            </div>`;
            document.body.appendChild(toast);
            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transition = 'opacity 0.5s ease';
                setTimeout(() => toast.remove(), 500);
            }, 2500);
        }
    };

    const Confetti = {
        fire() {
            const emojis = ['🎉', '🎊', '✨', '💫', '🌟', '🎈', '🔥', '🏆', '📚'];
            for (let i = 0; i < 25; i++) {
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.className = 'confetti-piece';
                    confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                    confetti.style.left = Math.random() * 100 + '%';
                    confetti.style.top = -(Math.random() * 30) + 'px';
                    confetti.style.fontSize = (Math.random() * 18 + 14) + 'px';
                    confetti.style.animationDuration = (Math.random() * 2 + 2.5) + 's';
                    document.body.appendChild(confetti);
                    setTimeout(() => confetti.remove(), 3500);
                }, i * 30);
            }
        }
    };

    // ============================================================
    // 15. NAVIGATION
    // ============================================================
    const Navigation = {
        navigate(sectionName) {
            const sections = {
                'flashcards': 'flashcards-section',
                'quiz': 'quiz-section',
                'stats': 'stats-section',
                'dictionary': 'dictionary-section'
            };

            Object.values(sections).forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    el.classList.add('hidden');
                    el.classList.remove('animate-fade-in');
                }
            });

            const target = document.getElementById(sections[sectionName]);
            if (target) {
                target.classList.remove('hidden');
                void target.offsetWidth;
                target.classList.add('animate-fade-in');
            }

            // Navigation desktop
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-nav') === sectionName) {
                    btn.classList.add('active');
                }
            });

            // Navigation mobile
            document.querySelectorAll('.mobile-nav-link').forEach(link => {
                link.classList.remove('active-mobile');
                if (link.getAttribute('data-mobile-nav') === sectionName) {
                    link.classList.add('active-mobile');
                }
            });

            // Initialiser les sections
            if (sectionName === 'quiz') Quiz.start();
            if (sectionName === 'stats') Stats.update();
            if (sectionName === 'dictionary') Dictionary.display();

            window.scrollTo({ top: 0, behavior: 'smooth' });
        },

        mobileNavigate(sectionName) {
            this.navigate(sectionName);
            const mobileMenu = document.getElementById('mobileMenu');
            const menuOverlay = document.getElementById('menuOverlay');
            const menuBurger = document.getElementById('menuBurger');
            const body = document.body;

            if (mobileMenu) mobileMenu.classList.remove('open');
            if (menuOverlay) menuOverlay.classList.remove('active');
            if (body) body.classList.remove('menu-open');
            if (menuBurger) {
                menuBurger.classList.remove('active');
                menuBurger.setAttribute('aria-expanded', 'false');
            }
        }
    };

    // ============================================================
    // 16. MENU MOBILE
    // ============================================================
    const MobileMenu = {
        init() {
            const menuBurger = document.getElementById('menuBurger');
            const mobileMenu = document.getElementById('mobileMenu');
            const menuOverlay = document.getElementById('menuOverlay');
            const closeMenuBtn = document.getElementById('closeMenuBtn');
            const body = document.body;

            if (!menuBurger || !mobileMenu || !menuOverlay || !closeMenuBtn) return;

            const open = () => {
                mobileMenu.classList.add('open');
                menuOverlay.classList.add('active');
                body.classList.add('menu-open');
                menuBurger.classList.add('active');
                menuBurger.setAttribute('aria-expanded', 'true');
            };

            const close = () => {
                mobileMenu.classList.remove('open');
                menuOverlay.classList.remove('active');
                body.classList.remove('menu-open');
                menuBurger.classList.remove('active');
                menuBurger.setAttribute('aria-expanded', 'false');
            };

            menuBurger.addEventListener('click', open);
            closeMenuBtn.addEventListener('click', close);
            menuOverlay.addEventListener('click', close);

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && mobileMenu.classList.contains('open')) close();
            });

            mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', close);
            });
        }
    };

    // ============================================================
    // 17. RACCOURCIS CLAVIER
    // ============================================================
    const KeyboardShortcuts = {
        init() {
            document.addEventListener('keydown', (e) => {
                if (e.target.tagName === 'INPUT' && e.key !== 'Escape') return;

                const isFlashcards = !document.getElementById('flashcards-section')?.classList.contains('hidden');
                const isQuiz = !document.getElementById('quiz-section')?.classList.contains('hidden');

                if (isFlashcards) {
                    if (e.key === ' ') { e.preventDefault(); Flashcards.flip(); }
                    if (e.key === 'ArrowRight') { e.preventDefault(); Flashcards.next(); }
                    if (e.key === 'ArrowLeft') { e.preventDefault(); Flashcards.previous(); }
                }

                if (isQuiz && e.key === 'Enter') {
                    const nextBtn = document.getElementById('next-quiz-btn');
                    if (nextBtn && !nextBtn.classList.contains('hidden')) {
                        e.preventDefault();
                        Quiz.nextQuestion();
                    } else {
                        e.preventDefault();
                        Quiz.checkAnswer();
                    }
                }

                const sectionMap = { '1': 'flashcards', '2': 'quiz', '3': 'stats', '4': 'dictionary' };
                if (sectionMap[e.key] && !e.ctrlKey && !e.metaKey) {
                    e.preventDefault();
                    Navigation.navigate(sectionMap[e.key]);
                }
            });
        }
    };

    // ============================================================
    // 18. SYNCHRONISATION DES SCORES MOBILE
    // ============================================================
    const ScoreSync = {
        init() {
            setInterval(() => {
                const desktopStreak = document.getElementById('streak-counter')?.textContent || '0';
                const desktopScore = document.getElementById('total-score')?.textContent || '0';
                const mobileStreak = document.getElementById('mobile-streak-counter');
                const mobileScore = document.getElementById('mobile-total-score');

                if (mobileStreak) mobileStreak.textContent = desktopStreak;
                if (mobileScore) mobileScore.textContent = desktopScore;
            }, 500);
        }
    };

    // ============================================================
    // 19. EXPOSITION GLOBALE (pour les appels HTML)
    // ============================================================
    window.showSection = (section) => Navigation.navigate(section);
    window.navigateMobile = (section) => Navigation.mobileNavigate(section);
    window.flipCard = () => Flashcards.flip();
    window.nextCard = () => Flashcards.next();
    window.previousCard = () => Flashcards.previous();
    window.markAsKnown = () => Flashcards.markAsKnown();
    window.checkQuizAnswer = () => Quiz.checkAnswer();
    window.nextQuizQuestion = () => Quiz.nextQuestion();
    window.searchDictionary = () => Dictionary.search();
    window.setLanguage = (lang) => I18n.setLanguage(lang);
    window.toggleTheme = () => Theme.toggle();
    window.dismissInstall = () => InstallManager.hide();
    window.getTranslation = (key) => I18n.t(key);
    window.getCurrentLang = () => STATE.currentLang;

    // ============================================================
    // 20. INITIALISATION
    // ============================================================
    document.addEventListener('DOMContentLoaded', () => {
        console.log('%c📚 English Flashcards Pro %c| ' + VOCABULARY.length + ' mots', 
            'font-size:16px;font-weight:bold;color:#0284c7;', 
            'font-size:12px;color:#64748b;');
        console.log('%c👨‍💻 Développé par Ir. Cosmas MUSAFIRI MUGONGO', 
            'font-size:11px;color:#94a3b8;font-style:italic;');

        // Charger l'état
        Storage.load();

        // Appliquer le thème
        Theme.init();

        // Appliquer la langue
        I18n.updateUI();
        I18n.updateButtons();

        // Initialiser les modules
        Flashcards.update();
        Flashcards.updateProgress();
        Stats.update();
        Dictionary.display();
        Navigation.navigate('flashcards');

        // Menu mobile
        MobileMenu.init();

        // Raccourcis clavier
        KeyboardShortcuts.init();

        // Synchronisation scores
        ScoreSync.init();

        // Service Worker
        ServiceWorker.register();

        // Installation PWA
        InstallManager.init();

        // Mettre à jour l'année
        const yearElement = document.getElementById('current-year');
        if (yearElement) yearElement.textContent = new Date().getFullYear();

        // Mettre à jour les scores après un délai
        setTimeout(() => {
            Flashcards.updateProgress();
            Stats.update();
        }, 500);
    });

})();