<template>
  <div class="container">
    <div v-if="recipe" class="recipe-container">
      <div class="recipe-header mt-3 mb-4">
        <h1>{{ recipe.title }}</h1>
        <img :src="recipe.image" class="center recipe-image" />
        <RecipeLogos :recipe="recipe" />
      </div>
      <div class="recipe-body">
        <div class="wrapper">
          <div class="wrapped">
            <div class="mb-3">
              <div><strong>Ready in:</strong> {{ recipe.readyInMinutes }} minutes</div>
              <div><strong>Likes:</strong> {{ recipe.aggregateLikes }} likes</div>
              <div><strong>Servings:</strong> {{ recipe.servings }}</div>
            </div>
            <h3>Ingredients:</h3>
            <ul class="ingredients-list">
              <li v-for="(r, index) in recipe.extendedIngredients" :key="index + '_' + r.id">
                {{ r.original }}
              </li>
            </ul>
          </div>
          <div class="wrapped">
            <h3>Instructions:</h3>
            <ol class="instructions-list">
              <li v-for="(s, index) in recipe._instructions" :key="index">
                <div>
                  <span class="step-number">{{ index + 1 }}.</span> {{ s.step }}
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <PrepareAndMealButtons/>
  </div>
</template>

<script>
import { mockAddLastViewedRecipe ,PostLastViewed} from "../services/user.js";
import { mockGetRecipeFullDetails2, getFullView } from "../services/recipes.js";
import RecipeLogos from "../components/RecipeLogos.vue";
import PrepareAndMealButtons from '../components/PrepareAndMealButtons.vue';

export default {
  components: {
    RecipeLogos,
    PrepareAndMealButtons
  },
  data() {
    return {
      recipe: null,
      isFavorite: false // Assuming you have a way to get the initial favorite state
    };
  },
  async created() {
    try {
      let response;
      try {
        // response = mockGetRecipeFullDetails2(this.$route.params.recipeId);
        response= await getFullView(this.$route.params.recipeId);
        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }

      const {
        analyzedInstructions,
        instructions,
        extendedIngredients,
        aggregateLikes,
        readyInMinutes,
        image,
        title,
        servings,
        glutenFree,
        vegetarian,
        vegan,
        id // Ensure you get the recipe ID
      } = response.data.recipe;

      const _instructions = analyzedInstructions
        .map(fstep => fstep.steps.map(step => ({ ...step, step: fstep.name + step.step })))
        .flat();

      this.recipe = {
        instructions,
        _instructions,
        analyzedInstructions,
        extendedIngredients,
        aggregateLikes,
        readyInMinutes,
        image,
        title,
        servings,
        glutenFree,
        vegetarian,
        vegan,
        id 
      };
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>

.recipe-header {
  text-align: center;
}
.wrapper {
  display: flex;
  flex-wrap: wrap;
}
.wrapped {
  width: 100%;
  padding: 8px;
}
@media (min-width: 768px) {
  .wrapped {
    width: 50%;
  }
}
ul {
  list-style-type: none;
  padding: 0;
}
h3 {
  margin-top: 16px;
}
</style>
