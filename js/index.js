
const meals = [
    {
        name: "BBQ Grilled Chicken",
        image: "./imgs/BBQ Grilled Chicken Recipe.jpeg",
        description: "Smoky, tender chicken pieces glazed with rich barbecue flavor.",
        country: "United States",
        difficulty: "Medium",
        prepTime: "20 min",
        cookTime: "30 min",
        servings: "3 people",
        ingredients: [
            "1 whole chicken, cut into portions",
            "1 cup BBQ sauce",
            "2 tbsp olive oil and minced garlic",
            "Paprika, salt, and black pepper"
        ],
        instructions: [
            "Season the chicken with oil, garlic, paprika, salt, and pepper.",
            "Grill over medium-hot coals or bake in the oven.",
            "Brush with BBQ sauce during the last 10 minutes.",
            "Serve hot with fresh parsley and lemon wedges."
        ],
        nutrition: {
            calories: "410 kcal",
            protein: "42g",
            carbs: "14g",
            fat: "20g",
            fiber: "1g",
            sodium: "680mg"
        },
        tips: [
            "Marinate the chicken for extra flavor.",
            "Avoid cooking over extremely high heat.",
            "Brush BBQ sauce near the end of cooking.",
            "Let the chicken rest before serving."
        ]
    },

    {
        name: "Chicken Burrito Wrap",
        image: "./imgs/beef-sandwich.jpeg",
        description: "Soft tortilla wraps loaded with warm, spiced chicken and melted cheese.",
        country: "Mexico / USA",
        difficulty: "Easy",
        prepTime: "15 min",
        cookTime: "15 min",
        servings: "3 people",
        ingredients: [
            "Large flour tortillas",
            "Shredded cooked chicken breast",
            "Melted cheddar cheese",
            "Lettuce and tomatoes",
            "Sour cream for dipping"
        ],
        instructions: [
            "Sauté the shredded chicken with spices.",
            "Lay out the tortillas and add cheddar cheese and chicken.",
            "Roll tightly into burritos and toast until golden.",
            "Serve with fresh salad and sour cream."
        ],
        nutrition: {
            calories: "510 kcal",
            protein: "35g",
            carbs: "48g",
            fat: "21g",
            fiber: "3g",
            sodium: "790mg"
        },
        tips: [
            "Warm tortillas before filling them.",
            "Do not overfill the tortillas.",
            "Add fresh vegetables for extra crunch.",
            "Toast the burrito until golden."
        ]
    },

    {
        name: "Braised Beef Shanks",
        image: "./imgs/Braised LambBeef Shanks.jpeg",
        description: "Melt-in-your-mouth tender meat infused with aromatic herbs and spices.",
        country: "France / Global",
        difficulty: "Hard",
        prepTime: "20 min",
        cookTime: "2 hours",
        servings: "4 people",
        ingredients: [
            "4 thick beef shanks with bone marrow",
            "Fresh rosemary and garlic bulbs",
            "Olive oil, salt, and cracked pepper",
            "Beef broth"
        ],
        instructions: [
            "Sear the beef shanks until golden brown.",
            "Transfer them to a roasting pan with garlic, rosemary, and broth.",
            "Cover tightly and braise in a slow oven until tender.",
            "Serve warm with pan juices and lemon slices."
        ],
        nutrition: {
            calories: "620 kcal",
            protein: "54g",
            carbs: "4g",
            fat: "42g",
            fiber: "1g",
            sodium: "530mg"
        },
        tips: [
            "Brown the meat before braising.",
            "Use fresh rosemary for better flavor.",
            "Keep the pan covered during cooking.",
            "Cook slowly until the meat becomes tender."
        ]
    },

    {
        name: "Classic Cheeseburger",
        image: "./imgs/burger.jpeg",
        description: "A towering delight of juicy beef, melted cheese, and crisp veggies.",
        country: "United States",
        difficulty: "Easy",
        prepTime: "15 min",
        cookTime: "10 min",
        servings: "1 person",
        ingredients: [
            "1 thick beef patty",
            "Sesame seed burger bun",
            "Cheddar cheese slice",
            "Lettuce, tomato, and pickles",
            "Bacon strips (optional)",
            "French fries on the side"
        ],
        instructions: [
            "Grill the beef patty and melt cheddar cheese on top.",
            "Toast the sesame bun halves lightly.",
            "Assemble the burger with lettuce, tomato, pickles, and beef.",
            "Serve with golden french fries and ketchup."
        ],
        nutrition: {
            calories: "720 kcal",
            protein: "38g",
            carbs: "50g",
            fat: "41g",
            fiber: "4g",
            sodium: "890mg"
        },
        tips: [
            "Use fresh ground beef for the patty.",
            "Avoid pressing the burger while cooking.",
            "Toast the bun for a crispy texture.",
            "Add cheese while the patty is hot."
        ]
    },

    {
        name: "Dolma",
        image: "./imgs/Dolma.jpeg",
        description: "Delicate vine leaves wrapped around a savory herb and rice filling.",
        country: "Middle East / Mediterranean",
        difficulty: "Hard",
        prepTime: "40 min",
        cookTime: "45 min",
        servings: "4 people",
        ingredients: [
            "Preserved grape leaves",
            "1 cup short-grain rice",
            "Fresh dill, parsley, and mint",
            "Onion and tomato paste",
            "Olive oil and lemon juice",
            "Yogurt for serving"
        ],
        instructions: [
            "Mix the rice, herbs, onion, tomato paste, and olive oil.",
            "Place filling onto each grape leaf and roll tightly.",
            "Arrange the rolls in a cooking pot.",
            "Add lemon juice and water, then simmer until cooked."
        ],
        nutrition: {
            calories: "280 kcal",
            protein: "5g",
            carbs: "42g",
            fat: "11g",
            fiber: "4g",
            sodium: "460mg"
        },
        tips: [
            "Wash grape leaves before using.",
            "Do not overfill the grape leaves.",
            "Arrange the rolls tightly in the pot.",
            "Serve with fresh lemon and yogurt."
        ]
    },

    {
        name: "Grilled Lobster",
        image: "./imgs/Grilled Lobster.jpeg",
        description: "Luxurious seafood brushed with rich garlic and herb butter.",
        country: "Coastal / International",
        difficulty: "Medium",
        prepTime: "15 min",
        cookTime: "12 min",
        servings: "2 people",
        ingredients: [
            "2 fresh lobster tails",
            "4 tbsp melted butter",
            "2 cloves minced garlic",
            "Fresh parsley",
            "Lemon wedges"
        ],
        instructions: [
            "Cut the lobster tails down the center.",
            "Mix melted butter, garlic, and parsley.",
            "Brush the garlic butter over the lobster meat.",
            "Grill until the meat is opaque and tender."
        ],
        nutrition: {
            calories: "340 kcal",
            protein: "28g",
            carbs: "2g",
            fat: "24g",
            fiber: "0g",
            sodium: "550mg"
        },
        tips: [
            "Use fresh lobster for the best flavor.",
            "Do not overcook the lobster.",
            "Brush with garlic butter while grilling.",
            "Serve immediately with lemon wedges."
        ]
    },

    {
        name: "Mozzarella Pizza",
        image: "./imgs/pizza.jpeg",
        description: "A timeless Italian favorite featuring melted mozzarella cheese.",
        country: "Italy",
        difficulty: "Medium",
        prepTime: "25 min",
        cookTime: "15 min",
        servings: "3 people",
        ingredients: [
            "Homemade pizza dough",
            "Rich tomato pizza sauce",
            "Shredded mozzarella cheese",
            "Dried oregano",
            "Olive oil"
        ],
        instructions: [
            "Roll out the pizza dough onto a round pan.",
            "Spread tomato sauce over the base.",
            "Cover with mozzarella cheese and oregano.",
            "Bake until the crust is golden and cheese is bubbling."
        ],
        nutrition: {
            calories: "460 kcal",
            protein: "19g",
            carbs: "52g",
            fat: "20g",
            fiber: "3g",
            sodium: "760mg"
        },
        tips: [
            "Preheat the oven before baking.",
            "Avoid adding too much sauce.",
            "Use fresh mozzarella for better flavor.",
            "Bake until the crust becomes golden."
        ]
    },

    {
        name: "Toast & Egg Sandwich",
        image: "./imgs/sandwich.jpeg",
        description: "A comforting breakfast sandwich layered with fluffy eggs and ham.",
        country: "Korea / Global",
        difficulty: "Easy",
        prepTime: "5 min",
        cookTime: "5 min",
        servings: "1 person",
        ingredients: [
            "2 slices of thick toast bread",
            "2 scrambled eggs",
            "Slices of ham or turkey breast",
            "Fresh lettuce leaves",
            "Iced coffee on the side"
        ],
        instructions: [
            "Toast the bread slices until golden.",
            "Prepare soft scrambled eggs in a pan.",
            "Layer lettuce, ham, and scrambled eggs between the toast.",
            "Cut in half and serve."
        ],
        nutrition: {
            calories: "380 kcal",
            protein: "22g",
            carbs: "34g",
            fat: "17g",
            fiber: "2g",
            sodium: "580mg"
        },
        tips: [
            "Use fresh bread slices.",
            "Cook eggs over medium-low heat.",
            "Add cheese for extra flavor.",
            "Serve while the sandwich is warm."
        ]
    },

    {
        name: "Shish Kebab",
        image: "./imgs/Shish Kebab.jpeg",
        description: "Juicy skewered meat charbroiled with colorful peppers and onions.",
        country: "Middle East",
        difficulty: "Medium",
        prepTime: "20 min",
        cookTime: "15 min",
        servings: "3 people",
        ingredients: [
            "500g lamb or beef chunks",
            "Red, yellow, and green bell peppers",
            "Onions",
            "Olive oil and lemon juice",
            "Garlic, salt, pepper, and cumin"
        ],
        instructions: [
            "Marinate meat with olive oil, lemon juice, garlic, and spices.",
            "Thread meat and vegetables onto skewers.",
            "Grill, turning frequently until cooked.",
            "Serve with warm bread and fresh parsley."
        ],
        nutrition: {
            calories: "430 kcal",
            protein: "36g",
            carbs: "12g",
            fat: "26g",
            fiber: "3g",
            sodium: "510mg"
        },
        tips: [
            "Marinate the meat for at least an hour.",
            "Cut meat into equal-sized pieces.",
            "Soak wooden skewers before grilling.",
            "Turn skewers regularly while cooking."
        ]
    },

    {
        name: "Smoky Grilled Fish",
        image: "./imgs/Smoky Spiced Whole Grilled Fish with Lemon and Red Onion _ Gourmet Seafood Delight.jpeg",
        description: "A gourmet seafood delight with smoky citrus and onion flavors.",
        country: "Mediterranean / Coastal",
        difficulty: "Medium",
        prepTime: "15 min",
        cookTime: "25 min",
        servings: "2-3 people",
        ingredients: [
            "1 whole fresh fish, cleaned",
            "Sliced red onions",
            "Whole garlic cloves",
            "Lemon slices",
            "Olive oil, paprika, cumin, and sea salt",
            "Fresh parsley"
        ],
        instructions: [
            "Season the fish with olive oil, paprika, cumin, and salt.",
            "Stuff the fish with garlic, herbs, and lemon slices.",
            "Arrange onion rings and lemon rounds around the fish.",
            "Grill or roast until the skin is crisp and flesh is cooked."
        ],
        nutrition: {
            calories: "350 kcal",
            protein: "44g",
            carbs: "10g",
            fat: "15g",
            fiber: "2g",
            sodium: "490mg"
        },
        tips: [
            "Use fresh fish for better flavor.",
            "Make cuts in the fish for even cooking.",
            "Add lemon slices for freshness.",
            "Check that the fish is fully cooked."
        ]
    },

    {
        name: "Sushi Platter",
        image: "./imgs/Sushi Platter.jpeg",
        description: "A vibrant assortment of fresh rolls and nigiri bursting with ocean flavors.",
        country: "Japan",
        difficulty: "Hard",
        prepTime: "45 min",
        cookTime: "20 min",
        servings: "3-4 people",
        ingredients: [
            "2 cups sushi rice",
            "Nori seaweed sheets",
            "Fresh salmon and tuna slices",
            "Avocado and cucumber",
            "Shrimp",
            "Soy sauce, pickled ginger, and wasabi"
        ],
        instructions: [
            "Cook sushi rice and season with rice vinegar, sugar, and salt.",
            "Place nori on a bamboo mat and spread rice evenly.",
            "Add fillings and roll tightly using the mat.",
            "Slice into bite-sized pieces and serve."
        ],
        nutrition: {
            calories: "450 kcal",
            protein: "26g",
            carbs: "65g",
            fat: "9g",
            fiber: "3g",
            sodium: "720mg"
        },
        tips: [
            "Use properly prepared sushi rice.",
            "Keep ingredients fresh and chilled.",
            "Wet your knife before slicing rolls.",
            "Avoid adding too much filling."
        ]
    },

    {
        name: "Tacos",
        image: "./imgs/tacos.jpeg",
        description: "Crispy folded tortillas packed with savory meat and fresh toppings.",
        country: "Mexico",
        difficulty: "Easy",
        prepTime: "15 min",
        cookTime: "10 min",
        servings: "2 people",
        ingredients: [
            "Crunchy taco shells",
            "Ground beef with Mexican spices",
            "Shredded lettuce",
            "Diced tomatoes",
            "Grated cheddar cheese",
            "Sour cream"
        ],
        instructions: [
            "Cook ground beef with Mexican spices until browned.",
            "Warm the taco shells in the oven.",
            "Fill each shell with beef, lettuce, and tomatoes.",
            "Top with cheddar cheese and sour cream."
        ],
        nutrition: {
            calories: "440 kcal",
            protein: "24g",
            carbs: "40g",
            fat: "20g",
            fiber: "4g",
            sodium: "610mg"
        },
        tips: [
            "Season the beef while cooking.",
            "Warm taco shells before serving.",
            "Add toppings just before serving.",
            "Serve with fresh lime wedges."
        ]
    }
];


let currentMealIndex = -1;

function getRandomMeal() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * meals.length);
    } while (randomIndex === currentMealIndex);

    currentMealIndex = randomIndex;

    displayMeal(meals[randomIndex]);
}


function displayMeal(meal) {

    const recipeImage = document.querySelector(".main-image img");
    recipeImage.src = meal.image;
    recipeImage.alt = meal.name;

    document.getElementById("recipe-name").textContent = meal.name;
    document.getElementById("recipe-description").textContent = meal.description;

    document.getElementById("country").textContent = meal.country;
    document.getElementById("difficulty").textContent = meal.difficulty;

    document.getElementById("prep-time").textContent = meal.prepTime;
    document.getElementById("cook-time").textContent = meal.cookTime;
    document.getElementById("servings").textContent = meal.servings;


    const ingredientsList = document.getElementById("ingredientsList");

    ingredientsList.innerHTML = meal.ingredients.map((ingredient, index) => `
        <li>
            <span class="ingredient-number">${index + 1}</span>
            <span class="ingredient-text">${ingredient}</span>
        </li>
    `).join("");


    const instructionsList = document.getElementById("instructionsList");

    instructionsList.innerHTML = meal.instructions.map((instruction, index) => `
        <li>
            <span class="instruction-number">${index + 1}</span>
            <span class="instruction-text">${instruction}</span>
        </li>
    `).join("");


    document.getElementById("caloriesValue").textContent = meal.nutrition.calories;
    document.getElementById("proteinValue").textContent = meal.nutrition.protein;
    document.getElementById("carbsValue").textContent = meal.nutrition.carbs;
    document.getElementById("fatValue").textContent = meal.nutrition.fat;
    document.getElementById("fiberValue").textContent = meal.nutrition.fiber;
    document.getElementById("sodiumValue").textContent = meal.nutrition.sodium;


    const tipCards = document.querySelectorAll(".tip-card .tip-text");

    tipCards.forEach((tip, index) => {
        tip.textContent = meal.tips[index] || "";
    });
}


document.querySelector(".try-btn").addEventListener("click", getRandomMeal);


document.addEventListener("DOMContentLoaded", getRandomMeal);
