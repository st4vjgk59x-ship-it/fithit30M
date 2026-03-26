// FitHit30M Fitness App

const WORKOUTS = [
    '🏃 30 perc futás közepes tempóban',
    '💪 3×15 fekvőtámasz + 3×20 guggolás',
    '🧘 20 perc jóga és nyújtás',
    '🚴 45 perc kerékpározás vagy spinning',
    '🏋️ 3×12 súlyzós edzés (mellkas + váll)',
    '⛹️ 30 perc ugrókötél + 20 hasizom',
    '😴 Aktív pihenő: 30 perc séta',
    '🏊 30 perc úszás vagy vízi torna',
    '🔥 HIIT: 20 perc váltakozó intenzitású edzés',
    '🦵 3×15 kitörés + 3×15 vádli emelés',
    '💪 3×10 húzódzkodás + 3×15 tricep nyomás',
    '🧘 25 perc jóga + 10 perc meditáció',
    '🏃 5 km futás saját tempóban',
    '🏋️ 3×12 súlyzós edzés (hát + bicepsz)',
    '⛹️ 40 perc ugrókötél intervall',
    '😴 Aktív pihenő: könnyű nyújtás 20 perc',
    '🔥 Tabata: 8 kör, 20 mp munka / 10 mp pihenő',
    '🦵 4×12 guggolás súllyal + 3×12 román felhúzás',
    '💪 3×15 fekvőtámasz + 3×15 plank (30 mp)',
    '🚴 60 perc kerékpározás közepes tempóban',
    '🏊 40 perc úszás (vegyes stílus)',
    '🏋️ 3×10 teljes test edzés szabad súlyokkal',
    '🔥 HIIT: 25 perc magas intenzitású intervall',
    '🧘 30 perc jóga + teljes test nyújtás',
    '🏃 6 km futás + 10 perc levezetés',
    '💪 4×12 fekvőtámasz + 4×20 guggolás + 4×15 hasizom',
    '⛹️ 45 perc funkcionális edzés',
    '🦵 3×15 kidöfés + 3×15 glute bridge',
    '🏋️ Erő edzés: teljes test, maximális terheléssel',
    '🏆 ZÁRÓ KIHÍVÁS: 30 perc futás + 30 fekvőtámasz + 30 guggolás',
];

const STORAGE_KEY = 'fithit30m_data';

const app = (() => {
    let state = {
        name: '',
        weight: 0,
        currentDay: 1,
        completedDays: 0,
    };

    function save() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }

    function load() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                state = JSON.parse(raw);
                return true;
            }
        } catch (e) {
            console.warn('Failed to load saved data:', e);
        }
        return false;
    }

    function showApp() {
        document.getElementById('auth-screen').hidden = true;
        document.getElementById('main-app').hidden = false;
        render();
    }

    function showAuth() {
        document.getElementById('auth-screen').hidden = false;
        document.getElementById('main-app').hidden = true;
    }

    function render() {
        const day = Math.min(state.currentDay, 30);
        const completed = state.completedDays;
        const remaining = 30 - completed;
        const progress = (completed / 30) * 100;

        document.getElementById('day-display').textContent = `Nap ${day} / 30`;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        document.getElementById('user-greeting').textContent = `Hajrá, ${state.name}! 💪`;
        document.getElementById('workout').textContent = WORKOUTS[day - 1];
        document.getElementById('completed-days').textContent = completed;
        document.getElementById('remaining-days').textContent = remaining;
        document.getElementById('display-name').textContent = state.name;
        document.getElementById('display-weight').textContent = state.weight;

        const nextBtn = document.getElementById('next-day-btn');
        if (completed >= 30) {
            nextBtn.textContent = '🏆 Kihívás teljesítve!';
            nextBtn.disabled = true;
        } else {
            nextBtn.textContent = 'Nap Kész ✅';
            nextBtn.disabled = false;
        }
    }

    function nextDay() {
        if (state.completedDays >= 30) return;
        state.completedDays += 1;
        state.currentDay = Math.min(state.currentDay + 1, 30);
        save();
        render();
    }

    function reset() {
        if (!confirm('Biztosan újrakezded a 30 napos kihívást?')) return;
        state.currentDay = 1;
        state.completedDays = 0;
        save();
        render();
    }

    function logout() {
        if (!confirm('Biztosan kijelentkezel?')) return;
        localStorage.removeItem(STORAGE_KEY);
        state = { name: '', weight: 0, currentDay: 1, completedDays: 0 };
        document.getElementById('registration-form').reset();
        document.getElementById('name-error').textContent = '';
        document.getElementById('weight-error').textContent = '';
        showAuth();
    }

    function init() {
        const form = document.getElementById('registration-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let valid = true;

            const nameInput = document.getElementById('name');
            const weightInput = document.getElementById('weight');
            const nameError = document.getElementById('name-error');
            const weightError = document.getElementById('weight-error');

            nameError.textContent = '';
            weightError.textContent = '';

            const name = nameInput.value.trim();
            if (!name) {
                nameError.textContent = 'A név megadása kötelező.';
                valid = false;
            }

            const weight = parseFloat(weightInput.value);
            if (isNaN(weight) || weight < 20 || weight > 300) {
                weightError.textContent = 'Kérjük, adj meg egy érvényes súlyt (20–300 kg).';
                valid = false;
            }

            if (!valid) return;

            state.name = name;
            state.weight = weight;
            state.currentDay = 1;
            state.completedDays = 0;
            save();
            showApp();
        });

        if (load() && state.name) {
            showApp();
        } else {
            showAuth();
        }
    }

    return { nextDay, reset, logout, init };
})();

window.addEventListener('DOMContentLoaded', () => app.init());