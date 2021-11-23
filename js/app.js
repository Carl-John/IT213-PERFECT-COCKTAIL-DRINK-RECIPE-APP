//Intanciate the Class
const ui = new UI(),
    cocktail = new CocktailAPI();



//Create the Event Listeners
function eventListeners() {

    //Add EventListener when form is submitted
    const searcForm = document.querySelector('#search-form');
    if(searcForm){
        searcForm.addEventListener('submit', getCocktails);
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
        //Query by the name of the drink
        cocktail.getDrinksByName(searchTerm)
            .then(cocktails => {
               if(cocktails.cocktails.drinks === null) {
                   //Nothing Exist
                   ui.printMessage('There\'re no results, try a different term', 'danger');
               } else {
                   ui.displayDrinksWithIngredients(cocktails.cocktails.drinks);

               }
            })
    }      
}