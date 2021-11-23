//Intanciate the Class
const ui = new UI();



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
       ui.printMessage();
    } else {
        console.log('Query the Rest API');
    }      
}