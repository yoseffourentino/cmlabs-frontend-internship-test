const foodsApi = "https://www.themealdb.com/api/json/v1/1/categories.php"
fetch(foodsApi)
    .then((result) => result.json())
    .then((data) => data.categories)
    .then((foods) => foods.forEach(food =>{
        console.log(food.strCategory)
        // let foodCategory = food.strCategory
        // let foodCategoryBg = food.strCategoryThumb
        // let categoryContainer = document.querySelector('.food-category-container')
        // let div = document.createElement('div')
        // let h3 = document.createElement('h3')

        // categoryContainer.append(div)
        // div.append(h3)
        // h3.append(foodCategory)
        // div.style.backgroundImage = `url(${foodCategoryBg})`
        // div.classList.add('food-category')
        // div.classList.add('bg-opacity')
        
        // const foodCategoryApi = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${foodCategory}`
        // fetch(foodCategoryApi)
        // .then((result) => result.json())
        // .then((data) => console.log(data))
        // .catch((err) => console.log('error 502 Bad Gateaway'))
    }))