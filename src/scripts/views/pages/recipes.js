import FilterCard from './components/filter-card';
import recipeList from './components/recipe-list';
import { createRecipeItemTemplate } from '../templates/template-creator';
import dummyData from '../../data/dummy-data.json';

const Recipes = {
  async render() {
    return `
      <div class="content" id="content"></div>
    `;
  },

  async afterRender() {
    const content = document.querySelector('.content');
    content.innerHTML += `
      <section class="section">
        <div class="recipes-search_wrapper">
          <input type="text" Placeholder="Search food recipe, e.g pasta, pancake" id="recipesSearch" class="recipes-search">
          <a href="#"><i class="fa-solid fa-magnifying-glass" style="color: #ffffff;"></i></a>
        </div>
        <p class="filter-button">Pencarian menggunakan <span>Filter</span></p>
        <h1 class="recipes-title">Resep Makanan Terbaru</h1>
        <div class="recipes-wrapper">
          ${FilterCard()}
          <div>
            ${recipeList()}
            <div class="recipes_pages">
              <a href="">1</a>
              <a href="">2</a>
              <a href="">3</a>
              <a href="">4</a>
              <a href="">5</a>
            </div>
          </div>
        </div>
      </section>
    `;
    
    const recipeContainer = document.getElementById('recipeContainer');
    // const recipes = await SpoonacularSource.latestRecipe();
    const recipes = dummyData;
    recipes.forEach((recipe) => {
      recipeContainer.innerHTML += createRecipeItemTemplate(recipe);
    });

    const filter = document.querySelector('.filter-button span');
    const filterCard = document.querySelector('.recipes__filter-wrapper');
    filter.addEventListener('click', () => {
      filterCard.style.display = 'block';
    });
  },
};

export default Recipes;
