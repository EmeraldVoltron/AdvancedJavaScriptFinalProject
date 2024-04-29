function changeServings() {
    // console.log("Inside change servings");
    let recipe_list = JSON.parse(localStorage.getItem("recipe_list"));
    let recipeId = document.querySelector("#recipeId").innerHTML;
    let ingredientList = recipe_list[recipeId].recipeIngredientList;
    let recipeServings = recipe_list[recipeId].recipeServings;

    let multiplyer = document.querySelector('input[name="servingSelect"]:checked').value;
    // let currentServings = document.querySelector("#bigRecipeServings").innerHTML;
    let newServings = multiplyer * recipeServings;
    document.querySelector("#bigRecipeServings").innerHTML = newServings;

    for (let i = 0; i < ingredientList.length; i++) {
        let defaultQuantity = ingredientList[i][0];
        let ulId = "#quantity" + i;
        let newIngredientNameId = "#ingredientName" + i;
        let newQuantity = multiplyer * defaultQuantity;
        document.querySelector(ulId).innerHTML = newQuantity;

        if (ingredientList[i][1] == "noMeasurement") {
            document.querySelector(newIngredientNameId).innerHTML = " " + ingredientList[i][2]
        } else {
            if (newQuantity > 1) {
                document.querySelector(newIngredientNameId).innerHTML = " " + ingredientList[i][1] + "s of " + ingredientList[i][2]
            } else {
                document.querySelector(newIngredientNameId).innerHTML = " " + ingredientList[i][1] + " of " + ingredientList[i][2]
            }
        }
    }

}

function showBigRecipe(recipeId) {
    showRecipe();

    console.log("inside big recipe " + recipeId);
    let recipe_list = JSON.parse(localStorage.getItem("recipe_list"));
    //get all the elements and assign the element with the local storage recipe object
    let recipeName = recipe_list[recipeId].recipeName;
    let recipeImagePath = recipe_list[recipeId].recipeImagePath;
    let recipeDifficulty = recipe_list[recipeId].recipeDifficulty;
    let recipeServings = recipe_list[recipeId].recipeServings;
    let recipeTotalPrepTime = recipe_list[recipeId].recipeTotalPrepTime;
    let recipeTotalCookTime = recipe_list[recipeId].recipeTotalCookTime;
    let recipeTotalTime = recipe_list[recipeId].recipeTotalTime;
    let recipeIngredientList = recipe_list[recipeId].recipeIngredientList;
    let recipeInstructionList = recipe_list[recipeId].recipeInstructionList;

    document.querySelector("#bigRecipeName").innerHTML = recipeName;
    document.querySelector("#bigRecipeImage").src = recipeImagePath;
    document.querySelector("#bigRecipeDifficulty").innerHTML = recipeDifficulty;
    document.querySelector("#bigRecipeServings").innerHTML = recipeServings;
    document.querySelector("#recipeId").innerHTML = recipeId;

    let prepTimeHour = Math.floor(recipeTotalPrepTime / 60);
    let prepTimeMin = recipeTotalPrepTime % 60;

    if (prepTimeMin == 0) {
        if (prepTimeHour == 1) {
            document.querySelector("#bigRecipePrepTime").innerHTML = prepTimeHour + " hour";
        } else {
            document.querySelector("#bigRecipePrepTime").innerHTML = prepTimeHour + " hours";
        }
    } else {
        if (prepTimeHour == 0) {
            document.querySelector("#bigRecipePrepTime").innerHTML = prepTimeMin + " minutes";
        } else if (prepTimeHour == 1) {
            document.querySelector("#bigRecipePrepTime").innerHTML = prepTimeHour + " hour " + prepTimeMin + " minutes";
        } else {
            document.querySelector("#bigRecipePrepTime").innerHTML = prepTimeHour + " hours " + prepTimeMin + " minutes";
        }
    }
    let cookTimeMin = 0;
    if (recipeTotalCookTime < 60) {
        cookTimeMin = recipeTotalCookTime
    } else {
        cookTimeMin = recipeTotalCookTime % 60;
    }

    let cookTimeHour = Math.floor(recipeTotalCookTime / 60);

    if (cookTimeMin == 0) {
        if (cookTimeHour == 1) {
            document.querySelector("#bigRecipeCookTime").innerHTML = cookTimeHour + " hour";
        } else {
            document.querySelector("#bigRecipeCookTime").innerHTML = cookTimeHour + " hours";
        }
    } else {
        if (cookTimeHour == 0) {
            document.querySelector("#bigRecipeCookTime").innerHTML = cookTimeMin + " minutes";
        } else if (cookTimeHour == 1) {
            document.querySelector("#bigRecipeCookTime").innerHTML = cookTimeHour + " hour " + cookTimeMin + " minutes";
        } else {
            document.querySelector("#bigRecipeCookTime").innerHTML = cookTimeHour + " hours " + cookTimeMin + " minutes";
        }
    }

    let totalTimeMin = 0;
    if (recipeTotalTime < 60) {
        totalTimeMin = recipeTotalTime;
    } else {
        totalTimeMin = recipeTotalTime % 60;
    }
    console.log(totalTimeMin);

    let totalTimeHour = Math.floor(recipeTotalTime / 60);
    if (totalTimeMin == 0) {
        if (totalTimeHour) {
            document.querySelector("#bigRecipeTotalTime").innerHTML = totalTimeHour + " hour";
        } else {
            document.querySelector("#bigRecipeTotalTime").innerHTML = totalTimeHour + " hours";
        }
    } else {
        if (totalTimeHour == 0) {
            document.querySelector("#bigRecipeTotalTime").innerHTML = totalTimeMin + " minutes";
        } else if (totalTimeHour == 1) {
            document.querySelector("#bigRecipeTotalTime").innerHTML = totalTimeHour + " hour " + totalTimeMin + " minutes";
        } else {
            document.querySelector("#bigRecipeTotalTime").innerHTML = totalTimeHour + " hours " + totalTimeMin + " minutes";
        }
    }

    document.querySelector("#ingredientsUl").innerHTML = "";
    console.log(recipeIngredientList);
    for (let i = 0; i < recipeIngredientList.length; i++) {
        let newIngredient = document.createElement('li');
        let newSpan = document.createElement('span');

        newSpan.id = "quantity" + i;
        newSpan.innerHTML = recipeIngredientList[i][0]
        newIngredient.appendChild(newSpan);

        let foodSpan = document.createElement('span');
        foodSpan.id = "ingredientName" + i;
        if (recipeIngredientList[i][1] == "noMeasurement") {
            foodSpan.innerHTML = " " + recipeIngredientList[i][2]
        } else {
            if (recipeIngredientList[i][0] > 1) {
                foodSpan.innerHTML = " " + recipeIngredientList[i][1] + "s of " + recipeIngredientList[i][2]
            } else {
                foodSpan.innerHTML = " " + recipeIngredientList[i][1] + " of " + recipeIngredientList[i][2]
            }
        }


        newIngredient.appendChild(foodSpan);


        document.querySelector("#ingredientsUl").appendChild(newIngredient);
    }

    console.log(recipeInstructionList)
    document.querySelector("#instructionOl").innerHTML = "";
    for (let i = 0; i < recipeInstructionList.length; i++) {
        console.log(i);
        let newInstruction = document.createElement('li');
        newInstruction.innerHTML = recipeInstructionList[i];
        document.querySelector("#instructionOl").appendChild(newInstruction);
    }
}