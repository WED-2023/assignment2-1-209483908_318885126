<template>
  <div v-if="$root.store.username" class="bottom-right-links">
    <router-link :to="{ name: 'PreparePage', params: { recipeId } }">Prepare</router-link>
    <a href="#" @click.prevent="addToMeal">Add to Meal</a>
  </div>
</template>

<script>
import { mockAddToMeal } from "../services/user.js";

export default {
  name: 'PrepareAndMealButtons',
  computed: {
    recipeId() {
      return this.$route.params.recipeId;
    }
  },
  methods: {
    addToMeal() {
      
      console.log('Adding recipe to meal:', this.recipeId); // Debug log
      mockAddToMeal(this.recipeId);
      // Retrieve the current meal count from sessionStorage
      let mealsPrepared = sessionStorage.getItem('mealsPrepared');

      if (!mealsPrepared) {
        // If no count is found, initialize it to 1
        mealsPrepared = 1;
      } else {
        // If a count is found, increment it
        mealsPrepared = parseInt(mealsPrepared) + 1;
      }

      // Save the updated count back to sessionStorage
      sessionStorage.setItem('mealsPrepared', mealsPrepared);

      // Emit event to update meal count
      this.$root.$emit('update-meal-count', mealsPrepared);
      
    }
  }
};
</script>

<style scoped>
.bottom-right-links {
  position: fixed;
  bottom: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
}
.bottom-right-links a {
  margin: 4px 0;
  padding: 8px 12px;
  background-color: #ff6347;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  text-align: center;
}
.bottom-right-links a:hover {
  background-color: #ff6347;
}
</style>
