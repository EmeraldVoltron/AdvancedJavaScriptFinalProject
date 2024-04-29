// Adding recipes

function addRecipe(ingredientCount, instructionCount) {
    // localStorage.clear() testing 

    //first get the current recipes from the local storage and parse them
    recipe_list = JSON.parse(localStorage.getItem("recipe_list"));
    console.log(recipe_list);
    if (recipe_list == null) {
        recipe_list = []
    }

    //add the recipe to the list
    // get all of the fields and put them in the correct format
    let recipeName = document.querySelector("#recipeName").value;
    let recipeImagePath = document.querySelector("#foodImage").value;
    let recipeDifficulty = document.querySelector('input[name="difficulty"]:checked').value;
    let recipeServings = document.querySelector("#servingSize").value;
    let recipePrepTimeHour = document.querySelector("#prepTimeHours").value;
    let recipePrepTimeMins = document.querySelector("#prepTimeMins").value;
    let recipeCookTimeHour = document.querySelector("#cookTimeHours").value;
    let recipeCookTimeMins = document.querySelector("#cookTimeMins").value;
    let recipeTotalPrepTime = parseInt(recipePrepTimeHour) * 60 + parseInt(recipePrepTimeMins);
    let recipeTotalCookTime = parseInt(recipeCookTimeHour) * 60 + parseInt(recipeCookTimeMins);
    let recipeTotalTime = parseInt(recipeTotalCookTime) + parseInt(recipeTotalPrepTime);

    let ingredientList = [];

    for (let i = 1; i <= ingredientCount; i++) {
        let recipeQuantityId = "#quantity" + i;
        let measurementId = "#measurement" + i;
        let ingredientNameId = "#ingredientName" + i;

        let recipeQuantity = document.querySelector(recipeQuantityId).value;
        let recipeMeasurement = document.querySelector(measurementId).value;
        let recipeIngredientName = document.querySelector(ingredientNameId).value;

        ingredientList.push([recipeQuantity, recipeMeasurement, recipeIngredientName]);
    };

    let instructionList = [];
    console.log("starting instruction");
    for (let i = 1; i <= instructionCount; i++) {
        let stepID = "#stepID" + i;

        let step = document.querySelector(stepID).value;
        console.log(step);

        instructionList.push(step);
    };

    let recipe = {
        "recipeName": recipeName,
        "recipeImagePath": recipeImagePath,
        "recipeDifficulty": recipeDifficulty,
        "recipeServings": recipeServings,
        "recipeTotalTime": recipeTotalTime,
        "recipeTotalCookTime": recipeTotalCookTime,
        "recipeTotalPrepTime": recipeTotalPrepTime,
        "recipeIngredientList": ingredientList,
        "recipeInstructionList": instructionList
    };


    // append it to the list
    recipe_list.push(recipe);
    //convert back to a json object store in local storage
    localStorage.setItem("recipe_list", JSON.stringify(recipe_list));
    console.log(localStorage.getItem("recipe_list"));
}