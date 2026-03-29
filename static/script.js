// FitHit30M - 30-Day Fitness Program

const MEALS = [
    {
        breakfast: { name: 'Oat Smoothie Bowl', ingredients: '50g oats, 1 banana, 150ml almond milk, 1 tbsp honey', instructions: 'Blend banana with almond milk and honey, pour over oats, serve.' },
        lunch: { name: 'Chicken Quinoa Salad', ingredients: '150g chicken breast, 80g quinoa, tomato, cucumber, lemon juice, olive oil', instructions: 'Cook quinoa. Pan-fry chicken, slice. Mix with fresh vegetables, drizzle with olive oil and lemon juice.' },
        dinner: { name: 'Salmon with Steamed Broccoli', ingredients: '180g salmon fillet, 200g broccoli, garlic, olive oil, salt, pepper', instructions: 'Pan-fry salmon in olive oil 3–4 min each side. Steam broccoli 5 min. Serve together.' }
    },
    {
        breakfast: { name: 'Protein Scrambled Eggs', ingredients: '3 eggs, 1 handful spinach, half bell pepper, salt, pepper, olive oil', instructions: 'Whisk eggs, add spinach and diced pepper, cook in a little oil.' },
        lunch: { name: 'Red Lentil Soup', ingredients: '200g red lentils, 1 onion, 1 carrot, 1 tsp turmeric, vegetable broth', instructions: 'Sauté onion, add lentils, carrot and spices. Cook until soft, blend smooth.' },
        dinner: { name: 'Turkey-Stuffed Zucchini Boats', ingredients: '2 zucchini, 200g minced turkey, tomato sauce, cheese, spices', instructions: 'Hollow out zucchini. Fill with spiced minced turkey, top with sauce. Bake 25 min at 180°C.' }
    },
    {
        breakfast: { name: 'Greek Yogurt Parfait', ingredients: '200g Greek yogurt, 30g granola, 1 handful blueberries, 1 tsp honey', instructions: 'Layer yogurt, granola and berries, drizzle with honey.' },
        lunch: { name: 'Tuna Whole-Wheat Sandwich', ingredients: '2 slices whole-wheat bread, 1 can tuna, 1 tbsp yogurt mayo, lettuce, tomato', instructions: 'Mix tuna with yogurt mayo, fill bread with lettuce and tomato.' },
        dinner: { name: 'Chicken and Vegetable Stew', ingredients: '200g chicken breast, 1 bell pepper, 1 tomato, 1 onion, 1 tsp paprika, broth', instructions: 'Sauté onion, add chicken and vegetables. Season, pour in broth, cook 20 min.' }
    },
    {
        breakfast: { name: 'Banana Oatmeal', ingredients: '60g oats, 300ml milk, 1 banana, 1 tbsp peanut butter, cinnamon', instructions: 'Cook oats in milk. Stir in sliced banana, peanut butter and cinnamon.' },
        lunch: { name: 'Chickpea Salad', ingredients: '200g chickpeas (canned), tomato, cucumber, red onion, parsley, lemon dressing', instructions: 'Mix all ingredients, drizzle with lemon dressing.' },
        dinner: { name: 'Grilled Chicken with Sweet Potato Mash', ingredients: '200g chicken breast, 2 sweet potatoes, butter, salt, pepper, rosemary', instructions: 'Grill chicken 5–6 min per side. Cook sweet potato, mash with butter and salt.' }
    },
    {
        breakfast: { name: 'Avocado Toast with Egg', ingredients: '2 slices whole-wheat bread, 1 avocado, 2 eggs, salt, pepper, lemon juice', instructions: 'Toast bread. Mash avocado with lemon juice. Fry or poach eggs. Place on toast.' },
        lunch: { name: 'Chicken Vegetable Stir-Fry', ingredients: '150g chicken breast, broccoli, carrot, bell pepper, soy sauce, ginger, garlic', instructions: 'Stir-fry chicken and vegetables over high heat. Add soy sauce, ginger and garlic.' },
        dinner: { name: 'Baked Salmon with Vegetables', ingredients: '180g salmon, asparagus, cherry tomatoes, olive oil, garlic, lemon', instructions: 'Arrange salmon and vegetables on a baking tray, drizzle with olive oil. Bake at 200°C for 18 min.' }
    },
    {
        breakfast: { name: 'Chia Pudding with Fruit', ingredients: '3 tbsp chia seeds, 250ml almond milk, 1 tbsp honey, seasonal fruit', instructions: 'Mix chia seeds with almond milk and honey. Refrigerate overnight. Top with fruit in the morning.' },
        lunch: { name: 'Egg and Vegetable Fried Rice', ingredients: '80g brown rice, 2 eggs, zucchini, carrot, onion, vegetable broth', instructions: 'Cook rice with broth. Stir-fry vegetables in a wok, add cooked rice and eggs.' },
        dinner: { name: 'Chicken Meatballs in Bell Pepper Sauce', ingredients: '250g minced chicken, 1 egg, garlic, parsley, bell pepper sauce', instructions: 'Mix minced chicken with egg and spices, shape into balls. Pan-fry, serve with bell pepper sauce.' }
    },
    {
        breakfast: { name: 'Protein Pancakes', ingredients: '2 eggs, 1 banana, 1 scoop vanilla protein powder, a little oil', instructions: 'Blend all ingredients. Cook small pancakes in a little oil on each side.' },
        lunch: { name: 'Chicken Vegetable Soup', ingredients: '150g chicken breast, carrot, celery, parsley root, pearl pasta, salt, pepper', instructions: 'Cook chicken and vegetables in broth. Add pasta, cook 8 min.' },
        dinner: { name: 'Baked Mushrooms with Quinoa', ingredients: '200g mushrooms, 80g quinoa, garlic, parsley, olive oil', instructions: 'Roast mushrooms at 200°C for 15 min. Cook quinoa. Serve together, sprinkle with parsley.' }
    },
    {
        breakfast: { name: 'Almond Butter Rice Porridge', ingredients: '60g brown rice, 300ml milk, 1 tbsp almond butter, banana, cinnamon', instructions: 'Cook rice in milk. Stir in almond butter and cinnamon. Serve with sliced banana.' },
        lunch: { name: 'Mediterranean Tuna Salad', ingredients: '1 can tuna, olives, tomato, feta, mixed greens, olive oil, lemon juice', instructions: 'Mix all ingredients, drizzle with olive oil and lemon juice.' },
        dinner: { name: 'Crispy Chicken Bites with Sweet Chili Sauce', ingredients: '200g chicken breast, cornstarch, egg, sweet chili sauce, lemon juice', instructions: 'Coat chicken in cornstarch, pan-fry until crispy. Serve with sweet chili sauce.' }
    },
    {
        breakfast: { name: 'Berry Smoothie Bowl', ingredients: '100g frozen mixed berries, 150g Greek yogurt, 30g granola, 1 tbsp flaxseed', instructions: 'Blend yogurt with berries. Pour into bowl, top with granola and flaxseed.' },
        lunch: { name: 'Red Lentil Dal', ingredients: '200g red lentils, coconut milk, tomato, curry powder, turmeric, garlic, ginger', instructions: 'Sauté garlic and ginger. Add spices, lentils, tomato and coconut milk. Cook 20 min.' },
        dinner: { name: 'Grilled Chicken with Steamed Vegetables', ingredients: '200g chicken breast, zucchini, bell pepper, onion, balsamic vinegar, olive oil', instructions: 'Grill chicken. Pan-fry vegetables. Drizzle with balsamic vinegar.' }
    },
    {
        breakfast: { name: 'Vegetable Egg Omelette', ingredients: '3 eggs, 1 handful spinach, mushroom, tomato, grated cheese, salt, pepper', instructions: 'Whisk eggs, add vegetables. Cook in a pan 3–4 min, fold over.' },
        lunch: { name: 'Brown Rice Chicken Bowl', ingredients: '150g chicken breast, 80g brown rice, avocado, cucumber, soy sauce, sesame seeds', instructions: 'Cook rice. Pan-fry chicken. Serve with toppings, drizzle with soy sauce.' },
        dinner: { name: 'Salmon Pasta with Tomato Sauce', ingredients: '180g salmon, 80g whole-wheat pasta, tomato sauce, capers, olives', instructions: 'Cook pasta. Pan-fry salmon, flake with a fork. Mix with sauce and serve over pasta.' }
    },
    {
        breakfast: { name: 'Overnight Oats with Fruit', ingredients: '60g oats, 200ml milk, 100g Greek yogurt, strawberries, kiwi, 1 tsp honey', instructions: 'Soak oats in milk overnight. In the morning mix in yogurt, add fruit and honey.' },
        lunch: { name: 'Black Bean Salad', ingredients: '200g black beans (canned), corn, avocado, tomato, cilantro, lime, olive oil', instructions: 'Mix all ingredients. Drizzle with lime juice and olive oil.' },
        dinner: { name: 'Pork Tenderloin with Roasted Potatoes', ingredients: '200g pork tenderloin, 2 potatoes, garlic, rosemary, olive oil', instructions: 'Dice potatoes, roast at 200°C for 30 min. Pan-fry pork 4 min each side.' }
    },
    {
        breakfast: { name: 'Peanut Butter Banana Toast', ingredients: '2 slices whole-wheat bread, 2 tbsp peanut butter, 1 banana, cinnamon', instructions: 'Toast bread. Spread with peanut butter, top with sliced banana and sprinkle with cinnamon.' },
        lunch: { name: 'Chicken Caesar Salad', ingredients: '150g grilled chicken breast, romaine lettuce, parmesan, whole-wheat croutons, Caesar dressing', instructions: 'Slice chicken, tear lettuce. Mix all ingredients, drizzle with Caesar dressing.' },
        dinner: { name: 'Broccoli-Stuffed Chicken', ingredients: '2 chicken breast fillets, 100g cooked broccoli, grated cheese, garlic, salt, pepper', instructions: 'Slice open chicken, fill with broccoli and cheese. Bake at 200°C for 25 min.' }
    },
    {
        breakfast: { name: 'Mandarin Greek Yogurt Bowl', ingredients: '200g Greek yogurt, 2 mandarins, 30g walnuts, 1 tbsp honey', instructions: 'Put yogurt in bowl, slice mandarins. Sprinkle with walnuts and honey.' },
        lunch: { name: 'Vegetable Minestrone Soup', ingredients: 'White beans, tomato, zucchini, carrot, whole-wheat pasta, onion, garlic, basil', instructions: 'Sauté onion, add vegetables. Pour in broth, cook 15 min. Add pasta.' },
        dinner: { name: 'Salmon Burger on Whole-Wheat Bun', ingredients: '150g salmon, 1 egg, dill, lemon, whole-wheat bun, lettuce', instructions: 'Mix salmon with egg and dill. Shape into patties, pan-fry. Serve in bun with lettuce.' }
    },
    {
        breakfast: { name: 'Egg White Omelette with Bell Pepper', ingredients: '4 egg whites, 1 egg, red bell pepper, onion, salt, pepper, olive oil', instructions: 'Whisk eggs. Add diced pepper and onion. Cook in a little oil.' },
        lunch: { name: 'Quinoa Vegan Bowl', ingredients: '80g quinoa, roasted sweet potato, black beans, avocado, lime, cilantro', instructions: 'Cook quinoa. Dice and roast sweet potato. Arrange all ingredients in a bowl.' },
        dinner: { name: 'Chicken Breast with Sweet Potato', ingredients: '200g chicken breast, 1 sweet potato, bell pepper, salt, pepper, olive oil, rosemary', instructions: 'Bake chicken and sweet potato together in a baking tray at 200°C for 30 min.' }
    },
    {
        breakfast: { name: 'Flaxseed Pudding', ingredients: '3 tbsp flaxseed, 250ml almond milk, 1 tbsp honey, fresh fruit', instructions: 'Mix flaxseed with almond milk and honey. Let sit 10 min. Top with fruit.' },
        lunch: { name: 'Mediterranean Chicken Salad', ingredients: '150g chicken breast, mixed greens, feta, olives, tomato, olive oil, oregano', instructions: 'Pan-fry chicken, slice. Mix salad and top with chicken and feta.' },
        dinner: { name: 'Stuffed Peppers with Minced Chicken', ingredients: '4 bell peppers, 250g minced chicken, 80g rice, tomato sauce, onion, spices', instructions: 'Half-cook rice. Mix with minced chicken. Stuff into peppers, pour sauce over. Bake 30 min.' }
    },
    {
        breakfast: { name: 'Zucchini Fritters with Egg', ingredients: '1 zucchini (grated), 2 eggs, 2 tbsp oats, salt, pepper, garlic', instructions: 'Squeeze water from zucchini, mix with egg and oats. Fry small fritters in a pan.' },
        lunch: { name: 'Spinach Chicken Pasta', ingredients: '150g chicken breast, 80g whole-wheat pasta, 2 handfuls spinach, garlic, cream cheese, salt, pepper', instructions: 'Cook pasta. Pan-fry chicken with garlic. Add spinach and cream cheese.' },
        dinner: { name: 'White Fish with Steamed Vegetables', ingredients: '200g white fish fillet, broccoli, carrot, lemon juice, olive oil, parsley', instructions: 'Pan-fry fish 3 min per side. Steam vegetables. Drizzle with lemon juice.' }
    },
    {
        breakfast: { name: 'Blueberry Greek Yogurt with Toast', ingredients: '200g Greek yogurt, 80g blueberries, 1 slice whole-wheat bread, 1 tsp honey', instructions: 'Toast bread. Put yogurt in bowl, add blueberries and honey. Enjoy with toast.' },
        lunch: { name: 'Tex-Mex Chicken Salad', ingredients: '150g chicken breast, black beans, corn, avocado, lime, cilantro, tortilla chips', instructions: 'Pan-fry spiced chicken. Mix all ingredients. Serve with tortilla chips.' },
        dinner: { name: 'Chicken with Creamy Mushroom Sauce', ingredients: '200g chicken breast, 200g mushrooms, garlic, cream, salt, pepper, parsley', instructions: 'Pan-fry chicken. Sauté mushrooms with garlic. Add cream, season. Serve over chicken.' }
    },
    {
        breakfast: { name: 'Walnut Banana Oatmeal', ingredients: '60g oats, 300ml milk, 1 banana, 30g crushed walnuts, 1 tsp honey', instructions: 'Cook oats in milk. Stir in walnuts and honey. Top with sliced banana.' },
        lunch: { name: 'Simple Chickpea Curry', ingredients: '200g chickpeas, tomato, coconut milk, curry powder, turmeric, garlic, onion', instructions: 'Sauté onion and garlic. Add spices, tomato and chickpeas. Cook 15 min.' },
        dinner: { name: 'Tuna Pasta with Green Peas', ingredients: '80g whole-wheat pasta, 1 can tuna, 100g green peas, garlic, olive oil, lemon juice', instructions: 'Cook pasta. Sauté garlic in oil, add tuna and peas. Mix into pasta.' }
    },
    {
        breakfast: { name: 'Pumpkin Toast with Poached Egg', ingredients: '2 slices whole-wheat bread, 3 tbsp pumpkin purée, 2 eggs, spinach, salt', instructions: 'Toast bread, spread with pumpkin purée. Poach eggs and place on top with spinach.' },
        lunch: { name: 'Chicken and Rice Stuffed Peppers', ingredients: '2 bell peppers, 150g chicken breast, 80g brown rice, tomato, spices', instructions: 'Cook rice, mix with chicken and tomato. Stuff into peppers, bake 20 min.' },
        dinner: { name: 'Lemon Rosemary Chicken with Spinach', ingredients: '200g chicken breast, 2 handfuls spinach, 1 lemon, rosemary, garlic, olive oil', instructions: 'Marinate chicken with lemon and rosemary. Pan-fry. Serve with steamed spinach.' }
    },
    {
        breakfast: { name: 'Scrambled Eggs with Avocado', ingredients: '3 eggs, 1 avocado, tomato, salt, pepper, olive oil', instructions: 'Whisk and cook eggs in a little oil. Spread avocado on top, serve with tomato.' },
        lunch: { name: 'Salmon Greek Salad', ingredients: '150g baked salmon, cucumber, tomato, feta, olives, lemon dressing', instructions: 'Bake salmon. Mix vegetables. Serve with salmon and dressing.' },
        dinner: { name: 'Chicken Stir-Fry with Rice', ingredients: '200g chicken breast, brown rice, broccoli, carrot, soy sauce, sesame oil, garlic', instructions: 'Cook rice. Stir-fry chicken and vegetables in sesame oil, season with soy sauce. Serve with rice.' }
    },
    {
        breakfast: { name: 'Oatmeal with Raisins and Cinnamon', ingredients: '60g oats, 300ml milk, 1 tbsp raisins, cinnamon, 1 tsp honey', instructions: 'Cook oats in milk. Stir in raisins, cinnamon and honey.' },
        lunch: { name: 'Chicken Vegetable Wok', ingredients: '150g chicken breast, bell pepper, zucchini, onion, garlic, soy sauce, sesame oil, ginger', instructions: 'Stir-fry chicken over high heat 3 min. Add vegetables, season, stir 3 min.' },
        dinner: { name: 'Baked Cod with Lemon Herb Butter', ingredients: '200g cod fillet, 30g butter, lemon juice, garlic, parsley, salt, pepper', instructions: 'Melt butter with garlic. Spread over fish, drizzle with lemon juice. Bake at 200°C for 15 min.' }
    },
    {
        breakfast: { name: 'Chocolate Protein Smoothie', ingredients: '1 scoop chocolate protein powder, 1 banana, 250ml almond milk, 1 tbsp peanut butter', instructions: 'Blend all ingredients together. Serve immediately.' },
        lunch: { name: 'Roasted Chicken Quinoa Bowl', ingredients: '150g chicken breast, 80g quinoa, roasted bell pepper, tomato, olive oil', instructions: 'Cook quinoa. Roast chicken and bell pepper. Serve together.' },
        dinner: { name: 'Beef Steak with Steamed Vegetables', ingredients: '180g beef steak, asparagus, carrot, salt, pepper, rosemary, olive oil', instructions: 'Sear steak in a hot pan 3 min per side. Steam vegetables. Serve together.' }
    },
    {
        breakfast: { name: 'Protein Fruit Oatmeal', ingredients: '60g oats, 300ml milk, 1 scoop vanilla protein powder, strawberries, kiwi', instructions: 'Cook oats. Stir in protein powder, let cool slightly. Top with fruit.' },
        lunch: { name: 'Asparagus Cream Soup with Toast', ingredients: '400g asparagus, 1 onion, vegetable broth, cream, salt, pepper, olive oil', instructions: 'Sauté onion, add asparagus and broth. Cook 15 min, blend, add cream.' },
        dinner: { name: 'Chicken and Eggplant Stir-Fry', ingredients: '200g chicken breast, 1 eggplant, bell pepper, soy sauce, garlic, olive oil', instructions: 'Pan-fry chicken with garlic. Add diced eggplant and pepper. Season with soy sauce.' }
    },
    {
        breakfast: { name: 'Smoked Salmon Scrambled Eggs', ingredients: '3 eggs, 50g smoked salmon, dill, lemon juice, 1 slice bread', instructions: 'Scramble eggs. Top with salmon and dill. Drizzle with lemon juice. Serve with toast.' },
        lunch: { name: 'Quick Chickpea Salad', ingredients: '200g chickpeas, 1 avocado, tomato, lemon juice, cilantro, olive oil', instructions: 'Mix all ingredients, drizzle with lemon juice and olive oil.' },
        dinner: { name: 'Spiced Roast Chicken with Quinoa', ingredients: '200g chicken thighs (skinless), 80g quinoa, turmeric, paprika, garlic, lemon juice', instructions: 'Marinate chicken with spices. Bake at 180°C for 30 min. Cook quinoa. Serve together.' }
    },
    {
        breakfast: { name: 'Honey Walnut Greek Yogurt', ingredients: '200g Greek yogurt, 2 tbsp honey, 40g walnuts, 1 apple', instructions: 'Put yogurt in bowl. Sprinkle walnuts, add diced apple and honey.' },
        lunch: { name: 'Crispy Tofu with Vegetable Rice', ingredients: '150g firm tofu, brown rice, bell pepper, onion, soy sauce, sesame oil', instructions: 'Pan-fry tofu until crispy. Cook rice. Stir-fry vegetables. Mix with soy sauce.' },
        dinner: { name: 'Grilled Salmon with Asparagus', ingredients: '180g salmon, asparagus, lemon, garlic, olive oil, salt, pepper', instructions: 'Grill salmon 4–5 min per side. Pan-fry asparagus 5 min. Serve with lemon.' }
    },
    {
        breakfast: { name: 'Whole-Wheat Egg Muffins', ingredients: '2 eggs, 50g spinach, 30g mushrooms, grated cheese, salt, pepper', instructions: 'Mix eggs with vegetables. Pour into muffin tins, bake at 180°C for 18 min.' },
        lunch: { name: 'Spicy Chicken Black Bean Salad', ingredients: '150g chicken breast, 150g black beans, corn, avocado, lime, chili, cilantro', instructions: 'Pan-fry spiced chicken. Mix all ingredients. Drizzle with lime juice.' },
        dinner: { name: 'Pork Tenderloin with Roasted Pumpkin', ingredients: '200g pork tenderloin, 200g pumpkin, rosemary, garlic, olive oil, salt, pepper', instructions: 'Place pork and diced pumpkin in a baking tray. Season, bake at 190°C for 25 min.' }
    },
    {
        breakfast: { name: 'Banana Raspberry Smoothie', ingredients: '1 banana, 100g raspberries (frozen), 200g Greek yogurt, 1 tbsp flaxseed', instructions: 'Blend all ingredients until smooth. Serve immediately.' },
        lunch: { name: 'Easy Egg Fried Rice', ingredients: '80g brown rice, 3 eggs, peas, onion, soy sauce, sesame oil', instructions: 'Cook rice. Scramble eggs with diced onion. Add rice, stir in peas and soy sauce.' },
        dinner: { name: 'Chicken Fajitas in Whole-Wheat Tortilla', ingredients: '200g chicken breast, bell pepper, onion, whole-wheat tortilla, guacamole, salsa', instructions: 'Pan-fry spiced chicken and vegetables. Wrap in tortilla with guacamole and salsa.' }
    },
    {
        breakfast: { name: 'Protein Berry Oatmeal', ingredients: '60g oats, 1 scoop protein powder, 300ml milk, mixed berries', instructions: 'Cook oats. Let cool slightly, stir in protein powder. Top with berries.' },
        lunch: { name: 'Moroccan Chicken Salad', ingredients: '150g chicken breast, millet, tomato, cucumber, mint, cilantro, lemon juice, olive oil', instructions: 'Cook millet. Pan-fry spiced chicken. Mix with fresh vegetables and herbs.' },
        dinner: { name: 'Mediterranean Cod with Olives', ingredients: '200g cod fillet, olives, tomato, capers, garlic, olive oil, parsley', instructions: 'Pan-fry fish. Add tomato, olives and capers. Cook 5 min.' }
    },
    {
        breakfast: { name: 'Avocado Egg English Muffin', ingredients: '2 eggs, 1 avocado, 2 whole-wheat English muffins, salt, pepper, chili', instructions: 'Poach eggs. Toast muffins. Mash avocado, spread on muffin, top with egg.' },
        lunch: { name: 'Chicken Quinoa Soup', ingredients: '150g chicken breast, 60g quinoa, carrot, celery, onion, parsley, broth', instructions: 'Cook chicken with vegetables in broth. Add quinoa, cook 15 min. Sprinkle with parsley.' },
        dinner: { name: 'Spiced Pumpkin Soup with Grilled Chicken', ingredients: '400g pumpkin, 150g chicken breast, coconut milk, curry, ginger, garlic, broth', instructions: 'Roast pumpkin. Blend with broth and coconut milk. Grill chicken. Serve with soup.' }
    },
    {
        breakfast: { name: 'Strawberry Banana Yogurt Bowl', ingredients: '200g Greek yogurt, 100g strawberries, 1 banana, 30g granola, 1 tbsp honey', instructions: 'Put yogurt in bowl. Slice fruits, place on top. Sprinkle with granola, drizzle with honey.' },
        lunch: { name: 'Crispy Chickpea Spinach Salad', ingredients: '150g chickpeas, 2 handfuls spinach, tomato, feta, lemon dressing, garlic', instructions: 'Pan-fry chickpeas until crispy. Mix with spinach and tomato. Top with feta and dressing.' },
        dinner: { name: '🏆 Celebration Salmon Bowl – 30 Days of Success!', ingredients: '200g salmon fillet, 80g quinoa, avocado, cherry tomatoes, asparagus, lemon, dill', instructions: 'Grill salmon. Cook quinoa. Arrange in bowl with roasted asparagus, avocado and tomatoes. Sprinkle dill, serve with lemon!' }
    }
];

const WORKOUTS = [
    '🏃 30 min run + 20 push-ups',
    '💪 3×15 squats + 3×10 lunges',
    '🧘 20 min yoga + 30 min walk',
    '🏋️ 3×12 push-ups + 3×15 crunches',
    '🚴 40 min cycling',
    '🏊 30 min swimming or 40 min brisk walk',
    '🤸 Stretching + 20 min core workout',
    '🏃 35 min run + 15 push-ups',
    '💪 3×20 squats + 3×12 lunges',
    '🧘 25 min yoga + 10 min meditation',
    '🏋️ 4×10 push-ups + 4×12 crunches',
    '🚴 45 min cycling',
    '🏊 35 min swimming or 45 min brisk walk',
    '🤸 Full body stretch + 25 min core',
    '🏃 40 min run + 20 squats',
    '💪 Circuit: 4×15 of each exercise',
    '🧘 30 min yoga + 20 min walk',
    '🏋️ 4×15 push-ups + 4×20 crunches',
    '🚴 50 min cycling',
    '🏊 40 min swimming or 50 min brisk walk',
    '🤸 Mobility workout + 30 min core',
    '🏃 45 min run + 25 push-ups',
    '💪 3×20 squats + 3×15 lunges + 20 push-ups',
    '🧘 35 min yoga + full body stretch',
    '🏋️ 5×10 push-ups + 5×15 crunches',
    '🚴 55 min cycling',
    '🏊 45 min swimming or 55 min brisk walk',
    '🤸 Circuit: 5×12 of each exercise',
    '🏃 50 min run + strength training',
    '🏆 CONGRATULATIONS! Full body workout + celebration! 🎉'
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

        nameError.textContent = '';
        weightError.textContent = '';

        const name = nameInput.value.trim();
        const weight = parseFloat(weightInput.value);
        let valid = true;

        if (!name) {
            nameError.textContent = 'Please enter your name!';
            valid = false;
        }

        if (!weightInput.value || isNaN(weight) || weight < MIN_WEIGHT || weight > MAX_WEIGHT) {
            weightError.textContent = `Please enter a valid weight (${MIN_WEIGHT}–${MAX_WEIGHT} kg)!`;
            valid = false;
        }

        if (!valid) return;

        spinner.hidden = false;
        btnText.textContent = 'Loading...';
        startBtn.disabled = true;

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
            btnText.textContent = 'Start!';
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

        document.getElementById('day-display').textContent = `Day ${day} / 30`;
        document.getElementById('progress-fill').style.width = progressPct + '%';
        document.getElementById('user-greeting').textContent = `Go for it, ${d.name}! 💪`;
        document.getElementById('workout').textContent = WORKOUTS[workoutIndex];
        document.getElementById('completed-days').textContent = completed;
        document.getElementById('remaining-days').textContent = remaining;
        document.getElementById('display-name').textContent = d.name;
        document.getElementById('display-weight').textContent = d.weight;

        const meal = MEALS[workoutIndex];
        ['breakfast', 'lunch', 'dinner'].forEach(type => {
            const m = meal[type];
            document.getElementById(`meal-${type}-name`).textContent = m.name;
            document.getElementById(`meal-${type}-ingredients`).textContent = m.ingredients;
            document.getElementById(`meal-${type}-instructions`).textContent = m.instructions;
        });

        const nextBtn = document.getElementById('next-day-btn');
        if (completed >= 30) {
            nextBtn.textContent = 'Program Complete! 🏆';
            nextBtn.disabled = true;
        } else {
            nextBtn.textContent = 'Day Done ✅';
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
        if (!confirm('Are you sure you want to restart the program?')) return;

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
