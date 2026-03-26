// FitHit30M - 30 napos fitness program

const MEALS = [
    {
        reggeli: { nev: 'Zablisztes smoothie tál', hozzavalok: '50g zabpehely, 1 banán, 150ml mandulatej, 1 ek. méz', elkeszites: 'Turmixold össze a banánt a mandulaterrel és a mézzel, öntsd a zabpehelyre, tálald.' },
        ebed: { nev: 'Csirke quinoa saláta', hozzavalok: '150g csirkemell, 80g quinoa, paradicsom, uborka, citromlé, olívaolaj', elkeszites: 'Főzd meg a quinoát. A csirkét süsd meg, szeleteld fel. Keverd össze friss zöldségekkel, locsold meg olívaolajjal és citromlével.' },
        vacsora: { nev: 'Lazac párolt brokkolival', hozzavalok: '180g lazacfilé, 200g brokkoli, fokhagyma, olívaolaj, só, bors', elkeszites: 'A lazacot olívaolajban süsd 3-4 percig mindkét oldalon. A brokkolit párolj 5 percig. Tálald együtt.' }
    },
    {
        reggeli: { nev: 'Fehérjés rántotta', hozzavalok: '3 tojás, 1 marék spenót, fél paprika, só, bors, kevés olívaolaj', elkeszites: 'Felvert tojáshoz add a spenótot és a felkockázott paprikát, süsd meg kevés olajon.' },
        ebed: { nev: 'Lencse krémleves', hozzavalok: '200g vörös lencse, 1 hagyma, 1 sárgarépa, 1 tk. kurkuma, vegetáriánus alaplé', elkeszites: 'Párold meg a hagymát, add hozzá a lencsét, répát és fűszereket. Főzd puhára, turmixold simára.' },
        vacsora: { nev: 'Pulykás cukkini csónak', hozzavalok: '2 cukkini, 200g darált pulyka, paradicsomos szósz, sajt, fűszerek', elkeszites: 'Vájd ki a cukkinit. Töltsd meg fűszeres darált pulykával, öntsd rá a szószt. Süsd 25 percig 180°C-on.' }
    },
    {
        reggeli: { nev: 'Görög joghurtos parfé', hozzavalok: '200g görög joghurt, 30g granola, 1 marék áfonya, 1 tk. méz', elkeszites: 'Rétegezd a joghurtot, granolát és bogyós gyümölcsöt, locsold meg mézzel.' },
        ebed: { nev: 'Tonhalas teljes kiőrlésű szendvics', hozzavalok: '2 szelet teljes kiőrlésű kenyér, 1 doboz tonhal, 1 ek. joghurtos majonéz, salátalevél, paradicsom', elkeszites: 'Keverd össze a tonhalat a joghurtos majonézzel, töltsd a kenyér közé a salátával és paradicsommal.' },
        vacsora: { nev: 'Zöldséges csirkepörkölt', hozzavalok: '200g csirkemell, 1 paprika, 1 paradicsom, 1 hagyma, 1 tk. pirospaprika, alaplé', elkeszites: 'Párold meg a hagymát, add hozzá a csirkét és a zöldségeket. Fűszerezd, önts rá alaplevet, főzd 20 percig.' }
    },
    {
        reggeli: { nev: 'Banános zabkása', hozzavalok: '60g zabpehely, 300ml tej, 1 banán, 1 ek. dióvaj, fahéj', elkeszites: 'Főzd fel a zabot a tejben. Keverd bele a felszeletelt banánt, dióvajat és fahéjt.' },
        ebed: { nev: 'Csicseriborsós saláta', hozzavalok: '200g csicseriborsó (konzervből), paradicsom, uborka, vöröshagyma, petrezselyem, citromdresszleg', elkeszites: 'Keverd össze az összes alapanyagot, locsold meg a citromdresszelgel.' },
        vacsora: { nev: 'Grillezett csirkemell édesburgonya-pürével', hozzavalok: '200g csirkemell, 2 édesburgonya, vaj, só, bors, rozmaringos', elkeszites: 'Grillezd a csirkét 5-6 percig oldalanként. Főzd meg az édesburgonyát, törd pürévé vajjal és sóval.' }
    },
    {
        reggeli: { nev: 'Avokádós pirítós tojással', hozzavalok: '2 szelet teljes kiőrlésű kenyér, 1 avokádó, 2 tojás, só, bors, citromlé', elkeszites: 'Pirítsd meg a kenyeret. Pürésítsd az avokádót citromlével. Süss tükör- vagy buggyantott tojást. Tedd a kenyérre.' },
        ebed: { nev: 'Wok csirke zöldségekkel', hozzavalok: '150g csirkemell, brokkoli, sárgarépa, paprika, szójaszósz, gyömbér, fokhagyma', elkeszites: 'Magas hőn süsd át a csirkét és a zöldségeket. Adj hozzá szójaszószt, gyömbért és fokhagymát.' },
        vacsora: { nev: 'Tepsis lazac zöldségekkel', hozzavalok: '180g lazac, spárga, csersznyeparadicsom, olívaolaj, fokhagyma, citrom', elkeszites: 'Tedd a tepsire a lazacot és a zöldségeket, locsold meg olívaolajjal. Süsd 200°C-on 18 percig.' }
    },
    {
        reggeli: { nev: 'Gyümölcsös chia puding', hozzavalok: '3 ek. chia mag, 250ml mandulatej, 1 ek. méz, szezonális gyümölcsök', elkeszites: 'Keverd el a chia magot a mandulaterrel és mézzel. Tedd hűtőbe éjszakára. Reggel tedd rá a gyümölcsöket.' },
        ebed: { nev: 'Tojásos zöldség rizottó', hozzavalok: '80g barna rizs, 2 tojás, cukkini, sárgarépa, hagyma, zöldséges alaplé', elkeszites: 'Párold meg a rizst alaplével. Wokban süsd meg a zöldségeket, keverd bele a főtt rizst és a tojást.' },
        vacsora: { nev: 'Sültpaprikás húsgolyók', hozzavalok: '250g darált csirke, 1 tojás, fokhagyma, petrezselyem, paprika szósz', elkeszites: 'Gyúrd össze a darált húst a tojással és fűszerekkel, formázz golyókat. Süsd meg, tálald paprika szósszal.' }
    },
    {
        reggeli: { nev: 'Fehérjés palacsinta', hozzavalok: '2 tojás, 1 banán, 1 adadag fehérjepor (vanília), kis mennyiségű olaj', elkeszites: 'Turmixold össze az összetevőket. Süss kis palacsinát kevés olajon mindkét oldalon.' },
        ebed: { nev: 'Zöldséges csirke leves', hozzavalok: '150g csirkemell, sárgarépa, zeller, petrezselyemgyökér, gyöngyös pasta, só, bors', elkeszites: 'Főzd meg a csirkét és a zöldségeket alaplében. Add hozzá a tésztát, főzd 8 percig.' },
        vacsora: { nev: 'Sütőben sült csiperkegomba quinoával', hozzavalok: '200g csiperkegomba, 80g quinoa, fokhagyma, petrezselyem, olívaolaj', elkeszites: 'Süsd a gombát 200°C-on 15 percig. Főzd meg a quinoát. Tálald együtt, szórj rá petrezselymet.' }
    },
    {
        reggeli: { nev: 'Mandulavájas rizskása', hozzavalok: '60g barna rizs, 300ml tejszín, 1 ek. mandulavaj, banán, fahéj', elkeszites: 'Főzd meg a rizst tejjel. Add hozzá a mandulavajat és a fahéjt. Tálald felszeletelt banánnal.' },
        ebed: { nev: 'Mediterrán tonhalas saláta', hozzavalok: '1 doboz tonhal, olívabogyó, paradicsom, feta sajt, vegyes salátalevél, olívaolaj, citromlé', elkeszites: 'Keverd össze az összetevőket, öntsd rá az olívaolajat és citromlevet.' },
        vacsora: { nev: 'Csirkefalatok édes chili szósszal', hozzavalok: '200g csirkemell, keményítő, tojás, édes chili szósz, citromlé', elkeszites: 'Paníroz a csirkét keményítőben, süsd ki ropogósra. Tálald édes chili szósszal.' }
    },
    {
        reggeli: { nev: 'Bogyós smoothie tál', hozzavalok: '100g fagyasztott vegyes bogyós gyümölcs, 150g görög joghurt, 30g granola, 1 ek. lenmag', elkeszites: 'Turmixold a joghurtot a bogyós gyümölccsel. Öntsd tálba, szórd meg granolával és lenmaggal.' },
        ebed: { nev: 'Currys vörös lencse dahl', hozzavalok: '200g vörös lencse, kókusztej, paradicsom, curry por, kurkuma, fokhagyma, gyömbér', elkeszites: 'Párold meg a fokhagymát és gyömbért. Add hozzá a fűszereket, lencsét, paradicsomot és kókusztejet. Főzd 20 percig.' },
        vacsora: { nev: 'Grillezett csirkemell párolt zöldségekkel', hozzavalok: '200g csirkemell, cukkini, paprika, hagyma, balzsamecet, olívaolaj', elkeszites: 'Grillezd a csirkét. A zöldségeket süsd forró serpenyőben. Locsold meg balzsamecettel.' }
    },
    {
        reggeli: { nev: 'Zöldséges tojáslepény', hozzavalok: '3 tojás, 1 marék spenót, gomba, paradicsom, reszelt sajt, só, bors', elkeszites: 'Verd fel a tojásokat, add hozzá a zöldségeket. Süsd serpenyőben 3-4 percig, hajtsd össze.' },
        ebed: { nev: 'Barna rizses csirkés tál', hozzavalok: '150g csirkemell, 80g barna rizs, avokádó, uborka, szójaszósz, szezámmag', elkeszites: 'Főzd meg a rizst. Süsd meg a csirkét. Tálald az összetevőkkel, locsold meg szójaszósszal.' },
        vacsora: { nev: 'Paradicsomos lazac teljes kiőrlésű pasta', hozzavalok: '180g lazac, 80g teljes kiőrlésű tészta, paradicsom szósz, kapribogyó, olívabogyó', elkeszites: 'Főzd meg a tésztát. A lazacot süsd meg, tord villával. Keverd össze a szósszal és tedd rá a tésztára.' }
    },
    {
        reggeli: { nev: 'Tejfölös zabpehely gyümölccsel', hozzavalok: '60g zabpehely, 200ml tej, 100g görög joghurt, eper, kiwi, 1 tk. méz', elkeszites: 'Áztasd a zabot tejben éjszakára. Reggel keverd hozzá a joghurtot, tedd rá a gyümölcsöket és a mézet.' },
        ebed: { nev: 'Fekete bab saláta', hozzavalok: '200g fekete bab (konzerv), kukorica, avokádó, paradicsom, koriander, lime, olívaolaj', elkeszites: 'Keverd össze az összetevőket. Locsold meg lime-lével és olívaolajjal.' },
        vacsora: { nev: 'Sertésszűz sült burgonyával', hozzavalok: '200g sertésszűz, 2 burgonya, fokhagyma, rozmaring, olívaolaj', elkeszites: 'A burgonyát kockázd fel, süsd 200°C-on 30 percig. A húst süsd serpenyőben 4 percig oldalanként.' }
    },
    {
        reggeli: { nev: 'Dióvajjal gazdagított banán pirítós', hozzavalok: '2 szelet teljes kiőrlésű kenyér, 2 ek. dióvaj, 1 banán, fahéj', elkeszites: 'Pirítsd meg a kenyeret. Kend meg dióvajjal, tedd rá a felszeletelt banánt és szórd meg fahéjjal.' },
        ebed: { nev: 'Csirkés caesar saláta', hozzavalok: '150g grillezett csirkemell, rómaisaláta, parmezán, teljes kiőrlésű kruton, caesar öntet', elkeszites: 'Szeletelj a csirkét, tépd fel a salátát. Keverd össze az összetevőket, locsold meg caesar öntettel.' },
        vacsora: { nev: 'Brokkolival töltött csirke', hozzavalok: '2 csirkemellfilé, 100g főtt brokkoli, reszelt sajt, fokhagyma, só, bors', elkeszites: 'Vágd be a csirkét, töltsd meg brokkolival és sajttal. Süsd 200°C-on 25 percig.' }
    },
    {
        reggeli: { nev: 'Mandarinos görög joghurt', hozzavalok: '200g görög joghurt, 2 mandarin, 30g dió, 1 ek. méz', elkeszites: 'Tedd a joghurtot tálba, szeld fel a mandarint. Szórd rá a diót és a mézet.' },
        ebed: { nev: 'Zöldséges minestrone leves', hozzavalok: 'Fehér bab, paradicsom, cukkini, sárgarépa, teljes kiőrlésű pasta, hagyma, fokhagyma, bazsalikom', elkeszites: 'Párold meg a hagymát, add hozzá a zöldségeket. Önts rá alaplevet, főzd 15 percig. Add a tésztát.' },
        vacsora: { nev: 'Lazacburger teljes kiőrlésű zsömlében', hozzavalok: '150g lazac, 1 tojás, kapor, citrom, teljes kiőrlésű zsemle, saláta', elkeszites: 'Keverd el a lazacot tojással és kaporral. Formázz pogácsákat, süsd meg. Tálald zsömlében salátával.' }
    },
    {
        reggeli: { nev: 'Fehérje omlett paprikával', hozzavalok: '4 tojásfehérje, 1 tojás, piros paprika, hagyma, só, bors, olívaolaj', elkeszites: 'Verd fel a tojásokat. Add hozzá a felkockázott paprikát és hagymát. Süsd meg kevés olajon.' },
        ebed: { nev: 'Quinoás vegán tál', hozzavalok: '80g quinoa, sült édesburgonya, fekete bab, avokádó, lime, koriander', elkeszites: 'Főzd a quinoát. Süsd az édesburgonyát kockákra vágva. Rendezd el tálban az összes alapanyagot.' },
        vacsora: { nev: 'Csirkemell édesburgonyával', hozzavalok: '200g csirkemell, 1 édesburgonya, paprika, só, bors, olívaolaj, rozmaring', elkeszites: 'Tepsiben süsd a csirkét és az édesburgonyát együtt 200°C-on 30 percig.' }
    },
    {
        reggeli: { nev: 'Lenmag-pudingos reggeli', hozzavalok: '3 ek. lenmag, 250ml mandulatej, 1 ek. méz, friss gyümölcsök', elkeszites: 'Keverd el a lenmagot a mandulaterrel és mézzel. Hagyj állni 10 percet. Tedd rá a gyümölcsöket.' },
        ebed: { nev: 'Mediterrán csirke saláta', hozzavalok: '150g csirkemell, vegyes salátalevél, feta, olívabogyó, paradicsom, olívaolaj, oregano', elkeszites: 'Süsd meg a csirkét, szeletelsd fel. Keverj össze salátát és tedd rá a csirkét és fetát.' },
        vacsora: { nev: 'Töltött paprika darált csirkével', hozzavalok: '4 paprika, 250g darált csirke, 80g rizs, paradicsom szósz, hagyma, fűszerek', elkeszites: 'Főzd meg félig a rizst. Keverd el a darált csirkével. Töltsd a paprikába, önts rá szószt. Süsd 30 percig.' }
    },
    {
        reggeli: { nev: 'Cukkinifánk tojással', hozzavalok: '1 cukkini (reszelve), 2 tojás, 2 ek. zabpehely, só, bors, fokhagyma', elkeszites: 'Nyomkod ki a cukkinit, keverd össze a tojással és zabpehellyel. Süss kis fánkokat serpenyőben.' },
        ebed: { nev: 'Spenótos csirke pasta', hozzavalok: '150g csirkemell, 80g teljes kiőrlésű tészta, 2 marék spenót, fokhagyma, krémsajt, só, bors', elkeszites: 'Főzd meg a tésztát. Süsd meg a csirkét fokhagymával. Add hozzá a spenótot és a krémsajtot.' },
        vacsora: { nev: 'Halfilé párolt zöldségekkel', hozzavalok: '200g fehér halfilé, brokkoli, sárgarépa, citromlé, olívaolaj, petrezselyem', elkeszites: 'Süsd meg a halat serpenyőben 3 percig oldalanként. Párold meg a zöldségeket. Locsold meg citromlével.' }
    },
    {
        reggeli: { nev: 'Áfonyás görög joghurt pirítóssal', hozzavalok: '200g görög joghurt, 80g áfonya, 1 szelet teljes kiőrlésű kenyér, 1 tk. méz', elkeszites: 'Pirítsd meg a kenyeret. Tedd ki tálba a joghurtot, szórd rá az áfonyát és a mézet. Fogyaszd a pirítóssal.' },
        ebed: { nev: 'Tex-Mex csirke saláta', hozzavalok: '150g csirkemell, fekete bab, kukorica, avokádó, lime, koriander, tortilla chips', elkeszites: 'Süsd meg a csirkét fűszeresen. Keverd össze az alapanyagokat. Tálald tortilla chippsel.' },
        vacsora: { nev: 'Párolt csirke gombás szósszal', hozzavalok: '200g csirkemell, 200g csiperkegomba, fokhagyma, tejszín, só, bors, petrezselyem', elkeszites: 'Süsd meg a csirkét. A gombát fokhagymával párold meg. Add hozzá a tejszínt, fűszerezd. Tálald a csirkével.' }
    },
    {
        reggeli: { nev: 'Diós banán zabkása', hozzavalok: '60g zabpehely, 300ml tej, 1 banán, 30g darált dió, 1 tk. méz', elkeszites: 'Főzd meg a zabot tejben. Keverd hozzá a darált diót és a mézet. Tedd rá a felszeletelt banánt.' },
        ebed: { nev: 'Egyszerű csicseriborsó curry', hozzavalok: '200g csicseriborsó, paradicsom, kókusztej, curry, kurkuma, fokhagyma, hagyma', elkeszites: 'Párold meg a hagymát és fokhagymát. Add hozzá a fűszereket, paradicsomot és csicseriborsót. Főzd 15 percig.' },
        vacsora: { nev: 'Zöldborsós tonhalas tészta', hozzavalok: '80g teljes kiőrlésű tészta, 1 doboz tonhal, 100g zöldborsó, fokhagyma, olívaolaj, citromlé', elkeszites: 'Főzd meg a tésztát. Süsd meg a fokhagymát olajban, add hozzá a tonhalat és borsót. Keverd a tésztába.' }
    },
    {
        reggeli: { nev: 'Sütőtökkrémes pirítós', hozzavalok: '2 szelet teljes kiőrlésű kenyér, 3 ek. sütőtökkrém, 2 tojás, spenót, só', elkeszites: 'Pirítsd meg a kenyeret, kend meg sütőtökkrémmel. Süss buggyantott tojást és tedd rá a spenóttal.' },
        ebed: { nev: 'Csirkés rizzsel töltött paprika', hozzavalok: '2 paprika, 150g csirkemell, 80g barna rizs, paradicsom, fűszerek', elkeszites: 'Főzd meg a rizst, keverd a csirkével és a paradicsommal. Töltsd a paprikába, süsd 20 percig.' },
        vacsora: { nev: 'Citromos rozmaring csirke spenóttal', hozzavalok: '200g csirkemell, 2 marék spenót, 1 citrom, rozmaring, fokhagyma, olívaolaj', elkeszites: 'Pácolj be a csirkét citromlével és rozmaringgal. Süsd meg serpenyőben. Melléje tálald a párolt spenótot.' }
    },
    {
        reggeli: { nev: 'Rántotta avokádóval', hozzavalok: '3 tojás, 1 avokádó, paradicsom, só, bors, olívaolaj', elkeszites: 'Verd fel a tojásokat, süsd meg kevés olajban. Kend rá az avokádót, tálald paradicsommal.' },
        ebed: { nev: 'Lazacos görög saláta', hozzavalok: '150g sült lazac, uborka, paradicsom, feta, olívabogyó, citromdresszleg', elkeszites: 'Süsd meg a lazacot. Keverd össze a zöldségeket. Tálald a lazaccal és az öntettel.' },
        vacsora: { nev: 'Csirke stir-fry rizzsel', hozzavalok: '200g csirkemell, barna rizs, brokkoli, sárgarépa, szójaszósz, szezámolaj, fokhagyma', elkeszites: 'Főzd meg a rizst. Süsd át a csirkét és a zöldségeket szezámolajban, ízesítsd szójaszósszal. Tálald rizzsel.' }
    },
    {
        reggeli: { nev: 'Zabkása mazsolával és fahéjjal', hozzavalok: '60g zabpehely, 300ml tej, 1 ek. mazsola, fahéj, 1 tk. méz', elkeszites: 'Főzd fel a zabot tejben. Keverd bele a mazsolát, fahéjt és mézet.' },
        ebed: { nev: 'Csirkés zöldség wok', hozzavalok: '150g csirkemell, paprika, cukkini, hagyma, fokhagyma, szójaszósz, sesame oil, gyömbér', elkeszites: 'Nagy lángon süsd át a csirkét 3 percig. Add hozzá a zöldségeket, fűszerezd, keverd 3 percig.' },
        vacsora: { nev: 'Tepsis tőkehal citromos fűszervajjal', hozzavalok: '200g tőkehal, 30g vaj, citromlé, fokhagyma, petrezselyem, só, bors', elkeszites: 'Olvaszd meg a vajat fokhagymával. Kend rá a halra, locsold meg citromlével. Süsd 200°C-on 15 percig.' }
    },
    {
        reggeli: { nev: 'Fehérjés csokoládé smoothie', hozzavalok: '1 adag csokoládés fehérjepor, 1 banán, 250ml mandulatej, 1 ek. mogyoróvaj', elkeszites: 'Turmixold össze az összes alapanyagot. Tálald azonnal.' },
        ebed: { nev: 'Sült csirkés quinoa tál', hozzavalok: '150g csirkemell, 80g quinoa, sült paprika, paradicsom, babérlevél, olívaolaj', elkeszites: 'Főzd meg a quinoát. Süsd a csirkét és a paprikát. Tálald együtt az összetevőkkel.' },
        vacsora: { nev: 'Marha steak párolt zöldségekkel', hozzavalok: '180g marha steak, spárga, sárgarépa, só, bors, rozmaring, olívaolaj', elkeszites: 'Süsd a steaket forró serpenyőben 3 percig oldalanként. Párold meg a zöldségeket. Tálald együtt.' }
    },
    {
        reggeli: { nev: 'Gyümölcsös fehérjés zabkása', hozzavalok: '60g zabpehely, 300ml tej, 1 adag vanília fehérjepor, eper, kiwi', elkeszites: 'Főzd meg a zabot. Keverd hozzá a fehérjeport, hagyd kicsit hűlni. Tedd rá a gyümölcsöket.' },
        ebed: { nev: 'Spárga krémleves pirítóssal', hozzavalok: '400g spárga, 1 hagyma, vegetáriánus alaplé, tejszín, só, bors, olívaolaj', elkeszites: 'Párold meg a hagymát, add hozzá a spárgát és alaplevet. Főzd 15 percig, turmixold, add hozzá a tejszínt.' },
        vacsora: { nev: 'Csirkés padlizsán stir-fry', hozzavalok: '200g csirkemell, 1 padlizsán, paprika, szójaszósz, fokhagyma, olívaolaj', elkeszites: 'Süsd meg a csirkét fokhagymával. Add hozzá a felkockázott padlizsánt és paprikát. Ízesítsd szójaszósszal.' }
    },
    {
        reggeli: { nev: 'Lazacos rántotta teljes kiőrlésű kenyérrel', hozzavalok: '3 tojás, 50g füstölt lazac, kapor, citromlé, 1 szelet kenyér', elkeszites: 'Süss rántottát. Tedd rá a lazacot és a kaprot. Locsold meg citromlével. Fogyaszd pirítóssal.' },
        ebed: { nev: 'Gyors csicseriborsó saláta', hozzavalok: '200g csicseriborsó, 1 avokádó, paradicsom, citromlé, koriander, olívaolaj', elkeszites: 'Keverd össze az összetevőket, locsold meg citromlével és olívaolajjal.' },
        vacsora: { nev: 'Fűszeres sültcsirke és quinoa', hozzavalok: '200g csirkecomb (bőr nélkül), 80g quinoa, kurkuma, pirospaprika, fokhagyma, citromlé', elkeszites: 'Pácolj be a csirkét fűszerekkel. Süsd 180°C-on 30 percig. Főzd meg a quinoát. Tálald együtt.' }
    },
    {
        reggeli: { nev: 'Mézes diós görög joghurt', hozzavalok: '200g görög joghurt, 2 ek. méz, 40g dió, 1 alma', elkeszites: 'Tedd a joghurtot tálba. Szórd rá a diót, add hozzá az apróra vágott almát és mézet.' },
        ebed: { nev: 'Pirított tofu zöldséges rizzsel', hozzavalok: '150g kemény tofu, barna rizs, paprika, hagyma, szójaszósz, szezámolaj', elkeszites: 'Pirítsd meg a tofut serpenyőben. Főzd meg a rizst. Süsd meg a zöldségeket. Keverd össze szójaszósszal.' },
        vacsora: { nev: 'Grillezett lazac spárgával', hozzavalok: '180g lazac, spárga, citrom, fokhagyma, olívaolaj, só, bors', elkeszites: 'Grillezd a lazacot 4-5 percig oldalanként. A spárgát süsd forró serpenyőben 5 percig. Tálald citrommal.' }
    },
    {
        reggeli: { nev: 'Teljes kiőrlésű muffin tojással', hozzavalok: '2 tojás, 50g spenót, 30g gomba, reszelt sajt, só, bors', elkeszites: 'Keverd össze a tojást a zöldségekkel. Öntsd muffin formákba, süsd 180°C-on 18 percig.' },
        ebed: { nev: 'Pikáns csirke feketebab saláta', hozzavalok: '150g csirkemell, 150g fekete bab, kukorica, avokádó, lime, chili, koriander', elkeszites: 'Süsd meg fűszeresen a csirkét. Keverd össze az összetevőket. Locsold meg lime-lével.' },
        vacsora: { nev: 'Sütőtökös sertésszűz', hozzavalok: '200g sertésszűz, 200g sütőtök, rozmaring, fokhagyma, olívaolaj, só, bors', elkeszites: 'Tepsibe helyezd a húst és a felkockázott sütőtököt. Fűszerezd, süsd 190°C-on 25 percig.' }
    },
    {
        reggeli: { nev: 'Banán-málna turmix', hozzavalok: '1 banán, 100g málna (fagyasztott), 200g görög joghurt, 1 ek. lenmag', elkeszites: 'Turmixold össze az összes alapanyagot simára. Tálald azonnal.' },
        ebed: { nev: 'Könnyed tojásos rizzsel', hozzavalok: '80g barna rizs, 3 tojás, borsó, hagyma, szójaszósz, szezámolaj', elkeszites: 'Főzd meg a rizst. Süsd meg a tojást apróra vágott hagymával. Add a rizst, keverd bele a borsót és szójaszószt.' },
        vacsora: { nev: 'Csirkés fajita teljes kiőrlésű tortillával', hozzavalok: '200g csirkemell, paprika, hagyma, teljes kiőrlésű tortilla, guacamole, salsa', elkeszites: 'Süsd meg fűszeresen a csirkét és a zöldségeket. Töltsd a tortillába guacamoléval és salsával.' }
    },
    {
        reggeli: { nev: 'Protein zabkása bogyókkal', hozzavalok: '60g zabpehely, 1 adag fehérjepor, 300ml tej, vegyes bogyós gyümölcs', elkeszites: 'Főzd meg a zabot. Hagyd kicsit hűlni, keverd hozzá a fehérjeport. Tedd rá a bogyós gyümölcsöket.' },
        ebed: { nev: 'Marokkói csirke salátával', hozzavalok: '150g csirkemell, köles, paradicsom, uborka, menta, koriander, citromlé, olívaolaj', elkeszites: 'Főzd meg a kölest. Fűszeres csirkét süss. Keverd össze a friss zöldségekkel és fűszerekkel.' },
        vacsora: { nev: 'Mediterrán tőkehal olívabogyóval', hozzavalok: '200g tőkehal, olívabogyó, paradicsom, kapribogyó, fokhagyma, olívaolaj, petrezselyem', elkeszites: 'Süsd meg a halat serpenyőben. Add hozzá a paradicsomot, olívabogyót és kapribogyót. Főzd 5 percig.' }
    },
    {
        reggeli: { nev: 'Avokádós tojás teljes kiőrlésű muffinon', hozzavalok: '2 tojás, 1 avokádó, 2 teljes kiőrlésű angol muffin, só, bors, chili', elkeszites: 'Süss buggyantott tojást. Pirítsd meg a muffint. Pürésítsd az avokádót, kend a muffinra, tedd rá a tojást.' },
        ebed: { nev: 'Csirkés quinoa leves', hozzavalok: '150g csirkemell, 60g quinoa, sárgarépa, zeller, hagyma, petrezselyem, alaplé', elkeszites: 'Főzd meg a csirkét alaplében a zöldségekkel. Add hozzá a quinoát, főzd 15 percig. Szórd meg petrezselyemmel.' },
        vacsora: { nev: 'Fűszeres sütőtök krémleves grillezett csirkével', hozzavalok: '400g sütőtök, 150g csirkemell, kókusztej, curry, gyömbér, fokhagyma, alaplé', elkeszites: 'Süsd meg a sütőtököt. Turmixold alaplével és kókusztejjel simára. Grillezd a csirkét. Tálald a levessel.' }
    },
    {
        reggeli: { nev: 'Eper-banán joghurt tál', hozzavalok: '200g görög joghurt, 100g eper, 1 banán, 30g granola, 1 ek. méz', elkeszites: 'Tedd tálba a joghurtot. Szeld fel a gyümölcsöket, helyezd rá. Szórd meg granolával, locsold meg mézzel.' },
        ebed: { nev: 'Pirított csicseriborsós spenót saláta', hozzavalok: '150g csicseriborsó, 2 marék spenót, paradicsom, feta, citromdresszleg, fokhagyma', elkeszites: 'Pirítsd meg a csicseriborsót serpenyőben. Keverd össze a spenóttal és paradicsommal. Tedd rá a fetát és öntet.' },
        vacsora: { nev: '🏆 Ünnepi lazactál – 30 napos sikerre!', hozzavalok: '200g lazacfilé, 80g quinoa, avokádó, csersznyeparadicsom, spárga, citrom, kapor', elkeszites: 'Grillezd a lazacot. Főzd meg a quinoát. Rendezd el tálban a sült spárgával, avokádóval és paradicsommal. Szórd rá a kaprot, tálald citrommal!' }
    }
];

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

        const meal = MEALS[workoutIndex];
        ['reggeli', 'ebed', 'vacsora'].forEach(type => {
            const m = meal[type];
            document.getElementById(`meal-${type}-nev`).textContent = m.nev;
            document.getElementById(`meal-${type}-hozzavalok`).textContent = m.hozzavalok;
            document.getElementById(`meal-${type}-elkeszites`).textContent = m.elkeszites;
        });

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