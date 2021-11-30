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

    //Get recipe by ingredient
    async getDrinkByIngredient(ingredient) {
        //Search by Ingredient
        const apiResponse = await fetch(`http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        //Wait for response then return JSON
        const cocktails = await apiResponse.json();

        return {
            cocktails
        }
    }

    //Get Single Recipe
    async getSingleRecipe(id) {
        //Search by Ingredient
        const apiResponse = await fetch(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        //Wait for response then return JSON
        const recipe = await apiResponse.json();

        return {
            recipe
        }

    }

    //Retrieves all the categories from the rest API
    async getCategories() {
        const apiResponse = await fetch('http://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
        //Wait for the response and return json
        const categories = await apiResponse.json();

        return{
            categories
        }
    }

    //Get Drinks By Category
    async getDrinksByCategpry(category) {
        //Search by Category
        const apiResponse = await fetch(`http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
        //Wait for response then return JSON
        const cocktails = await apiResponse.json();

        return {
            cocktails
        }
    }
}