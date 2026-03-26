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

    // ====== DAILY RECIPE PLAN ======
    const recipeProgram = [
        {
            day: 1,
            reggeli: '🥣 Zabpehely – zabpehely, tej, banán, méz',
            ebed:    '🥗 Csirkés saláta – grillcsirke, rukola, cseresznye paradicsom, olívaolaj',
            vacsora: '🍳 Rántotta zöldségekkel – 3 tojás, paprika, hagyma, paradicsom'
        },
        {
            day: 2,
            reggeli: '🍳 Főtt tojás pirítóssal – 2 tojás, teljes kiőrlésű kenyér, avokádó',
            ebed:    '🍲 Lencseleves – lencse, sárgarépa, zeller, fokhagyma',
            vacsora: '🐟 Sült lazac – lazacfilé, citrom, brokkoli, barna rizs'
        },
        {
            day: 3,
            reggeli: '🍌 Protein smoothie – banán, görög joghurt, mandulatej, protein por',
            ebed:    '🌯 Tonhalas wrap – tonhal, teljes kiőrlésű tortilla, saláta, paradicsom',
            vacsora: '🍗 Sült csirkemell – csirkemell, édesburgonya, zöldbab'
        },
        {
            day: 4,
            reggeli: '🫐 Görög joghurt – joghurt, feketeáfonya, granola, méz',
            ebed:    '🥙 Csicseriborsós tál – csicseriborsó, cukkini, paprika, kuszkusz',
            vacsora: '🥩 Marhahúsos wok – marhahús csíkok, brokkoli, sárgarépa, szójaszósz, barna rizs'
        },
        {
            day: 5,
            reggeli: '🍞 Avokádós pirítós – teljes kiőrlésű kenyér, avokádó, tojás, sóspálma',
            ebed:    '🍜 Zöldséges levesgulyás – burgonya, sárgarépa, zeller, zöldpaprika',
            vacsora: '🐟 Tilápia saláta – tilápia, paradicsom, uborka, citromdresszing'
        },
        {
            day: 6,
            reggeli: '🥞 Banános palacsinta – zab, banán, tojás, fahéj (sütőolaj nélkül)',
            ebed:    '🍗 Csirke quinoa tál – csirkemell, quinoa, spenót, feta sajt',
            vacsora: '🥣 Zöldséges lencse – lencse, paradicsom, spenót, fokhagyma, curry'
        },
        {
            day: 7,
            reggeli: '🥚 Omlett – 3 tojás, gomba, spenót, feta sajt',
            ebed:    '🥗 Lazacos tészta – teljes kiőrlésű tészta, füstölt lazac, citrom, kapor',
            vacsora: '🍲 Sütőtök krémleves – sütőtök, gyömbér, kókusztej, koriander'
        },
        {
            day: 8,
            reggeli: '🌾 Overnight oats – zabpehely, chia mag, mandulatej, eper',
            ebed:    '🌮 Csirkés taco tál – csirkemell, fekete bab, salsa, saláta, kukorica',
            vacsora: '🐟 Sült makréla – makréla, citrom, fokhagyma, petrezselyem, paradicsom saláta'
        },
        {
            day: 9,
            reggeli: '🍇 Gyümölcssaláta protein joghurttal – vegyes gyümölcs, görög joghurt',
            ebed:    '🥙 Humuszos tál – humusz, pita, paprika, uborka, sárgarépa',
            vacsora: '🍗 Mézes mustáros csirke – csirkecomb, édesburgonya, brokkoli'
        },
        {
            day: 10,
            reggeli: '🥣 Müzli – zabpehely, dió, mandula, aszalt áfonya, tej',
            ebed:    '🍜 Csirkeleves – csirkemell, répa, zeller, petrezselyem, tészta',
            vacsora: '🥩 Sertésszűz – sertésszűz, alma, hagymalekvár, párolt káposzta'
        },
        {
            day: 11,
            reggeli: '🍓 Protein smoothie bowl – eper, banán, protein por, granola, kókuszreszelék',
            ebed:    '🥗 Quinoa saláta – quinoa, avokádó, fekete bab, paprika, lime',
            vacsora: '🐟 Tonhalas rizs – tonhal, barna rizs, zöldborsó, kukorica, szójaszósz'
        },
        {
            day: 12,
            reggeli: '🍳 Shakshuka – paradicsom, tojás, paprika, chili, feta sajt',
            ebed:    '🌯 Pulykás wrap – pulykamell, teljes kiőrlésű tortilla, avokádó, saláta',
            vacsora: '🍲 Csirke curry – csirkemell, kókusztej, paradicsom, gyömbér, barna rizs'
        },
        {
            day: 13,
            reggeli: '🥣 Chia puding – chia mag, mandulatej, vanilla, málna',
            ebed:    '🥗 Caprese saláta + tojás – paradicsom, mozzarella, bazsalikom, keménytojás',
            vacsora: '🐟 Tengeri herkentyű – garnélarák, fokhagyma, citrom, teljes kiőrlésű tészta, spenót'
        },
        {
            day: 14,
            reggeli: '🍌 Banános protein palacsinta – banán, tojás, zabpehely, fahéj',
            ebed:    '🍲 Babgulyás – fehérbab, paradicsom, paprika, hagyma, kolbász',
            vacsora: '🥩 Grillezett steak – bélszín, grill zöldségek, édesburgonya'
        },
        {
            day: 15,
            reggeli: '🥑 Avokádós tojás – sütőben sült tojás avokádóban, paradicsom, salsa',
            ebed:    '🥗 Görög saláta csirkével – csirkemell, uborka, paradicsom, olíva, feta',
            vacsora: '🍗 Citromos sült csirke – csirkecomb, citrom, rozmaring, fokhagyma, zöldségek'
        },
        {
            day: 16,
            reggeli: '🌾 Zabkása almával – zabpehely, alma, fahéj, dió, méz',
            ebed:    '🍜 Spenótos leveses rizs – spenót, rizs, tojás, fokhagyma, csirke alaplé',
            vacsora: '🐟 Sült tőkehal – tőkehal, pesztó, brokkoli, citromos quinoa'
        },
        {
            day: 17,
            reggeli: '🍓 Joghurt parfait – görög joghurt, eper, bogyós gyümölcs, granola, méz',
            ebed:    '🥙 Falafel tál – falafel, bulgur, uborka, paradicsom, tahini szósz',
            vacsora: '🥩 Csirke stir-fry – csirkemell, brokkoli, sárgarépa, szójaszósz, gyömbér, rizs'
        },
        {
            day: 18,
            reggeli: '🥚 Vegán scrambled tofu – tofu, kurkuma, paprika, hagyma, paradicsom',
            ebed:    '🍲 Csicseriborsó curry – csicseriborsó, kókusztej, paradicsom, spenót, naan',
            vacsora: '🐟 Lazac burgonyával – lazacfilé, újburgonya, kapor krémsajt szósz'
        },
        {
            day: 19,
            reggeli: '🥞 Teljes kiőrlésű palacsinta – tk. liszt, tojás, tej, áfonya, juhar szirup',
            ebed:    '🥗 Quinoa bab saláta – quinoa, fehérbab, avokádó, paradicsom, lime dresszing',
            vacsora: '🍗 Pesztós csirkemell – csirkemell, házi pesztó, koktélparadicsom, teljes kiőrlésű tészta'
        },
        {
            day: 20,
            reggeli: '🍊 Citrusos smoothie – narancs, grapefruit, gyömbér, sárgarépa, görög joghurt',
            ebed:    '🌮 Garnélás taco – garnélarák, káposzta slaw, avokádó, lime, chili majonéz',
            vacsora: '🥩 Töltött paprika – darált csirke, rizs, paradicsom szósz, pirospaprika'
        },
        {
            day: 21,
            reggeli: '🥣 Recovery zabkása – zabpehely, banán, mandulatej, chia mag, méz',
            ebed:    '🍲 Zöldség minestrone – sárgarépa, zeller, paradicsom, spárga, bazsalikom',
            vacsora: '🐟 Misós lazac – lazacfilé, miso pác, szezámos brokkolisaláta, rizs'
        },
        {
            day: 22,
            reggeli: '🍳 Fehérjés omlett – 4 tojásfehérje, spenót, gomba, feta sajt',
            ebed:    '🥗 Sült zöldség saláta – padlizsán, cukkini, paprika, csirkemell, bulgur',
            vacsora: '🍗 Teriyaki csirke – csirkemell, teriyaki szósz, brokkoli, barna rizs'
        },
        {
            day: 23,
            reggeli: '🌾 Granola házilag – zab, dió, mandula, kókusz, méz, sütve joghurttal',
            ebed:    '🍜 Ramen leves – csirke alaplé, tojás, nori, bab csíra, spenót, teljes kiőrlésű tészta',
            vacsora: '🐟 Grillezett tengeri sügér – sügérfilé, citrom, fokhagyma, párolt spenót'
        },
        {
            day: 24,
            reggeli: '🥑 Zöld protein smoothie – spenót, avokádó, banán, protein por, mandulatej',
            ebed:    '🥙 Törökös csirkés pide – csirkemell, paradicsom, paprika, joghurt szósz',
            vacsora: '🥩 Sertés tenderloin – sertésszűz, aszalt szilva szósz, párolt brokkoli, édesburgonya püré'
        },
        {
            day: 25,
            reggeli: '🍓 Eper-banán overnight oats – zab, eper, banán, chia mag, kókusztej',
            ebed:    '🍲 Zöldséges lencse dahl – vörös lencse, kókusztej, paradicsom, curry, naan',
            vacsora: '🐟 Sütőben sült lazac – lazac, citrom, kapri, olívabogyó, paradicsom, kuszkusz'
        },
        {
            day: 26,
            reggeli: '🥣 Meditációs reggeli – zabkása, goji bogyó, kendermag, méz, tea',
            ebed:    '🥗 Buddha tál – barna rizs, avokádó, edamame, répa, uborka, szezámos dresszing',
            vacsora: '🍗 Ginger csirke – csirkemell, friss gyömbér, fokhagyma, borsó, barna rizs'
        },
        {
            day: 27,
            reggeli: '🍳 Mexikói omlett – tojás, babpüré, avokádó, salsa, koriander',
            ebed:    '🌯 Tonhalas pita – tonhal, paradicsom, uborka, salátalevél, citromos joghurt',
            vacsora: '🥩 Bárány kofta – darált bárány, fűszerek, bulgur saláta, tzatziki'
        },
        {
            day: 28,
            reggeli: '🥞 Protein palacsinta – protein por, zabpehely, tojás, banán, bogyós gyümölcs',
            ebed:    '🍲 Brokkoli krémleves – brokkoli, burgonya, tejszín, sajt, teljes kiőrlésű kenyér',
            vacsora: '🐟 Grillezett tonhal – tonhalszelet, szójás gyömbér pác, édesburgonya, saláta'
        },
        {
            day: 29,
            reggeli: '🌾 Utolsó előtti erő zabkása – zabpehely, dió, aszalt gyümölcs, fahéj, banán',
            ebed:    '🥗 Csirkés quinoa power bowl – csirkemell, quinoa, avokádó, tojás, feta, olíva',
            vacsora: '🍗 Sült egész csirke – egész csirke, rozmaring, citrom, fokhagyma, sült zöldségek'
        },
        {
            day: 30,
            reggeli: '🏆 Bajnoki reggeli – 3 tojásos omlett, avokádó, teljes kiőrlésű pirítós, friss gyümölcs',
            ebed:    '🎉 Ünnepi saláta – grillcsirke, quinoa, rukola, avokádó, dió, gránátalma, balzsamecet',
            vacsora: '🥩 Ünneplős steak vacsora – bélszín steak, fokhagymás vajban, édesburgonya, grill zöldségek'
        }
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

    // ====== LIDL WEEKLY OFFERS (8 rotating themes, Thu–Wed cycle) ======
    // Note: prices and products are illustrative examples, not official Lidl data.
    const lidlWeeklyOffers = [
        {
            tema: '🥦 Zöldség & Gyümölcs hét',
            termekek: [
                { nev: '🍎 Alma (Golden/Gala)',         ar: '299 Ft/kg'     },
                { nev: '🥦 Brokkoli',                   ar: '399 Ft/db'     },
                { nev: '🥕 Sárgarépa',                  ar: '149 Ft/kg'     },
                { nev: '🍌 Banán',                       ar: '449 Ft/kg'     },
                { nev: '🥗 Vegyes salátalevél',          ar: '349 Ft/csomag' }
            ]
        },
        {
            tema: '🍗 Húsáruk hét',
            termekek: [
                { nev: '🍗 Csirkemell filé',            ar: '1 299 Ft/kg'   },
                { nev: '🥩 Sertés lapocka',             ar: '999 Ft/kg'     },
                { nev: '🥓 Füstölt szalonna',           ar: '899 Ft/csomag' },
                { nev: '🐟 Lazacfilé',                  ar: '2 499 Ft/csomag'},
                { nev: '🌭 Frankfurti virsli (6 db)',   ar: '549 Ft/csomag' }
            ]
        },
        {
            tema: '🧀 Tejtermékek & Tojás hét',
            termekek: [
                { nev: '🥛 Tej 2,8% (1 l)',             ar: '269 Ft'        },
                { nev: '🧀 Trappista sajt',              ar: '1 199 Ft/kg'   },
                { nev: '🥚 Tojás (10 db)',               ar: '649 Ft'        },
                { nev: '🧈 Vaj (200 g)',                 ar: '499 Ft'        },
                { nev: '🍦 Görög joghurt (500 g)',       ar: '299 Ft'        }
            ]
        },
        {
            tema: '🍞 Pékáru & Reggeli hét',
            termekek: [
                { nev: '🍞 Teljes kiőrlésű kenyér',     ar: '449 Ft'        },
                { nev: '🥐 Croissant (6 db)',            ar: '599 Ft'        },
                { nev: '🥣 Zabpehely (500 g)',           ar: '349 Ft'        },
                { nev: '🫐 Granola (400 g)',             ar: '799 Ft'        },
                { nev: '🍫 Mogyorókrém (400 g)',        ar: '599 Ft'        }
            ]
        },
        {
            tema: '💪 Sport & Fitness hét',
            termekek: [
                { nev: '💪 Protein szelet',             ar: '349 Ft/db'     },
                { nev: '🥜 Mandula (200 g)',            ar: '699 Ft'        },
                { nev: '🫐 Fagyasztott bogyós gyümölcs',ar: '799 Ft/csomag' },
                { nev: '🍵 Zöld tea (20 filter)',       ar: '499 Ft'        },
                { nev: '🥤 Izotóniás ital (750 ml)',    ar: '299 Ft'        }
            ]
        },
        {
            tema: '🥫 Konzerv & Száraztermékek hét',
            termekek: [
                { nev: '🐟 Tonhal konzerv (3 db)',      ar: '799 Ft'        },
                { nev: '🫘 Csicseriborsó konzerv',      ar: '249 Ft/db'     },
                { nev: '🍝 Teljes kiőrlésű tészta',     ar: '399 Ft/csomag' },
                { nev: '🥫 Paradicsomszósz (passata)',  ar: '299 Ft'        },
                { nev: '🌾 Barna rizs (1 kg)',          ar: '449 Ft'        }
            ]
        },
        {
            tema: '🧴 Háztartás & Tisztítószerek hét',
            termekek: [
                { nev: '🧴 Mosógél (1,5 l)',            ar: '1 299 Ft'      },
                { nev: '🧼 Folyékony szappan (500 ml)', ar: '499 Ft'        },
                { nev: '🧻 WC papír (10 tek.)',         ar: '899 Ft'        },
                { nev: '🫧 Mosogatószer (750 ml)',      ar: '399 Ft'        },
                { nev: '🧺 Öblítő (1,5 l)',            ar: '799 Ft'        }
            ]
        },
        {
            tema: '🌿 Bio & Prémium hét',
            termekek: [
                { nev: '🥦 Bio brokkoli',               ar: '599 Ft/db'     },
                { nev: '🥬 Bio spenót (250 g)',         ar: '499 Ft'        },
                { nev: '🍓 Bio eper (250 g)',           ar: '899 Ft'        },
                { nev: '🥚 Bio tojás (6 db)',           ar: '799 Ft'        },
                { nev: '🫒 Extra szűz olívaolaj (500 ml)', ar: '1 999 Ft'  }
            ]
        }
    ];

    // Returns the offer for the current Lidl week (starts every Thursday).
    function getLidlOffer() {
        var now = new Date();
        // 0=Sun 1=Mon 2=Tue 3=Wed 4=Thu 5=Fri 6=Sat
        // Days elapsed since the most recent Thursday:
        var daysSinceThursday = (now.getDay() + 3) % 7;
        var thursday = new Date(now);
        thursday.setDate(now.getDate() - daysSinceThursday);
        thursday.setHours(0, 0, 0, 0);

        // Use epoch-based week index so it advances every Thursday
        var msPerWeek   = 7 * 24 * 60 * 60 * 1000;
        var weekIndex   = Math.floor(thursday.getTime() / msPerWeek);
        var offerIndex  = weekIndex % lidlWeeklyOffers.length;

        // Format Thu date as "YYYY. MM. DD."
        var dd  = String(thursday.getDate()).padStart(2, '0');
        var mm  = String(thursday.getMonth() + 1).padStart(2, '0');
        var validFrom = thursday.getFullYear() + '. ' + mm + '. ' + dd + '.';

        // Next Thursday
        var nextThursday = new Date(thursday.getTime() + msPerWeek);
        var dd2 = String(nextThursday.getDate()).padStart(2, '0');
        var mm2 = String(nextThursday.getMonth() + 1).padStart(2, '0');
        var validTo = nextThursday.getFullYear() + '. ' + mm2 + '. ' + dd2 + '.';

        return {
            offer:     lidlWeeklyOffers[offerIndex],
            validFrom: validFrom,
            validTo:   validTo
        };
    }

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
        loadingSpinner:   document.getElementById('loading-spinner'),
        lidlWeekInfo:     document.getElementById('lidl-week-info'),
        lidlOfferList:    document.getElementById('lidl-offer-list'),
        lidlOfferTheme:   document.getElementById('lidl-offer-theme')
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
        updateLidlOffer();
    }

    // ====== UPDATE UI ======
    function updateUI() {
        var dayIndex = Math.min(state.currentDay, 30) - 1;
        var workout  = workoutProgram[dayIndex];
        var recipe   = recipeProgram[dayIndex];
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
            '</div>' +
            '<div class="recipe-section">' +
                '<h3 class="recipe-title">🍽️ Mai étkezési terv</h3>' +
                '<ul class="recipe-list">' +
                    '<li><span class="recipe-label">Reggeli</span>' + recipe.reggeli + '</li>' +
                    '<li><span class="recipe-label">Ebéd</span>' + recipe.ebed + '</li>' +
                    '<li><span class="recipe-label">Vacsora</span>' + recipe.vacsora + '</li>' +
                '</ul>' +
            '</div>';
    }

    // ====== LIDL WEEKLY OFFER UI ======
    function updateLidlOffer() {
        var data = getLidlOffer();
        el.lidlOfferTheme.textContent = data.offer.tema;
        el.lidlWeekInfo.textContent   = '📅 Érvényes: ' + data.validFrom + ' – ' + data.validTo;

        var items = data.offer.termekek.map(function (t) {
            return '<li>' +
                '<span class="lidl-item-name">' + t.nev + '</span>' +
                '<span class="lidl-item-price">' + t.ar + '</span>' +
            '</li>';
        }).join('');
        el.lidlOfferList.innerHTML = items;
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