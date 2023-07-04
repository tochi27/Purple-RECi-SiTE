document.title = "Meal Time Recipes";

const containerEl = document.querySelector(".container");
const displayContent = document.getElementById("display-content");
const submitEl = document.querySelector("#submit");
const inputsEl = document.querySelector("#inputs");
const blockOneEl = document.getElementById("blockOne");
const blockTwoEl = document.getElementById("blockTwo");
const quotesHandlerEl = document.getElementById("quotesHandler");
const quotesEl = document.getElementById("quotes");


async function getFoodDetails(user){
    const fetchMe = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${user}`)
    const res = await fetchMe.json()
    const data = res.meals
    console.log(data)

    data.map((e) => {
        const html = ` 
        <div class="title-way">
            <h3>Food Name: ${e.strMeal}</h3>
            <h3>${e.strArea} Dish</h3>
            <img src="${e.strMealThumb}" id="pictures">
            
            <div>
                <ul>
                    <h3>Ingredients Needed for ${e.strMeal} include; </h3> 
                    <li>${e.strIngredient1}, ${e.strMeasure1}</li>
                    <li>${e.strIngredient2}, ${e.strMeasure2}</li>
                    <li>${e.strIngredient3}, ${e.strMeasure3}</li>
                    <li>${e.strIngredient4}, ${e.strMeasure4}</li>
                    <li>${e.strIngredient5}, ${e.strMeasure5}</li>
                    <li>${e.strIngredient6}, ${e.strMeasure6}</li>
                    <li>${e.strIngredient7}, ${e.strMeasure7}</li>
                    <li>${e.strIngredient8}, ${e.strMeasure8}</li>
                    <li>${e.strIngredient9}, ${e.strMeasure9}</li>
                    <li>${e.strIngredient10}, ${e.strMeasure10}</li>
                    <li>${e.strIngredient11}, ${e.strMeasure11}</li>
                    <li>${e.strIngredient12}, ${e.strMeasure12}</li>
                    <li>${e.strIngredient13}, ${e.strMeasure13}</li>
                    <li>${e.strIngredient14}, ${e.strMeasure14}</li>
                </ul>
                <div>
                    <h2>How to Prepare -${e.strMeal}</h2>
                    <div id= "instruct">${e.strInstructions}</div>
                </div>
                <br/>
                <br/>
            </div>
        </div>`
        
        displayContent.insertAdjacentHTML("beforeend", html)
    })
}

submitEl.addEventListener("click", () => {
    blockOneEl.style.display = "none";
    blockTwoEl.style.display = "none";
    // quotesHandlerEl.style.color = "white";
    quotesEl.style.backgroundColor = "white";
    let inputie = inputsEl.value;
    getFoodDetails(inputie);
    inputsEl.value = "";
  });
