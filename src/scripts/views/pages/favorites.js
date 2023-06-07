import FavoriteRecipeIdb from '../../data/favorite-recipe-idb';
import { createRecipeItemTemplate } from '../templates/template-creator';

const Favorites = {
  async render() {
    return `
      <div class="content" id="content"></div>
    `;
  },

  async afterRender() {
    const content = document.querySelector('.content');
    content.innerHTML += `
    <section class="section">
      <h1 class="recipes__title">Favorite Recipes</h1>
      <div class="recipes__recipe-container" id="recipeContainer"></div>
    </section>
    `;

    const recipeContainer = document.getElementById('recipeContainer');

    const recipes = await FavoriteRecipeIdb.getAllRecipes();

    recipes.forEach((recipe) => {
      recipeContainer.innerHTML += createRecipeItemTemplate(recipe);
    });
  },
};

export default Favorites;
