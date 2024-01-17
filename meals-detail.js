const mealDetailContainer = document.getElementById("meal-detail-container");
const urlParams = new URLSearchParams(window.location.search);
const mealId = urlParams.get("meal-id");

fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    .then((response) => response.json())
    .then((data) => {
    const meal = data.meals[0];
    displayMealDetail(meal);
    })
    .catch((error) => console.error("Error fetching meal detail:", error));

function displayMealDetail(meal) {
    mealDetailContainer.innerHTML = "";

    const mealDetailElement = document.createElement("div");
    mealDetailElement.classList.add("meals-content")
    mealDetailElement.innerHTML = `
        <h1>${meal.strMeal}</h1>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <div class="content">
        <div class="content-instruction">       
            <h2>Instruction</h2>
            <p>${meal.strInstructions}</p>
        </div>
    
        <div class="tutorial-vid">
            <h2>Tutorial</h2>
            <iframe width="560" height="315" src="${meal.strYoutube.replace(
                "watch?v=",
                "embed/"
            )}" frameborder="0" allowfullscreen></iframe>
        </div>
        </div>
    `;

    mealDetailContainer.appendChild(mealDetailElement);
}
