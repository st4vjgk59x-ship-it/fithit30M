// script.js - FitHit30M fitness challenge application
(function() {
    // Module to manage Local Storage
    const StorageModule = (function() {
        const setItem = (key, value) => {
            localStorage.setItem(key, JSON.stringify(value));
        };
        const getItem = (key) => {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        };
        const removeItem = (key) => {
            localStorage.removeItem(key);
        };

        return { setItem, getItem, removeItem };
    })();

    // Module for input validation
    const ValidationModule = (function() {
        const isValidName = (name) => name && name.trim() !== '';
        const isValidWeight = (weight) => {
            const num = parseFloat(weight);
            return !isNaN(num) && num >= 20 && num <= 300;
        };

        return { isValidName, isValidWeight };
    })();

    // 30-day workout plans (in Hungarian)
    const workoutPlans = {
        1:  '<strong>Bemelegítés nap:</strong><ul><li>5 perc gyors séta</li><li>10 fekvőtámasz</li><li>10 guggolás</li><li>10 hasizom</li></ul>',
        2:  '<strong>Lábak:</strong><ul><li>3×15 guggolás</li><li>3×12 kitörés (mindkét láb)</li><li>3×20 lábujjhegy emelés</li></ul>',
        3:  '<strong>Felsőtest:</strong><ul><li>3×10 fekvőtámasz</li><li>3×12 tricepsz dips</li><li>3×15 váll körzés</li></ul>',
        4:  '<strong>Hasizom:</strong><ul><li>3×20 hasizom</li><li>3×30 mp plank</li><li>3×15 lábemelés</li></ul>',
        5:  '<strong>Kardió:</strong><ul><li>20 perc kocogás vagy gyors séta</li><li>3×20 jumping jack</li><li>3×10 burpee</li></ul>',
        6:  '<strong>Pihenő / Nyújtás:</strong><ul><li>10 perc teljes test nyújtás</li><li>Könnyű séta 15 perc</li></ul>',
        7:  '<strong>Teljes test:</strong><ul><li>3×10 fekvőtámasz</li><li>3×15 guggolás</li><li>3×20 hasizom</li><li>3×12 kitörés</li></ul>',
        8:  '<strong>Lábak (intenzív):</strong><ul><li>4×15 guggolás</li><li>4×12 kitörés</li><li>4×20 lábujjhegy emelés</li><li>3×10 egylábas guggolás</li></ul>',
        9:  '<strong>Felsőtest (intenzív):</strong><ul><li>4×12 fekvőtámasz</li><li>3×15 tricepsz dips</li><li>3×12 piké fekvőtámasz</li></ul>',
        10: '<strong>Hasizom (intenzív):</strong><ul><li>4×20 hasizom</li><li>4×45 mp plank</li><li>3×15 biciklizős hasizom</li><li>3×12 orosz csavar</li></ul>',
        11: '<strong>Kardió kör:</strong><ul><li>5×10 burpee</li><li>5×20 jumping jack</li><li>5×15 magas térdemeléses futás (helyben)</li></ul>',
        12: '<strong>Aktív pihenő:</strong><ul><li>15 perc jóga / nyújtás</li><li>20 perc séta</li></ul>',
        13: '<strong>Teljes test kör:</strong><ul><li>4×10 fekvőtámasz</li><li>4×15 guggolás</li><li>4×20 hasizom</li><li>4×12 kitörés</li></ul>',
        14: '<strong>2 hetes kihívás – erő:</strong><ul><li>5×10 fekvőtámasz</li><li>5×15 guggolás</li><li>5×20 hasizom</li><li>5×30 mp plank</li></ul>',
        15: '<strong>Lábak + kardió:</strong><ul><li>3×20 guggolás</li><li>3×15 kitörés</li><li>20 perc kocogás</li></ul>',
        16: '<strong>Felsőtest + kardió:</strong><ul><li>3×15 fekvőtámasz</li><li>3×12 piké fekvőtámasz</li><li>20 perc gyors séta</li></ul>',
        17: '<strong>Hasizom + kardió:</strong><ul><li>4×25 hasizom</li><li>4×60 mp plank</li><li>3×15 orosz csavar</li><li>10 perc ugrókötél</li></ul>',
        18: '<strong>Erő kör:</strong><ul><li>4×12 fekvőtámasz</li><li>4×15 guggolás</li><li>4×20 hasizom</li><li>4×10 burpee</li></ul>',
        19: '<strong>Pihenő / Mobilitás:</strong><ul><li>20 perc jóga</li><li>Teljes test nyújtás 15 perc</li></ul>',
        20: '<strong>Teljes test + erő:</strong><ul><li>4×15 fekvőtámasz</li><li>4×20 guggolás</li><li>4×25 hasizom</li><li>4×15 kitörés</li></ul>',
        21: '<strong>3 hetes kihívás – intenzív:</strong><ul><li>5×15 fekvőtámasz</li><li>5×20 guggolás</li><li>5×25 hasizom</li><li>5×12 burpee</li></ul>',
        22: '<strong>Lábak (haladó):</strong><ul><li>5×15 guggolás</li><li>5×12 egylábas guggolás</li><li>5×20 lábujjhegy emelés</li></ul>',
        23: '<strong>Felsőtest (haladó):</strong><ul><li>5×15 fekvőtámasz</li><li>4×12 piké fekvőtámasz</li><li>4×15 tricepsz dips</li></ul>',
        24: '<strong>Hasizom (haladó):</strong><ul><li>5×25 hasizom</li><li>5×60 mp plank</li><li>4×20 biciklizős hasizom</li><li>4×15 orosz csavar</li></ul>',
        25: '<strong>Kardió (haladó):</strong><ul><li>30 perc kocogás</li><li>4×15 burpee</li><li>4×20 jumping jack</li></ul>',
        26: '<strong>Aktív pihenő:</strong><ul><li>25 perc séta</li><li>15 perc nyújtás</li></ul>',
        27: '<strong>Teljes test (haladó):</strong><ul><li>5×15 fekvőtámasz</li><li>5×20 guggolás</li><li>5×25 hasizom</li><li>5×12 burpee</li></ul>',
        28: '<strong>Erő + állóképesség:</strong><ul><li>6×12 fekvőtámasz</li><li>6×15 guggolás</li><li>6×20 hasizom</li><li>20 perc kocogás</li></ul>',
        29: '<strong>Utolsó előtti nap – teljes erő:</strong><ul><li>6×15 fekvőtámasz</li><li>6×20 guggolás</li><li>6×25 hasizom</li><li>5×12 burpee</li></ul>',
        30: '<strong>🎉 Az utolsó nap – Gratulálunk!</strong><ul><li>10×10 fekvőtámasz</li><li>10×10 guggolás</li><li>10×10 hasizom</li><li>10 perc nyújtás és ünneplés!</li></ul>'
    };

    // Module to fetch and display sports news
    const NewsModule = (function() {
        const RSS_URL = 'https://feeds.bbci.co.uk/sport/rss.xml';
        const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}&count=6`;
        const DATE_FORMAT_OPTIONS = { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };

        const escapeHtml = (str) => {
            if (!str) return '';
            return str
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
        };

        const sanitizeUrl = (url) => {
            if (!url || typeof url !== 'string') return '#';
            const trimmed = url.trim();
            return (trimmed.startsWith('https://') || trimmed.startsWith('http://')) ? trimmed : '#';
        };

        const render = (items) => {
            const list = document.querySelector('#news-list');
            if (!list) return;
            list.setAttribute('aria-busy', 'false');
            if (!items || items.length === 0) {
                list.innerHTML = '<p class="news-empty">Jelenleg nem elérhetők sporthírek.</p>';
                return;
            }
            list.innerHTML = items.map(item => {
                const date = item.pubDate ? new Date(item.pubDate).toLocaleDateString('hu-HU', DATE_FORMAT_OPTIONS) : '';
                const title = escapeHtml(item.title);
                const link = sanitizeUrl(item.link);
                return `<div class="news-item" role="listitem">
                    <a class="news-title" href="${escapeHtml(link)}" target="_blank" rel="noopener noreferrer">${title}</a>
                    ${date ? `<span class="news-date">${escapeHtml(date)}</span>` : ''}
                </div>`;
            }).join('');
        };

        const renderError = () => {
            const list = document.querySelector('#news-list');
            if (!list) return;
            list.setAttribute('aria-busy', 'false');
            list.innerHTML = '<p class="news-empty">Nem sikerült betölteni a híreket. Ellenőrizd az internetkapcsolatot.</p>';
        };

        const load = () => {
            const list = document.querySelector('#news-list');
            if (!list) return;
            list.setAttribute('aria-busy', 'true');
            list.innerHTML = '<div class="news-loading"><span class="loading-spinner news-spinner" aria-hidden="true"></span><span>Hírek betöltése...</span></div>';
            fetch(API_URL)
                .then(res => {
                    if (!res.ok) throw new Error('Network error');
                    return res.json();
                })
                .then(data => {
                    if (data.status === 'ok' && Array.isArray(data.items)) {
                        render(data.items);
                    } else {
                        renderError();
                    }
                })
                .catch(() => renderError());
        };

        return { load };
    })();

    const App = (function() {
        let userData = null;
        let currentDay = 1;

        const init = () => {
            const registrationForm = document.querySelector('#registration-form');
            registrationForm.addEventListener('submit', handleRegistration);

            const saved = StorageModule.getItem('fithit30m_userData');
            if (saved) {
                userData = saved;
                currentDay = userData.currentDay || 1;
                showMainApp();
            }
        };

        const handleRegistration = (e) => {
            e.preventDefault();
            const nameInput = document.querySelector('#name');
            const weightInput = document.querySelector('#weight');
            const nameError = document.querySelector('#name-error');
            const weightError = document.querySelector('#weight-error');
            const name = nameInput.value.trim();
            const weight = weightInput.value;

            let valid = true;
            nameError.textContent = '';
            weightError.textContent = '';

            if (!ValidationModule.isValidName(name)) {
                nameError.textContent = 'Kérjük, add meg a neved!';
                valid = false;
            }
            if (!ValidationModule.isValidWeight(weight)) {
                weightError.textContent = 'Kérjük, adj meg érvényes súlyt (20–300 kg)!';
                valid = false;
            }

            if (!valid) return;

            userData = {
                name,
                weight: parseFloat(weight),
                startDate: new Date().toISOString(),
                currentDay: 1
            };

            currentDay = 1;
            StorageModule.setItem('fithit30m_userData', userData);
            showMainApp();
        };

        const showMainApp = () => {
            document.querySelector('#auth-screen').hidden = true;
            document.querySelector('#main-app').hidden = false;
            displayCurrentDay();
            updateStats();
            NewsModule.load();
        };

        const displayCurrentDay = () => {
            const isCompleted = userData.completed;
            const displayDay = isCompleted ? 30 : currentDay;
            document.querySelector('#day-display').textContent = `Nap ${displayDay} / 30`;
            document.querySelector('#user-greeting').textContent = `Szia, ${userData.name}! 💪`;
            document.querySelector('#display-name').textContent = userData.name;
            document.querySelector('#display-weight').textContent = userData.weight;

            const workout = workoutPlans[displayDay] || `<p>Nap ${displayDay} edzés – tartsd fenn a lendületet!</p>`;
            document.querySelector('#workout').innerHTML = workout;

            const progress = isCompleted ? 100 : (currentDay / 30) * 100;
            document.querySelector('#progress-fill').style.width = progress + '%';
        };

        const updateStats = () => {
            const isCompleted = userData.completed;
            document.querySelector('#completed-days').textContent = isCompleted ? 30 : currentDay - 1;
            document.querySelector('#remaining-days').textContent = isCompleted ? 0 : 30 - currentDay + 1;
        };

        const nextDay = () => {
            if (currentDay < 30) {
                currentDay++;
                userData.currentDay = currentDay;
                StorageModule.setItem('fithit30m_userData', userData);
                displayCurrentDay();
                updateStats();
            } else {
                userData.completed = true;
                StorageModule.setItem('fithit30m_userData', userData);
                displayCurrentDay();
                updateStats();
                alert('🎉 Gratulálunk! Sikeresen befejezted a 30 napos FitHit30M kihívást!');
            }
        };

        const reset = () => {
            if (confirm('Biztosan újra szeretnéd kezdeni a kihívást?')) {
                currentDay = 1;
                userData.currentDay = 1;
                userData.completed = false;
                StorageModule.setItem('fithit30m_userData', userData);
                displayCurrentDay();
                updateStats();
            }
        };

        const logout = () => {
            StorageModule.removeItem('fithit30m_userData');
            userData = null;
            currentDay = 1;
            document.querySelector('#main-app').hidden = true;
            document.querySelector('#auth-screen').hidden = false;
            document.querySelector('#registration-form').reset();
            document.querySelector('#name-error').textContent = '';
            document.querySelector('#weight-error').textContent = '';
        };

        const refreshNews = () => NewsModule.load();

        return { init, nextDay, reset, logout, refreshNews };
    })();

    // Expose app globally for inline onclick handlers
    window.app = App;
    App.init();
})();