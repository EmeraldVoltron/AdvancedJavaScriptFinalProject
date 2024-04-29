instructionCount = 1;

function createAnotherInstruction(){
    // Increase counter
    instructionCount++;
    // get the template
    let newInstruction = document.querySelector("#instructions");
    console.log(newInstruction);

    // clone the template
    let outputInstructions = newInstruction.content.cloneNode(true);

    //get the new values
    let newStepId = "stepID" + instructionCount;

    //change the step names and ID
    outputInstructions.querySelector('#stepID').name = newStepId;
    outputInstructions.querySelector("#stepID").id = newStepId;

    //change the "for" in the html labels
    outputInstructions.getElementById("stepLabel").htmlFor = newStepId;
    outputInstructions.getElementById("stepLabel").innerHTML = "Step " + instructionCount + ": "; 

    //change span ids
    outputInstructions.querySelector("#instructionError").id = "instructionError" + instructionCount;

    //add the node to the student section
    document.querySelector("#moreSteps").appendChild(outputInstructions);
}