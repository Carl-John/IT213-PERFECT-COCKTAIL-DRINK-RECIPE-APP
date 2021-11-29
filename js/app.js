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
        //Server response from promise
        let serverResponse;

        //Type of Serach(Ingredients, cocktails, or name)
        const type = document.querySelector('#type').value;

        //Evaluate the type of method and then execute the query

        switch(type) {
            case 'name':
                serverResponse = cocktail.getDrinksByName(searchTerm);
                break;
        }

        //Query by the name of the drink

            serverResponse.then(cocktails => {
               if(cocktails.cocktails.drinks === null) {
                   //Nothing Exist
                   ui.printMessage('There\'re no results, try a different term', 'danger');
               } else {
                   ui.displayDrinksWithIngredients(cocktails.cocktails.drinks);

               }
            })
    }      
}