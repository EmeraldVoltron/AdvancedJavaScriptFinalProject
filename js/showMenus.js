function showRecipe() {
    console.log("showing recipe");
    document.querySelector("#bigRecipeDisplay").style.display = "block";
}

function closeRecipe() {
    console.log("closing recipe");
    document.querySelector("#bigRecipeDisplay").style.display = "none";
}

function showIngredients() {
    console.log("showing ingredients");
    document.querySelector("#ingredientDiv").style.display = "block";
}

function closeIngredients() {
    console.log("closing ingredients");
    document.querySelector("#ingredientDiv").style.display = "none";
}

function showInstructions() {
    console.log("showing instructions");
    document.querySelector("#instructionDiv").style.display = "block";
}

function closeInstructions() {
    console.log("closing instructions");
    document.querySelector("#instructionDiv").style.display = "none";
}
