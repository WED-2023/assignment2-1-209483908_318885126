// src/services/recipes.js
import recipe_full_view from "../assets/mocks/recipe_full_view.json";
import recipe_preview from "../assets/mocks/recipe_preview.json";
import recipe_full_view2 from "../assets/mocks/recipe_full_view2.json";
import recipe_preview2 from "../assets/mocks/recipe_preview2.json";

export function mockGetRecipesPreview(amount = 1) {
  let recipes = [];
  for(let i = 0; i < amount; i++){
    recipes.push(recipe_preview);
  }

  return { data: { recipes: recipes } };
}

export function mockGetRecipeFullDetails(recipeId) {
    return { data: { recipe: recipe_full_view } } ;
  }
  

export function mockGetRecipesPreview2(amount = 1) {
  let recipes = [];
  for (let i = 0; i < amount; i++) {
    recipes.push(recipe_preview2[i]);
  }
  return { data: { recipes: recipes } };
}

export function mockGetRecipeFullDetails2(recipeId) {
  const recipe = recipe_full_view2.find(r => r.id === recipeId);
  return { data: { recipe: recipe || null } };
}