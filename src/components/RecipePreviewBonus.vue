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
          <i :class="viewedIconClass" class="viewed-icon"></i>
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
import { mockRemoveFromMeal } from "../services/user.js";

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
      const storedValue = sessionStorage.getItem(`checkedSteps_${this.recipe.id}`);
      const storedMaxValue = sessionStorage.getItem(`instructionsLength_${this.recipe.id}`);
      if (storedValue) {
        this.progressValue = JSON.parse(storedValue);
      }
      if (storedMaxValue) {
        this.maxValue = JSON.parse(storedMaxValue);
      } else {
        // Fallback in case the length is not set in sessionStorage
        this.maxValue = this.recipe.analyzedInstructions.reduce((acc, section) => acc + section.steps.length, 0);
      }
    },
    handleClick(event, routeName) {
      this.markAsViewed();

      if (event.button === 1 || event.ctrlKey || event.metaKey) {
        return;
      }

      event.preventDefault();
      this.$router.push({ name: routeName, params: { recipeId: this.recipe.id } });
    },
    removeRecipe() {
      mockRemoveFromMeal(this.recipe.id);
      console.log('Removing recipe from meal:', this.recipe.id); // Debug log
      this.$emit('remove-recipe', this.recipe.id);
       // Retrieve the current meal count from sessionStorage
      let mealsPrepared = sessionStorage.getItem('mealsPrepared');
      // Decrease the meal count by one
      mealsPrepared = parseInt(mealsPrepared) - 1;
      // Save the updated count back to sessionStorage
      sessionStorage.setItem('mealsPrepared', mealsPrepared);
      // Emit event to update meal count
      this.$root.$emit('update-meal-count', mealsPrepared);
      
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
