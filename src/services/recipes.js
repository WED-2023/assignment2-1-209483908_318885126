import recipe_full_view from "../assets/mocks/recipe_full_view.json";
import recipe_preview from "../assets/mocks/recipe_preview.json";
import recipe_full_view2 from "../assets/mocks/recipe_full_view2.json";
import recipe_preview2 from "../assets/mocks/recipe_preview2.json";
import family_full_recipes from "../assets/mocks/Family_recipes_full_view.json";
import analyzedInstructions324694 from "../assets/mocks/analyzedInstructions324694.json";
import recipeInformation324694 from "../assets/mocks/GetRecipeInformation324694.json";
import recipe_prepare_full from "../assets/mocks/recipe_prepare_full.json";

export function mockGetRecipesPreview(amount = 1) {
  let recipes = [];
  for (let i = 0; i < amount; i++) {
    recipes.push(recipe_preview);
  }

  return { data: { recipes: recipes } };
}

export function mockGetRecipeFullDetails(recipeId) {
  return {
    status: 200,
    data: { recipe: recipe_full_view }
  };
}

export function mockGetRecipesPreview2(amount = 1) {
  if (amount > 8) {
    amount = 8;
  }
  let recipes = [];
  for (let i = 0; i < amount; i++) {
    recipes.push(recipe_preview2[i]);
  }
  return { data: { recipes: recipes } };
}


export function mockGetRecipeFullDetails2(recipeId) {
  const recipe = recipe_full_view2.find(r => r.id === recipeId);
  return {
    status: recipe ? 200 : 404,
    data: { recipe: recipe || null }
  };
}

export function mockGetSearchResults(query, amount = 1, diet = [], cuisine = [], intolerances = []) {
  return {
    status: 200,
    data: { recipes: [recipe_preview, recipe_preview2] }
  };
}

export function mockGetFavoriteRecipes(userId, amount = 1) {
  return mockGetRecipesPreview2(amount);
}

export function mockGetFamilyRecipesPreview(amount = 1) {
  let recipes = [];
  for (let i = 0; i < amount; i++) {
    recipes.push(family_full_recipes[i]);
  }
  return { data: { recipes: recipes } };
}


export function mockGetFamilyRecipeById(recipeId) {
  const recipe = family_full_recipes.find(r => r.id === recipeId);
  return {
    status: recipe ? 200 : 404,
    data: { recipe: recipe || null }
  };
}

export function mockGetAnalyzedInstructionsID324694() {
  return {
    status: 200,
    data: analyzedInstructions324694
  };
}

export function mockGetRecipeInformationID324694() {
  return {
    status: 200,
    data: recipeInformation324694
  };
}

export function mockGetMealRecipesPreview() {
  let recipes = [];
  for (let i = 0; i < recipe_prepare_full.length; i++) {
    recipes.push(recipe_prepare_full[i]);
  }
  return { data: { recipes: recipes } };
}
