function resetErrors() {
    document.querySelector("#nameError").innerHTML = "";
    document.querySelector("#imageError").innerHTML = "";
    document.querySelector("#difficultyError").innerHTML = "";
    document.querySelector("#prepTimeError").innerHTML = "";
    document.querySelector("#cookTimeError").innerHTML = "";
    document.querySelector("#servingSizeError").innerHTML = "";
    document.querySelector("#recipeSuccess").innerHTML = "";
    document.querySelector("#image-preview").src = "images/select.jpg"

    for (let i = 1; i <= ingredientCount; i++) {
        let newQuantityError = "#quantityError" + i;
        let newMeasurementError = "#measurementError" + i;
        let newIngredientNameError = "#ingredientNameError" + i;

        document.querySelector(newQuantityError).innerHTML = "";
        document.querySelector(newMeasurementError).innerHTML = "";
        document.querySelector(newIngredientNameError).innerHTML = "";
    }

    for (let i = 1; i <= instructionCount; i++) {
        let newInstructionError = "#instructionError" + i;
        document.querySelector(newInstructionError).innerHTML = "";
    }

}

function resetForm() {
    document.querySelector("#image-preview").src = "images/select.jpg"
    document.querySelector("#recipeName").value = "";
    document.querySelector("#foodImage").value = "images/select.jpg";
    document.querySelector('input[name="difficulty"]:checked').checked = false;
    document.querySelector("#servingSize").value = "";
    document.querySelector("#prepTimeHours").value = "";
    document.querySelector("#prepTimeMins").value = "";
    document.querySelector("#cookTimeHours").value = "";
    document.querySelector("#cookTimeMins").value = "";

    for (let i = 1; i <= ingredientCount; i++) {
        let recipeQuantityId = "#quantity" + i;
        let measurementId = "#measurement" + i;
        let ingredientNameId = "#ingredientName" + i;

        document.querySelector(recipeQuantityId).value = "";
        document.querySelector(measurementId).value = "";
        document.querySelector(ingredientNameId).value = "";
    }

    for (let i = 1; i <= instructionCount; i++) {
        let stepID = "#stepID" + i;
        document.querySelector(stepID).value = "";
    }
}