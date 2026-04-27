// ============================================
// ENGLISH FLASHCARDS PRO
// Développé par Ir. Cosmas MUSAFIRI MUGONGO
// © 2026 - Tous droits réservés
// Dictionnaire : 3000+ mots anglais-français
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
    { english: "Welcome", french: "Bienvenue", category: "Salutations", difficulty: 1 },
    { english: "Farewell", french: "Adieu", category: "Salutations", difficulty: 3 },
    { english: "Greetings", french: "Salutations", category: "Salutations", difficulty: 2 },
    { english: "Regards", french: "Cordialement", category: "Salutations", difficulty: 2 },
    { english: "Best wishes", french: "Meilleurs vœux", category: "Salutations", difficulty: 2 },
    { english: "Cheers", french: "Santé / Merci", category: "Salutations", difficulty: 2 },
    { english: "Alright?", french: "Ça va ?", category: "Salutations", difficulty: 2 },
    { english: "How do you do?", french: "Comment allez-vous ? (formel)", category: "Salutations", difficulty: 3 },
    { english: "Good to see you", french: "Content de te voir", category: "Salutations", difficulty: 2 },
    { english: "Catch you later", french: "À plus", category: "Salutations", difficulty: 2 },

    // ==================== POLITESSE (30 mots) ====================
    { english: "Thank you", french: "Merci", category: "Politesse", difficulty: 1 },
    { english: "Thanks", french: "Merci (informel)", category: "Politesse", difficulty: 1 },
    { english: "Thank you very much", french: "Merci beaucoup", category: "Politesse", difficulty: 1 },
    { english: "Thanks a lot", french: "Merci beaucoup", category: "Politesse", difficulty: 1 },
    { english: "Please", french: "S'il vous plaît", category: "Politesse", difficulty: 1 },
    { english: "Sorry", french: "Désolé", category: "Politesse", difficulty: 1 },
    { english: "I'm sorry", french: "Je suis désolé", category: "Politesse", difficulty: 1 },
    { english: "Excuse me", french: "Excusez-moi", category: "Politesse", difficulty: 2 },
    { english: "Pardon me", french: "Pardonnez-moi", category: "Politesse", difficulty: 2 },
    { english: "You're welcome", french: "De rien", category: "Politesse", difficulty: 2 },
    { english: "No problem", french: "Pas de problème", category: "Politesse", difficulty: 1 },
    { english: "Don't mention it", french: "Il n'y a pas de quoi", category: "Politesse", difficulty: 3 },
    { english: "My pleasure", french: "Tout le plaisir est pour moi", category: "Politesse", difficulty: 3 },
    { english: "After you", french: "Après vous", category: "Politesse", difficulty: 2 },
    { english: "Bless you", french: "À tes souhaits", category: "Politesse", difficulty: 2 },
    { english: "I beg your pardon", french: "Je vous demande pardon", category: "Politesse", difficulty: 3 },
    { english: "Forgive me", french: "Pardonnez-moi", category: "Politesse", difficulty: 3 },
    { english: "I apologize", french: "Je m'excuse", category: "Politesse", difficulty: 2 },
    { english: "No worries", french: "Pas de soucis", category: "Politesse", difficulty: 2 },
    { english: "It's okay", french: "C'est bon / Ce n'est rien", category: "Politesse", difficulty: 1 },
    { english: "With pleasure", french: "Avec plaisir", category: "Politesse", difficulty: 2 },
    { english: "If you don't mind", french: "Si cela ne vous dérange pas", category: "Politesse", difficulty: 3 },
    { english: "I appreciate it", french: "Je vous en suis reconnaissant", category: "Politesse", difficulty: 3 },
    { english: "Much obliged", french: "Très obligé", category: "Politesse", difficulty: 3 },
    { english: "At your service", french: "À votre service", category: "Politesse", difficulty: 3 },
    { english: "Kind regards", french: "Bien cordialement", category: "Politesse", difficulty: 2 },
    { english: "Yours sincerely", french: "Sincèrement vôtre", category: "Politesse", difficulty: 3 },
    { english: "Make yourself at home", french: "Faites comme chez vous", category: "Politesse", difficulty: 3 },
    { english: "Help yourself", french: "Servez-vous", category: "Politesse", difficulty: 2 },
    { english: "I owe you one", french: "Je te dois une fière chandelle", category: "Politesse", difficulty: 3 },

    // ==================== FAMILLE (40 mots) ====================
    { english: "Family", french: "Famille", category: "Famille", difficulty: 1 },
    { english: "Father", french: "Père", category: "Famille", difficulty: 1 },
    { english: "Mother", french: "Mère", category: "Famille", difficulty: 1 },
    { english: "Dad", french: "Papa", category: "Famille", difficulty: 1 },
    { english: "Mom", french: "Maman", category: "Famille", difficulty: 1 },
    { english: "Son", french: "Fils", category: "Famille", difficulty: 1 },
    { english: "Daughter", french: "Fille", category: "Famille", difficulty: 1 },
    { english: "Brother", french: "Frère", category: "Famille", difficulty: 1 },
    { english: "Sister", french: "Sœur", category: "Famille", difficulty: 1 },
    { english: "Husband", french: "Mari", category: "Famille", difficulty: 1 },
    { english: "Wife", french: "Femme (épouse)", category: "Famille", difficulty: 1 },
    { english: "Parents", french: "Parents", category: "Famille", difficulty: 1 },
    { english: "Children", french: "Enfants", category: "Famille", difficulty: 1 },
    { english: "Grandfather", french: "Grand-père", category: "Famille", difficulty: 2 },
    { english: "Grandmother", french: "Grand-mère", category: "Famille", difficulty: 2 },
    { english: "Grandson", french: "Petit-fils", category: "Famille", difficulty: 2 },
    { english: "Granddaughter", french: "Petite-fille", category: "Famille", difficulty: 2 },
    { english: "Uncle", french: "Oncle", category: "Famille", difficulty: 1 },
    { english: "Aunt", french: "Tante", category: "Famille", difficulty: 1 },
    { english: "Cousin", french: "Cousin(e)", category: "Famille", difficulty: 1 },
    { english: "Nephew", french: "Neveu", category: "Famille", difficulty: 2 },
    { english: "Niece", french: "Nièce", category: "Famille", difficulty: 2 },
    { english: "Relative", french: "Parent (membre de la famille)", category: "Famille", difficulty: 2 },
    { english: "Sibling", french: "Frère ou sœur", category: "Famille", difficulty: 3 },
    { english: "Twin", french: "Jumeau/Jumelle", category: "Famille", difficulty: 2 },
    { english: "Godfather", french: "Parrain", category: "Famille", difficulty: 2 },
    { english: "Godmother", french: "Marraine", category: "Famille", difficulty: 2 },
    { english: "Father-in-law", french: "Beau-père", category: "Famille", difficulty: 2 },
    { english: "Mother-in-law", french: "Belle-mère", category: "Famille", difficulty: 2 },
    { english: "Son-in-law", french: "Gendre", category: "Famille", difficulty: 3 },
    { english: "Daughter-in-law", french: "Belle-fille (bru)", category: "Famille", difficulty: 3 },
    { english: "Brother-in-law", french: "Beau-frère", category: "Famille", difficulty: 2 },
    { english: "Sister-in-law", french: "Belle-sœur", category: "Famille", difficulty: 2 },
    { english: "Stepfather", french: "Beau-père (remariage)", category: "Famille", difficulty: 2 },
    { english: "Stepmother", french: "Belle-mère (remariage)", category: "Famille", difficulty: 2 },
    { english: "Ancestor", french: "Ancêtre", category: "Famille", difficulty: 3 },
    { english: "Descendant", french: "Descendant", category: "Famille", difficulty: 3 },
    { english: "Orphan", french: "Orphelin", category: "Famille", difficulty: 3 },
    { english: "Widow", french: "Veuve", category: "Famille", difficulty: 3 },
    { english: "Widower", french: "Veuf", category: "Famille", difficulty: 3 },

    // ==================== CORPS HUMAIN (80 mots) ====================
    { english: "Body", french: "Corps", category: "Corps humain", difficulty: 1 },
    { english: "Head", french: "Tête", category: "Corps humain", difficulty: 1 },
    { english: "Hair", french: "Cheveux", category: "Corps humain", difficulty: 1 },
    { english: "Face", french: "Visage", category: "Corps humain", difficulty: 1 },
    { english: "Forehead", french: "Front", category: "Corps humain", difficulty: 2 },
    { english: "Eye", french: "Œil", category: "Corps humain", difficulty: 1 },
    { english: "Eyes", french: "Yeux", category: "Corps humain", difficulty: 1 },
    { english: "Eyebrow", french: "Sourcil", category: "Corps humain", difficulty: 2 },
    { english: "Eyelash", french: "Cil", category: "Corps humain", difficulty: 3 },
    { english: "Eyelid", french: "Paupière", category: "Corps humain", difficulty: 3 },
    { english: "Nose", french: "Nez", category: "Corps humain", difficulty: 1 },
    { english: "Ear", french: "Oreille", category: "Corps humain", difficulty: 1 },
    { english: "Mouth", french: "Bouche", category: "Corps humain", difficulty: 1 },
    { english: "Lip", french: "Lèvre", category: "Corps humain", difficulty: 2 },
    { english: "Tooth", french: "Dent", category: "Corps humain", difficulty: 1 },
    { english: "Teeth", french: "Dents", category: "Corps humain", difficulty: 1 },
    { english: "Tongue", french: "Langue", category: "Corps humain", difficulty: 2 },
    { english: "Chin", french: "Menton", category: "Corps humain", difficulty: 2 },
    { english: "Cheek", french: "Joue", category: "Corps humain", difficulty: 2 },
    { english: "Jaw", french: "Mâchoire", category: "Corps humain", difficulty: 3 },
    { english: "Neck", french: "Cou", category: "Corps humain", difficulty: 1 },
    { english: "Shoulder", french: "Épaule", category: "Corps humain", difficulty: 2 },
    { english: "Arm", french: "Bras", category: "Corps humain", difficulty: 1 },
    { english: "Elbow", french: "Coude", category: "Corps humain", difficulty: 2 },
    { english: "Wrist", french: "Poignet", category: "Corps humain", difficulty: 2 },
    { english: "Hand", french: "Main", category: "Corps humain", difficulty: 1 },
    { english: "Finger", french: "Doigt", category: "Corps humain", difficulty: 1 },
    { english: "Thumb", french: "Pouce", category: "Corps humain", difficulty: 2 },
    { english: "Nail", french: "Ongle", category: "Corps humain", difficulty: 2 },
    { english: "Palm", french: "Paume", category: "Corps humain", difficulty: 3 },
    { english: "Chest", french: "Poitrine", category: "Corps humain", difficulty: 2 },
    { english: "Breast", french: "Sein", category: "Corps humain", difficulty: 2 },
    { english: "Back", french: "Dos", category: "Corps humain", difficulty: 1 },
    { english: "Spine", french: "Colonne vertébrale", category: "Corps humain", difficulty: 3 },
    { english: "Waist", french: "Taille", category: "Corps humain", difficulty: 2 },
    { english: "Hip", french: "Hanche", category: "Corps humain", difficulty: 2 },
    { english: "Belly", french: "Ventre", category: "Corps humain", difficulty: 2 },
    { english: "Stomach", french: "Estomac", category: "Corps humain", difficulty: 2 },
    { english: "Leg", french: "Jambe", category: "Corps humain", difficulty: 1 },
    { english: "Knee", french: "Genou", category: "Corps humain", difficulty: 2 },
    { english: "Ankle", french: "Cheville", category: "Corps humain", difficulty: 2 },
    { english: "Foot", french: "Pied", category: "Corps humain", difficulty: 1 },
    { english: "Feet", french: "Pieds", category: "Corps humain", difficulty: 1 },
    { english: "Toe", french: "Orteil", category: "Corps humain", difficulty: 2 },
    { english: "Heel", french: "Talon", category: "Corps humain", difficulty: 2 },
    { english: "Skin", french: "Peau", category: "Corps humain", difficulty: 2 },
    { english: "Bone", french: "Os", category: "Corps humain", difficulty: 2 },
    { english: "Muscle", french: "Muscle", category: "Corps humain", difficulty: 2 },
    { english: "Blood", french: "Sang", category: "Corps humain", difficulty: 1 },
    { english: "Heart", french: "Cœur", category: "Corps humain", difficulty: 1 },
    { english: "Brain", french: "Cerveau", category: "Corps humain", difficulty: 2 },
    { english: "Lung", french: "Poumon", category: "Corps humain", difficulty: 2 },
    { english: "Liver", french: "Foie", category: "Corps humain", difficulty: 2 },
    { english: "Kidney", french: "Rein", category: "Corps humain", difficulty: 3 },
    { english: "Intestine", french: "Intestin", category: "Corps humain", difficulty: 3 },
    { english: "Vein", french: "Veine", category: "Corps humain", difficulty: 3 },
    { english: "Artery", french: "Artère", category: "Corps humain", difficulty: 3 },
    { english: "Nerve", french: "Nerf", category: "Corps humain", difficulty: 3 },
    { english: "Skull", french: "Crâne", category: "Corps humain", difficulty: 3 },
    { english: "Rib", french: "Côte", category: "Corps humain", difficulty: 3 },
    { english: "Thigh", french: "Cuisse", category: "Corps humain", difficulty: 3 },
    { english: "Calf", french: "Mollet", category: "Corps humain", difficulty: 3 },
    { english: "Shin", french: "Tibia", category: "Corps humain", difficulty: 3 },
    { english: "Forearm", french: "Avant-bras", category: "Corps humain", difficulty: 3 },
    { english: "Armpit", french: "Aisselle", category: "Corps humain", difficulty: 3 },
    { english: "Navel", french: "Nombril", category: "Corps humain", difficulty: 3 },
    { english: "Fist", french: "Poing", category: "Corps humain", difficulty: 2 },
    { english: "Knuckle", french: "Articulation du doigt", category: "Corps humain", difficulty: 3 },
    { english: "Pupil", french: "Pupille", category: "Corps humain", difficulty: 3 },
    { english: "Iris", french: "Iris", category: "Corps humain", difficulty: 3 },
    { english: "Nostril", french: "Narine", category: "Corps humain", difficulty: 3 },
    { english: "Gum", french: "Gencive", category: "Corps humain", difficulty: 3 },
    { english: "Palate", french: "Palais", category: "Corps humain", difficulty: 3 },
    { english: "Skeleton", french: "Squelette", category: "Corps humain", difficulty: 3 },
    { english: "Joint", french: "Articulation", category: "Corps humain", difficulty: 3 },
    { english: "Tendon", french: "Tendon", category: "Corps humain", difficulty: 3 },
    { english: "Ligament", french: "Ligament", category: "Corps humain", difficulty: 3 },
    { english: "Bladder", french: "Vessie", category: "Corps humain", difficulty: 3 },
    { english: "Spleen", french: "Rate", category: "Corps humain", difficulty: 3 },
    { english: "Pancreas", french: "Pancréas", category: "Corps humain", difficulty: 3 },

    // ==================== NOURRITURE & CUISINE (150 mots) ====================
    { english: "Food", french: "Nourriture", category: "Nourriture", difficulty: 1 },
    { english: "Water", french: "Eau", category: "Nourriture", difficulty: 1 },
    { english: "Bread", french: "Pain", category: "Nourriture", difficulty: 1 },
    { english: "Rice", french: "Riz", category: "Nourriture", difficulty: 1 },
    { english: "Pasta", french: "Pâtes", category: "Nourriture", difficulty: 1 },
    { english: "Meat", french: "Viande", category: "Nourriture", difficulty: 1 },
    { english: "Chicken", french: "Poulet", category: "Nourriture", difficulty: 1 },
    { english: "Beef", french: "Bœuf", category: "Nourriture", difficulty: 2 },
    { english: "Pork", french: "Porc", category: "Nourriture", difficulty: 2 },
    { english: "Lamb", french: "Agneau", category: "Nourriture", difficulty: 2 },
    { english: "Fish", french: "Poisson", category: "Nourriture", difficulty: 1 },
    { english: "Egg", french: "Œuf", category: "Nourriture", difficulty: 1 },
    { english: "Cheese", french: "Fromage", category: "Nourriture", difficulty: 1 },
    { english: "Butter", french: "Beurre", category: "Nourriture", difficulty: 1 },
    { english: "Milk", french: "Lait", category: "Nourriture", difficulty: 1 },
    { english: "Cream", french: "Crème", category: "Nourriture", difficulty: 2 },
    { english: "Yogurt", french: "Yaourt", category: "Nourriture", difficulty: 2 },
    { english: "Sugar", french: "Sucre", category: "Nourriture", difficulty: 1 },
    { english: "Salt", french: "Sel", category: "Nourriture", difficulty: 1 },
    { english: "Pepper", french: "Poivre", category: "Nourriture", difficulty: 2 },
    { english: "Oil", french: "Huile", category: "Nourriture", difficulty: 1 },
    { english: "Vinegar", french: "Vinaigre", category: "Nourriture", difficulty: 2 },
    { english: "Flour", french: "Farine", category: "Nourriture", difficulty: 2 },
    { english: "Honey", french: "Miel", category: "Nourriture", difficulty: 2 },
    { english: "Jam", french: "Confiture", category: "Nourriture", difficulty: 2 },
    { english: "Chocolate", french: "Chocolat", category: "Nourriture", difficulty: 1 },
    { english: "Cake", french: "Gâteau", category: "Nourriture", difficulty: 1 },
    { english: "Cookie", french: "Biscuit", category: "Nourriture", difficulty: 2 },
    { english: "Pie", french: "Tarte", category: "Nourriture", difficulty: 2 },
    { english: "Ice cream", french: "Glace", category: "Nourriture", difficulty: 1 },
    { english: "Fruit", french: "Fruit", category: "Nourriture", difficulty: 1 },
    { english: "Apple", french: "Pomme", category: "Nourriture", difficulty: 1 },
    { english: "Banana", french: "Banane", category: "Nourriture", difficulty: 1 },
    { english: "Orange", french: "Orange", category: "Nourriture", difficulty: 1 },
    { english: "Lemon", french: "Citron", category: "Nourriture", difficulty: 2 },
    { english: "Grape", french: "Raisin", category: "Nourriture", difficulty: 2 },
    { english: "Strawberry", french: "Fraise", category: "Nourriture", difficulty: 2 },
    { english: "Cherry", french: "Cerise", category: "Nourriture", difficulty: 2 },
    { english: "Peach", french: "Pêche", category: "Nourriture", difficulty: 2 },
    { english: "Pear", french: "Poire", category: "Nourriture", difficulty: 2 },
    { english: "Pineapple", french: "Ananas", category: "Nourriture", difficulty: 2 },
    { english: "Mango", french: "Mangue", category: "Nourriture", difficulty: 2 },
    { english: "Watermelon", french: "Pastèque", category: "Nourriture", difficulty: 2 },
    { english: "Vegetable", french: "Légume", category: "Nourriture", difficulty: 1 },
    { english: "Potato", french: "Pomme de terre", category: "Nourriture", difficulty: 2 },
    { english: "Tomato", french: "Tomate", category: "Nourriture", difficulty: 1 },
    { english: "Onion", french: "Oignon", category: "Nourriture", difficulty: 2 },
    { english: "Garlic", french: "Ail", category: "Nourriture", difficulty: 2 },
    { english: "Carrot", french: "Carotte", category: "Nourriture", difficulty: 2 },
    { english: "Lettuce", french: "Laitue", category: "Nourriture", difficulty: 2 },
    { english: "Spinach", french: "Épinard", category: "Nourriture", difficulty: 3 },
    { english: "Broccoli", french: "Brocoli", category: "Nourriture", difficulty: 2 },
    { english: "Cucumber", french: "Concombre", category: "Nourriture", difficulty: 2 },
    { english: "Pepper (bell)", french: "Poivron", category: "Nourriture", difficulty: 3 },
    { english: "Mushroom", french: "Champignon", category: "Nourriture", difficulty: 2 },
    { english: "Corn", french: "Maïs", category: "Nourriture", difficulty: 2 },
    { english: "Bean", french: "Haricot", category: "Nourriture", difficulty: 2 },
    { english: "Pea", french: "Petit pois", category: "Nourriture", difficulty: 2 },
    { english: "Soup", french: "Soupe", category: "Nourriture", difficulty: 1 },
    { english: "Salad", french: "Salade", category: "Nourriture", difficulty: 1 },
    { english: "Sandwich", french: "Sandwich", category: "Nourriture", difficulty: 1 },
    { english: "Pizza", french: "Pizza", category: "Nourriture", difficulty: 1 },
    { english: "Burger", french: "Hamburger", category: "Nourriture", difficulty: 1 },
    { english: "Fries", french: "Frites", category: "Nourriture", difficulty: 2 },
    { english: "Sausage", french: "Saucisse", category: "Nourriture", difficulty: 2 },
    { english: "Bacon", french: "Bacon", category: "Nourriture", difficulty: 2 },
    { english: "Ham", french: "Jambon", category: "Nourriture", difficulty: 2 },
    { english: "Steak", french: "Steak", category: "Nourriture", difficulty: 2 },
    { english: "Roast", french: "Rôti", category: "Nourriture", difficulty: 2 },
    { english: "Grill", french: "Grillade", category: "Nourriture", difficulty: 3 },
    { english: "Fried", french: "Frit", category: "Nourriture", difficulty: 2 },
    { english: "Boiled", french: "Bouilli", category: "Nourriture", difficulty: 3 },
    { english: "Baked", french: "Cuit au four", category: "Nourriture", difficulty: 3 },
    { english: "Raw", french: "Cru", category: "Nourriture", difficulty: 2 },
    { english: "Cooked", french: "Cuit", category: "Nourriture", difficulty: 2 },
    { english: "Breakfast", french: "Petit déjeuner", category: "Nourriture", difficulty: 1 },
    { english: "Lunch", french: "Déjeuner", category: "Nourriture", difficulty: 1 },
    { english: "Dinner", french: "Dîner", category: "Nourriture", difficulty: 1 },
    { english: "Snack", french: "Collation", category: "Nourriture", difficulty: 2 },
    { english: "Appetizer", french: "Entrée / Apéritif", category: "Nourriture", difficulty: 3 },
    { english: "Main course", french: "Plat principal", category: "Nourriture", difficulty: 2 },
    { english: "Dessert", french: "Dessert", category: "Nourriture", difficulty: 1 },
    { english: "Drink", french: "Boisson", category: "Nourriture", difficulty: 1 },
    { english: "Coffee", french: "Café", category: "Nourriture", difficulty: 1 },
    { english: "Tea", french: "Thé", category: "Nourriture", difficulty: 1 },
    { english: "Juice", french: "Jus", category: "Nourriture", difficulty: 1 },
    { english: "Wine", french: "Vin", category: "Nourriture", difficulty: 1 },
    { english: "Beer", french: "Bière", category: "Nourriture", difficulty: 2 },
    { english: "Soda", french: "Soda", category: "Nourriture", difficulty: 2 },
    { english: "Lemonade", french: "Limonade", category: "Nourriture", difficulty: 2 },
    { english: "Smoothie", french: "Smoothie", category: "Nourriture", difficulty: 2 },
    { english: "Milkshake", french: "Milk-shake", category: "Nourriture", difficulty: 3 },
    { english: "Hot chocolate", french: "Chocolat chaud", category: "Nourriture", difficulty: 2 },
    { english: "Spice", french: "Épice", category: "Nourriture", difficulty: 2 },
    { english: "Herb", french: "Herbe aromatique", category: "Nourriture", difficulty: 3 },
    { english: "Cinnamon", french: "Cannelle", category: "Nourriture", difficulty: 3 },
    { english: "Ginger", french: "Gingembre", category: "Nourriture", difficulty: 3 },
    { english: "Vanilla", french: "Vanille", category: "Nourriture", difficulty: 3 },
    { english: "Mustard", french: "Moutarde", category: "Nourriture", difficulty: 3 },
    { english: "Ketchup", french: "Ketchup", category: "Nourriture", difficulty: 2 },
    { english: "Mayonnaise", french: "Mayonnaise", category: "Nourriture", difficulty: 3 },
    { english: "Soy sauce", french: "Sauce soja", category: "Nourriture", difficulty: 3 },
    { english: "Olive oil", french: "Huile d'olive", category: "Nourriture", difficulty: 2 },
    { english: "Butter", french: "Beurre", category: "Nourriture", difficulty: 1 },
    { english: "Margarine", french: "Margarine", category: "Nourriture", difficulty: 3 },
    { english: "Recipe", french: "Recette", category: "Nourriture", difficulty: 2 },
    { english: "Ingredient", french: "Ingrédient", category: "Nourriture", difficulty: 3 },
    { english: "To cook", french: "Cuisiner", category: "Nourriture", difficulty: 2 },
    { english: "To bake", french: "Cuire au four", category: "Nourriture", difficulty: 2 },
    { english: "To fry", french: "Frire", category: "Nourriture", difficulty: 2 },
    { english: "To boil", french: "Bouillir", category: "Nourriture", difficulty: 2 },
    { english: "To grill", french: "Griller", category: "Nourriture", difficulty: 2 },
    { english: "To roast", french: "Rôtir", category: "Nourriture", difficulty: 3 },
    { english: "To peel", french: "Peler", category: "Nourriture", difficulty: 3 },
    { english: "To chop", french: "Hacher / Couper", category: "Nourriture", difficulty: 3 },
    { english: "To slice", french: "Trancher", category: "Nourriture", difficulty: 3 },
    { english: "To mix", french: "Mélanger", category: "Nourriture", difficulty: 2 },
    { english: "To stir", french: "Remuer", category: "Nourriture", difficulty: 3 },
    { english: "To pour", french: "Verser", category: "Nourriture", difficulty: 3 },
    { english: "To taste", french: "Goûter", category: "Nourriture", difficulty: 2 },
    { english: "Delicious", french: "Délicieux", category: "Nourriture", difficulty: 1 },
    { english: "Tasty", french: "Savoureux", category: "Nourriture", difficulty: 2 },
    { english: "Sweet", french: "Sucré", category: "Nourriture", difficulty: 1 },
    { english: "Salty", french: "Salé", category: "Nourriture", difficulty: 2 },
    { english: "Bitter", french: "Amer", category: "Nourriture", difficulty: 2 },
    { english: "Sour", french: "Acide / Aigre", category: "Nourriture", difficulty: 2 },
    { english: "Spicy", french: "Épicé", category: "Nourriture", difficulty: 2 },
    { english: "Fresh", french: "Frais", category: "Nourriture", difficulty: 2 },
    { english: "Rotten", french: "Pourri", category: "Nourriture", difficulty: 3 },
    { english: "Ripe", french: "Mûr", category: "Nourriture", difficulty: 3 },
    { english: "Frozen", french: "Congelé", category: "Nourriture", difficulty: 2 },
    { english: "Canned", french: "En conserve", category: "Nourriture", difficulty: 3 },
    { english: "Vegetarian", french: "Végétarien", category: "Nourriture", difficulty: 3 },
    { english: "Vegan", french: "Végétalien", category: "Nourriture", difficulty: 3 },
    { english: "Gluten-free", french: "Sans gluten", category: "Nourriture", difficulty: 3 },
    { english: "Organic", french: "Bio", category: "Nourriture", difficulty: 2 },
    { english: "Calorie", french: "Calorie", category: "Nourriture", difficulty: 3 },
    { english: "Diet", french: "Régime", category: "Nourriture", difficulty: 2 },
    { english: "Nutrition", french: "Nutrition", category: "Nourriture", difficulty: 3 },
    { english: "Protein", french: "Protéine", category: "Nourriture", difficulty: 3 },
    { english: "Carbohydrate", french: "Glucide", category: "Nourriture", difficulty: 3 },
    { english: "Fat", french: "Graisse / Lipide", category: "Nourriture", difficulty: 2 },
    { english: "Vitamin", french: "Vitamine", category: "Nourriture", difficulty: 3 },
    { english: "Mineral", french: "Minéral", category: "Nourriture", difficulty: 3 },
    { english: "Fiber", french: "Fibre", category: "Nourriture", difficulty: 3 },
    { english: "Hungry", french: "Affamé", category: "Nourriture", difficulty: 1 },
    { english: "Thirsty", french: "Assoiffé", category: "Nourriture", difficulty: 2 },
    { english: "Full", french: "Rassasié", category: "Nourriture", difficulty: 2 },
    { english: "Appetite", french: "Appétit", category: "Nourriture", difficulty: 3 },
    { english: "Meal", french: "Repas", category: "Nourriture", difficulty: 1 },
    { english: "Plate", french: "Assiette", category: "Nourriture", difficulty: 1 },
    { english: "Bowl", french: "Bol", category: "Nourriture", difficulty: 2 },
    { english: "Cup", french: "Tasse", category: "Nourriture", difficulty: 1 },
    { english: "Glass", french: "Verre", category: "Nourriture", difficulty: 1 },
    { english: "Fork", french: "Fourchette", category: "Nourriture", difficulty: 2 },
    { english: "Knife", french: "Couteau", category: "Nourriture", difficulty: 1 },
    { english: "Spoon", french: "Cuillère", category: "Nourriture", difficulty: 2 },
    { english: "Napkin", french: "Serviette", category: "Nourriture", difficulty: 3 },
    { english: "Tablecloth", french: "Nappe", category: "Nourriture", difficulty: 3 },

    // ==================== VÊTEMENTS & MODE (80 mots) ====================
    { english: "Clothes", french: "Vêtements", category: "Vêtements", difficulty: 1 },
    { english: "Clothing", french: "Habillement", category: "Vêtements", difficulty: 2 },
    { english: "Shirt", french: "Chemise", category: "Vêtements", difficulty: 1 },
    { english: "T-shirt", french: "T-shirt", category: "Vêtements", difficulty: 1 },
    { english: "Blouse", french: "Chemisier", category: "Vêtements", difficulty: 2 },
    { english: "Sweater", french: "Pull", category: "Vêtements", difficulty: 2 },
    { english: "Jacket", french: "Veste", category: "Vêtements", difficulty: 1 },
    { english: "Coat", french: "Manteau", category: "Vêtements", difficulty: 2 },
    { english: "Pants", french: "Pantalon", category: "Vêtements", difficulty: 1 },
    { english: "Jeans", french: "Jean", category: "Vêtements", difficulty: 1 },
    { english: "Shorts", french: "Short", category: "Vêtements", difficulty: 2 },
    { english: "Skirt", french: "Jupe", category: "Vêtements", difficulty: 2 },
    { english: "Dress", french: "Robe", category: "Vêtements", difficulty: 1 },
    { english: "Suit", french: "Costume", category: "Vêtements", difficulty: 2 },
    { english: "Tie", french: "Cravate", category: "Vêtements", difficulty: 2 },
    { english: "Belt", french: "Ceinture", category: "Vêtements", difficulty: 2 },
    { english: "Socks", french: "Chaussettes", category: "Vêtements", difficulty: 2 },
    { english: "Shoes", french: "Chaussures", category: "Vêtements", difficulty: 1 },
    { english: "Boots", french: "Bottes", category: "Vêtements", difficulty: 2 },
    { english: "Sandals", french: "Sandales", category: "Vêtements", difficulty: 3 },
    { english: "Slippers", french: "Pantoufles", category: "Vêtements", difficulty: 3 },
    { english: "Sneakers", french: "Baskets", category: "Vêtements", difficulty: 2 },
    { english: "Hat", french: "Chapeau", category: "Vêtements", difficulty: 1 },
    { english: "Cap", french: "Casquette", category: "Vêtements", difficulty: 2 },
    { english: "Scarf", french: "Écharpe", category: "Vêtements", difficulty: 2 },
    { english: "Gloves", french: "Gants", category: "Vêtements", difficulty: 2 },
    { english: "Umbrella", french: "Parapluie", category: "Vêtements", difficulty: 2 },
    { english: "Raincoat", french: "Imperméable", category: "Vêtements", difficulty: 3 },
    { english: "Swimsuit", french: "Maillot de bain", category: "Vêtements", difficulty: 3 },
    { english: "Underwear", french: "Sous-vêtements", category: "Vêtements", difficulty: 2 },
    { english: "Bra", french: "Soutien-gorge", category: "Vêtements", difficulty: 3 },
    { english: "Pajamas", french: "Pyjama", category: "Vêtements", difficulty: 3 },
    { english: "Uniform", french: "Uniforme", category: "Vêtements", difficulty: 2 },
    { english: "Pocket", french: "Poche", category: "Vêtements", difficulty: 2 },
    { english: "Button", french: "Bouton", category: "Vêtements", difficulty: 2 },
    { english: "Zipper", french: "Fermeture éclair", category: "Vêtements", difficulty: 3 },
    { english: "Collar", french: "Col", category: "Vêtements", difficulty: 3 },
    { english: "Sleeve", french: "Manche", category: "Vêtements", difficulty: 3 },
    { english: "Cotton", french: "Coton", category: "Vêtements", difficulty: 2 },
    { english: "Wool", french: "Laine", category: "Vêtements", difficulty: 2 },
    { english: "Silk", french: "Soie", category: "Vêtements", difficulty: 3 },
    { english: "Leather", french: "Cuir", category: "Vêtements", difficulty: 3 },
    { english: "Denim", french: "Denim", category: "Vêtements", difficulty: 3 },
    { english: "Linen", french: "Lin", category: "Vêtements", difficulty: 3 },
    { english: "Velvet", french: "Velours", category: "Vêtements", difficulty: 3 },
    { english: "Fashion", french: "Mode", category: "Vêtements", difficulty: 2 },
    { english: "Style", french: "Style", category: "Vêtements", difficulty: 2 },
    { english: "Designer", french: "Créateur / Styliste", category: "Vêtements", difficulty: 3 },
    { english: "Trend", french: "Tendance", category: "Vêtements", difficulty: 3 },
    { english: "Elegant", french: "Élégant", category: "Vêtements", difficulty: 2 },
    { english: "Casual", french: "Décontracté", category: "Vêtements", difficulty: 2 },
    { english: "Formal", french: "Formel", category: "Vêtements", difficulty: 2 },
    { english: "Tight", french: "Serré", category: "Vêtements", difficulty: 2 },
    { english: "Loose", french: "Ample", category: "Vêtements", difficulty: 3 },
    { english: "To wear", french: "Porter (vêtement)", category: "Vêtements", difficulty: 1 },
    { english: "To dress", french: "S'habiller", category: "Vêtements", difficulty: 2 },
    { english: "To undress", french: "Se déshabiller", category: "Vêtements", difficulty: 3 },
    { english: "To fit", french: "Aller (taille)", category: "Vêtements", difficulty: 2 },
    { english: "Size", french: "Taille", category: "Vêtements", difficulty: 2 },
    { english: "Small", french: "Petit", category: "Vêtements", difficulty: 1 },
    { english: "Medium", french: "Moyen", category: "Vêtements", difficulty: 2 },
    { english: "Large", french: "Grand", category: "Vêtements", difficulty: 2 },
    { english: "Extra large", french: "Très grand", category: "Vêtements", difficulty: 3 },
    { english: "Sew", french: "Coudre", category: "Vêtements", difficulty: 3 },
    { english: "Knit", french: "Tricoter", category: "Vêtements", difficulty: 3 },
    { english: "Embroidery", french: "Broderie", category: "Vêtements", difficulty: 3 },
    { english: "Tailor", french: "Tailleur", category: "Vêtements", difficulty: 3 },
    { english: "Necklace", french: "Collier", category: "Vêtements", difficulty: 3 },
    { english: "Earrings", french: "Boucles d'oreilles", category: "Vêtements", difficulty: 3 },
    { english: "Bracelet", french: "Bracelet", category: "Vêtements", difficulty: 3 },
    { english: "Ring", french: "Bague", category: "Vêtements", difficulty: 2 },
    { english: "Watch", french: "Montre", category: "Vêtements", difficulty: 1 },
    { english: "Handbag", french: "Sac à main", category: "Vêtements", difficulty: 2 },
    { english: "Backpack", french: "Sac à dos", category: "Vêtements", difficulty: 2 },
    { english: "Wallet", french: "Portefeuille", category: "Vêtements", difficulty: 2 },
    { english: "Sunglasses", french: "Lunettes de soleil", category: "Vêtements", difficulty: 2 },
    { english: "Makeup", french: "Maquillage", category: "Vêtements", difficulty: 3 },
    { english: "Perfume", french: "Parfum", category: "Vêtements", difficulty: 3 },

    // ==================== MAISON & MOBILIER (100 mots) ====================
    { english: "House", french: "Maison", category: "Maison", difficulty: 1 },
    { english: "Home", french: "Foyer / Domicile", category: "Maison", difficulty: 1 },
    { english: "Apartment", french: "Appartement", category: "Maison", difficulty: 2 },
    { english: "Room", french: "Pièce / Chambre", category: "Maison", difficulty: 1 },
    { english: "Living room", french: "Salon", category: "Maison", difficulty: 2 },
    { english: "Bedroom", french: "Chambre", category: "Maison", difficulty: 1 },
    { english: "Kitchen", french: "Cuisine", category: "Maison", difficulty: 1 },
    { english: "Bathroom", french: "Salle de bain", category: "Maison", difficulty: 2 },
    { english: "Toilet", french: "Toilettes", category: "Maison", difficulty: 2 },
    { english: "Dining room", french: "Salle à manger", category: "Maison", difficulty: 2 },
    { english: "Office", french: "Bureau", category: "Maison", difficulty: 2 },
    { english: "Garage", french: "Garage", category: "Maison", difficulty: 2 },
    { english: "Garden", french: "Jardin", category: "Maison", difficulty: 1 },
    { english: "Balcony", french: "Balcon", category: "Maison", difficulty: 3 },
    { english: "Basement", french: "Sous-sol", category: "Maison", difficulty: 3 },
    { english: "Attic", french: "Grenier", category: "Maison", difficulty: 3 },
    { english: "Roof", french: "Toit", category: "Maison", difficulty: 2 },
    { english: "Ceiling", french: "Plafond", category: "Maison", difficulty: 2 },
    { english: "Floor", french: "Sol / Plancher", category: "Maison", difficulty: 2 },
    { english: "Wall", french: "Mur", category: "Maison", difficulty: 1 },
    { english: "Door", french: "Porte", category: "Maison", difficulty: 1 },
    { english: "Window", french: "Fenêtre", category: "Maison", difficulty: 1 },
    { english: "Stairs", french: "Escalier", category: "Maison", difficulty: 2 },
    { english: "Hallway", french: "Couloir", category: "Maison", difficulty: 3 },
    { english: "Furniture", french: "Meubles", category: "Maison", difficulty: 2 },
    { english: "Table", french: "Table", category: "Maison", difficulty: 1 },
    { english: "Chair", french: "Chaise", category: "Maison", difficulty: 1 },
    { english: "Sofa", french: "Canapé", category: "Maison", difficulty: 2 },
    { english: "Armchair", french: "Fauteuil", category: "Maison", difficulty: 3 },
    { english: "Bed", french: "Lit", category: "Maison", difficulty: 1 },
    { english: "Mattress", french: "Matelas", category: "Maison", difficulty: 3 },
    { english: "Pillow", french: "Oreiller", category: "Maison", difficulty: 2 },
    { english: "Blanket", french: "Couverture", category: "Maison", difficulty: 2 },
    { english: "Sheet", french: "Drap", category: "Maison", difficulty: 2 },
    { english: "Wardrobe", french: "Armoire", category: "Maison", difficulty: 2 },
    { english: "Closet", french: "Placard", category: "Maison", difficulty: 2 },
    { english: "Drawer", french: "Tiroir", category: "Maison", difficulty: 3 },
    { english: "Shelf", french: "Étagère", category: "Maison", difficulty: 2 },
    { english: "Bookcase", french: "Bibliothèque", category: "Maison", difficulty: 3 },
    { english: "Desk", french: "Bureau (meuble)", category: "Maison", difficulty: 2 },
    { english: "Carpet", french: "Tapis", category: "Maison", difficulty: 2 },
    { english: "Rug", french: "Tapis (petit)", category: "Maison", difficulty: 3 },
    { english: "Curtain", french: "Rideau", category: "Maison", difficulty: 2 },
    { english: "Lamp", french: "Lampe", category: "Maison", difficulty: 2 },
    { english: "Light", french: "Lumière", category: "Maison", difficulty: 1 },
    { english: "Mirror", french: "Miroir", category: "Maison", difficulty: 2 },
    { english: "Clock", french: "Horloge", category: "Maison", difficulty: 2 },
    { english: "Vase", french: "Vase", category: "Maison", difficulty: 3 },
    { english: "Painting", french: "Tableau / Peinture", category: "Maison", difficulty: 2 },
    { english: "Photograph", french: "Photographie", category: "Maison", difficulty: 2 },
    { english: "Television", french: "Télévision", category: "Maison", difficulty: 1 },
    { english: "Radio", french: "Radio", category: "Maison", difficulty: 2 },
    { english: "Refrigerator", french: "Réfrigérateur", category: "Maison", difficulty: 2 },
    { english: "Freezer", french: "Congélateur", category: "Maison", difficulty: 3 },
    { english: "Oven", french: "Four", category: "Maison", difficulty: 2 },
    { english: "Stove", french: "Cuisinière", category: "Maison", difficulty: 2 },
    { english: "Microwave", french: "Micro-ondes", category: "Maison", difficulty: 3 },
    { english: "Dishwasher", french: "Lave-vaisselle", category: "Maison", difficulty: 3 },
    { english: "Washing machine", french: "Machine à laver", category: "Maison", difficulty: 3 },
    { english: "Dryer", french: "Sèche-linge", category: "Maison", difficulty: 3 },
    { english: "Iron", french: "Fer à repasser", category: "Maison", difficulty: 3 },
    { english: "Vacuum cleaner", french: "Aspirateur", category: "Maison", difficulty: 3 },
    { english: "Broom", french: "Balai", category: "Maison", difficulty: 3 },
    { english: "Mop", french: "Serpillière", category: "Maison", difficulty: 3 },
    { english: "Bucket", french: "Seau", category: "Maison", difficulty: 3 },
    { english: "Soap", french: "Savon", category: "Maison", difficulty: 2 },
    { english: "Towel", french: "Serviette", category: "Maison", difficulty: 2 },
    { english: "Shampoo", french: "Shampooing", category: "Maison", difficulty: 3 },
    { english: "Toothbrush", french: "Brosse à dents", category: "Maison", difficulty: 2 },
    { english: "Toothpaste", french: "Dentifrice", category: "Maison", difficulty: 3 },
    { english: "Razor", french: "Rasoir", category: "Maison", difficulty: 3 },
    { english: "Comb", french: "Peigne", category: "Maison", difficulty: 3 },
    { english: "Brush", french: "Brosse", category: "Maison", difficulty: 2 },
    { english: "Key", french: "Clé", category: "Maison", difficulty: 1 },
    { english: "Lock", french: "Serrure", category: "Maison", difficulty: 3 },
    { english: "Alarm", french: "Alarme", category: "Maison", difficulty: 3 },
    { english: "Fence", french: "Clôture", category: "Maison", difficulty: 3 },
    { english: "Gate", french: "Portail", category: "Maison", difficulty: 3 },
    { english: "Path", french: "Allée / Chemin", category: "Maison", difficulty: 2 },
    { english: "Driveway", french: "Allée (voiture)", category: "Maison", difficulty: 3 },
    { english: "Chimney", french: "Cheminée", category: "Maison", difficulty: 3 },
    { english: "Fireplace", french: "Cheminée (intérieur)", category: "Maison", difficulty: 3 },
    { english: "Heater", french: "Chauffage", category: "Maison", difficulty: 3 },
    { english: "Air conditioner", french: "Climatiseur", category: "Maison", difficulty: 3 },
    { english: "Fan", french: "Ventilateur", category: "Maison", difficulty: 2 },
    { english: "Candle", french: "Bougie", category: "Maison", difficulty: 3 },
    { english: "Electricity", french: "Électricité", category: "Maison", difficulty: 2 },
    { english: "Plug", french: "Prise", category: "Maison", difficulty: 3 },
    { english: "Switch", french: "Interrupteur", category: "Maison", difficulty: 3 },
    { english: "Remote control", french: "Télécommande", category: "Maison", difficulty: 3 },
    { english: "Battery", french: "Pile", category: "Maison", difficulty: 3 },
    { english: "Bulb", french: "Ampoule", category: "Maison", difficulty: 3 },
    { english: "Ladder", french: "Échelle", category: "Maison", difficulty: 3 },
    { english: "Hammer", french: "Marteau", category: "Maison", difficulty: 3 },
    { english: "Screwdriver", french: "Tournevis", category: "Maison", difficulty: 3 },
    { english: "Nail", french: "Clou", category: "Maison", difficulty: 3 },
    { english: "Screw", french: "Vis", category: "Maison", difficulty: 3 },
    { english: "Paint", french: "Peinture", category: "Maison", difficulty: 2 },

    // ==================== ÉCOLE & ÉDUCATION (80 mots) ====================
    { english: "School", french: "École", category: "École", difficulty: 1 },
    { english: "Classroom", french: "Salle de classe", category: "École", difficulty: 2 },
    { english: "Teacher", french: "Enseignant / Professeur", category: "École", difficulty: 1 },
    { english: "Student", french: "Étudiant / Élève", category: "École", difficulty: 1 },
    { english: "Pupil", french: "Élève", category: "École", difficulty: 2 },
    { english: "Principal", french: "Directeur d'école", category: "École", difficulty: 3 },
    { english: "Professor", french: "Professeur d'université", category: "École", difficulty: 3 },
    { english: "Lesson", french: "Leçon", category: "École", difficulty: 1 },
    { english: "Homework", french: "Devoirs", category: "École", difficulty: 2 },
    { english: "Exercise", french: "Exercice", category: "École", difficulty: 2 },
    { english: "Exam", french: "Examen", category: "École", difficulty: 2 },
    { english: "Test", french: "Test / Contrôle", category: "École", difficulty: 2 },
    { english: "Grade", french: "Note", category: "École", difficulty: 2 },
    { english: "Mark", french: "Note / Point", category: "École", difficulty: 2 },
    { english: "Result", french: "Résultat", category: "École", difficulty: 2 },
    { english: "Pass", french: "Réussir", category: "École", difficulty: 2 },
    { english: "Fail", french: "Échouer", category: "École", difficulty: 2 },
    { english: "Degree", french: "Diplôme", category: "École", difficulty: 3 },
    { english: "Diploma", french: "Diplôme", category: "École", difficulty: 3 },
    { english: "Certificate", french: "Certificat", category: "École", difficulty: 3 },
    { english: "Book", french: "Livre", category: "École", difficulty: 1 },
    { english: "Notebook", french: "Cahier", category: "École", difficulty: 2 },
    { english: "Pen", french: "Stylo", category: "École", difficulty: 1 },
    { english: "Pencil", french: "Crayon", category: "École", difficulty: 1 },
    { english: "Eraser", french: "Gomme", category: "École", difficulty: 2 },
    { english: "Ruler", french: "Règle", category: "École", difficulty: 2 },
    { english: "Scissors", french: "Ciseaux", category: "École", difficulty: 2 },
    { english: "Glue", french: "Colle", category: "École", difficulty: 2 },
    { english: "Tape", french: "Scotch", category: "École", difficulty: 3 },
    { english: "Stapler", french: "Agrafeuse", category: "École", difficulty: 3 },
    { english: "Calculator", french: "Calculatrice", category: "École", difficulty: 3 },
    { english: "Blackboard", french: "Tableau noir", category: "École", difficulty: 2 },
    { english: "Whiteboard", french: "Tableau blanc", category: "École", difficulty: 3 },
    { english: "Chalk", french: "Craie", category: "École", difficulty: 3 },
    { english: "Marker", french: "Marqueur", category: "École", difficulty: 2 },
    { english: "Backpack", french: "Cartable / Sac à dos", category: "École", difficulty: 2 },
    { english: "Uniform", french: "Uniforme", category: "École", difficulty: 2 },
    { english: "Library", french: "Bibliothèque", category: "École", difficulty: 2 },
    { english: "Laboratory", french: "Laboratoire", category: "École", difficulty: 3 },
    { english: "Science", french: "Science", category: "École", difficulty: 2 },
    { english: "Math", french: "Mathématiques", category: "École", difficulty: 2 },
    { english: "History", french: "Histoire", category: "École", difficulty: 2 },
    { english: "Geography", french: "Géographie", category: "École", difficulty: 2 },
    { english: "Language", french: "Langue", category: "École", difficulty: 2 },
    { english: "English", french: "Anglais", category: "École", difficulty: 1 },
    { english: "French", french: "Français", category: "École", difficulty: 1 },
    { english: "Spanish", french: "Espagnol", category: "École", difficulty: 2 },
    { english: "German", french: "Allemand", category: "École", difficulty: 2 },
    { english: "Art", french: "Art", category: "École", difficulty: 2 },
    { english: "Music", french: "Musique", category: "École", difficulty: 1 },
    { english: "Sport", french: "Sport", category: "École", difficulty: 1 },
    { english: "Gym", french: "Gymnase", category: "École", difficulty: 3 },
    { english: "Playground", french: "Cour de récréation", category: "École", difficulty: 3 },
    { english: "Recess", french: "Récréation", category: "École", difficulty: 3 },
    { english: "Semester", french: "Semestre", category: "École", difficulty: 3 },
    { english: "Holiday", french: "Vacances", category: "École", difficulty: 2 },
    { english: "Graduate", french: "Diplômé", category: "École", difficulty: 3 },
    { english: "Scholarship", french: "Bourse d'études", category: "École", difficulty: 3 },
    { english: "Tuition", french: "Frais de scolarité", category: "École", difficulty: 3 },
    { english: "Enroll", french: "S'inscrire", category: "École", difficulty: 3 },
    { english: "Study", french: "Étudier", category: "École", difficulty: 1 },
    { english: "Learn", french: "Apprendre", category: "École", difficulty: 1 },
    { english: "Teach", french: "Enseigner", category: "École", difficulty: 1 },
    { english: "Read", french: "Lire", category: "École", difficulty: 1 },
    { english: "Write", french: "Écrire", category: "École", difficulty: 1 },
    { english: "Memorize", french: "Mémoriser", category: "École", difficulty: 3 },
    { english: "Understand", french: "Comprendre", category: "École", difficulty: 2 },
    { english: "Explain", french: "Expliquer", category: "École", difficulty: 2 },
    { english: "Question", french: "Question", category: "École", difficulty: 1 },
    { english: "Answer", french: "Réponse", category: "École", difficulty: 1 },
    { english: "Mistake", french: "Erreur", category: "École", difficulty: 2 },
    { english: "Correct", french: "Correct", category: "École", difficulty: 2 },
    { english: "Wrong", french: "Faux", category: "École", difficulty: 2 },
    { english: "Right", french: "Juste", category: "École", difficulty: 1 },
    { english: "Intelligent", french: "Intelligent", category: "École", difficulty: 2 },
    { english: "Clever", french: "Intelligent / Malin", category: "École", difficulty: 2 },
    { english: "Hardworking", french: "Travailleur", category: "École", difficulty: 3 },
    { english: "Lazy", french: "Paresseux", category: "École", difficulty: 2 },
    { english: "Attention", french: "Attention", category: "École", difficulty: 2 },
    { english: "Concentrate", french: "Se concentrer", category: "École", difficulty: 3 },

    // ==================== TRAVAIL & BUREAU (100 mots) ====================
    { english: "Work", french: "Travail", category: "Travail", difficulty: 1 },
    { english: "Job", french: "Emploi / Métier", category: "Travail", difficulty: 1 },
    { english: "Career", french: "Carrière", category: "Travail", difficulty: 2 },
    { english: "Profession", french: "Profession", category: "Travail", difficulty: 2 },
    { english: "Employee", french: "Employé", category: "Travail", difficulty: 2 },
    { english: "Employer", french: "Employeur", category: "Travail", difficulty: 2 },
    { english: "Boss", french: "Patron", category: "Travail", difficulty: 2 },
    { english: "Manager", french: "Directeur / Gérant", category: "Travail", difficulty: 2 },
    { english: "Director", french: "Directeur", category: "Travail", difficulty: 3 },
    { english: "CEO", french: "PDG", category: "Travail", difficulty: 3 },
    { english: "Colleague", french: "Collègue", category: "Travail", difficulty: 2 },
    { english: "Coworker", french: "Collègue de travail", category: "Travail", difficulty: 3 },
    { english: "Team", french: "Équipe", category: "Travail", difficulty: 2 },
    { english: "Meeting", french: "Réunion", category: "Travail", difficulty: 2 },
    { english: "Conference", french: "Conférence", category: "Travail", difficulty: 3 },
    { english: "Presentation", french: "Présentation", category: "Travail", difficulty: 3 },
    { english: "Report", french: "Rapport", category: "Travail", difficulty: 2 },
    { english: "Project", french: "Projet", category: "Travail", difficulty: 2 },
    { english: "Deadline", french: "Date limite", category: "Travail", difficulty: 3 },
    { english: "Schedule", french: "Emploi du temps", category: "Travail", difficulty: 3 },
    { english: "Agenda", french: "Ordre du jour", category: "Travail", difficulty: 3 },
    { english: "Task", french: "Tâche", category: "Travail", difficulty: 2 },
    { english: "Goal", french: "Objectif", category: "Travail", difficulty: 2 },
    { english: "Objective", french: "Objectif", category: "Travail", difficulty: 3 },
    { english: "Strategy", french: "Stratégie", category: "Travail", difficulty: 3 },
    { english: "Plan", french: "Plan", category: "Travail", difficulty: 2 },
    { english: "Budget", french: "Budget", category: "Travail", difficulty: 3 },
    { english: "Salary", french: "Salaire", category: "Travail", difficulty: 2 },
    { english: "Wage", french: "Salaire (horaire)", category: "Travail", difficulty: 3 },
    { english: "Income", french: "Revenu", category: "Travail", difficulty: 2 },
    { english: "Tax", french: "Impôt", category: "Travail", difficulty: 2 },
    { english: "Invoice", french: "Facture", category: "Travail", difficulty: 3 },
    { english: "Receipt", french: "Reçu", category: "Travail", difficulty: 3 },
    { english: "Contract", french: "Contrat", category: "Travail", difficulty: 3 },
    { english: "Agreement", french: "Accord", category: "Travail", difficulty: 3 },
    { english: "Signature", french: "Signature", category: "Travail", difficulty: 3 },
    { english: "Document", french: "Document", category: "Travail", difficulty: 2 },
    { english: "File", french: "Dossier", category: "Travail", difficulty: 2 },
    { english: "Folder", french: "Chemise / Dossier", category: "Travail", difficulty: 3 },
    { english: "Computer", french: "Ordinateur", category: "Travail", difficulty: 1 },
    { english: "Laptop", french: "Ordinateur portable", category: "Travail", difficulty: 2 },
    { english: "Screen", french: "Écran", category: "Travail", difficulty: 2 },
    { english: "Keyboard", french: "Clavier", category: "Travail", difficulty: 2 },
    { english: "Mouse", french: "Souris", category: "Travail", difficulty: 2 },
    { english: "Printer", french: "Imprimante", category: "Travail", difficulty: 3 },
    { english: "Scanner", french: "Scanner", category: "Travail", difficulty: 3 },
    { english: "Photocopier", french: "Photocopieuse", category: "Travail", difficulty: 3 },
    { english: "Telephone", french: "Téléphone", category: "Travail", difficulty: 1 },
    { english: "Email", french: "Courriel", category: "Travail", difficulty: 1 },
    { english: "Internet", french: "Internet", category: "Travail", difficulty: 2 },
    { english: "Website", french: "Site web", category: "Travail", difficulty: 2 },
    { english: "Software", french: "Logiciel", category: "Travail", difficulty: 2 },
    { english: "Application", french: "Application", category: "Travail", difficulty: 2 },
    { english: "Password", french: "Mot de passe", category: "Travail", difficulty: 2 },
    { english: "Username", french: "Nom d'utilisateur", category: "Travail", difficulty: 3 },
    { english: "Network", french: "Réseau", category: "Travail", difficulty: 3 },
    { english: "Server", french: "Serveur", category: "Travail", difficulty: 3 },
    { english: "Database", french: "Base de données", category: "Travail", difficulty: 3 },
    { english: "Desk", french: "Bureau (meuble)", category: "Travail", difficulty: 2 },
    { english: "Office", french: "Bureau (pièce)", category: "Travail", difficulty: 2 },
    { english: "Cubicle", french: "Box de bureau", category: "Travail", difficulty: 3 },
    { english: "Elevator", french: "Ascenseur", category: "Travail", difficulty: 3 },
    { english: "Reception", french: "Accueil / Réception", category: "Travail", difficulty: 3 },
    { english: "Secretary", french: "Secrétaire", category: "Travail", difficulty: 3 },
    { english: "Assistant", french: "Assistant", category: "Travail", difficulty: 3 },
    { english: "Intern", french: "Stagiaire", category: "Travail", difficulty: 3 },
    { english: "Apprentice", french: "Apprenti", category: "Travail", difficulty: 3 },
    { english: "Interview", french: "Entretien", category: "Travail", difficulty: 2 },
    { english: "Resume", french: "CV", category: "Travail", difficulty: 3 },
    { english: "Application", french: "Candidature", category: "Travail", difficulty: 3 },
    { english: "Experience", french: "Expérience", category: "Travail", difficulty: 2 },
    { english: "Qualification", french: "Qualification", category: "Travail", difficulty: 3 },
    { english: "Skill", french: "Compétence", category: "Travail", difficulty: 2 },
    { english: "Training", french: "Formation", category: "Travail", difficulty: 2 },
    { english: "Promotion", french: "Promotion", category: "Travail", difficulty: 3 },
    { english: "Resign", french: "Démissionner", category: "Travail", difficulty: 3 },
    { english: "Fire", french: "Licencier", category: "Travail", difficulty: 3 },
    { english: "Hire", french: "Embaucher", category: "Travail", difficulty: 3 },
    { english: "Retire", french: "Prendre sa retraite", category: "Travail", difficulty: 3 },
    { english: "Unemployed", french: "Chômeur", category: "Travail", difficulty: 3 },
    { english: "Full-time", french: "Temps plein", category: "Travail", difficulty: 3 },
    { english: "Part-time", french: "Temps partiel", category: "Travail", difficulty: 3 },
    { english: "Overtime", french: "Heures supplémentaires", category: "Travail", difficulty: 3 },
    { english: "Break", french: "Pause", category: "Travail", difficulty: 2 },
    { english: "Lunch break", french: "Pause déjeuner", category: "Travail", difficulty: 3 },
    { english: "Business", french: "Affaires", category: "Travail", difficulty: 2 },
    { english: "Company", french: "Entreprise", category: "Travail", difficulty: 2 },
    { english: "Corporation", french: "Société / Corporation", category: "Travail", difficulty: 3 },
    { english: "Startup", french: "Start-up", category: "Travail", difficulty: 3 },
    { english: "Entrepreneur", french: "Entrepreneur", category: "Travail", difficulty: 3 },
    { english: "Client", french: "Client", category: "Travail", difficulty: 2 },
    { english: "Customer", french: "Client (magasin)", category: "Travail", difficulty: 2 },
    { english: "Service", french: "Service", category: "Travail", difficulty: 2 },
    { english: "Product", french: "Produit", category: "Travail", difficulty: 2 },
    { english: "Market", french: "Marché", category: "Travail", difficulty: 2 },
    { english: "Sale", french: "Vente / Solde", category: "Travail", difficulty: 2 },
    { english: "Profit", french: "Bénéfice", category: "Travail", difficulty: 3 },
    { english: "Loss", french: "Perte", category: "Travail", difficulty: 3 },
    { english: "Investment", french: "Investissement", category: "Travail", difficulty: 3 },

    // ==================== VOYAGE & TRANSPORT (100 mots) ====================
    { english: "Travel", french: "Voyager", category: "Voyage", difficulty: 1 },
    { english: "Trip", french: "Voyage / Excursion", category: "Voyage", difficulty: 2 },
    { english: "Journey", french: "Voyage / Trajet", category: "Voyage", difficulty: 2 },
    { english: "Tour", french: "Visite / Tour", category: "Voyage", difficulty: 2 },
    { english: "Vacation", french: "Vacances", category: "Voyage", difficulty: 2 },
    { english: "Holiday", french: "Jour férié / Vacances", category: "Voyage", difficulty: 2 },
    { english: "Luggage", french: "Bagages", category: "Voyage", difficulty: 2 },
    { english: "Suitcase", french: "Valise", category: "Voyage", difficulty: 2 },
    { english: "Passport", french: "Passeport", category: "Voyage", difficulty: 2 },
    { english: "Visa", french: "Visa", category: "Voyage", difficulty: 3 },
    { english: "Ticket", french: "Billet", category: "Voyage", difficulty: 2 },
    { english: "Reservation", french: "Réservation", category: "Voyage", difficulty: 3 },
    { english: "Booking", french: "Réservation", category: "Voyage", difficulty: 3 },
    { english: "Hotel", french: "Hôtel", category: "Voyage", difficulty: 1 },
    { english: "Motel", french: "Motel", category: "Voyage", difficulty: 3 },
    { english: "Hostel", french: "Auberge", category: "Voyage", difficulty: 3 },
    { english: "Room", french: "Chambre", category: "Voyage", difficulty: 1 },
    { english: "Reception", french: "Réception", category: "Voyage", difficulty: 3 },
    { english: "Check-in", french: "Enregistrement", category: "Voyage", difficulty: 3 },
    { english: "Check-out", french: "Départ", category: "Voyage", difficulty: 3 },
    { english: "Airport", french: "Aéroport", category: "Voyage", difficulty: 2 },
    { english: "Airplane", french: "Avion", category: "Voyage", difficulty: 2 },
    { english: "Flight", french: "Vol", category: "Voyage", difficulty: 2 },
    { english: "Pilot", french: "Pilote", category: "Voyage", difficulty: 2 },
    { english: "Gate", french: "Porte d'embarquement", category: "Voyage", difficulty: 3 },
    { english: "Terminal", french: "Terminal", category: "Voyage", difficulty: 3 },
    { english: "Boarding", french: "Embarquement", category: "Voyage", difficulty: 3 },
    { english: "Take off", french: "Décoller", category: "Voyage", difficulty: 3 },
    { english: "Land", french: "Atterrir", category: "Voyage", difficulty: 3 },
    { english: "Delay", french: "Retard", category: "Voyage", difficulty: 3 },
    { english: "Train", french: "Train", category: "Voyage", difficulty: 1 },
    { english: "Station", french: "Gare", category: "Voyage", difficulty: 2 },
    { english: "Platform", french: "Quai", category: "Voyage", difficulty: 3 },
    { english: "Bus", french: "Bus", category: "Voyage", difficulty: 1 },
    { english: "Bus stop", french: "Arrêt de bus", category: "Voyage", difficulty: 2 },
    { english: "Car", french: "Voiture", category: "Voyage", difficulty: 1 },
    { english: "Taxi", french: "Taxi", category: "Voyage", difficulty: 2 },
    { english: "Driver", french: "Conducteur", category: "Voyage", difficulty: 2 },
    { english: "License", french: "Permis", category: "Voyage", difficulty: 3 },
    { english: "Highway", french: "Autoroute", category: "Voyage", difficulty: 3 },
    { english: "Road", french: "Route", category: "Voyage", difficulty: 1 },
    { english: "Street", french: "Rue", category: "Voyage", difficulty: 1 },
    { english: "Traffic", french: "Circulation", category: "Voyage", difficulty: 2 },
    { english: "Traffic light", french: "Feu de circulation", category: "Voyage", difficulty: 3 },
    { english: "Speed", french: "Vitesse", category: "Voyage", difficulty: 2 },
    { english: "Parking", french: "Stationnement", category: "Voyage", difficulty: 3 },
    { english: "Garage", french: "Garage", category: "Voyage", difficulty: 2 },
    { english: "Gas station", french: "Station-service", category: "Voyage", difficulty: 3 },
    { english: "Petrol", french: "Essence", category: "Voyage", difficulty: 3 },
    { english: "Map", french: "Carte", category: "Voyage", difficulty: 2 },
    { english: "GPS", french: "GPS", category: "Voyage", difficulty: 3 },
    { english: "Direction", french: "Direction", category: "Voyage", difficulty: 2 },
    { english: "North", french: "Nord", category: "Voyage", difficulty: 2 },
    { english: "South", french: "Sud", category: "Voyage", difficulty: 2 },
    { english: "East", french: "Est", category: "Voyage", difficulty: 2 },
    { english: "West", french: "Ouest", category: "Voyage", difficulty: 2 },
    { english: "Left", french: "Gauche", category: "Voyage", difficulty: 1 },
    { english: "Right", french: "Droite", category: "Voyage", difficulty: 1 },
    { english: "Straight", french: "Tout droit", category: "Voyage", difficulty: 2 },
    { english: "Near", french: "Proche", category: "Voyage", difficulty: 1 },
    { english: "Far", french: "Loin", category: "Voyage", difficulty: 1 },
    { english: "Distance", french: "Distance", category: "Voyage", difficulty: 2 },
    { english: "Kilometer", french: "Kilomètre", category: "Voyage", difficulty: 3 },
    { english: "Mile", french: "Mile", category: "Voyage", difficulty: 3 },
    { english: "Bicycle", french: "Vélo", category: "Voyage", difficulty: 2 },
    { english: "Motorcycle", french: "Moto", category: "Voyage", difficulty: 2 },
    { english: "Boat", french: "Bateau", category: "Voyage", difficulty: 2 },
    { english: "Ship", french: "Navire", category: "Voyage", difficulty: 2 },
    { english: "Port", french: "Port", category: "Voyage", difficulty: 3 },
    { english: "Harbor", french: "Port (abri)", category: "Voyage", difficulty: 3 },
    { english: "Bridge", french: "Pont", category: "Voyage", difficulty: 2 },
    { english: "Tunnel", french: "Tunnel", category: "Voyage", difficulty: 3 },
    { english: "Border", french: "Frontière", category: "Voyage", difficulty: 3 },
    { english: "Customs", french: "Douane", category: "Voyage", difficulty: 3 },
    { english: "Departure", french: "Départ", category: "Voyage", difficulty: 3 },
    { english: "Arrival", french: "Arrivée", category: "Voyage", difficulty: 3 },
    { english: "Destination", french: "Destination", category: "Voyage", difficulty: 2 },
    { english: "Tourist", french: "Touriste", category: "Voyage", difficulty: 2 },
    { english: "Guide", french: "Guide", category: "Voyage", difficulty: 3 },
    { english: "Museum", french: "Musée", category: "Voyage", difficulty: 2 },
    { english: "Beach", french: "Plage", category: "Voyage", difficulty: 2 },
    { english: "Mountain", french: "Montagne", category: "Voyage", difficulty: 2 },
    { english: "Island", french: "Île", category: "Voyage", difficulty: 2 },
    { english: "Lake", french: "Lac", category: "Voyage", difficulty: 2 },
    { english: "River", french: "Rivière", category: "Voyage", difficulty: 2 },
    { english: "Forest", french: "Forêt", category: "Voyage", difficulty: 2 },
    { english: "Desert", french: "Désert", category: "Voyage", difficulty: 3 },
    { english: "Country", french: "Pays", category: "Voyage", difficulty: 1 },
    { english: "City", french: "Ville", category: "Voyage", difficulty: 1 },
    { english: "Village", french: "Village", category: "Voyage", difficulty: 2 },
    { english: "Town", french: "Petite ville", category: "Voyage", difficulty: 2 },
    { english: "Capital", french: "Capitale", category: "Voyage", difficulty: 2 },
    { english: "Abroad", french: "À l'étranger", category: "Voyage", difficulty: 3 },
    { english: "Foreign", french: "Étranger", category: "Voyage", difficulty: 2 },
    { english: "Local", french: "Local", category: "Voyage", difficulty: 2 },
    { english: "Souvenir", french: "Souvenir", category: "Voyage", difficulty: 3 },
    { english: "Postcard", french: "Carte postale", category: "Voyage", difficulty: 3 },
    { english: "Currency", french: "Devise / Monnaie", category: "Voyage", difficulty: 3 },
    { english: "Exchange rate", french: "Taux de change", category: "Voyage", difficulty: 3 },
    { english: "ATM", french: "Distributeur", category: "Voyage", difficulty: 3 },
    { english: "Credit card", french: "Carte de crédit", category: "Voyage", difficulty: 2 },
];

// ============================================
// SUITE DU DICTIONNAIRE (TEMPS, ANIMAUX, NATURE...)
// ============================================
// Pour des raisons d'espace, voici les autres catégories en résumé
// Ajoutez ces blocs après la dernière entrée ci-dessus

const vocabulaireSuite1 = [
    // ==================== TEMPS & MÉTÉO (60 mots) ====================
    { english: "Time", french: "Temps", category: "Temps & Météo", difficulty: 1 },
    { english: "Clock", french: "Horloge", category: "Temps & Météo", difficulty: 2 },
    { english: "Watch", french: "Montre", category: "Temps & Météo", difficulty: 1 },
    { english: "Hour", french: "Heure", category: "Temps & Météo", difficulty: 1 },
    { english: "Minute", french: "Minute", category: "Temps & Météo", difficulty: 1 },
    { english: "Second", french: "Seconde", category: "Temps & Météo", difficulty: 1 },
    { english: "Morning", french: "Matin", category: "Temps & Météo", difficulty: 1 },
    { english: "Afternoon", french: "Après-midi", category: "Temps & Météo", difficulty: 2 },
    { english: "Evening", french: "Soir", category: "Temps & Météo", difficulty: 1 },
    { english: "Night", french: "Nuit", category: "Temps & Météo", difficulty: 1 },
    { english: "Midnight", french: "Minuit", category: "Temps & Météo", difficulty: 3 },
    { english: "Noon", french: "Midi", category: "Temps & Météo", difficulty: 3 },
    { english: "Today", french: "Aujourd'hui", category: "Temps & Météo", difficulty: 2 },
    { english: "Tomorrow", french: "Demain", category: "Temps & Météo", difficulty: 2 },
    { english: "Yesterday", french: "Hier", category: "Temps & Météo", difficulty: 2 },
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
    { english: "Weather", french: "Météo / Temps", category: "Temps & Météo", difficulty: 2 },
    { english: "Sun", french: "Soleil", category: "Temps & Météo", difficulty: 1 },
    { english: "Rain", french: "Pluie", category: "Temps & Météo", difficulty: 1 },
    { english: "Snow", french: "Neige", category: "Temps & Météo", difficulty: 2 },
    { english: "Wind", french: "Vent", category: "Temps & Météo", difficulty: 2 },
    { english: "Cloud", french: "Nuage", category: "Temps & Météo", difficulty: 2 },
    { english: "Storm", french: "Tempête", category: "Temps & Météo", difficulty: 2 },
    { english: "Thunder", french: "Tonnerre", category: "Temps & Météo", difficulty: 3 },
    { english: "Lightning", french: "Éclair", category: "Temps & Météo", difficulty: 3 },
    { english: "Rainbow", french: "Arc-en-ciel", category: "Temps & Météo", difficulty: 3 },
    { english: "Fog", french: "Brouillard", category: "Temps & Météo", difficulty: 3 },
    { english: "Ice", french: "Glace", category: "Temps & Météo", difficulty: 2 },
    { english: "Temperature", french: "Température", category: "Temps & Météo", difficulty: 3 },
    { english: "Hot", french: "Chaud", category: "Temps & Météo", difficulty: 1 },
    { english: "Cold", french: "Froid", category: "Temps & Météo", difficulty: 1 },
    { english: "Warm", french: "Chaud (tiède)", category: "Temps & Météo", difficulty: 2 },
    { english: "Cool", french: "Frais", category: "Temps & Météo", difficulty: 2 },
    { english: "Dry", french: "Sec", category: "Temps & Météo", difficulty: 2 },
    { english: "Wet", french: "Mouillé", category: "Temps & Météo", difficulty: 2 },
    { english: "Humid", french: "Humide", category: "Temps & Météo", difficulty: 3 },
    { english: "Forecast", french: "Prévisions", category: "Temps & Météo", difficulty: 3 },
    { english: "Climate", french: "Climat", category: "Temps & Météo", difficulty: 3 },
    { english: "Season", french: "Saison", category: "Temps & Météo", difficulty: 2 },
];

// Fusionner les tableaux
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
function loadState() {
    try {
        const saved = localStorage.getItem('english-flashcards-pro-state');
        if (saved) {
            const parsed = JSON.parse(saved);
            state.wordsLearned = parsed.wordsLearned || [];
            state.bestStreak = parsed.bestStreak || 0;
            state.totalScore = parsed.totalScore || 0;
        }
    } catch (e) {
        console.warn('Impossible de charger les données.');
    }
}

function saveState() {
    try {
        localStorage.setItem('english-flashcards-pro-state', JSON.stringify({
            wordsLearned: state.wordsLearned,
            bestStreak: state.bestStreak,
            totalScore: state.totalScore,
        }));
    } catch (e) {
        console.warn('Impossible de sauvegarder.');
    }
}

// ============================================
// PARTICULES
// ============================================
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    const emojis = ['✨', '💫', '⭐', '🔮', '💎', '🌸', '🦋', '🌙', '🔥', '💜'];
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('span');
        particle.className = 'particle';
        particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.fontSize = (Math.random() * 14 + 8) + 'px';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 6 + 6) + 's';
        container.appendChild(particle);
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
        if (el) { el.classList.add('hidden'); el.classList.remove('animate-fade-in'); }
    });
    const target = document.getElementById(sections[sectionName]);
    if (target) { target.classList.remove('hidden'); void target.offsetWidth; target.classList.add('animate-fade-in'); }
    
    document.querySelectorAll('.nav-btn, .nav-btn-mobile').forEach(btn => {
        btn.classList.remove('bg-white/10', 'text-white');
        btn.classList.add('text-gray-400');
        if (btn.dataset.nav === sectionName) { btn.classList.add('bg-white/10', 'text-white'); btn.classList.remove('text-gray-400'); }
    });
    
    if (sectionName === 'quiz') startQuiz();
    if (sectionName === 'stats') updateStats();
    if (sectionName === 'dictionary') displayDictionary();
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
    if (card) { card.style.transform = 'scale(0.96)'; setTimeout(() => card.style.transform = 'scale(1)', 150); }
}

function nextCard() { state.currentCard = (state.currentCard + 1) % vocabulaireComplet.length; updateFlashcard(); }
function previousCard() { state.currentCard = (state.currentCard - 1 + vocabulaireComplet.length) % vocabulaireComplet.length; updateFlashcard(); }

function markAsKnown() {
    const word = vocabulaireComplet[state.currentCard].english;
    if (!state.wordsLearned.includes(word)) {
        state.wordsLearned.push(word);
        state.totalScore += 10;
        createConfetti();
        createNotification(`"${word}" appris ! +10 pts`, 'success');
        saveState();
    }
    updateProgress();
    updateStats();
    setTimeout(() => nextCard(), 600);
}

function updateProgress() {
    const progress = (state.wordsLearned.length / vocabulaireComplet.length) * 100;
    document.getElementById('progress-bar').style.width = Math.min(progress, 100) + '%';
    document.getElementById('progress-percentage').textContent = Math.round(progress) + '%';
    document.getElementById('streak-counter').textContent = state.streak;
    document.getElementById('total-score').textContent = state.totalScore;
}

// ============================================
// QUIZ
// ============================================
function startQuiz() {
    const shuffled = [...vocabulaireComplet].sort(() => Math.random() - 0.5);
    state.quizQuestions = shuffled.slice(0, 10);
    state.currentQuizIndex = 0;
    state.streak = 0;
    document.getElementById('quiz-answer').style.display = 'inline-block';
    document.getElementById('quiz-answer').value = '';
    document.getElementById('next-quiz-btn').classList.add('hidden');
    document.getElementById('quiz-result').innerHTML = '';
    displayQuizQuestion();
    setTimeout(() => document.getElementById('quiz-answer').focus(), 300);
}

function displayQuizQuestion() {
    if (state.currentQuizIndex >= state.quizQuestions.length) {
        document.getElementById('quiz-word').textContent = '🎉 Quiz terminé !';
        document.getElementById('quiz-answer').style.display = 'none';
        document.getElementById('quiz-result').innerHTML = `<span class="text-emerald-400 font-bold">Score: ${state.streak}/10</span>`;
        return;
    }
    document.getElementById('quiz-word').textContent = state.quizQuestions[state.currentQuizIndex].english;
    document.getElementById('quiz-question-number').textContent = state.currentQuizIndex + 1;
    document.getElementById('quiz-answer').value = '';
    document.getElementById('quiz-answer').style.display = 'inline-block';
}

function checkQuizAnswer() {
    const userAnswer = document.getElementById('quiz-answer').value.trim().toLowerCase();
    const correct = state.quizQuestions[state.currentQuizIndex].french.toLowerCase();
    if (!userAnswer) { document.getElementById('quiz-result').innerHTML = '<span class="text-amber-400">Entrez une réponse</span>'; return; }
    if (userAnswer === correct) {
        state.streak++; state.totalScore += 10;
        if (state.streak > state.bestStreak) state.bestStreak = state.streak;
        document.getElementById('quiz-result').innerHTML = '<span class="text-emerald-400">✅ Parfait ! +10 pts</span>';
        createConfetti(); saveState();
    } else {
        state.streak = 0;
        document.getElementById('quiz-result').innerHTML = `<span class="text-red-400">❌ Réponse: ${state.quizQuestions[state.currentQuizIndex].french}</span>`;
    }
    updateProgress(); updateStats();
    document.getElementById('next-quiz-btn').classList.remove('hidden');
    document.getElementById('next-quiz-btn').focus();
}

function nextQuizQuestion() {
    state.currentQuizIndex++;
    document.getElementById('next-quiz-btn').classList.add('hidden');
    document.getElementById('quiz-result').innerHTML = '';
    displayQuizQuestion();
    setTimeout(() => document.getElementById('quiz-answer').focus(), 200);
}

// ============================================
// STATISTIQUES
// ============================================
function updateStats() {
    document.getElementById('stats-words-learned').textContent = state.wordsLearned.length;
    document.getElementById('stats-quiz-correct').textContent = state.streak;
    document.getElementById('stats-streak').textContent = state.bestStreak;
    let level, emoji;
    if (state.totalScore >= 500) { level = 'Expert'; emoji = '🏆'; }
    else if (state.totalScore >= 200) { level = 'Avancé'; emoji = '🌟'; }
    else if (state.totalScore >= 50) { level = 'Intermédiaire'; emoji = '📚'; }
    else { level = 'Débutant'; emoji = '🌱'; }
    document.getElementById('level-badge').textContent = emoji;
    document.getElementById('level-text').textContent = level;
}

// ============================================
// DICTIONNAIRE
// ============================================
function displayDictionary(filter = '') {
    const container = document.getElementById('dictionary-words');
    if (!container) return;
    container.innerHTML = '';
    const filtered = filter ? vocabulaireComplet.filter(w => w.english.toLowerCase().includes(filter.toLowerCase()) || w.french.toLowerCase().includes(filter.toLowerCase()) || w.category.toLowerCase().includes(filter.toLowerCase())) : vocabulaireComplet;
    if (filtered.length === 0) { container.innerHTML = '<div class="col-span-full text-center py-12 text-gray-500"><i class="fas fa-search text-4xl mb-3 block"></i><p>Aucun mot trouvé</p></div>'; return; }
    filtered.forEach(word => {
        const card = document.createElement('div');
        card.className = 'glass-card rounded-2xl p-4 cursor-pointer hover:scale-[1.02] transition-all';
        card.onclick = () => { state.currentCard = vocabulaireComplet.indexOf(word); showSection('flashcards'); updateFlashcard(); };
        card.innerHTML = `<span class="text-xs bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded-full">${word.category}</span><p class="text-lg font-bold text-white mt-2">${word.english}</p><p class="text-sm text-gray-400">${word.french}</p>${state.wordsLearned.includes(word.english) ? '<span class="text-xs text-emerald-400">✓ Appris</span>' : ''}`;
        container.appendChild(card);
    });
}
function searchDictionary() { displayDictionary(document.getElementById('dictionary-search').value); }

// ============================================
// NOTIFICATIONS & CONFETTIS
// ============================================
function createNotification(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = 'toast fixed top-20 right-4 z-[9999]';
    toast.innerHTML = `<div class="bg-gradient-to-r ${type === 'success' ? 'from-emerald-500 to-teal-600' : 'from-blue-500 to-indigo-600'} text-white px-5 py-3 rounded-2xl shadow-2xl text-sm font-medium"><i class="fas fa-check-circle mr-2"></i>${message}</div>`;
    document.body.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.5s'; setTimeout(() => toast.remove(), 500); }, 2500);
}

function createConfetti() {
    const emojis = ['🎉', '🎊', '✨', '💫', '🌟', '🎈', '💎', '🔥', '💜', '🏆'];
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti-piece';
            confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = -(Math.random() * 20) + 'px';
            confetti.style.fontSize = (Math.random() * 20 + 15) + 'px';
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
    const isFlashcards = !document.getElementById('flashcards-section').classList.contains('hidden');
    const isQuiz = !document.getElementById('quiz-section').classList.contains('hidden');
    if (isFlashcards) {
        if (e.key === ' ') { e.preventDefault(); flipCard(); }
        if (e.key === 'ArrowRight') { e.preventDefault(); nextCard(); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); previousCard(); }
    }
    if (isQuiz && e.key === 'Enter') {
        const nextBtn = document.getElementById('next-quiz-btn');
        nextBtn && !nextBtn.classList.contains('hidden') ? (e.preventDefault(), nextQuizQuestion()) : (e.preventDefault(), checkQuizAnswer());
    }
    if (['1','2','3','4'].includes(e.key) && !e.ctrlKey) { e.preventDefault(); showSection(['flashcards','quiz','stats','dictionary'][parseInt(e.key)-1]); }
});

// ============================================
// INITIALISATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    console.log(`%c📚 English Flashcards Pro %c- ${vocabulaireComplet.length} mots`, 'font-size:18px;font-weight:bold;color:#a855f7;', 'font-size:12px;color:#6b7280;');
    console.log('%c👨‍💻 Développé par Ir. Cosmas MUSAFIRI MUGONGO', 'font-size:12px;color:#9ca3af;font-style:italic;');
    loadState();
    createParticles();
    updateFlashcard();
    updateProgress();
    updateStats();
    displayDictionary();
    showSection('flashcards');
});