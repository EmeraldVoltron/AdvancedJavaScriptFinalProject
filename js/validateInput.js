function testRecipeName(){
    // console.log("testing name")
    //Validate Name 
    // - Cannot be blank
    let validInput = true;
    let recipeName = document.querySelector("#recipeName").value;
    console.log(recipeName);
    if (recipeName == "" || recipeName == " "){
        document.querySelector("#nameError").innerHTML = "Name cannot be blank. "
        validInput = false;
    }
    return validInput;
}

function testImage(){
    // Test image
    // console.log("testing image");
    let validInput = true;
    let image = document.querySelector("#foodImage").value;
    // console.log(image)
    if (image == "images/select.jpg" || image == ""){
        document.querySelector("#imageError").innerHTML = "You must select an image. "
        validInput = false;
    }
    return validInput;
}

function testDifficulty(){
    //Validate difficulty 
    // - one must be selected
    let radios = document.getElementsByName("difficulty");
    var formValid = false;

    var i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;        
    }

    if (!formValid){
        document.querySelector("#difficultyError").innerHTML = "You must select a difficulty. "
    }
    return formValid;
}

function testPrepTime(){
    let validInput = true
    // prep time: cannot be default values - input types number- prepTimeMins, prepTimeHours
    let prepTimeErrorString = " "
    let prepTimeHours = document.querySelector("#prepTimeHours").value;
    let prepTimeMins = document.querySelector("#prepTimeMins").value;
    // if (!Number.isInteger(parseInt(prepTimeHours))){
    //     prepTimeErrorString = prepTimeErrorString + "Hours must be whole numbers. ";
    //     validInput = false;
    // }
    // if(!Number.isInteger(parseInt(prepTimeMins))){
    //     prepTimeErrorString = prepTimeErrorString + "Minutes must be whole numbers. ";
    //     validInput = false;
    // }
    if (prepTimeHours < 0){
        prepTimeErrorString = prepTimeErrorString + "Hours cannot be less than 0. ";
        validInput = false
    }
    if (prepTimeHours == ""){
        prepTimeErrorString = prepTimeErrorString + "Hours cannot be blank. ";
        validInput = false;
    }

    if (prepTimeMins <0){
        prepTimeErrorString = prepTimeErrorString + "Minutes cannot be less than 0. "
        validInput = false;
    }
    if (prepTimeMins == "") {
        prepTimeErrorString = prepTimeErrorString + "Minutes cannot be blank. "
        validInput = false;
    }
    if (prepTimeMins > 60){
        prepTimeErrorString = prepTimeErrorString + "Please adjust hours, minutes cannot be more than 60. "
        validInput = false;
    }

    document.querySelector("#prepTimeError").innerHTML = prepTimeErrorString;
    return validInput;
}

function testCookTime(){
    let validInput = true;
    // cook time: cannot be default values - input types number- cookTimeMins, cookTimeHours 
    let cookTimeHours = document.querySelector("#cookTimeHours").value;
    let cookTimeMins = document.querySelector("#cookTimeMins").value;
    console.log(typeof(cookTimeHours) + " " + typeof(cookTimeMins));
    let cookTimeErrorString = ""
    // if (!Number.isInteger(parseFloat(cookTimeHours))){
    //     cookTimeErrorString = cookTimeErrorString + "Hours must be whole numbers. ";
    //     validInput = false;
    // }
    // if(!Number.isInteger(parseInt(cookTimeMins))){
    //     cookTimeErrorString = cookTimeErrorString + "Minutes must be whole numbers. ";
    //     validInput = false;
    // }
    if (cookTimeHours < 0){
        cookTimeErrorString = cookTimeErrorString + " Hours cannot be less than 0. ";
        validInput = false
    }
    if (cookTimeHours == ""){
        cookTimeErrorString = cookTimeErrorString + " Hours cannot be blank. ";
        validInput = false;
    }

    if (cookTimeMins <0){
        cookTimeErrorString = cookTimeErrorString + " Minutes cannot be less than 0. "
        validInput = false;
    }
    if (cookTimeMins == "") {
        cookTimeErrorString = cookTimeErrorString + " Minutes cannot be blank. "
        validInput = false;
    }
    if (cookTimeMins > 60){
        cookTimeErrorString = cookTimeErrorString + " Please adjust hours, minutes cannot be more than 60. "
        validInput = false;
    }

    document.querySelector("#cookTimeError").innerHTML = cookTimeErrorString;
    return validInput;
}

function testServings(){
    let validInput = true
    //Servings - input type number
    // Cannot be 0
    let servings = document.querySelector("#servingSize").value;

    if (servings < 1){
        document.querySelector("#servingSizeError").innerHTML = "Servings cannot be less than 1. "
        validInput = false
    }
    if (servings == "" || servings == " "){
        document.querySelector("#servingSizeError").innerHTML = "Servings cannot be blank. "
        validInput = false
    }

    return validInput
}

function testIngredients(ingredientCount){
    let validInput = true
    //Ingredients List
    // quantity cannot be 0
    // measurement value cannot be ""
    // ingredient name cannot be "" or  " "

    for(let i = 1; i <= ingredientCount; i++){
        let newQuantity = "#quantity" + i;
        let newMeasurement = "#measurement" + i;
        let newIngredientName = "#ingredientName" + i;

        let newQuantityError = "#quantityError" + i;
        let newMeasurementError = "#measurementError" + i;
        let newIngredientNameError = "#ingredientNameError" + i;

        let quantity = document.querySelector(newQuantity).value;
        if(quantity == 0 || quantity < 0){
            document.querySelector(newQuantityError).innerHTML = "Cannot be 0, or less than 0, or left blank.";
            validInput = false;
        }

        let measurement = document.querySelector(newMeasurement).value;
        if(measurement == ""){
            document.querySelector(newMeasurementError).innerHTML = "Select a unit of measurement.";
            validInput = false;
        }

        // console.log(document.querySelector(newIngredientName).value);
        let ingredientName = document.querySelector(newIngredientName).value;
        if (ingredientName == "" || ingredientName == " "){
            document.querySelector(newIngredientNameError).innerHTML = "Ingredient name cannot be blank.";
            validInput = false;
        }
    }
    
    return validInput;
}

function testInstructions(instructionCount){
    let validInput = true;
    let instuct_count = instructionCount;
    // console.log("Testing instructions")


    // Instructions:
    // cannot be blank
    for(let i = 1; i <= instuct_count; i++){
        let newStep = "#stepID" + i;
        let instruction = document.querySelector(newStep).value;
        let newInstructionError = "#instructionError" + i;

        if (instruction == "" || instruction == " "){
            document.querySelector(newInstructionError).innerHTML = "Instruction cannot be blank.";
            validInput = false;
        }
    }

    return validInput

}

function validateInput(instructionCount, ingredientCount){
    console.log("Inside validateInput")
    //check recipename
    let recipeValid = testRecipeName();

    //check image
    let imageValid = testImage();

    //check difficulty
    let difficultyValid = testDifficulty();

    //check prep time
    let prepTimeValid = testPrepTime();

    //check cook time
    let cookTimeValid = testCookTime();

    //check servings
    let servingsValid = testServings();
    
    //check ingredients
    // TO DO: VALIDATE INPUT WITH THE DIFFERENT LENGTHS OF INSTRUCTIONS/INGREDIENTS
    let ingredientsValid = testIngredients(ingredientCount);

    //check instructions
    // TO DO: VALIDATE INPUT WITH THE DIFFERENT LENGTHS OF INSTRUCTIONS/INGREDIENTS
    let instructionsValid = testInstructions(instructionCount);

    let validInput = recipeValid && imageValid && difficultyValid && prepTimeValid && cookTimeValid && servingsValid && ingredientsValid && instructionsValid

    return validInput
}