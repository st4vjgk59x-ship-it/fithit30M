// FitHit30M - 30 Napos Fitness Challenge App

window.app = (function () {
    // ====== WORKOUT PROGRAM DATA ======
    const workoutProgram = [
        { day: 1,  exercises: '20 Push-ups, 30 Squats, 10 Pull-ups',                               difficulty: 'Easy'      },
        { day: 2,  exercises: '25 Push-ups, 40 Squats, 15 Pull-ups',                               difficulty: 'Easy'      },
        { day: 3,  exercises: '30 Push-ups, 50 Squats, 20 Pull-ups',                               difficulty: 'Medium'    },
        { day: 4,  exercises: '5 Min Running, 30 Sit-ups, 20 Burpees',                             difficulty: 'Medium'    },
        { day: 5,  exercises: 'Rest Day - Light Stretching',                                        difficulty: 'Rest'      },
        { day: 6,  exercises: '40 Push-ups, 60 Squats, 25 Pull-ups',                               difficulty: 'Hard'      },
        { day: 7,  exercises: '10 Min Running, 50 Sit-ups, 30 Burpees',                            difficulty: 'Hard'      },
        { day: 8,  exercises: '35 Push-ups, 55 Squats, 22 Pull-ups',                               difficulty: 'Medium'    },
        { day: 9,  exercises: '45 Push-ups, 70 Squats, 30 Pull-ups',                               difficulty: 'Hard'      },
        { day: 10, exercises: '15 Min Running, 60 Sit-ups, 40 Burpees',                            difficulty: 'Hard'      },
        { day: 11, exercises: 'Rest Day - Yoga & Stretching',                                       difficulty: 'Rest'      },
        { day: 12, exercises: '50 Push-ups, 80 Squats, 35 Pull-ups',                               difficulty: 'Hard'      },
        { day: 13, exercises: '12 Min Running, 70 Sit-ups, 50 Burpees',                            difficulty: 'Hard'      },
        { day: 14, exercises: '55 Push-ups, 90 Squats, 40 Pull-ups',                               difficulty: 'Very Hard' },
        { day: 15, exercises: '20 Min Running, 80 Sit-ups, 60 Burpees',                            difficulty: 'Very Hard' },
        { day: 16, exercises: 'Rest Day - Recovery Walk',                                           difficulty: 'Rest'      },
        { day: 17, exercises: '60 Push-ups, 100 Squats, 45 Pull-ups',                              difficulty: 'Very Hard' },
        { day: 18, exercises: '25 Min Running, 90 Sit-ups, 70 Burpees',                            difficulty: 'Very Hard' },
        { day: 19, exercises: '65 Push-ups, 110 Squats, 50 Pull-ups',                              difficulty: 'Very Hard' },
        { day: 20, exercises: '30 Min Running, 100 Sit-ups, 80 Burpees',                           difficulty: 'Very Hard' },
        { day: 21, exercises: 'Rest Day - Swimming',                                                difficulty: 'Rest'      },
        { day: 22, exercises: '70 Push-ups, 120 Squats, 55 Pull-ups',                              difficulty: 'Extreme'   },
        { day: 23, exercises: '35 Min Running, 110 Sit-ups, 90 Burpees',                           difficulty: 'Extreme'   },
        { day: 24, exercises: '75 Push-ups, 130 Squats, 60 Pull-ups',                              difficulty: 'Extreme'   },
        { day: 25, exercises: '40 Min Running, 120 Sit-ups, 100 Burpees',                          difficulty: 'Extreme'   },
        { day: 26, exercises: 'Rest Day - Meditation',                                              difficulty: 'Rest'      },
        { day: 27, exercises: '80 Push-ups, 140 Squats, 65 Pull-ups',                              difficulty: 'Extreme'   },
        { day: 28, exercises: '45 Min Running, 130 Sit-ups, 110 Burpees',                          difficulty: 'Extreme'   },
        { day: 29, exercises: '85 Push-ups, 150 Squats, 70 Pull-ups',                              difficulty: 'Extreme'   },
        { day: 30, exercises: '50 Min Running, 140 Sit-ups, 120 Burpees - FINAL CHALLENGE!',       difficulty: 'Extreme'   }
    ];

    // ====== LOCAL STORAGE HELPERS ======
    const storage = {
        save: function (key, value) { localStorage.setItem(key, JSON.stringify(value)); },
        get:  function (key) {
            var raw = localStorage.getItem(key);
            return raw ? JSON.parse(raw) : null;
        },
        remove: function (key) { localStorage.removeItem(key); }
    };

    // ====== INPUT VALIDATION ======
    const validation = {
        isValidName:   function (name)   { return name && name.trim().length > 0; },
        isValidWeight: function (weight) { return !isNaN(weight) && weight >= 20 && weight <= 300; }
    };

    // ====== DOM ELEMENTS ======
    const el = {
        authScreen:       document.getElementById('auth-screen'),
        mainApp:          document.getElementById('main-app'),
        registrationForm: document.getElementById('registration-form'),
        nameInput:        document.getElementById('name'),
        weightInput:      document.getElementById('weight'),
        nameError:        document.getElementById('name-error'),
        weightError:      document.getElementById('weight-error'),
        dayDisplay:       document.getElementById('day-display'),
        progressFill:     document.getElementById('progress-fill'),
        workoutContent:   document.getElementById('workout'),
        userGreeting:     document.getElementById('user-greeting'),
        displayName:      document.getElementById('display-name'),
        displayWeight:    document.getElementById('display-weight'),
        completedDays:    document.getElementById('completed-days'),
        remainingDays:    document.getElementById('remaining-days'),
        loadingSpinner:   document.getElementById('loading-spinner')
    };

    // ====== APP STATE ======
    var state = { userName: '', userWeight: 0, currentDay: 1 };

    // ====== INITIALIZATION ======
    function init() {
        var saved = storage.get('fitHitUser');
        if (saved) {
            state.userName   = saved.userName   || '';
            state.userWeight = saved.userWeight || 0;
            state.currentDay = saved.currentDay || 1;
        }

        el.registrationForm.addEventListener('submit', handleRegistration);

        if (state.userName) {
            showMainApp();
        } else {
            showAuthScreen();
        }
    }

    // ====== REGISTRATION ======
    function handleRegistration(e) {
        e.preventDefault();
        el.nameError.textContent   = '';
        el.weightError.textContent = '';

        var name   = el.nameInput.value.trim();
        var weight = parseFloat(el.weightInput.value);
        var valid  = true;

        if (!validation.isValidName(name)) {
            el.nameError.textContent = 'Kérjük, add meg a neved!';
            valid = false;
        }
        if (!validation.isValidWeight(weight)) {
            el.weightError.textContent = 'Kérjük, adj meg egy érvényes súlyt (20–300 kg)!';
            valid = false;
        }

        if (valid) {
            state.userName   = name;
            state.userWeight = weight;
            state.currentDay = 1;
            saveState();
            showMainApp();
        }
    }

    // ====== PERSIST STATE ======
    function saveState() {
        storage.save('fitHitUser', { userName: state.userName, userWeight: state.userWeight, currentDay: state.currentDay });
    }

    // ====== SCREEN SWITCHING ======
    function showAuthScreen() {
        el.authScreen.removeAttribute('hidden');
        el.mainApp.setAttribute('hidden', '');
    }

    function showMainApp() {
        el.authScreen.setAttribute('hidden', '');
        el.mainApp.removeAttribute('hidden');
        updateUI();
    }

    // ====== UPDATE UI ======
    function updateUI() {
        var dayIndex = Math.min(state.currentDay, 30) - 1;
        var workout  = workoutProgram[dayIndex];
        var progress = Math.round(((state.currentDay - 1) / 30) * 100);

        el.dayDisplay.textContent      = 'Nap ' + state.currentDay + ' / 30';
        el.progressFill.style.width    = progress + '%';
        el.userGreeting.textContent    = 'Szia ' + state.userName + '! 💪';
        el.displayName.textContent     = state.userName;
        el.displayWeight.textContent   = state.userWeight;
        el.completedDays.textContent   = state.currentDay - 1;
        el.remainingDays.textContent   = Math.max(0, 30 - state.currentDay);

        el.workoutContent.innerHTML =
            '<div class="workout-details">' +
                '<p><strong>Nehézség:</strong> ' + workout.difficulty + '</p>' +
                '<p><strong>Edzés:</strong></p>' +
                '<p class="workout-exercises">' + workout.exercises + '</p>' +
            '</div>';
    }

    // ====== NEXT DAY ======
    function nextDay() {
        if (state.currentDay < 30) {
            state.currentDay++;
            saveState();
            updateUI();
        } else {
            alert('🎉 Gratulálunk! Befejezted a 30 napos kihívást!');
        }
    }

    // ====== RESET ======
    function reset() {
        if (confirm('Biztosan újra szeretnél kezdeni?')) {
            state.currentDay = 1;
            saveState();
            updateUI();
        }
    }

    // ====== LOGOUT ======
    function logout() {
        if (confirm('Biztosan ki szeretnél jelentkezni?')) {
            storage.remove('fitHitUser');
            state.userName = ''; state.userWeight = 0; state.currentDay = 1;
            el.registrationForm.reset();
            showAuthScreen();
        }
    }

    // ====== PUBLIC API ======
    return { init: init, nextDay: nextDay, reset: reset, logout: logout };
})();

// Start the app once the DOM is ready
document.addEventListener('DOMContentLoaded', window.app.init);