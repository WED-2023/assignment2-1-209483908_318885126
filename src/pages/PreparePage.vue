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
              <div>
                <strong>Servings:</strong> {{ adjustedServings }}
                <input type="number" v-model.number="multiplier" class="ml-2 multiplier-input" min="1" step="0.5"/>
              </div>
            </div>
            <h3>Ingredients:</h3>
            <ul class="ingredients-list">
              <li v-for="(r, index) in adjustedIngredients" :key="index + '_' + r.id">
                {{ r }}
              </li>
            </ul>
          </div>
          <div class="wrapped">
            <h3>Instructions:</h3>
            <div v-for="(section, sectionIndex) in recipe.analyzedInstructions" :key="sectionIndex">
              <h4 v-if="section.name">{{ section.name }}</h4>
              <ol class="instructions-list">
                <li v-for="(s, stepIndex) in section.steps" :key="sectionIndex + '_' + stepIndex">
                  <div>
                    <input type="checkbox" v-model="completedSteps[getCheckboxIndex(sectionIndex, stepIndex)]" @change="saveCheckboxState" />
                    <span class="step-number">{{ stepIndex + 1 }}.</span> {{ s.step }}
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div class="progress-bar-container mt-4">
        <b-progress :value="progressValue" variant="success" striped animated></b-progress>
      </div>
    </div>
  </div>
</template>

<script>
import { BProgress } from 'bootstrap-vue';
import { mockGetRecipeInformationID324694, mockGetAnalyzedInstructionsID324694 } from "../services/recipes.js";
import RecipeLogos from "../components/RecipeLogos.vue";

export default {
  components: {
    RecipeLogos,
    BProgress
  },
  data() {
    return {
      recipe: null,
      isFavorite: false, // Assuming you have a way to get the initial favorite state
      multiplier: 1, // Multiplier for adjusting quantities
      adjustedIngredients: [],
      adjustedServings: 0,
      completedSteps: [] // Array to track completed steps
    };
  },
  async created() {
    try {
      let instructionsResponse, recipeDetailsResponse;

      try {
        instructionsResponse = mockGetAnalyzedInstructionsID324694();
        recipeDetailsResponse = mockGetRecipeInformationID324694();

        if (instructionsResponse.status !== 200 || recipeDetailsResponse.status !== 200) {
          this.$router.replace("/NotFound");
          return;
        }
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }

      const analyzedInstructions = instructionsResponse.data;
      const {
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
      } = recipeDetailsResponse.data;

      this.recipe = {
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
        id // Assign the recipe ID
      };

      this.completedSteps = this.getSavedCheckboxState(this.recipe.id, analyzedInstructions.flatMap(instr => instr.steps).length); // Initialize completedSteps array
      this.adjustQuantities();
      mockAddLastViewedRecipe(this.recipe.id);
      console.log("Added to last viewed recipes " + this.recipe.id);
    } catch (error) {
      console.log(error);
    }
  },
  watch: {
    multiplier() {
      this.adjustQuantities();
    }
  },
  computed: {
    progressValue() {
      const totalSteps = this.completedSteps.length;
      const completedSteps = this.completedSteps.filter(step => step).length;
      return totalSteps > 0 ? (completedSteps / totalSteps) * 100 : 0;
    }
  },
  methods: {
    adjustQuantities() {
      if (!this.recipe) return;

      this.adjustedServings = (this.recipe.servings * this.multiplier).toFixed(2);
      this.adjustedIngredients = this.recipe.extendedIngredients.map(ingredient => {
        return ingredient.original.replace(/(\d+(\.\d+)?)/g, match => (parseFloat(match) * this.multiplier).toFixed(2));
      });
    },
    saveCheckboxState() {
      // save the checkboxes state in sessionStorage
      sessionStorage.setItem(`completedSteps_${this.recipe.id}`, JSON.stringify(this.completedSteps));
      // save how many checked box we checked
      sessionStorage.setItem(`checkedSteps_${this.recipe.id}`, JSON.stringify(this.completedSteps.filter(Boolean).length));
      // Calculate and save the total number of steps in analyzedInstructions
      const totalSteps = this.recipe.analyzedInstructions.reduce((acc, section) => acc + section.steps.length, 0);
      console.log("totalSteps " + totalSteps);
      sessionStorage.setItem(`instructionsLength_${this.recipe.id}`, JSON.stringify(totalSteps));
},
    getSavedCheckboxState(recipeId, stepsCount) {
      const savedState = sessionStorage.getItem(`completedSteps_${recipeId}`);
      return savedState ? JSON.parse(savedState) : new Array(stepsCount).fill(false);
    },
    getCheckboxIndex(sectionIndex, stepIndex) {
      const stepsBefore = this.recipe.analyzedInstructions.slice(0, sectionIndex).reduce((acc, section) => acc + section.steps.length, 0);
      return stepsBefore + stepIndex;
    }
  }
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
h3 {
  margin-top: 16px;
}
.multiplier-input {
  width: 60px;
  margin-left: 8px;
  padding: 4px;
}
.progress-bar-container {
  width: 100%;
  text-align: center;
}
</style>
