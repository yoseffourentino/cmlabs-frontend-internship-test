const mealsContainer = document.getElementById("meals-container");
const urlParams = new URLSearchParams(window.location.search);
const categoryName = urlParams.get("category-name");

fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
    .then((response) => response.json())
    .then((data) => {
    const meals = data.meals;
    displayMeals(meals);
    })
    .catch((error) => console.error("Error fetching meals:", error));

function displayMeals(meals) {
    mealsContainer.innerHTML = "";

    meals.forEach((meal) => {
    const mealElement = document.createElement("div");
    mealElement.classList.add("category");
    mealElement.innerHTML = `
            <div class="category" style="background-image: url(${meal.strMealThumb})">
                <h3>${meal.strMeal}</h3>
            </div>
        `;

    mealElement.addEventListener("click", () => {
        redirectToMealDetail(meal.idMeal);
    });

    mealsContainer.appendChild(mealElement);
});
}

function redirectToMealDetail(mealId) {
window.location.href = `meals-detail.html?meal-id=${encodeURIComponent(
    mealId
)}`;
}
