// ============================================
// ENGLISH FLASHCARDS PRO
// Développé par Ir. Cosmas MUSAFIRI MUGONGO
// © 2026 - Tous droits réservés
// Dictionnaire : 3000+ mots anglais-français
// Compatible PWA & GitHub Pages
// ============================================

// ============================================
// VOCABULAIRE - PARTIE 1
// ============================================
const vocabulaire = [
    // ==================== SALUTATIONS (30 mots) ====================
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

    // ==================== POLITESSE (20 mots) ====================
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

    // ==================== FAMILLE (20 mots) ====================
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

    // ==================== CORPS HUMAIN (30 mots) ====================
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
    { english: "Finger", french: "Doigt", category: "Corps humain", difficulty: 1 },

    // ==================== NOURRITURE (50 mots) ====================
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

    // ==================== VÊTEMENTS (30 mots) ====================
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
];

// ============================================
// VOCABULAIRE - PARTIE 2 (SUITE)
// ============================================
const vocabulaireSuite1 = [
    // ==================== MAISON (40 mots) ====================
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

    // ==================== ÉCOLE (30 mots) ====================
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

    // ==================== TRAVAIL (30 mots) ====================
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

    // ==================== VOYAGE (30 mots) ====================
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

    // ==================== TEMPS & MÉTÉO (30 mots) ====================
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
    { english: "December", french: "Décembre", category: "Temps & Météo", difficulty: 2 },
];

// ============================================
// FUSION DES TABLEAUX DE VOCABULAIRE
// ============================================
const vocabulaireComplet = vocabulaire.concat(vocabulaireSuite1);

// ============================================
// ÉTAT DE L'APPLICATION
// ============================================
let state = {
    currentCard: 0,
    wordsLearned: [],
    quizQuestions: [],
    currentQuizIndex: 0,
    streak: 0,
    bestStreak: 0,
    totalScore: 0,
    isFlipped: false,
};

// ============================================
// STOCKAGE LOCAL
// ============================================
const STORAGE_KEY = 'english-flashcards-pro-v3';

function loadState() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            state.wordsLearned = parsed.wordsLearned || [];
            state.bestStreak = parsed.bestStreak || 0;
            state.totalScore = parsed.totalScore || 0;
            state.currentCard = parsed.currentCard || 0;
        }
    } catch (e) {
        console.warn('Impossible de charger les données.');
    }
}

function saveState() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            wordsLearned: state.wordsLearned,
            bestStreak: state.bestStreak,
            totalScore: state.totalScore,
            currentCard: state.currentCard,
        }));
    } catch (e) {
        console.warn('Impossible de sauvegarder.');
    }
}

// ============================================
// NAVIGATION
// ============================================
function showSection(sectionName) {
    const sections = {
        'flashcards': 'flashcards-section',
        'quiz': 'quiz-section',
        'stats': 'stats-section',
        'dictionary': 'dictionary-section',
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

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-nav') === sectionName) {
            btn.classList.add('active');
        }
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.classList.remove('active-mobile');
        if (link.getAttribute('data-mobile-nav') === sectionName) {
            link.classList.add('active-mobile');
        }
    });

    if (sectionName === 'quiz') startQuiz();
    if (sectionName === 'stats') updateStats();
    if (sectionName === 'dictionary') displayDictionary();

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// FLASHCARDS
// ============================================
function updateFlashcard() {
    const word = vocabulaireComplet[state.currentCard];
    if (!word) return;

    document.getElementById('english-word').textContent = word.english;
    document.getElementById('french-word').textContent = word.french;
    document.getElementById('category-badge').textContent = word.category;
    document.getElementById('current-card-number').textContent = state.currentCard + 1;
    document.getElementById('total-cards').textContent = vocabulaireComplet.length;

    state.isFlipped = false;
    const cardInner = document.getElementById('card-inner');
    if (cardInner) cardInner.classList.remove('flipped');

    updateProgress();
}

function flipCard() {
    state.isFlipped = !state.isFlipped;
    document.getElementById('card-inner').classList.toggle('flipped');

    const card = document.querySelector('.card-3d');
    if (card) {
        card.style.transform = 'scale(0.96)';
        setTimeout(() => card.style.transform = 'scale(1)', 150);
    }
}

function nextCard() {
    state.currentCard = (state.currentCard + 1) % vocabulaireComplet.length;
    updateFlashcard();
    saveState();
}

function previousCard() {
    state.currentCard = (state.currentCard - 1 + vocabulaireComplet.length) % vocabulaireComplet.length;
    updateFlashcard();
    saveState();
}

function markAsKnown() {
    const word = vocabulaireComplet[state.currentCard];
    if (!word) return;

    if (!state.wordsLearned.includes(word.english)) {
        state.wordsLearned.push(word.english);
        state.totalScore += 10;
        const msg = (window.getCurrentLang && window.getCurrentLang() === 'en') 
            ? `"${word.english}" learned! +10 pts` 
            : `"${word.english}" appris ! +10 pts`;
        createNotification(msg, 'success');
        createConfetti();
        saveState();
    }

    updateProgress();
    updateStats();
    setTimeout(() => nextCard(), 600);
}

function updateProgress() {
    const progress = Math.min((state.wordsLearned.length / vocabulaireComplet.length) * 100, 100);
    const progressBar = document.getElementById('progress-bar');
    const progressPercent = document.getElementById('progress-percentage');
    const streakCounter = document.getElementById('streak-counter');
    const totalScore = document.getElementById('total-score');

    if (progressBar) progressBar.style.width = progress + '%';
    if (progressPercent) progressPercent.textContent = Math.round(progress) + '%';
    if (streakCounter) streakCounter.textContent = state.streak;
    if (totalScore) totalScore.textContent = state.totalScore;
}

// ============================================
// QUIZ
// ============================================
function startQuiz() {
    const shuffled = [...vocabulaireComplet].sort(() => Math.random() - 0.5);
    state.quizQuestions = shuffled.slice(0, 10);
    state.currentQuizIndex = 0;
    state.streak = 0;

    const quizAnswer = document.getElementById('quiz-answer');
    const nextQuizBtn = document.getElementById('next-quiz-btn');
    const quizResult = document.getElementById('quiz-result');

    if (quizAnswer) { quizAnswer.style.display = 'inline-block'; quizAnswer.value = ''; }
    if (nextQuizBtn) nextQuizBtn.classList.add('hidden');
    if (quizResult) quizResult.innerHTML = '';

    displayQuizQuestion();
    setTimeout(() => { if (quizAnswer) quizAnswer.focus(); }, 300);
}

function displayQuizQuestion() {
    if (state.currentQuizIndex >= state.quizQuestions.length) {
        const quizWord = document.getElementById('quiz-word');
        const quizAnswer = document.getElementById('quiz-answer');
        const quizResult = document.getElementById('quiz-result');
        const lang = window.getCurrentLang ? window.getCurrentLang() : 'fr';

        if (quizWord) quizWord.textContent = lang === 'en' ? '🎉 Quiz Complete!' : '🎉 Quiz terminé !';
        if (quizAnswer) quizAnswer.style.display = 'none';
        if (quizResult) quizResult.innerHTML = `<span style="color: var(--success); font-weight: bold;">${lang === 'en' ? 'Score' : 'Score'}: ${state.streak}/10</span>`;
        return;
    }

    document.getElementById('quiz-word').textContent = state.quizQuestions[state.currentQuizIndex].english;
    document.getElementById('quiz-question-number').textContent = state.currentQuizIndex + 1;

    const quizAnswer = document.getElementById('quiz-answer');
    if (quizAnswer) { quizAnswer.value = ''; quizAnswer.style.display = 'inline-block'; }
}

function checkQuizAnswer() {
    const quizAnswer = document.getElementById('quiz-answer');
    if (!quizAnswer) return;

    const userAnswer = quizAnswer.value.trim().toLowerCase();
    const correct = state.quizQuestions[state.currentQuizIndex].french.toLowerCase();
    const lang = window.getCurrentLang ? window.getCurrentLang() : 'fr';

    if (!userAnswer) {
        document.getElementById('quiz-result').innerHTML = `<span style="color: #f59e0b;">${lang === 'en' ? 'Enter an answer' : 'Entrez une réponse'}</span>`;
        return;
    }

    if (userAnswer === correct) {
        state.streak++;
        state.totalScore += 10;
        if (state.streak > state.bestStreak) state.bestStreak = state.streak;
        document.getElementById('quiz-result').innerHTML = `<span style="color: var(--success);">✅ ${lang === 'en' ? 'Perfect!' : 'Parfait !'} +10 pts</span>`;
        createConfetti();
        saveState();
    } else {
        state.streak = 0;
        document.getElementById('quiz-result').innerHTML = `<span style="color: var(--error);">❌ ${lang === 'en' ? 'Answer' : 'Réponse'}: ${state.quizQuestions[state.currentQuizIndex].french}</span>`;
    }

    updateProgress();
    updateStats();

    const nextQuizBtn = document.getElementById('next-quiz-btn');
    if (nextQuizBtn) { nextQuizBtn.classList.remove('hidden'); nextQuizBtn.focus(); }
}

function nextQuizQuestion() {
    state.currentQuizIndex++;
    document.getElementById('next-quiz-btn').classList.add('hidden');
    document.getElementById('quiz-result').innerHTML = '';
    displayQuizQuestion();
    setTimeout(() => {
        const quizAnswer = document.getElementById('quiz-answer');
        if (quizAnswer) quizAnswer.focus();
    }, 200);
}

// ============================================
// STATISTIQUES
// ============================================
function updateStats() {
    const wordsLearnedEl = document.getElementById('stats-words-learned');
    const quizCorrectEl = document.getElementById('stats-quiz-correct');
    const streakEl = document.getElementById('stats-streak');
    const levelBadge = document.getElementById('level-badge');
    const levelText = document.getElementById('level-text');

    if (wordsLearnedEl) wordsLearnedEl.textContent = state.wordsLearned.length;
    if (quizCorrectEl) quizCorrectEl.textContent = state.streak;
    if (streakEl) streakEl.textContent = state.bestStreak;

    let level, emoji;
    const lang = window.getCurrentLang ? window.getCurrentLang() : 'fr';

    if (state.totalScore >= 500) {
        level = 'Expert'; emoji = '🏆';
    } else if (state.totalScore >= 200) {
        level = lang === 'en' ? 'Advanced' : 'Avancé'; emoji = '🌟';
    } else if (state.totalScore >= 50) {
        level = lang === 'en' ? 'Intermediate' : 'Intermédiaire'; emoji = '📚';
    } else {
        level = lang === 'en' ? 'Beginner' : 'Débutant'; emoji = '🌱';
    }

    if (levelBadge) levelBadge.textContent = emoji;
    if (levelText) levelText.textContent = level;
}

// ============================================
// DICTIONNAIRE
// ============================================
function displayDictionary(filter = '') {
    const container = document.getElementById('dictionary-words');
    if (!container) return;
    container.innerHTML = '';

    const filtered = filter
        ? vocabulaireComplet.filter(w =>
            w.english.toLowerCase().includes(filter.toLowerCase()) ||
            w.french.toLowerCase().includes(filter.toLowerCase()) ||
            w.category.toLowerCase().includes(filter.toLowerCase())
        )
        : vocabulaireComplet;

    if (filtered.length === 0) {
        const lang = window.getCurrentLang ? window.getCurrentLang() : 'fr';
        container.innerHTML = `<div class="col-span-full text-center py-12" style="color: var(--text-muted);"><i class="fas fa-search text-4xl mb-3 block"></i><p>${lang === 'en' ? 'No words found' : 'Aucun mot trouvé'}</p></div>`;
        return;
    }

    filtered.forEach(word => {
        const card = document.createElement('div');
        card.className = 'stat-card cursor-pointer';
        card.style.padding = '1rem';
        card.onclick = () => {
            state.currentCard = vocabulaireComplet.indexOf(word);
            showSection('flashcards');
            updateFlashcard();
        };

        const isLearned = state.wordsLearned.includes(word.english);
        const lang = window.getCurrentLang ? window.getCurrentLang() : 'fr';

        card.innerHTML = `
            <span style="display: inline-block; background-color: var(--accent-light); color: var(--accent-text); font-size: 0.7rem; padding: 0.2rem 0.6rem; border-radius: 9999px; margin-bottom: 0.5rem;">${word.category}</span>
            <p style="font-size: 1.1rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.25rem;">${word.english}</p>
            <p style="font-size: 0.85rem; color: var(--text-secondary);">${word.french}</p>
            ${isLearned ? '<span style="color: var(--success); font-size: 0.7rem; margin-top: 0.25rem; display: block;">✓ ' + (lang === 'en' ? 'Learned' : 'Appris') + '</span>' : ''}
        `;
        container.appendChild(card);
    });
}

function searchDictionary() {
    const searchInput = document.getElementById('dictionary-search');
    if (searchInput) displayDictionary(searchInput.value);
}

// ============================================
// NOTIFICATIONS & CONFETTIS
// ============================================
function createNotification(message, type = 'success') {
    const toast = document.createElement('div');
    toast.style.cssText = 'position:fixed;top:5rem;right:1rem;z-index:9999;';
    const bgColor = type === 'success' ? 'var(--success)' : 'var(--accent)';
    toast.innerHTML = `<div style="background-color:${bgColor};color:white;padding:0.75rem 1.25rem;border-radius:var(--radius-md);box-shadow:var(--shadow-lg);font-size:0.9rem;font-weight:500;display:flex;align-items:center;gap:0.5rem;"><i class="fas fa-check-circle"></i>${message}</div>`;
    document.body.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.5s ease'; setTimeout(() => toast.remove(), 500); }, 2500);
}

function createConfetti() {
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

// ============================================
// RACCOURCIS CLAVIER
// ============================================
document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' && e.key !== 'Escape') return;

    const isFlashcards = !document.getElementById('flashcards-section')?.classList.contains('hidden');
    const isQuiz = !document.getElementById('quiz-section')?.classList.contains('hidden');

    if (isFlashcards) {
        if (e.key === ' ') { e.preventDefault(); flipCard(); }
        if (e.key === 'ArrowRight') { e.preventDefault(); nextCard(); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); previousCard(); }
    }

    if (isQuiz && e.key === 'Enter') {
        const nextBtn = document.getElementById('next-quiz-btn');
        if (nextBtn && !nextBtn.classList.contains('hidden')) { e.preventDefault(); nextQuizQuestion(); }
        else { e.preventDefault(); checkQuizAnswer(); }
    }

    const sectionMap = { '1': 'flashcards', '2': 'quiz', '3': 'stats', '4': 'dictionary' };
    if (sectionMap[e.key] && !e.ctrlKey && !e.metaKey) { e.preventDefault(); showSection(sectionMap[e.key]); }
});

// ============================================
// INITIALISATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    console.log(`%c📚 English Flashcards Pro %c| ${vocabulaireComplet.length} mots`, 'font-size:16px;font-weight:bold;color:#0284c7;', 'font-size:12px;color:#64748b;');
    console.log('%c👨‍💻 Développé par Ir. Cosmas MUSAFIRI MUGONGO', 'font-size:11px;color:#94a3b8;font-style:italic;');

    loadState();
    updateFlashcard();
    updateProgress();
    updateStats();
    displayDictionary();
    showSection('flashcards');

    setTimeout(() => { updateProgress(); updateStats(); }, 500);
});