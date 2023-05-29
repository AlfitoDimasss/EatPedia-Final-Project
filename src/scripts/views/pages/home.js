import Jumbotron from './components/jumbotron';
import About from './components/about';
import SpoonacularSource from '../../data/spoonacular-source';
import LatestRecipe from './components/latest-recipe';
import { createRecipeItemTemplate } from '../templates/template-creator';
import Feature from './components/feature';

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
      ${About()}
      ${Feature()}
      ${LatestRecipe()}
    `;
    // const recipeContainer = document.getElementById('recipeContainer');
    // const recipes = await SpoonacularSource.latestRecipe();
    // console.log(recipes);
    // recipes.forEach((recipe) => {
    //   recipeContainer.innerHTML += createRecipeItemTemplate(recipe);
    // });
  },
};

export default Home;
