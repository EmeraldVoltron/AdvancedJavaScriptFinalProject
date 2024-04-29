
ingredientCount = 1;

function createAnotherIngredient(){
    
    ingredientCount++;
    let newIngredient = document.querySelector("#ingredients");
    console.log(newIngredient);

    // clone the template
    let outputIngredient = newIngredient.content.cloneNode(true);

    //get the new values
    let newIngredientId = "ingredientID" + ingredientCount;
    let newQuantityId = "quantity" + ingredientCount;
    let newMeasurementId = "measurement" + ingredientCount;
    let newIngredientNameId = "ingredientName" + ingredientCount;

    outputIngredient.querySelector("#ingredientLabel").innerHTML = "Ingredient " + ingredientCount + ": "; 

    //change the quantity name and ID
    outputIngredient.querySelector("#quantity").name = newQuantityId;
    outputIngredient.querySelector("#quantity").id = newQuantityId;
    outputIngredient.getElementById("quantityLabel").htmlFor = newQuantityId;

    //change the measurement name and ID
    outputIngredient.querySelector("#measurement").name = newMeasurementId;
    outputIngredient.querySelector("#measurement").id = newMeasurementId;
    outputIngredient.getElementById("measurementLabel").htmlFor = newMeasurementId;

    //change the ingredient name and ID
    outputIngredient.querySelector("#ingredientName").name = newIngredientId;
    outputIngredient.querySelector("#ingredientName").id = newIngredientNameId;
    outputIngredient.getElementById("ingredientNameLabel").htmlFor = newIngredientNameId;

    // change span ids
    outputIngredient.querySelector("#quantityError").id = "quantityError" + ingredientCount;
    outputIngredient.querySelector("#measurementError").id = "measurementError" + ingredientCount;
    outputIngredient.querySelector("#ingredientNameError").id = "ingredientNameError" + ingredientCount;

    //add the node to the student section
    document.querySelector("#moreIngredients").appendChild(outputIngredient);
}