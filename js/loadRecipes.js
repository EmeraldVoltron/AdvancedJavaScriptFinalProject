function loadRecipes() {
    // localStorage.clear()
    let recipe_list = JSON.parse(localStorage.getItem("recipe_list"));
    console.log(recipe_list);
    if (recipe_list == null) {
        document.querySelector("#noRecipeDiv").style.display = "block";
    } else {
        document.querySelector("#noRecipeDiv").style.display = "none";
        for (let i = 0; i < recipe_list.length; i++) {
            let recipeName = recipe_list[i].recipeName;
            let recipeImagePath = recipe_list[i].recipeImagePath;
            let recipeDifficulty = recipe_list[i].recipeDifficulty;
            let recipeServings = recipe_list[i].recipeServings;
            let recipeTotalTime = recipe_list[i].recipeTotalTime;

            // get the template
            let recipeCard = document.querySelector("template");
            // clone the template
            let outputRecipe = recipeCard.content.cloneNode(true)
            // change template content
            outputRecipe.querySelector("#recipeName").textContent = recipeName;
            outputRecipe.querySelector("#recipeName").id = "recipeName" + i
            outputRecipe.querySelector("#image-preview").src = recipeImagePath;
            outputRecipe.querySelector("#image-preview").id = "image-preview" + i;
            outputRecipe.querySelector('#difficulty').textContent = recipeDifficulty;
            outputRecipe.querySelector("#difficulty").id = "difficulty" + i;
            outputRecipe.querySelector("#servings").textContent = recipeServings;
            outputRecipe.querySelector("#servings").id = "servings" + i;
            let totalTimeMin = 0;
            if (recipeTotalTime < 60) {
                totalTimeMin = recipeTotalTime;
            } else {
                totalTimeMin = recipeTotalTime % 60;
            }

            let totalTimeHour = Math.floor(recipeTotalTime / 60);
            if (totalTimeMin == 0) {
                if (totalTimeHour) {
                    outputRecipe.querySelector("#totalTime").textContent = totalTimeHour + " hour";
                } else {
                    outputRecipe.querySelector("#totalTime").textContent = totalTimeHour + " hours";
                }
            } else {
                if (totalTimeHour == 0) {
                    outputRecipe.querySelector("#totalTime").textContent = totalTimeMin + " minutes";
                } else if (totalTimeHour == 1) {
                    outputRecipe.querySelector("#totalTime").textContent = totalTimeHour + " hour " + totalTimeMin + " minutes";
                } else {
                    outputRecipe.querySelector("#totalTime").textContent = totalTimeHour + " hours " + totalTimeMin + " minutes";
                }
            }
            outputRecipe.querySelector("#totalTime").id = "totalTime" + i;
            outputRecipe.querySelector("#recipe").id = i;


            //display template to page
            document.getElementById("recipeCards").appendChild(outputRecipe);
        }
    }

}