// FitHit30M - 30 napos fitness alkalmazás

const STORAGE_KEY = 'fitHitUser';
const TOTAL_DAYS = 30;
const MIN_WEIGHT = 20;
const MAX_WEIGHT = 300;

const workouts = [
    { day: 1,  emoji: '🏃', name: 'Bemelegítő séta', desc: '30 perc séta közepes tempóban' },
    { day: 2,  emoji: '💪', name: 'Alap erőedzés', desc: '3x10 fekvőtámasz, 3x10 guggolás, 3x10 törzsizom' },
    { day: 3,  emoji: '🧘', name: 'Yoga & nyújtás', desc: '30 perc alapnyújtás és légzőgyakorlatok' },
    { day: 4,  emoji: '🏃', name: 'Futás intervalok', desc: '20 perc: 1 perc futás + 1 perc gyaloglás felváltva' },
    { day: 5,  emoji: '💪', name: 'Felsőtest edzés', desc: '3x12 fekvőtámasz, 3x12 tricepsz dips, 3x12 vállgyakorlat' },
    { day: 6,  emoji: '🚴', name: 'Kerékpározás', desc: '30 perc könnyű kerékpározás vagy szobabicikli' },
    { day: 7,  emoji: '😴', name: 'Pihenő nap', desc: 'Aktív pihenés: könnyű séta vagy nyújtás' },
    { day: 8,  emoji: '🏃', name: 'Kocogás', desc: '25 perc folyamatos kocogás' },
    { day: 9,  emoji: '💪', name: 'Alsótest edzés', desc: '3x15 guggolás, 3x15 kitörés, 3x15 vádli emelés' },
    { day: 10, emoji: '🧘', name: 'Pilates alapok', desc: '30 perc Pilates vagy core edzés' },
    { day: 11, emoji: '🏃', name: 'Tempó futás', desc: '20 perc gyorsabb tempójú futás' },
    { day: 12, emoji: '💪', name: 'Teljes test edzés', desc: '4x10 fekvőtámasz, 4x10 guggolás, 4x10 plank (30mp)' },
    { day: 13, emoji: '🚴', name: 'Hosszú kerékpározás', desc: '45 perc kerékpározás' },
    { day: 14, emoji: '😴', name: 'Pihenő nap', desc: 'Aktív pihenés: séta, nyújtás' },
    { day: 15, emoji: '🏃', name: 'Félmaraton előkészítő', desc: '30 perc kocogás + 5 perc sprint' },
    { day: 16, emoji: '💪', name: 'Felsőtest erőfejlesztés', desc: '4x12 fekvőtámasz, 4x12 tricepsz, 4x12 bicepsz curl' },
    { day: 17, emoji: '🧘', name: 'Mély nyújtás', desc: '35 perc jóga és mély nyújtó gyakorlatok' },
    { day: 18, emoji: '🏃', name: 'Intervalos futás', desc: '25 perc: 2 perc futás + 1 perc gyaloglás felváltva' },
    { day: 19, emoji: '💪', name: 'Alsótest erőfejlesztés', desc: '4x15 guggolás, 4x15 kitörés, 4x15 híd gyakorlat' },
    { day: 20, emoji: '🚴', name: 'Intenzív kerékpározás', desc: '40 perc közepes-magas intenzitású kerékpározás' },
    { day: 21, emoji: '😴', name: 'Pihenő nap', desc: 'Megérdemelt pihenés! Könnyű séta megengedett.' },
    { day: 22, emoji: '🏃', name: 'Hosszú futás', desc: '35 perc folyamatos kocogás' },
    { day: 23, emoji: '💪', name: 'Teljes test erőedzés', desc: '4x12 fekvőtámasz, 4x12 guggolás, 4x12 dips, 4x12 plank' },
    { day: 24, emoji: '🧘', name: 'Regeneráló jóga', desc: '40 perc regeneráló jóga és meditáció' },
    { day: 25, emoji: '🏃', name: 'Sprint edzés', desc: '20 perc: 8x 30mp sprint + 90mp pihenés' },
    { day: 26, emoji: '💪', name: 'Haladó felsőtest', desc: '5x10 fekvőtámasz, 5x10 vállgyakorlat, 5x10 tricepsz' },
    { day: 27, emoji: '🚴', name: 'Hosszú kerékpározás', desc: '50 perc kerékpározás közepes tempóban' },
    { day: 28, emoji: '😴', name: 'Pihenő nap', desc: 'Az utolsó szakasz előtt: pihenj és erőt gyűjts!' },
    { day: 29, emoji: '💪', name: 'Szuperset edzés', desc: '5x12 fekvőtámasz, 5x12 guggolás, 5x12 burpee, 5x12 plank' },
    { day: 30, emoji: '🏆', name: 'Záróedzés & Ünneplés!', desc: '30 perc szabadon választott edzés – Gratulálunk, teljesítetted a 30 napot! 🎉' },
];

const app = (function () {
    let userData = null;

    function saveData() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
    }

    function loadData() {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            try { userData = JSON.parse(raw); } catch (e) { userData = null; }
        }
    }

    function showScreen(id) {
        document.getElementById('auth-screen').hidden = (id !== 'auth-screen');
        document.getElementById('main-app').hidden = (id !== 'main-app');
    }

    function updateUI() {
        if (!userData) return;

        const day = Math.min(userData.currentDay, TOTAL_DAYS);
        const completed = userData.completedDays;
        const remaining = TOTAL_DAYS - completed;
        const percent = Math.round((completed / TOTAL_DAYS) * 100);

        document.getElementById('day-display').textContent = 'Nap ' + day + ' / ' + TOTAL_DAYS;
        document.getElementById('progress-fill').style.width = percent + '%';
        document.getElementById('user-greeting').textContent = 'Szia, ' + userData.name + '! 💪';
        document.getElementById('display-name').textContent = userData.name;
        document.getElementById('display-weight').textContent = userData.weight;
        document.getElementById('completed-days').textContent = completed;
        document.getElementById('remaining-days').textContent = remaining;

        const workout = workouts[day - 1];
        document.getElementById('workout').innerHTML =
            '<div class="workout-day">' +
            '<span class="workout-emoji">' + workout.emoji + '</span>' +
            '<h3>' + workout.name + '</h3>' +
            '<p>' + workout.desc + '</p>' +
            '</div>';

        const nextBtn = document.getElementById('next-day-btn');
        if (completed >= TOTAL_DAYS) {
            nextBtn.disabled = true;
            nextBtn.textContent = 'Program befejezve! 🏆';
        } else {
            nextBtn.disabled = false;
            nextBtn.textContent = 'Nap Kész ✅';
        }
    }

    function init() {
        loadData();

        const form = document.getElementById('registration-form');
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const nameInput = document.getElementById('name');
            const weightInput = document.getElementById('weight');
            const nameError = document.getElementById('name-error');
            const weightError = document.getElementById('weight-error');

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
                weightError.textContent = 'Kérjük, adj meg érvényes súlyt (' + MIN_WEIGHT + '–' + MAX_WEIGHT + ' kg)!';
                valid = false;
            }

            if (!valid) return;

            userData = { name: name, weight: weight, currentDay: 1, completedDays: 0 };
            saveData();
            updateUI();
            showScreen('main-app');
        });

        if (userData) {
            updateUI();
            showScreen('main-app');
        } else {
            showScreen('auth-screen');
        }
    }

    function nextDay() {
        if (!userData || userData.completedDays >= TOTAL_DAYS) return;
        userData.completedDays += 1;
        userData.currentDay = Math.min(userData.completedDays + 1, TOTAL_DAYS);
        saveData();
        updateUI();
    }

    function reset() {
        if (!confirm('Biztosan újrakezded a programot? Az összes haladásod törlődik.')) return;
        userData.currentDay = 1;
        userData.completedDays = 0;
        saveData();
        updateUI();
    }

    function logout() {
        localStorage.removeItem(STORAGE_KEY);
        userData = null;
        document.getElementById('name').value = '';
        document.getElementById('weight').value = '';
        document.getElementById('name-error').textContent = '';
        document.getElementById('weight-error').textContent = '';
        showScreen('auth-screen');
    }

    return { init, nextDay, reset, logout };
})();

document.addEventListener('DOMContentLoaded', function () {
    app.init();
});