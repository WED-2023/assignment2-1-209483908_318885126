<template>
  <div class="recipe-preview card position-relative">
    <div class="card-body">
      <router-link
        :to="{ name: 'PreparePage', params: { recipeId: recipe.id } }"
        class="card-link hoverable"
        title="Go to recipe preparation page"
      >
        <img
          :src="recipe.image"
          class="card-img-top"
          alt="Recipe image"
          title="Go to recipe preparation page"
        />
        <h5 class="card-title">{{ recipe.title }}</h5>
      </router-link>
      <div class="info d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
          <i class="fas fa-clock"></i>
          <span class="ms-2">{{ recipe.readyInMinutes }} minutes</span>
        </div>
        <div class="d-flex align-items-center">
          <i class="fas fa-heart"></i>
          <span class="ms-2">{{ recipe.aggregateLikes }} likes</span>
        </div>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <RecipeLogos :recipe="recipe" />
        </li>
      </ul>
      <button @click="removeRecipe" class="remove-button">X</button>
      <div class="index-number">{{ index + 1 }}</div>
      <div class="progress-bar-container mt-4">
        <b-progress :value="progressValue" :max="maxValue" variant="success" striped animated></b-progress>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeLogos from "./RecipeLogos.vue";
import { BProgress } from 'bootstrap-vue';
import { mockRemoveFromMeal,DeleteMeal } from "../services/user.js";

export default {
  name: "RecipePreviewBonus",
  components: {
    RecipeLogos,
    BProgress
  },
  props: {
    recipe: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    initialFavoriteState: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isFavorite: this.initialFavoriteState,
      progressValue: 0,
      maxValue: 0
    };
  },
  mounted() {
    this.setProgressValue();
  },
  methods: {
    setProgressValue() {
      const getCompletedSteps = JSON.parse(sessionStorage.getItem(`completedSteps_${this.recipe.id}`));
      const completedSteps = getCompletedSteps.filter(step => step).length;
      const totalSteps = this.recipe.analyzedInstructions.flatMap(instr => instr.steps).length;
      this.progressValue = completedSteps ? parseInt(completedSteps) : 0;
      this.maxValue = totalSteps ? parseInt(totalSteps) : 0;
    },
    async removeRecipe() {
      // mockRemoveFromMeal(this.recipe.id);
      const response = await DeleteMeal(this.recipe.id);
      if (response.status === 200) {
        // Emit event to remove recipe from UI
        this.$emit('remove-recipe', this.recipe.id);
        // Retrieve username from the root store
        const username = this.$root.store.username;
        // Build a unique sessionStorage key with the username for meals prepared
        const mealsKey = `${username}_mealsPrepared`;
        // Retrieve and decrement the meal count from sessionStorage
        let mealsPrepared = parseInt(sessionStorage.getItem(mealsKey)) || 0;
        mealsPrepared = Math.max(mealsPrepared - 1, 0); // Prevent negative counts
        sessionStorage.setItem(mealsKey, mealsPrepared);
        // Clearing progress data for the specific recipe
        const completedStepsKey = `completedSteps_${this.recipe.id}`;
        const totalStepsKey = `totalSteps_${this.recipe.id}`;
        sessionStorage.removeItem(completedStepsKey);
        sessionStorage.removeItem(totalStepsKey);
        // Emit event to update meal count across components
        this.$root.$emit('update-meal-count', mealsPrepared);

        console.log(`Recipe ${this.recipe.id} and its progress data removed successfully.`);
    
      }
      else{
        console.error("Error in removing recipe from meal:", response.message);
      }
    }
  }
};
</script>

<style scoped>
@import "~@fortawesome/fontawesome-free/css/all.css";

.recipe-preview {
  display: inline-block;
  margin: 10px 10px;
  width: 18rem; /* Ensure all cards are the same width */
}
.card-body {
  padding: 0.5rem;
}
.list-group-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info {
  padding: 10px;
  border-top: 1px solid #e9ecef;
  border-bottom: 1px solid #e9ecef;
  font-size: 1rem;
}

.info i {
  color: #ff4500;
  margin-right: 5px;
}

.info span {
  margin-left: 5px;
}

.recipe-preview .list-group-item {
  font-size: 0.9rem;
}

.hoverable:hover {
  cursor: pointer;
  opacity: 0.8;
}
.list-group-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.remove-button {
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
}

.remove-button:hover {
  background-color: darkred;
}

.index-number {
  position: absolute;
  top: 5px;
  left: 5px;
  background-color: black;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}

.progress-bar-container {
  width: 100%;
  text-align: center;
}
</style>
