// src/services/user.js
import axios from "axios";

export async function PostMyRecipe(newRecipe) {
  console.log(newRecipe);
  try {
    const response = await axios.post('http://localhost:80/users/myrecipes', {
      title: newRecipe.title,
      image: newRecipe.image,
      instructions: newRecipe.instructions,
      readyInMinutes: newRecipe.readyInMinutes,
      servings: newRecipe.servings,
      glutenFree: newRecipe.glutenFree,
      vegan: newRecipe.vegan,
      vegetarian: newRecipe.vegetarian,
      ingredients: newRecipe.ingredients,
    });

    if (response.status === 201) {
      return { message: "Recipe added successfully", success: true };
    } else {
      throw new Error('Failed to add recipe');
    }
  } catch (error) {
    console.error('Error adding new recipe:', error);
    throw error;
  }
}


export async function getLastViewed() {
  try {
    const response = await axios.get('http://localhost:80/users/lastview');
    let recipes = response.data;

    // Log success message
    console.log('Successfully fetched last viewed recipes:', recipes);
    // Check if recipes array is empty
    if (recipes.length === 0) {
      console.log('No recipes found in last viewed');
      return { data: { recipes } };
    }
    
    return { data: { recipes } };
  } catch (error) {
    // Log the error and rethrow it for further handling
    console.error('Error fetching last viewed recipes:', error);
    throw error;
  }
}


  export function mockAddFavorite(recipeId) {
    return { status: 200, response: { data: { message: "The Recipe successfully saved as favorite", success: true}} };
  }
  
  export function mockRemoveFavorite(recipeId) {
    return { status: 200, response: { data: { message: "The Recipe successfully saved as favorite", success: true}} };
  }
  
  export function mockAddUserRecipe(recipeDetails) {
    return { status: 200, response: { data: { message: "The Recipe successfully added to My Recipes", success: true}} };

  }
  
  export function mockAddLastViewedRecipe(recipeId) {
    return { status: 200, response: { data: { message: "The Recipe successfully added to Last viewed Recipes", success: true}} };

  }

    
  export function mockAddToMeal(recipeId) {
    return { status: 200, response: { data: { message: "The Recipe successfully added to meal", success: true}} };

  }
  export function mockRemoveFromMeal(recipeId) {
    return { status: 200, response: { data: { message: "The Recipe successfully removed from meal", success: true}} };

  }
  