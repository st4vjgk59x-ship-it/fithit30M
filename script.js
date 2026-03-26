// FitHit30M - 30 napos fitness program

const WORKOUTS = [
    '🏃 30 perc futás + 20 fekvőtámasz',
    '💪 3×15 guggolás + 3×10 kitörés',
    '🧘 20 perc jóga + 30 perc séta',
    '🏋️ 3×12 fekvőtámasz + 3×15 törzsemelés',
    '🚴 40 perc kerékpározás',
    '🏊 30 perc úszás vagy 40 perc gyors séta',
    '🤸 Nyújtás + 20 perc core edzés',
    '🏃 35 perc futás + 15 fekvőtámasz',
    '💪 3×20 guggolás + 3×12 kitörés',
    '🧘 25 perc jóga + 10 perc meditáció',
    '🏋️ 4×10 fekvőtámasz + 4×12 törzsemelés',
    '🚴 45 perc kerékpározás',
    '🏊 35 perc úszás vagy 45 perc gyors séta',
    '🤸 Teljes test nyújtás + 25 perc core',
    '🏃 40 perc futás + 20 guggolás',
    '💪 Köredzés: 4×15 minden gyakorlatból',
    '🧘 30 perc jóga + 20 perc séta',
    '🏋️ 4×15 fekvőtámasz + 4×20 törzsemelés',
    '🚴 50 perc kerékpározás',
    '🏊 40 perc úszás vagy 50 perc gyors séta',
    '🤸 Mobilitás edzés + 30 perc core',
    '🏃 45 perc futás + 25 fekvőtámasz',
    '💪 3×20 guggolás + 3×15 kitörés + 20 fekvőtámasz',
    '🧘 35 perc jóga + teljes test nyújtás',
    '🏋️ 5×10 fekvőtámasz + 5×15 törzsemelés',
    '🚴 55 perc kerékpározás',
    '🏊 45 perc úszás vagy 55 perc gyors séta',
    '🤸 Köredzés: 5×12 minden gyakorlatból',
    '🏃 50 perc futás + erő edzés',
    '🏆 GRATULÁLOK! Teljes test edzés + ünneplés! 🎉'
];

const STORAGE_KEY = 'fithit30m_data';
const MIN_WEIGHT = 20;
const MAX_WEIGHT = 300;

const app = {
    data: null,

    init() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                this.data = JSON.parse(saved);
                this.showMainApp();
            } catch (e) {
                localStorage.removeItem(STORAGE_KEY);
                this.data = null;
            }
        }

        const form = document.getElementById('registration-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleRegistration();
            });
        }
    },

    handleRegistration() {
        const nameInput = document.getElementById('name');
        const weightInput = document.getElementById('weight');
        const nameError = document.getElementById('name-error');
        const weightError = document.getElementById('weight-error');
        const spinner = document.getElementById('loading-spinner');
        const btnText = document.querySelector('#start-btn .btn-text');
        const startBtn = document.getElementById('start-btn');

        // Clear previous errors
        nameError.textContent = '';
        weightError.textContent = '';

        const name = nameInput.value.trim();
        const weight = parseFloat(weightInput.value);
        let valid = true;

        if (!name) {
            nameError.textContent = 'Kérjük, add meg a neved!';
            valid = false;
        }

        if (!weightInput.value || isNaN(weight) || weight < MIN_WEIGHT || weight > MAX_WEIGHT) {
            weightError.textContent = `Kérjük, adj meg érvényes súlyt (${MIN_WEIGHT}–${MAX_WEIGHT} kg)!`;
            valid = false;
        }

        if (!valid) return;

        // Show loading state
        spinner.hidden = false;
        btnText.textContent = 'Betöltés...';
        startBtn.disabled = true;

        // Brief delay ensures the loading spinner is visible to the user before transitioning
        setTimeout(() => {
            this.data = {
                name,
                weight,
                currentDay: 1,
                completedDays: 0,
                startDate: new Date().toISOString()
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));

            spinner.hidden = true;
            btnText.textContent = 'Indítás!';
            startBtn.disabled = false;

            this.showMainApp();
        }, 400);
    },

    showMainApp() {
        const authScreen = document.getElementById('auth-screen');
        const mainApp = document.getElementById('main-app');

        authScreen.hidden = true;
        mainApp.hidden = false;

        this.updateUI();
    },

    updateUI() {
        const d = this.data;
        const day = Math.min(d.currentDay, 30);
        const completed = d.completedDays;
        const remaining = 30 - completed;
        const progressPct = (completed / 30) * 100;
        const workoutIndex = day - 1;

        document.getElementById('day-display').textContent = `Nap ${day} / 30`;
        document.getElementById('progress-fill').style.width = progressPct + '%';
        document.getElementById('user-greeting').textContent = `Hajrá, ${d.name}! 💪`;
        document.getElementById('workout').textContent = WORKOUTS[workoutIndex];
        document.getElementById('completed-days').textContent = completed;
        document.getElementById('remaining-days').textContent = remaining;
        document.getElementById('display-name').textContent = d.name;
        document.getElementById('display-weight').textContent = d.weight;

        const nextBtn = document.getElementById('next-day-btn');
        if (completed >= 30) {
            nextBtn.textContent = 'Program befejezve! 🏆';
            nextBtn.disabled = true;
        } else {
            nextBtn.textContent = 'Nap Kész ✅';
            nextBtn.disabled = false;
        }
    },

    nextDay() {
        if (!this.data || this.data.completedDays >= 30) return;

        this.data.completedDays += 1;
        this.data.currentDay = this.data.completedDays + 1;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
        this.updateUI();
    },

    reset() {
        if (!confirm('Biztosan újrakezded a programot?')) return;

        this.data.currentDay = 1;
        this.data.completedDays = 0;
        this.data.startDate = new Date().toISOString();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
        this.updateUI();
    },

    logout() {
        localStorage.removeItem(STORAGE_KEY);
        this.data = null;

        const authScreen = document.getElementById('auth-screen');
        const mainApp = document.getElementById('main-app');
        const nameInput = document.getElementById('name');
        const weightInput = document.getElementById('weight');

        mainApp.hidden = true;
        authScreen.hidden = false;

        nameInput.value = '';
        weightInput.value = '';
        document.getElementById('name-error').textContent = '';
        document.getElementById('weight-error').textContent = '';
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());