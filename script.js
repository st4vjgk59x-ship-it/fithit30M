// FitHit30M - 30 napos fitness program

const MEALS = [
    {
        reggeli: { nev: 'Oatmeal Smoothie Bowl', hozzavalok: '50g rolled oats, 1 banana, 150ml almond milk, 1 tbsp honey', elkeszites: 'Blend the banana with almond milk and honey, pour over the oats and serve.' },
        ebed: { nev: 'Chicken Quinoa Salad', hozzavalok: '150g chicken breast, 80g quinoa, tomato, cucumber, lemon juice, olive oil', elkeszites: 'Cook the quinoa. Grill the chicken and slice it. Mix with fresh vegetables, drizzle with olive oil and lemon juice.' },
        vacsora: { nev: 'Salmon with Steamed Broccoli', hozzavalok: '180g salmon fillet, 200g broccoli, garlic, olive oil, salt, pepper', elkeszites: 'Pan-fry the salmon in olive oil 3-4 minutes per side. Steam the broccoli for 5 minutes. Serve together.' }
    },
    {
        reggeli: { nev: 'Protein Scrambled Eggs', hozzavalok: '3 eggs, 1 handful spinach, half bell pepper, salt, pepper, a little olive oil', elkeszites: 'Beat the eggs, add spinach and diced pepper, cook in a little oil.' },
        ebed: { nev: 'Red Lentil Soup', hozzavalok: '200g red lentils, 1 onion, 1 carrot, 1 tsp turmeric, vegetable stock', elkeszites: 'Sauté the onion, add lentils, carrot and spices. Cook until soft, then blend smooth.' },
        vacsora: { nev: 'Turkey-Stuffed Zucchini Boats', hozzavalok: '2 zucchini, 200g ground turkey, tomato sauce, cheese, spices', elkeszites: 'Hollow out the zucchini. Fill with seasoned ground turkey, top with sauce. Bake 25 minutes at 180°C.' }
    },
    {
        reggeli: { nev: 'Greek Yogurt Parfait', hozzavalok: '200g Greek yogurt, 30g granola, 1 handful blueberries, 1 tsp honey', elkeszites: 'Layer the yogurt, granola and berries, drizzle with honey.' },
        ebed: { nev: 'Tuna Whole-Grain Sandwich', hozzavalok: '2 slices whole-grain bread, 1 can tuna, 1 tbsp yogurt mayo, lettuce, tomato', elkeszites: 'Mix the tuna with yogurt mayo, fill the bread with lettuce and tomato.' },
        vacsora: { nev: 'Chicken and Vegetable Stew', hozzavalok: '200g chicken breast, 1 bell pepper, 1 tomato, 1 onion, 1 tsp paprika, stock', elkeszites: 'Sauté the onion, add chicken and vegetables. Season, pour in stock, cook 20 minutes.' }
    },
    {
        reggeli: { nev: 'Banana Oatmeal', hozzavalok: '60g rolled oats, 300ml milk, 1 banana, 1 tbsp almond butter, cinnamon', elkeszites: 'Cook the oats in milk. Stir in sliced banana, almond butter and cinnamon.' },
        ebed: { nev: 'Chickpea Salad', hozzavalok: '200g chickpeas (canned), tomato, cucumber, red onion, parsley, lemon dressing', elkeszites: 'Toss all ingredients together and drizzle with lemon dressing.' },
        vacsora: { nev: 'Grilled Chicken Breast with Sweet Potato Mash', hozzavalok: '200g chicken breast, 2 sweet potatoes, butter, salt, pepper, rosemary', elkeszites: 'Grill the chicken 5-6 minutes per side. Boil sweet potatoes and mash with butter and salt.' }
    },
    {
        reggeli: { nev: 'Avocado Toast with Eggs', hozzavalok: '2 slices whole-grain bread, 1 avocado, 2 eggs, salt, pepper, lemon juice', elkeszites: 'Toast the bread. Mash avocado with lemon juice. Fry or poach eggs. Place on top of toast.' },
        ebed: { nev: 'Chicken Vegetable Stir-Fry', hozzavalok: '150g chicken breast, broccoli, carrot, bell pepper, soy sauce, ginger, garlic', elkeszites: 'Stir-fry the chicken and vegetables on high heat. Add soy sauce, ginger and garlic.' },
        vacsora: { nev: 'Sheet-Pan Salmon with Vegetables', hozzavalok: '180g salmon, asparagus, cherry tomatoes, olive oil, garlic, lemon', elkeszites: 'Place salmon and vegetables on a baking sheet, drizzle with olive oil. Bake at 200°C for 18 minutes.' }
    },
    {
        reggeli: { nev: 'Fruit Chia Pudding', hozzavalok: '3 tbsp chia seeds, 250ml almond milk, 1 tbsp honey, seasonal fruit', elkeszites: 'Mix chia seeds with almond milk and honey. Refrigerate overnight. Top with fruit in the morning.' },
        ebed: { nev: 'Egg and Vegetable Rice Bowl', hozzavalok: '80g brown rice, 2 eggs, zucchini, carrot, onion, vegetable stock', elkeszites: 'Cook the rice with stock. Stir-fry the vegetables in a wok, stir in cooked rice and eggs.' },
        vacsora: { nev: 'Baked Chicken Meatballs with Pepper Sauce', hozzavalok: '250g ground chicken, 1 egg, garlic, parsley, bell pepper sauce', elkeszites: 'Mix ground chicken with egg and spices, shape into balls. Bake and serve with pepper sauce.' }
    },
    {
        reggeli: { nev: 'Protein Pancakes', hozzavalok: '2 eggs, 1 banana, 1 scoop vanilla protein powder, a little oil', elkeszites: 'Blend all ingredients together. Cook small pancakes in a little oil on both sides.' },
        ebed: { nev: 'Chicken Vegetable Soup', hozzavalok: '150g chicken breast, carrot, celery, parsley root, small pasta, salt, pepper', elkeszites: 'Cook chicken and vegetables in stock. Add pasta, cook 8 minutes.' },
        vacsora: { nev: 'Baked Mushrooms with Quinoa', hozzavalok: '200g button mushrooms, 80g quinoa, garlic, parsley, olive oil', elkeszites: 'Roast mushrooms at 200°C for 15 minutes. Cook quinoa. Serve together, sprinkled with parsley.' }
    },
    {
        reggeli: { nev: 'Almond Butter Rice Porridge', hozzavalok: '60g brown rice, 300ml milk, 1 tbsp almond butter, banana, cinnamon', elkeszites: 'Cook the rice in milk. Stir in almond butter and cinnamon. Serve with sliced banana.' },
        ebed: { nev: 'Mediterranean Tuna Salad', hozzavalok: '1 can tuna, olives, tomato, feta cheese, mixed salad leaves, olive oil, lemon juice', elkeszites: 'Combine all ingredients, drizzle with olive oil and lemon juice.' },
        vacsora: { nev: 'Crispy Chicken Bites with Sweet Chili Sauce', hozzavalok: '200g chicken breast, cornstarch, egg, sweet chili sauce, lemon juice', elkeszites: 'Coat chicken in cornstarch, fry until crispy. Serve with sweet chili sauce.' }
    },
    {
        reggeli: { nev: 'Berry Smoothie Bowl', hozzavalok: '100g frozen mixed berries, 150g Greek yogurt, 30g granola, 1 tbsp flaxseed', elkeszites: 'Blend yogurt with berries. Pour into bowl, top with granola and flaxseed.' },
        ebed: { nev: 'Red Lentil Dahl', hozzavalok: '200g red lentils, coconut milk, tomato, curry powder, turmeric, garlic, ginger', elkeszites: 'Sauté garlic and ginger. Add spices, lentils, tomato and coconut milk. Cook 20 minutes.' },
        vacsora: { nev: 'Grilled Chicken with Sautéed Vegetables', hozzavalok: '200g chicken breast, zucchini, bell pepper, onion, balsamic vinegar, olive oil', elkeszites: 'Grill the chicken. Sauté vegetables in a hot pan. Drizzle with balsamic vinegar.' }
    },
    {
        reggeli: { nev: 'Vegetable Omelette', hozzavalok: '3 eggs, 1 handful spinach, mushrooms, tomato, shredded cheese, salt, pepper', elkeszites: 'Beat eggs, add vegetables. Cook in a pan 3-4 minutes, fold over.' },
        ebed: { nev: 'Brown Rice Chicken Bowl', hozzavalok: '150g chicken breast, 80g brown rice, avocado, cucumber, soy sauce, sesame seeds', elkeszites: 'Cook rice. Grill chicken. Arrange in a bowl with toppings, drizzle with soy sauce.' },
        vacsora: { nev: 'Salmon Pasta with Tomato Sauce', hozzavalok: '180g salmon, 80g whole-grain pasta, tomato sauce, capers, olives', elkeszites: 'Cook pasta. Pan-fry salmon and flake with a fork. Mix with sauce and toss with pasta.' }
    },
    {
        reggeli: { nev: 'Overnight Oats with Fruit', hozzavalok: '60g rolled oats, 200ml milk, 100g Greek yogurt, strawberries, kiwi, 1 tsp honey', elkeszites: 'Soak oats in milk overnight. In the morning stir in yogurt, top with fruit and honey.' },
        ebed: { nev: 'Black Bean Salad', hozzavalok: '200g black beans (canned), corn, avocado, tomato, cilantro, lime, olive oil', elkeszites: 'Toss all ingredients together. Drizzle with lime juice and olive oil.' },
        vacsora: { nev: 'Pork Tenderloin with Roasted Potatoes', hozzavalok: '200g pork tenderloin, 2 potatoes, garlic, rosemary, olive oil', elkeszites: 'Cut potatoes into cubes, roast at 200°C for 30 minutes. Pan-sear pork 4 minutes per side.' }
    },
    {
        reggeli: { nev: 'Almond Butter Banana Toast', hozzavalok: '2 slices whole-grain bread, 2 tbsp almond butter, 1 banana, cinnamon', elkeszites: 'Toast the bread. Spread almond butter, top with sliced banana and sprinkle with cinnamon.' },
        ebed: { nev: 'Chicken Caesar Salad', hozzavalok: '150g grilled chicken breast, romaine lettuce, parmesan, whole-grain croutons, Caesar dressing', elkeszites: 'Slice chicken, tear lettuce. Toss together with toppings and drizzle with Caesar dressing.' },
        vacsora: { nev: 'Broccoli-Stuffed Chicken', hozzavalok: '2 chicken breast fillets, 100g cooked broccoli, shredded cheese, garlic, salt, pepper', elkeszites: 'Butterfly the chicken, stuff with broccoli and cheese. Bake at 200°C for 25 minutes.' }
    },
    {
        reggeli: { nev: 'Mandarin Greek Yogurt Bowl', hozzavalok: '200g Greek yogurt, 2 mandarins, 30g walnuts, 1 tbsp honey', elkeszites: 'Place yogurt in a bowl, add mandarin segments. Top with walnuts and honey.' },
        ebed: { nev: 'Vegetable Minestrone Soup', hozzavalok: 'white beans, tomato, zucchini, carrot, whole-grain pasta, onion, garlic, basil', elkeszites: 'Sauté onion, add vegetables. Pour in stock, cook 15 minutes. Add pasta and cook until tender.' },
        vacsora: { nev: 'Salmon Burger on Whole-Grain Bun', hozzavalok: '150g salmon, 1 egg, dill, lemon, whole-grain bun, lettuce', elkeszites: 'Mix salmon with egg and dill. Shape into patties, pan-fry. Serve in bun with lettuce.' }
    },
    {
        reggeli: { nev: 'Egg White Omelette with Bell Pepper', hozzavalok: '4 egg whites, 1 whole egg, red bell pepper, onion, salt, pepper, olive oil', elkeszites: 'Beat eggs. Add diced pepper and onion. Cook in a little oil until set.' },
        ebed: { nev: 'Vegan Quinoa Bowl', hozzavalok: '80g quinoa, roasted sweet potato, black beans, avocado, lime, cilantro', elkeszites: 'Cook quinoa. Roast sweet potato in cubes. Arrange all ingredients in a bowl.' },
        vacsora: { nev: 'Chicken Breast with Sweet Potato', hozzavalok: '200g chicken breast, 1 sweet potato, paprika, salt, pepper, olive oil, rosemary', elkeszites: 'Roast chicken and sweet potato together in a baking dish at 200°C for 30 minutes.' }
    },
    {
        reggeli: { nev: 'Flaxseed Pudding with Fresh Fruit', hozzavalok: '3 tbsp ground flaxseed, 250ml almond milk, 1 tbsp honey, fresh fruit', elkeszites: 'Stir flaxseed into almond milk with honey. Let sit 10 minutes. Top with fresh fruit.' },
        ebed: { nev: 'Mediterranean Chicken Salad', hozzavalok: '150g chicken breast, mixed salad leaves, feta, olives, tomato, olive oil, oregano', elkeszites: 'Grill chicken and slice. Toss salad and top with chicken and feta.' },
        vacsora: { nev: 'Stuffed Peppers with Ground Chicken', hozzavalok: '4 bell peppers, 250g ground chicken, 80g rice, tomato sauce, onion, spices', elkeszites: 'Par-cook rice. Mix with ground chicken. Fill peppers, pour sauce over. Bake 30 minutes.' }
    },
    {
        reggeli: { nev: 'Zucchini Fritters with Eggs', hozzavalok: '1 zucchini (grated), 2 eggs, 2 tbsp rolled oats, salt, pepper, garlic', elkeszites: 'Squeeze moisture from zucchini, mix with eggs and oats. Fry small fritters in a pan.' },
        ebed: { nev: 'Spinach Chicken Pasta', hozzavalok: '150g chicken breast, 80g whole-grain pasta, 2 handfuls spinach, garlic, cream cheese, salt, pepper', elkeszites: 'Cook pasta. Sauté chicken with garlic. Add spinach and cream cheese.' },
        vacsora: { nev: 'White Fish Fillet with Steamed Vegetables', hozzavalok: '200g white fish fillet, broccoli, carrot, lemon juice, olive oil, parsley', elkeszites: 'Pan-fry fish 3 minutes per side. Steam vegetables. Drizzle with lemon juice.' }
    },
    {
        reggeli: { nev: 'Greek Yogurt with Blueberries and Toast', hozzavalok: '200g Greek yogurt, 80g blueberries, 1 slice whole-grain bread, 1 tsp honey', elkeszites: 'Toast the bread. Spoon yogurt into a bowl, top with blueberries and honey. Enjoy with toast.' },
        ebed: { nev: 'Tex-Mex Chicken Salad', hozzavalok: '150g chicken breast, black beans, corn, avocado, lime, cilantro, tortilla chips', elkeszites: 'Season and grill the chicken. Toss with other ingredients. Serve with tortilla chips.' },
        vacsora: { nev: 'Chicken with Mushroom Sauce', hozzavalok: '200g chicken breast, 200g button mushrooms, garlic, cream, salt, pepper, parsley', elkeszites: 'Sear chicken. Sauté mushrooms with garlic. Add cream, season. Serve over chicken.' }
    },
    {
        reggeli: { nev: 'Walnut Banana Oatmeal', hozzavalok: '60g rolled oats, 300ml milk, 1 banana, 30g crushed walnuts, 1 tsp honey', elkeszites: 'Cook oats in milk. Stir in crushed walnuts and honey. Top with sliced banana.' },
        ebed: { nev: 'Simple Chickpea Curry', hozzavalok: '200g chickpeas, tomato, coconut milk, curry powder, turmeric, garlic, onion', elkeszites: 'Sauté onion and garlic. Add spices, tomato and chickpeas. Cook 15 minutes.' },
        vacsora: { nev: 'Tuna and Pea Pasta', hozzavalok: '80g whole-grain pasta, 1 can tuna, 100g green peas, garlic, olive oil, lemon juice', elkeszites: 'Cook pasta. Sauté garlic in oil, add tuna and peas. Toss with pasta.' }
    },
    {
        reggeli: { nev: 'Pumpkin Toast with Poached Eggs', hozzavalok: '2 slices whole-grain bread, 3 tbsp pumpkin puree, 2 eggs, spinach, salt', elkeszites: 'Toast bread, spread with pumpkin puree. Poach eggs and place on top with spinach.' },
        ebed: { nev: 'Chicken and Rice Stuffed Peppers', hozzavalok: '2 bell peppers, 150g chicken breast, 80g brown rice, tomato, spices', elkeszites: 'Cook rice, mix with chicken and tomato. Stuff into peppers, bake 20 minutes.' },
        vacsora: { nev: 'Lemon Rosemary Chicken with Spinach', hozzavalok: '200g chicken breast, 2 handfuls spinach, 1 lemon, rosemary, garlic, olive oil', elkeszites: 'Marinate chicken in lemon juice and rosemary. Pan-fry. Serve alongside steamed spinach.' }
    },
    {
        reggeli: { nev: 'Scrambled Eggs with Avocado', hozzavalok: '3 eggs, 1 avocado, tomato, salt, pepper, olive oil', elkeszites: 'Beat eggs, cook in a little oil. Spread avocado on the side, serve with tomato.' },
        ebed: { nev: 'Salmon Greek Salad', hozzavalok: '150g seared salmon, cucumber, tomato, feta, olives, lemon dressing', elkeszites: 'Sear the salmon. Toss vegetables together. Serve salmon over salad with dressing.' },
        vacsora: { nev: 'Chicken Stir-Fry with Rice', hozzavalok: '200g chicken breast, brown rice, broccoli, carrot, soy sauce, sesame oil, garlic', elkeszites: 'Cook rice. Stir-fry chicken and vegetables in sesame oil, season with soy sauce. Serve over rice.' }
    },
    {
        reggeli: { nev: 'Oatmeal with Raisins and Cinnamon', hozzavalok: '60g rolled oats, 300ml milk, 1 tbsp raisins, cinnamon, 1 tsp honey', elkeszites: 'Cook oats in milk. Stir in raisins, cinnamon and honey.' },
        ebed: { nev: 'Chicken and Vegetable Wok', hozzavalok: '150g chicken breast, bell pepper, zucchini, onion, garlic, soy sauce, sesame oil, ginger', elkeszites: 'Stir-fry chicken on high heat for 3 minutes. Add vegetables, season, stir-fry 3 more minutes.' },
        vacsora: { nev: 'Baked Cod with Herb Butter', hozzavalok: '200g cod fillet, 30g butter, lemon juice, garlic, parsley, salt, pepper', elkeszites: 'Melt butter with garlic. Brush over fish, drizzle with lemon juice. Bake at 200°C for 15 minutes.' }
    },
    {
        reggeli: { nev: 'Chocolate Protein Smoothie', hozzavalok: '1 scoop chocolate protein powder, 1 banana, 250ml almond milk, 1 tbsp peanut butter', elkeszites: 'Blend all ingredients together. Serve immediately.' },
        ebed: { nev: 'Roasted Chicken Quinoa Bowl', hozzavalok: '150g chicken breast, 80g quinoa, roasted bell pepper, tomato, bay leaf, olive oil', elkeszites: 'Cook quinoa. Roast chicken and pepper. Arrange together in a bowl.' },
        vacsora: { nev: 'Beef Steak with Steamed Vegetables', hozzavalok: '180g beef steak, asparagus, carrot, salt, pepper, rosemary, olive oil', elkeszites: 'Sear steak in a hot pan 3 minutes per side. Steam vegetables. Serve together.' }
    },
    {
        reggeli: { nev: 'Fruit and Protein Oatmeal', hozzavalok: '60g rolled oats, 300ml milk, 1 scoop vanilla protein powder, strawberries, kiwi', elkeszites: 'Cook oats. Stir in protein powder while slightly warm. Top with fruit.' },
        ebed: { nev: 'Cream of Asparagus Soup', hozzavalok: '400g asparagus, 1 onion, vegetable stock, cream, salt, pepper, olive oil', elkeszites: 'Sauté onion, add asparagus and stock. Cook 15 minutes, blend, stir in cream.' },
        vacsora: { nev: 'Chicken and Eggplant Stir-Fry', hozzavalok: '200g chicken breast, 1 eggplant, bell pepper, soy sauce, garlic, olive oil', elkeszites: 'Sauté chicken with garlic. Add diced eggplant and pepper. Season with soy sauce.' }
    },
    {
        reggeli: { nev: 'Smoked Salmon Scrambled Eggs on Toast', hozzavalok: '3 eggs, 50g smoked salmon, dill, lemon juice, 1 slice bread', elkeszites: 'Scramble eggs. Top with salmon and dill. Drizzle with lemon juice. Serve with toast.' },
        ebed: { nev: 'Quick Chickpea Salad', hozzavalok: '200g chickpeas, 1 avocado, tomato, lemon juice, cilantro, olive oil', elkeszites: 'Toss all ingredients together, drizzle with lemon juice and olive oil.' },
        vacsora: { nev: 'Spiced Roast Chicken with Quinoa', hozzavalok: '200g chicken thighs (skinless), 80g quinoa, turmeric, paprika, garlic, lemon juice', elkeszites: 'Marinate chicken in spices. Bake at 180°C for 30 minutes. Cook quinoa. Serve together.' }
    },
    {
        reggeli: { nev: 'Honey Walnut Greek Yogurt', hozzavalok: '200g Greek yogurt, 2 tbsp honey, 40g walnuts, 1 apple', elkeszites: 'Spoon yogurt into a bowl. Top with walnuts, diced apple and honey.' },
        ebed: { nev: 'Crispy Tofu with Vegetable Rice', hozzavalok: '150g firm tofu, brown rice, bell pepper, onion, soy sauce, sesame oil', elkeszites: 'Pan-fry tofu until golden. Cook rice. Sauté vegetables. Combine with soy sauce.' },
        vacsora: { nev: 'Grilled Salmon with Asparagus', hozzavalok: '180g salmon, asparagus, lemon, garlic, olive oil, salt, pepper', elkeszites: 'Grill salmon 4-5 minutes per side. Sauté asparagus in a hot pan for 5 minutes. Serve with lemon.' }
    },
    {
        reggeli: { nev: 'Whole-Grain Egg Muffins', hozzavalok: '2 eggs, 50g spinach, 30g mushrooms, shredded cheese, salt, pepper', elkeszites: 'Mix eggs with vegetables. Pour into muffin tins, bake at 180°C for 18 minutes.' },
        ebed: { nev: 'Spicy Chicken Black Bean Salad', hozzavalok: '150g chicken breast, 150g black beans, corn, avocado, lime, chili, cilantro', elkeszites: 'Season and grill chicken. Toss with all other ingredients. Drizzle with lime juice.' },
        vacsora: { nev: 'Pork Tenderloin with Roasted Pumpkin', hozzavalok: '200g pork tenderloin, 200g pumpkin, rosemary, garlic, olive oil, salt, pepper', elkeszites: 'Place pork and cubed pumpkin on a baking sheet. Season and roast at 190°C for 25 minutes.' }
    },
    {
        reggeli: { nev: 'Banana Raspberry Smoothie', hozzavalok: '1 banana, 100g frozen raspberries, 200g Greek yogurt, 1 tbsp flaxseed', elkeszites: 'Blend all ingredients until smooth. Serve immediately.' },
        ebed: { nev: 'Egg Fried Rice', hozzavalok: '80g brown rice, 3 eggs, peas, onion, soy sauce, sesame oil', elkeszites: 'Cook rice. Scramble eggs with diced onion. Add rice, stir in peas and soy sauce.' },
        vacsora: { nev: 'Chicken Fajitas in Whole-Grain Tortillas', hozzavalok: '200g chicken breast, bell pepper, onion, whole-grain tortillas, guacamole, salsa', elkeszites: 'Season and grill chicken and vegetables. Fill tortillas with guacamole and salsa.' }
    },
    {
        reggeli: { nev: 'Protein Oats with Berries', hozzavalok: '60g rolled oats, 1 scoop protein powder, 300ml milk, mixed berries', elkeszites: 'Cook oats. Let cool slightly, stir in protein powder. Top with berries.' },
        ebed: { nev: 'Moroccan Chicken with Couscous', hozzavalok: '150g chicken breast, couscous, tomato, cucumber, mint, cilantro, lemon juice, olive oil', elkeszites: 'Cook couscous. Grill spiced chicken. Toss with fresh vegetables and herbs.' },
        vacsora: { nev: 'Mediterranean Cod with Olives', hozzavalok: '200g cod fillet, olives, tomato, capers, garlic, olive oil, parsley', elkeszites: 'Pan-fry fish. Add tomato, olives and capers. Cook 5 more minutes.' }
    },
    {
        reggeli: { nev: 'Avocado Egg English Muffin', hozzavalok: '2 eggs, 1 avocado, 2 whole-grain English muffins, salt, pepper, chili flakes', elkeszites: 'Poach eggs. Toast muffins. Mash avocado, spread on muffins, top with eggs.' },
        ebed: { nev: 'Chicken Quinoa Soup', hozzavalok: '150g chicken breast, 60g quinoa, carrot, celery, onion, parsley, stock', elkeszites: 'Cook chicken in stock with vegetables. Add quinoa, cook 15 minutes. Sprinkle with parsley.' },
        vacsora: { nev: 'Spiced Pumpkin Soup with Grilled Chicken', hozzavalok: '400g pumpkin, 150g chicken breast, coconut milk, curry powder, ginger, garlic, stock', elkeszites: 'Roast pumpkin. Blend with stock and coconut milk until smooth. Grill chicken. Serve together.' }
    },
    {
        reggeli: { nev: 'Strawberry Banana Yogurt Bowl', hozzavalok: '200g Greek yogurt, 100g strawberries, 1 banana, 30g granola, 1 tbsp honey', elkeszites: 'Spoon yogurt into a bowl. Add sliced fruit on top. Sprinkle with granola and drizzle with honey.' },
        ebed: { nev: 'Crispy Chickpea Spinach Salad', hozzavalok: '150g chickpeas, 2 handfuls spinach, tomato, feta, lemon dressing, garlic', elkeszites: 'Pan-fry chickpeas until crispy. Toss with spinach and tomato. Top with feta and dressing.' },
        vacsora: { nev: '🏆 Celebration Salmon Bowl – 30-Day Success!', hozzavalok: '200g salmon fillet, 80g quinoa, avocado, cherry tomatoes, asparagus, lemon, dill', elkeszites: 'Grill salmon. Cook quinoa. Arrange in a bowl with roasted asparagus, avocado and tomatoes. Sprinkle with dill, serve with lemon!' }
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