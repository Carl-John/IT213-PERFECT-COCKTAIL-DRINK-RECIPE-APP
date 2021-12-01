//Intanciate the Class
const ui = new UI(),
    cocktail = new CocktailAPI();



//Create the Event Listeners
function eventListeners() {

    //Document Ready
    document.addEventListener('DOMContentLoaded', documentReady);

    //Add EventListener when form is submitted
    const searcForm = document.querySelector('#search-form');
    if(searcForm){
        searcForm.addEventListener('submit', getCocktails);
    }

    //The results div listener
    const resultsDiv = document.querySelector('#results');
    if(resultsDiv) {
        resultsDiv.addEventListener('click', resultsDelegation);
    }



    }
    

eventListeners();

//Get cocktails function
function getCocktails(e) {
    e.preventDefault();

    const searchTerm = document.querySelector('#search').value;

    //Check something is on the searcg input
    if(searchTerm === ''){
       //Call user interface print message
       ui.printMessage('Please add something into the form', 'danger');
    } else {
        //Server response from promise
        let serverResponse;

        //Type of Serach(Ingredients, cocktails, or name)
        const type = document.querySelector('#type').value;

        //Evaluate the type of method and then execute the query

        switch(type) {
            case 'name':
                serverResponse = cocktail.getDrinksByName(searchTerm);
                break;
            case 'ingredient':
                serverResponse = cocktail.getDrinksByIngredient(searchTerm);
                break;
            case 'category':
                serverResponse = cocktail.getDrinksByCategoey(searchTerm);
                break;
            case 'alcohol':
                serverResponse = cocktail.getDrinksByAlcohol(searchTerm);
                break;
        }

        ui.clearResults();

        //Query by the name of the drink

            serverResponse.then(cocktails => {
               if(cocktails.cocktails.drinks === null) {
                   //Nothing Exist
                   ui.printMessage('There\'re no results, try a different term', 'danger');
               } else {
                   if(type === 'name') {
                       //Display with Ingredients
                       ui.displayDrinksWithIngredients(cocktails.cocktails.drinks);
                   } else {
                       //Display without Ingredients(category, alcohol, ingredient)
                       ui.displayDrink(cocktails.cocktails.drinks);

                   }

               }
            })
    }      
}

//Delegation for the results area
function resultsDelegation(e) {
    e.preventDefault();

    if(e.target.classList.contains('get-recipe')) {
        cocktail.getSingleRecipe(e.target.dataset.id)
            .then(recipe => {
                //Displays single recipe into a modal
                ui.displaySingleRecipe(recipe.recipe.drinks[0]);
            })
    } 

    //When favorite btn is click
    if(e.target.classList.contains('favorite-btn')) {
        if(e.target.classList.contains('is-favorite')) {
            //Remove from the class
            e.target.classList.remove('is-favorite');
            e.target.textContent = '+';
        } else {
            //Add the class
            e.target.classList.remove('is-favorite');
            e.target.textContent = '-';
        }
    }
}

//Document Ready
function documentReady() {

    //Select the search category select
    const searchCategory = document.querySelector('.search-category');
    if(searchCategory) {
        ui.displayCategories();
    }

}