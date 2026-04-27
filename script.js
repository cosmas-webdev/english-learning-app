// ============================================
// ENGLISH FLASHCARDS PRO
// Développé par Ir. Cosmas MUSAFIRI MUGONGO
// © 2026 - Tous droits réservés
// ============================================

// Base de vocabulaire enrichie (30 mots)
const vocabulaire = [
    // Salutations
    { english: "Hello", french: "Bonjour", category: "Salutations", difficulty: 1 },
    { english: "Goodbye", french: "Au revoir", category: "Salutations", difficulty: 1 },
    { english: "Good morning", french: "Bonjour (matin)", category: "Salutations", difficulty: 1 },
    { english: "Good evening", french: "Bonsoir", category: "Salutations", difficulty: 1 },
    { english: "Good night", french: "Bonne nuit", category: "Salutations", difficulty: 1 },
    { english: "How are you?", french: "Comment allez-vous ?", category: "Salutations", difficulty: 2 },
    
    // Politesse
    { english: "Thank you", french: "Merci", category: "Politesse", difficulty: 1 },
    { english: "Please", french: "S'il vous plaît", category: "Politesse", difficulty: 1 },
    { english: "Sorry", french: "Désolé", category: "Politesse", difficulty: 1 },
    { english: "Excuse me", french: "Excusez-moi", category: "Politesse", difficulty: 2 },
    { english: "You're welcome", french: "De rien", category: "Politesse", difficulty: 2 },
    
    // Basique
    { english: "Yes", french: "Oui", category: "Basique", difficulty: 1 },
    { english: "No", french: "Non", category: "Basique", difficulty: 1 },
    { english: "Maybe", french: "Peut-être", category: "Basique", difficulty: 2 },
    { english: "I don't know", french: "Je ne sais pas", category: "Basique", difficulty: 2 },
    
    // Nourriture
    { english: "Water", french: "Eau", category: "Nourriture", difficulty: 1 },
    { english: "Food", french: "Nourriture", category: "Nourriture", difficulty: 1 },
    { english: "Bread", french: "Pain", category: "Nourriture", difficulty: 1 },
    { english: "Coffee", french: "Café", category: "Nourriture", difficulty: 1 },
    
    // Social
    { english: "Friend", french: "Ami", category: "Social", difficulty: 1 },
    { english: "Family", french: "Famille", category: "Social", difficulty: 1 },
    { english: "Name", french: "Nom", category: "Social", difficulty: 1 },
    
    // Émotions
    { english: "Love", french: "Amour", category: "Émotions", difficulty: 1 },
    { english: "Happy", french: "Heureux", category: "Émotions", difficulty: 2 },
    { english: "Sad", french: "Triste", category: "Émotions", difficulty: 1 },
    
    // Adjectifs
    { english: "Beautiful", french: "Beau/Belle", category: "Adjectifs", difficulty: 2 },
    { english: "Big", french: "Grand", category: "Adjectifs", difficulty: 1 },
    { english: "Small", french: "Petit", category: "Adjectifs", difficulty: 1 },
    
    // Temps
    { english: "Today", french: "Aujourd'hui", category: "Temps", difficulty: 2 },
    { english: "Tomorrow", french: "Demain", category: "Temps", difficulty: 2 },
];

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
// GESTION DU STOCKAGE LOCAL
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
        console.warn('Impossible de charger les données sauvegardées.');
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
        console.warn('Impossible de sauvegarder les données.');
    }
}

function resetState() {
    if (confirm('Voulez-vous vraiment réinitialiser toute votre progression ?')) {
        state.wordsLearned = [];
        state.bestStreak = 0;
        state.totalScore = 0;
        state.streak = 0;
        saveState();
        updateProgress();
        updateStats();
        updateFlashcard();
        createNotification('Progression réinitialisée', 'info');
    }
}

// ============================================
// NOTIFICATION TOAST
// ============================================
function createNotification(message, type = 'success') {
    const colors = {
        success: 'from-emerald-500 to-teal-600',
        info: 'from-blue-500 to-indigo-600',
        error: 'from-red-500 to-pink-600',
    };
    
    const toast = document.createElement('div');
    toast.className = 'fixed top-20 right-4 z-[9999] notification-badge';
    toast.innerHTML = `
        <div class="bg-gradient-to-r ${colors[type]} text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 text-sm font-medium">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'info' ? 'info-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.5s';
        setTimeout(() => toast.remove(), 500);
    }, 2500);
}

// ============================================
// PARTICULES D'ARRIÈRE-PLAN
// ============================================
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    const emojis = ['✨', '💫', '⭐', '🔮', '💎', '🌸', '🦋', '🌙', '🔥', '💜'];
    
    for (let i = 0; i < 25; i++) {
        const particle = document.createElement('span');
        particle.className = 'particle';
        particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.fontSize = (Math.random() * 16 + 8) + 'px';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 6 + 6) + 's';
        particle.style.opacity = (Math.random() * 0.3 + 0.05);
        container.appendChild(particle);
    }
}

// ============================================
// NAVIGATION
// ============================================
function showSection(sectionName) {
    // Cacher toutes les sections
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
    
    // Afficher la section demandée
    const targetId = sections[sectionName];
    const target = document.getElementById(targetId);
    if (target) {
        target.classList.remove('hidden');
        // Redéclencher l'animation
        void target.offsetWidth;
        target.classList.add('animate-fade-in');
    }
    
    // Mise à jour navigation desktop
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('bg-white/10', 'text-white');
        btn.classList.add('text-gray-400');
        if (btn.dataset.nav === sectionName) {
            btn.classList.add('bg-white/10', 'text-white');
            btn.classList.remove('text-gray-400');
        }
    });
    
    // Mise à jour navigation mobile
    document.querySelectorAll('.nav-btn-mobile').forEach(btn => {
        btn.classList.remove('bg-white/10', 'text-white');
        btn.classList.add('text-gray-400');
        if (btn.dataset.nav === sectionName) {
            btn.classList.add('bg-white/10', 'text-white');
            btn.classList.remove('text-gray-400');
        }
    });
    
    // Actions spécifiques selon la section
    if (sectionName === 'quiz') startQuiz();
    if (sectionName === 'stats') updateStats();
    if (sectionName === 'dictionary') displayDictionary();
}

// ============================================
// GESTION DES FLASHCARDS
// ============================================
function updateFlashcard() {
    const word = vocabulaire[state.currentCard];
    if (!word) return;
    
    const englishEl = document.getElementById('english-word');
    const frenchEl = document.getElementById('french-word');
    const categoryEl = document.getElementById('category-badge');
    const cardNumberEl = document.getElementById('current-card-number');
    const totalCardsEl = document.getElementById('total-cards');
    
    if (englishEl) englishEl.textContent = word.english;
    if (frenchEl) frenchEl.textContent = word.french;
    if (categoryEl) categoryEl.textContent = word.category;
    if (cardNumberEl) cardNumberEl.textContent = state.currentCard + 1;
    if (totalCardsEl) totalCardsEl.textContent = vocabulaire.length;
    
    // Réinitialiser le flip
    state.isFlipped = false;
    const cardInner = document.getElementById('card-inner');
    if (cardInner) cardInner.classList.remove('flipped');
    
    updateProgress();
}

function flipCard() {
    state.isFlipped = !state.isFlipped;
    const cardInner = document.getElementById('card-inner');
    if (cardInner) {
        cardInner.classList.toggle('flipped');
    }
    
    // Effet visuel de "pop"
    const card = document.querySelector('.card-3d');
    if (card) {
        card.style.transform = 'scale(0.96)';
        setTimeout(() => card.style.transform = 'scale(1)', 150);
    }
}

function nextCard() {
    state.currentCard = (state.currentCard + 1) % vocabulaire.length;
    updateFlashcard();
}

function previousCard() {
    state.currentCard = (state.currentCard - 1 + vocabulaire.length) % vocabulaire.length;
    updateFlashcard();
}

function markAsKnown() {
    const word = vocabulaire[state.currentCard].english;
    if (!state.wordsLearned.includes(word)) {
        state.wordsLearned.push(word);
        state.totalScore += 10;
        createConfetti();
        createNotification(`"${word}" marqué comme appris ! +10 points`, 'success');
        saveState();
    } else {
        createNotification(`"${word}" déjà dans votre liste`, 'info');
    }
    updateProgress();
    updateStats();
    
    // Passer automatiquement au mot suivant après un court délai
    setTimeout(() => nextCard(), 600);
}

function updateProgress() {
    const progress = vocabulaire.length > 0 
        ? (state.wordsLearned.length / vocabulaire.length) * 100 
        : 0;
    
    const progressBar = document.getElementById('progress-bar');
    const progressPercentage = document.getElementById('progress-percentage');
    const streakCounter = document.getElementById('streak-counter');
    const totalScore = document.getElementById('total-score');
    
    if (progressBar) progressBar.style.width = Math.min(progress, 100) + '%';
    if (progressPercentage) progressPercentage.textContent = Math.round(progress) + '%';
    if (streakCounter) streakCounter.textContent = state.streak;
    if (totalScore) totalScore.textContent = state.totalScore;
}

// ============================================
// GESTION DU QUIZ
// ============================================
function startQuiz() {
    // Mélanger et prendre 10 questions
    const shuffled = [...vocabulaire].sort(() => Math.random() - 0.5);
    state.quizQuestions = shuffled.slice(0, Math.min(10, vocabulaire.length));
    state.currentQuizIndex = 0;
    state.streak = 0;
    
    const quizAnswer = document.getElementById('quiz-answer');
    const nextBtn = document.getElementById('next-quiz-btn');
    const quizResult = document.getElementById('quiz-result');
    const quizWord = document.getElementById('quiz-word');
    
    if (quizAnswer) {
        quizAnswer.style.display = 'inline-block';
        quizAnswer.value = '';
    }
    if (nextBtn) nextBtn.classList.add('hidden');
    if (quizResult) quizResult.innerHTML = '';
    if (quizWord) quizWord.textContent = '';
    
    displayQuizQuestion();
    setTimeout(() => {
        if (quizAnswer) quizAnswer.focus();
    }, 300);
}

function displayQuizQuestion() {
    const quizWord = document.getElementById('quiz-word');
    const questionNumber = document.getElementById('quiz-question-number');
    const quizAnswer = document.getElementById('quiz-answer');
    
    if (state.currentQuizIndex >= state.quizQuestions.length) {
        if (quizWord) quizWord.textContent = '🎉 Quiz terminé !';
        if (questionNumber) questionNumber.textContent = '10';
        if (quizAnswer) quizAnswer.style.display = 'none';
        document.getElementById('quiz-result').innerHTML = `
            <span class="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Score final : ${state.streak} / ${state.quizQuestions.length}
            </span>
        `;
        document.getElementById('next-quiz-btn').classList.add('hidden');
        
        if (state.streak === state.quizQuestions.length) {
            createConfetti();
            createNotification('Score parfait ! 🏆', 'success');
        }
        return;
    }
    
    if (quizWord) quizWord.textContent = state.quizQuestions[state.currentQuizIndex].english;
    if (questionNumber) questionNumber.textContent = state.currentQuizIndex + 1;
    if (quizAnswer) {
        quizAnswer.value = '';
        quizAnswer.style.display = 'inline-block';
    }
}

function checkQuizAnswer() {
    const quizAnswer = document.getElementById('quiz-answer');
    const resultDiv = document.getElementById('quiz-result');
    const nextBtn = document.getElementById('next-quiz-btn');
    
    if (!quizAnswer || state.currentQuizIndex >= state.quizQuestions.length) return;
    
    const userAnswer = quizAnswer.value.trim().toLowerCase();
    const currentQuestion = state.quizQuestions[state.currentQuizIndex];
    const correctAnswer = currentQuestion.french.toLowerCase();
    
    if (userAnswer === '') {
        if (resultDiv) resultDiv.innerHTML = '<span class="text-amber-400">⚠️ Veuillez entrer une réponse</span>';
        return;
    }
    
    if (userAnswer === correctAnswer) {
        state.streak++;
        state.totalScore += 10;
        if (state.streak > state.bestStreak) {
            state.bestStreak = state.streak;
        }
        if (resultDiv) {
            resultDiv.innerHTML = '<span class="text-emerald-400">✅ Parfait ! +10 points</span>';
        }
        createConfetti();
        saveState();
    } else {
        state.streak = 0;
        if (resultDiv) {
            resultDiv.innerHTML = `
                <span class="text-red-400">❌ Incorrect</span>
                <br>
                <span class="text-sm text-gray-400 mt-1 block">Réponse : <strong class="text-white">${currentQuestion.french}</strong></span>
            `;
        }
    }
    
    updateProgress();
    updateStats();
    
    if (nextBtn) {
        nextBtn.classList.remove('hidden');
        nextBtn.focus();
    }
}

function nextQuizQuestion() {
    state.currentQuizIndex++;
    const nextBtn = document.getElementById('next-quiz-btn');
    const resultDiv = document.getElementById('quiz-result');
    const quizAnswer = document.getElementById('quiz-answer');
    
    if (nextBtn) nextBtn.classList.add('hidden');
    if (resultDiv) resultDiv.innerHTML = '';
    
    displayQuizQuestion();
    setTimeout(() => {
        if (quizAnswer) quizAnswer.focus();
    }, 200);
}

// ============================================
// GESTION DES STATISTIQUES
// ============================================
function updateStats() {
    const statsWordsLearned = document.getElementById('stats-words-learned');
    const statsQuizCorrect = document.getElementById('stats-quiz-correct');
    const statsStreak = document.getElementById('stats-streak');
    const levelBadge = document.getElementById('level-badge');
    const levelText = document.getElementById('level-text');
    
    if (statsWordsLearned) statsWordsLearned.textContent = state.wordsLearned.length;
    if (statsQuizCorrect) statsQuizCorrect.textContent = state.streak;
    if (statsStreak) statsStreak.textContent = state.bestStreak;
    
    // Déterminer le niveau
    let level, emoji, color;
    if (state.totalScore >= 200) {
        level = 'Expert'; emoji = '🏆'; color = 'text-yellow-400';
    } else if (state.totalScore >= 100) {
        level = 'Avancé'; emoji = '🌟'; color = 'text-purple-400';
    } else if (state.totalScore >= 50) {
        level = 'Intermédiaire'; emoji = '📚'; color = 'text-blue-400';
    } else if (state.totalScore >= 10) {
        level = 'Débutant+'; emoji = '🌿'; color = 'text-green-400';
    } else {
        level = 'Débutant'; emoji = '🌱'; color = 'text-gray-400';
    }
    
    if (levelBadge) levelBadge.textContent = emoji;
    if (levelText) {
        levelText.textContent = level;
        levelText.className = `text-xl sm:text-2xl font-bold ${color}`;
    }
}

// ============================================
// GESTION DU DICTIONNAIRE
// ============================================
function displayDictionary(filter = '') {
    const container = document.getElementById('dictionary-words');
    if (!container) return;
    
    container.innerHTML = '';
    
    const filtered = filter
        ? vocabulaire.filter(w =>
            w.english.toLowerCase().includes(filter.toLowerCase()) ||
            w.french.toLowerCase().includes(filter.toLowerCase()) ||
            w.category.toLowerCase().includes(filter.toLowerCase())
          )
        : vocabulaire;
    
    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center py-12 text-gray-500">
                <i class="fas fa-search text-4xl mb-3 block"></i>
                <p>Aucun mot trouvé pour "${filter}"</p>
            </div>
        `;
        return;
    }
    
    filtered.forEach(word => {
        const isLearned = state.wordsLearned.includes(word.english);
        const card = document.createElement('div');
        card.className = `
            glass rounded-2xl p-4 sm:p-5 cursor-pointer transition-all duration-300 
            hover:scale-[1.02] border border-white/5 
            ${isLearned ? 'hover:border-emerald-500/30' : 'hover:border-purple-500/20'}
        `;
        card.onclick = () => {
            state.currentCard = vocabulaire.indexOf(word);
            showSection('flashcards');
            updateFlashcard();
        };
        
        card.innerHTML = `
            <div class="flex justify-between items-start mb-2">
                <span class="text-[10px] sm:text-xs bg-purple-500/15 text-purple-400 px-2 py-0.5 rounded-full font-medium">
                    ${word.category}
                </span>
                <span class="text-[10px] sm:text-xs text-gray-600">
                    ${'⭐'.repeat(word.difficulty)}
                </span>
            </div>
            <p class="text-base sm:text-lg font-bold text-white mb-1">${word.english}</p>
            <p class="text-sm text-gray-400">${word.french}</p>
            ${isLearned ? '<div class="mt-2 text-[10px] text-emerald-400"><i class="fas fa-check-circle mr-1"></i> Appris</div>' : ''}
        `;
        container.appendChild(card);
    });
}

function searchDictionary() {
    const searchInput = document.getElementById('dictionary-search');
    if (searchInput) {
        displayDictionary(searchInput.value);
    }
}

// ============================================
// EFFETS VISUELS - CONFETTIS
// ============================================
function createConfetti() {
    const emojis = ['🎉', '🎊', '✨', '💫', '🌟', '🎈', '💎', '🔥', '💜', '🏆'];
    const colors = ['#6366f1', '#a855f7', '#ec4899', '#f59e0b', '#10b981', '#3b82f6'];
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti-piece';
            confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = -(Math.random() * 20) + 'px';
            confetti.style.fontSize = (Math.random() * 20 + 15) + 'px';
            confetti.style.animationDuration = (Math.random() * 2 + 2.5) + 's';
            confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 3500);
        }, i * 30);
    }
}

// ============================================
// RACCOURCIS CLAVIER
// ============================================
document.addEventListener('keydown', (e) => {
    // Éviter les raccourcis quand l'utilisateur tape dans un champ
    if (e.target.tagName === 'INPUT' && e.key !== 'Escape') return;
    
    const flashcardsSection = document.getElementById('flashcards-section');
    const quizSection = document.getElementById('quiz-section');
    
    const isFlashcardsVisible = flashcardsSection && !flashcardsSection.classList.contains('hidden');
    const isQuizVisible = quizSection && !quizSection.classList.contains('hidden');
    
    if (isFlashcardsVisible) {
        switch (e.key) {
            case ' ':
            case 'Spacebar':
                e.preventDefault();
                flipCard();
                break;
            case 'ArrowRight':
                e.preventDefault();
                nextCard();
                break;
            case 'ArrowLeft':
                e.preventDefault();
                previousCard();
                break;
            case 'Enter':
                e.preventDefault();
                markAsKnown();
                break;
        }
    }
    
    if (isQuizVisible) {
        if (e.key === 'Enter') {
            const nextBtn = document.getElementById('next-quiz-btn');
            if (nextBtn && !nextBtn.classList.contains('hidden')) {
                e.preventDefault();
                nextQuizQuestion();
            } else {
                e.preventDefault();
                checkQuizAnswer();
            }
        }
    }
    
    // Navigation rapide avec touches 1-4
    const sections = ['flashcards', 'quiz', 'stats', 'dictionary'];
    const numKey = parseInt(e.key);
    if (numKey >= 1 && numKey <= 4 && !e.ctrlKey && !e.altKey && !e.metaKey) {
        e.preventDefault();
        showSection(sections[numKey - 1]);
    }
});

// ============================================
// INITIALISATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('%c🚀 English Flashcards Pro %cInitialisé',
        'font-size: 18px; font-weight: bold; color: #a855f7;',
        'font-size: 12px; color: #6b7280;');
    console.log('%c👨‍💻 Développé par Ir. Cosmas MUSAFIRI MUGONGO',
        'font-size: 12px; color: #9ca3af; font-style: italic;');
    console.log('%c🛠️ HTML5 • Tailwind CSS • JavaScript • Git/GitHub',
        'font-size: 10px; color: #6b7280;');
    
    loadState();
    createParticles();
    updateFlashcard();
    updateProgress();
    updateStats();
    displayDictionary();
    
    // Afficher la section flashcards par défaut
    showSection('flashcards');
    
    // Message de bienvenue
    setTimeout(() => {
        if (state.totalScore === 0) {
            createNotification('Bienvenue ! Commencez par explorer les flashcards 📝', 'info');
        } else {
            createNotification(`Content de vous revoir ! Score : ${state.totalScore} points ⭐`, 'info');
        }
    }, 1000);
});

// ============================================
// FIN DU SCRIPT
// ============================================