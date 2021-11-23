class CocktailAPI{

    //Get recipe by name
    async getDrinkByName(name) {
        //Search by name
        const apiResponse = await fetch(`http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
        //Returns a JSON Response
        const cocktails = await apiResponse.json();

        return{
            cocktails
        }
    }
}