import Jumbotron from './components/jumbotron';
import SpoonacularSource from '../../data/spoonacular-source';
import LatestRecipe from './components/latest-recipe';
import { createRecipeItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="content" id="content"></div>
    `;
  },

  async afterRender() {
    const content = document.querySelector('.content');
    content.innerHTML += `
      ${Jumbotron()}
      ${LatestRecipe()}
    `;
    const recipeContainer = document.getElementById('recipeContainer');
    const recipes = await SpoonacularSource.latestRecipe();
    console.log(recipes);
    recipes.forEach((recipe) => {
      recipeContainer.innerHTML += createRecipeItemTemplate(recipe);
    });
  },
};

export default Home;
