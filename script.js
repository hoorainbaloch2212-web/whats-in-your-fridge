/* ==========================
   BASIC APP SETUP (SAFE START)
========================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("JS LOADED SUCCESSFULLY");

    /* ==========================
       ELEMENTS
    ========================== */

    const startBtn = document.getElementById("startBtn");
    const splashScreen = document.getElementById("splashScreen");
    const mainApp = document.getElementById("mainApp");

    /* ==========================
       SAFETY CHECK
    ========================== */

    if (!startBtn || !splashScreen || !mainApp) {
        console.error("Missing HTML elements. Check IDs.");
        return;
    }

    /* ==========================
       START BUTTON
    ========================== */

    startBtn.addEventListener("click", () => {
        splashScreen.style.display = "none";
        mainApp.style.display = "block";
    });

    console.log("Splash system ready");

});
/* ==========================
       INGREDIENT SYSTEM
    ========================== */

    const ingredientButtons = document.querySelectorAll(".ingredient");
    const selectedList = document.getElementById("selectedList");
    const ingredientCount = document.getElementById("ingredientCount");

    let selectedIngredients = [];

    ingredientButtons.forEach(btn => {

        btn.addEventListener("click", () => {

            const item = btn.textContent.trim();

            btn.classList.toggle("active");

            if (selectedIngredients.includes(item)) {
                selectedIngredients = selectedIngredients.filter(i => i !== item);
            } else {
                selectedIngredients.push(item);
            }

            updateSelectedUI();

        });

    });

    function updateSelectedUI() {

        if (selectedList) {
            selectedList.textContent =
                selectedIngredients.length > 0
                ? selectedIngredients.join(" • ")
                : "None Selected";
        }

        if (ingredientCount) {
            ingredientCount.textContent = selectedIngredients.length;
        }
    }
    updateSelectedUI();
    const ingredientSearch =
document.getElementById("ingredientSearch");

if (ingredientSearch) {

    ingredientSearch.addEventListener("input", (e) => {

        const value = e.target.value.toLowerCase();

        ingredientButtons.forEach(btn => {

            const text = btn.textContent.toLowerCase();

            if (text.includes(value)) {
                btn.style.display = "inline-block";
            } else {
                btn.style.display = "none";
            }

        });

    });

}
document.addEventListener("DOMContentLoaded", () => {

    const findBtn = document.getElementById("findBtn");
    const recipeGrid = document.getElementById("recipeGrid");
    const recipeCount = document.getElementById("recipeCount");

    /* ==========================
       FIND RECIPES
    ========================== */

    findBtn.addEventListener("click", () => {

        recipeGrid.innerHTML = "";

        let results = [];

        recipes.forEach(recipe => {

            let match = 0;

            recipe.ingredients.forEach(ing => {
                if (selectedIngredients.includes(ing)) {
                    match++;
                }
            });

            let percent =
                Math.round((match / recipe.ingredients.length) * 100);

            if (match > 0) {
                results.push({
                    recipe,
                    percent
                });
            }

        });

        /* AI-style ranking */
        results.sort((a, b) => b.percent - a.percent);

        recipeCount.textContent = results.length;

        if (results.length === 0) {
            recipeGrid.innerHTML = `
                <div class="empty">
                    <h3>🍳 No Recipes Found</h3>
                    <p>Select more ingredients</p>
                </div>
            `;
            return;
        }

        results.forEach(item => {

            const r = item.recipe;

            const card = document.createElement("div");
            card.className = "recipe-card";

            card.innerHTML = `
                <img src="${r.image}" class="food-img">

                <h3>${r.name}</h3>
                <p>⏱️ ${r.time}</p>
                <p>⭐ ${r.difficulty}</p>
                <p>📊 Match: ${item.percent}%</p>

                <button class="recipe-btn">View Recipe</button>
            `;

            card.querySelector(".recipe-btn")
                .addEventListener("click", () => {  
                    showRecipeDetails(r);
                });

            recipeGrid.appendChild(card);

        });

    });

    /* ==========================
       RECIPE POPUP (TEMP SIMPLE)
    ========================== */

    window.openRecipe = function (recipe) {

        alert(
            recipe.name + "\n\n" +
            "Ingredients:\n" +
            recipe.ingredients.join(", ")
        );

    };

});
const recipes = [

/* ==========================
   BREAKFAST (1–8)
========================== */

{
name: "Anda Paratha",
image: "",
time: "15 mins",
difficulty: "Easy",
ingredients: ["🥚 Eggs", "🍞 Bread", "🧈 Butter"],
steps: [
"Heat pan and add butter",
"Cook egg with salt and spices",
"Place egg inside paratha or bread",
"Toast until golden",
"Serve hot"
]
},

{
name: "Masala Omelette",
image: "",
time: "10 mins",
difficulty: "Easy",
ingredients: ["🥚 Eggs", "🧅 Onion", "🌶️ Pepper"],
steps: [
"Beat eggs in bowl",
"Add onion and pepper",
"Heat oil in pan",
"Cook omelette until firm",
"Fold and serve"
]
},

{
name: "Cheese Omelette",
image: "",
time: "10 mins",
difficulty: "Easy",
ingredients: ["🥚 Eggs", "🧀 Cheese"],
steps: [
"Whisk eggs well",
"Pour into pan",
"Add cheese on top",
"Fold when half cooked",
"Let cheese melt"
]
},

{
name: "Doodh Roti",
image: "",
time: "5 mins",
difficulty: "Easy",
ingredients: ["🥛 Milk", "🍞 Bread"],
steps: [
"Warm milk",
"Tear bread into pieces",
"Pour milk over bread",
"Let it soak",
"Eat soft mixture"
]
},

{
name: "Butter Toast",
image: "",
time: "5 mins",
difficulty: "Easy",
ingredients: ["🍞 Bread", "🧈 Butter"],
steps: [
"Heat pan or toaster",
"Spread butter",
"Toast bread until golden",
"Serve immediately"
]
},

{
name: "Egg Sandwich",
image: "",
time: "10 mins",
difficulty: "Easy",
ingredients: ["🥚 Eggs", "🍞 Bread"],
steps: [
"Boil or fry eggs",
"Slice eggs",
"Place in bread",
"Add seasoning",
"Toast lightly"
]
},

{
name: "Veg Omelette",
image: "",
time: "12 mins",
difficulty: "Easy",
ingredients: ["🥚 Eggs", "🧅 Onion", "🌶️ Pepper"],
steps: [
"Beat eggs",
"Add chopped vegetables",
"Cook in pan",
"Flip and cook both sides",
"Serve hot"
]
},

{
name: "Cheesy Egg Toast",
image: "",
time: "10 mins",
difficulty: "Easy",
ingredients: ["🥚 Eggs", "🧀 Cheese", "🍞 Bread"],
steps: [
"Cook egg in pan",
"Place on bread",
"Add cheese",
"Toast until melted",
"Serve hot"
]
},

/* ==========================
   LUNCH / DINNER (9–14)
========================== */

{
name: "Chicken Pulao",
image: "",
time: "40 mins",
difficulty: "Medium",
ingredients: ["🍗 Chicken", "🍚 Rice", "🧅 Onion"],
steps: [
"Fry onions until golden",
"Add chicken and spices",
"Cook chicken fully",
"Add soaked rice",
"Cook until water dries"
]
},

{
name: "Egg Fried Rice",
image: "",
time: "25 mins",
difficulty: "Easy",
ingredients: ["🥚 Eggs", "🍚 Rice", "🧅 Onion"],
steps: [
"Cook rice and cool it",
"Scramble eggs",
"Add onions",
"Mix rice and stir well",
"Serve hot"
]
},

{
name: "Chicken Masala Rice",
image: "",
time: "45 mins",
difficulty: "Medium",
ingredients: ["🍗 Chicken", "🍚 Rice", "🌶️ Pepper"],
steps: [
"Cook chicken with spices",
"Prepare rice separately",
"Mix together",
"Add pepper",
"Cook for flavor"
]
},

{
name: "Anda Curry",
image: "",
time: "30 mins",
difficulty: "Medium",
ingredients: ["🥚 Eggs", "🧅 Onion", "🌶️ Pepper"],
steps: [
"Boil eggs",
"Prepare onion gravy",
"Add spices",
"Add eggs",
"Simmer and serve"
]
},

{
name: "Aloo Bhujia",
image: "",
time: "25 mins",
difficulty: "Easy",
ingredients: ["🥔 Potato", "🧅 Onion", "🌶️ Pepper"],
steps: [
"Cut potatoes",
"Fry onions",
"Add potatoes",
"Cook until soft",
"Serve hot"
]
},

{
name: "Chicken Karahi",
image: "",
time: "50 mins",
difficulty: "Hard",
ingredients: ["🍗 Chicken", "🧅 Onion", "🌶️ Pepper"],
steps: [
"Heat oil",
"Cook chicken",
"Add spices",
"Cook thick gravy",
"Serve with naan"
]
},
{  
name: "Simple Biryani Rice",
image: "",
time: "60 mins",
difficulty: "Hard",
ingredients: ["🍗 Chicken", "🍚 Rice", "🧅 Onion", "🌶️ Pepper"],
steps: [
"Prepare fried onions",
"Cook chicken with spices",
"Layer rice and chicken",
"Steam on low flame",
"Serve hot biryani style"
]
},

{
name: "Spicy Egg Bhurji",
image: "",
time: "15 mins",
difficulty: "Easy",
ingredients: ["🥚 Eggs", "🧅 Onion", "🌶️ Pepper"],
steps: [
"Heat oil",
"Add onions and fry",
"Add beaten eggs",
"Mix spices",
"Cook until dry"
]
},

{
name: "Aloo Egg Curry",
image: "",
time: "30 mins",
difficulty: "Medium",
ingredients: ["🥚 Eggs", "🥔 Potato", "🧅 Onion"],
steps: [
"Boil eggs and potatoes",
"Prepare onion gravy",
"Add spices",
"Mix everything",
"Simmer and serve"
]
},

{
name: "Butter Garlic Toast",
image: "",
time: "8 mins",
difficulty: "Easy",
ingredients: ["🍞 Bread", "🧈 Butter"],
steps: [
"Heat pan",
"Add butter and garlic flavor",
"Toast bread",
"Make golden crisp",
"Serve hot"
]
},

{
name: "Cheesy Mushroom Melt",
image: "",
time: "15 mins",
difficulty: "Easy",
ingredients: ["🍄 Mushroom", "🧀 Cheese"],
steps: [
"Cook mushrooms",
"Add seasoning",
"Place cheese on top",
"Let it melt",
"Serve hot"
]
},

{
name: "Chicken Toast",
image: "",
time: "20 mins",
difficulty: "Medium",
ingredients: ["🍗 Chicken", "🍞 Bread", "🌶️ Pepper"],
steps: [
"Cook chicken with spices",
"Place on bread",
"Add seasoning",
"Toast until crisp",
"Serve hot"
]
},

{
name: "Egg Rice Fry",
image: "",
time: "25 mins",
difficulty: "Easy",
ingredients: ["🥚 Eggs", "🍚 Rice", "🧅 Onion"],
steps: [
"Cook rice",
"Scramble eggs",
"Add onions",
"Mix well",
"Fry together"
]
},

{
name: "Desi Veg Toast",
image: "",
time: "12 mins",
difficulty: "Easy",
ingredients: ["🍞 Bread", "🧅 Onion", "🌶️ Pepper"],
steps: [
"Chop vegetables",
"Mix with spices",
"Spread on bread",
"Toast until golden",
"Serve"
]
},

{
name: "Chicken Egg Rice Combo",
image: "",
time: "35 mins",
difficulty: "Medium",
ingredients: ["🍗 Chicken", "🥚 Eggs", "🍚 Rice"],
steps: [
"Cook chicken",
"Scramble eggs",
"Prepare rice",
"Mix all together",
"Serve hot"
]
},

{
name: "Simple Khichdi",
image: "",
time: "30 mins",
difficulty: "Easy",
ingredients: ["🍚 Rice", "🥔 Potato"],
steps: [
"Boil rice and potato",
"Add salt and spices",
"Cook until soft",
"Mix well",
"Serve warm"
]
},

{
name: "Masala Rice Bowl",
image: "",
time: "30 mins",
difficulty: "Easy",
ingredients: ["🍚 Rice", "🧅 Onion", "🌶️ Pepper"],
steps: [
"Cook rice",
"Fry onions",
"Add spices",
"Mix together",
"Serve hot"
]
},

{
name: "Chicken Mayo Sandwich",
image: "",
time: "15 mins",
difficulty: "Easy",
ingredients: ["🍗 Chicken", "🍞 Bread", "🧈 Butter"],
steps: [
"Cook chicken",
"Mix with mayo style butter",
"Place in bread",
"Toast lightly",
"Serve"
]
},

{
name: "Egg Roll Wrap",
image: "",
time: "20 mins",
difficulty: "Medium",
ingredients: ["🥚 Eggs", "🍞 Bread", "🧅 Onion"],
steps: [
"Cook egg thin layer",
"Add filling",
"Wrap in bread",
"Toast slightly",
"Serve hot"
]
},

{
name: "Veg Rice Mix",
image: "",
time: "25 mins",
difficulty: "Easy",
ingredients: ["🍚 Rice", "🧅 Onion", "🌶️ Pepper"],
steps: [
"Cook rice",
"Add vegetables",
"Mix spices",
"Stir fry",
"Serve"
]
},

{
name: "Chicken Masala Toast",
image: "",
time: "25 mins",
difficulty: "Medium",
ingredients: ["🍗 Chicken", "🍞 Bread", "🌶️ Pepper"],
steps: [
"Cook spicy chicken",
"Place on bread",
"Add seasoning",
"Toast",
"Serve hot"
]
},

{
name: "Cheese Garlic Rice",
image: "",
time: "25 mins",
difficulty: "Easy",
ingredients: ["🍚 Rice", "🧀 Cheese", "🧈 Butter"],
steps: [
"Cook rice",
"Add butter and garlic flavor",
"Mix cheese",
"Stir well",
"Serve hot"
]
},

{
name: "Potato Cheese Toast",
image: "",
time: "15 mins",
difficulty: "Easy",
ingredients: ["🥔 Potato", "🧀 Cheese", "🍞 Bread"],
steps: [
"Boil potatoes",
"Mix cheese",
"Spread on bread",
"Toast until golden",
"Serve"
]
},

{
name: "Spicy Chicken Fry",
image: "",
time: "40 mins",
difficulty: "Medium",
ingredients: ["🍗 Chicken", "🌶️ Pepper"],
steps: [
"Marinate chicken",
"Heat oil",
"Fry until crispy",
"Add spices",
"Serve hot"
]
},

{
name: "Desi Breakfast Bowl",
image: "",
time: "20 mins",
difficulty: "Easy",
ingredients: ["🥚 Eggs", "🍚 Rice", "🧅 Onion"],
steps: [
"Cook eggs",
"Prepare rice",
"Mix together",
"Add spices",
"Serve warm"
]
},

{
name: "Veg Butter Rice",
image: "",
time: "20 mins",
difficulty: "Easy",
ingredients: ["🍚 Rice", "🧈 Butter", "🧅 Onion"],
steps: [
"Cook rice",
"Add butter",
"Mix vegetables",
"Stir fry",
"Serve hot"
]
}

];

/* ==========================
   ARRAY CLOSED HERE ✔️
========================== */
/* ==========================
   RECIPE MODAL FINAL LOGIC
========================== */

const modal = document.getElementById("recipeModal");
const modalTitle = document.getElementById("modalTitle");
const modalIngredients = document.getElementById("modalIngredients");
const modalSteps = document.getElementById("modalSteps");
const closeModal = document.getElementById("closeModal");

/* OPEN RECIPE */
window.openRecipe = function(recipe) {

    if (!modal) return;

    modalTitle.textContent = recipe.name;

    modalIngredients.innerHTML = "";
    modalSteps.innerHTML = "";

    // ingredients
    recipe.ingredients.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        modalIngredients.appendChild(li);
    });

    // steps
    recipe.steps.forEach(step => {
        const li = document.createElement("li");
        li.textContent = step;
        modalSteps.appendChild(li);
    });

    modal.classList.remove("hidden");
};

/* CLOSE BUTTON */
if (closeModal) {
    closeModal.addEventListener("click", () => {
        modal.classList.add("hidden");
    });
}

/* CLICK OUTSIDE TO CLOSE */
if (modal) {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.add("hidden");
        }
    });
}function showRecipeDetails(recipe) {
    const modal = document.getElementById("recipeModal");
    const container = document.getElementById("recipeDetail");

    if (!modal || !container) return;

    // Reset container and fill with text data
    container.innerHTML = `
        <div class="recipe-content-box">
            <h2 style="color:#d35400;">${recipe.name}</h2>
            <p><strong>⏱️ Time:</strong> ${recipe.time}</p>
            <p><strong>⭐ Difficulty:</strong> ${recipe.difficulty}</p>
            <hr>
            <h3>Ingredients</h3>
            <ul>
                ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
            </ul>
            <h3>Instructions</h3>
            <ol>
                ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
            </ol>
        </div>
    `;

    // Show the modal
    modal.style.display = "block";
    document.body.style.overflow = "hidden";

    // Close button logic
    const closeBtn = document.getElementById("closeRecipe");
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        };
    }
}
