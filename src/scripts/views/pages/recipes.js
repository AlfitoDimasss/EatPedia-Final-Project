import FilterCard from './components/filter-card';
import { createRecipeItemTemplate } from '../templates/template-creator';
import dummyData from '../../data/dummy-data.json';
import SearchRecipeButtonInitiator from '../../utils/search-recipe-button-initiator';
import FilterCardInitiator from '../../utils/filter-card-initiator';
import SearchFilterButtonInitiator from '../../utils/search-filter-button-initiator';

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
        <div class="recipes__search-bar">
          <input type="text" Placeholder="e.g pasta, pancake" id="recipesSearch">
          <a href="javascript:void(0)" id="searchButton"><i class="fa-solid fa-magnifying-glass" style="color: #ffffff;"></i></a>
        </div>
        <p class="recipes__filter-toggle">Pencarian menggunakan <span id="filterToggle">Filter</span></p>
        <h1 class="recipes__title">Resep Masakan Terbaru</h1>
        <div class="recipes__wrapper">
          ${FilterCard()}
          <div class="recipes__recipe-container" id="recipeContainer"></div>
        </div>
      </section>
    `;

    const recipeContainer = document.getElementById('recipeContainer');
    const searchButton = document.getElementById('searchButton');
    const keywordInput = document.getElementById('recipesSearch');
    const filterCard = document.getElementById('filterCard');
    const closeButtonFilterCard = document.querySelector('.recipes__filter-card__close');
    const toggleFilterCard = document.getElementById('filterToggle');
    const filterButtonMobile = document.getElementById('filterButtonMobile');
    const filterButtonDesktop = document.getElementById('filterButtonDesktop');

    const recipes = dummyData;
    recipes.forEach((recipe) => {
      recipeContainer.innerHTML += createRecipeItemTemplate(recipe);
    });
    recipes.forEach((recipe) => {
      recipeContainer.innerHTML += createRecipeItemTemplate(recipe);
    });

    SearchRecipeButtonInitiator.init({
      button: searchButton,
      input: keywordInput,
      container: recipeContainer,
    });

    FilterCardInitiator.init({
      toggle: toggleFilterCard,
      card: filterCard,
      closeBtn: closeButtonFilterCard,
    });

    SearchFilterButtonInitiator.init({
      btnMobile: filterButtonMobile,
      btnDesktop: filterButtonDesktop,
      container: recipeContainer,
      card: filterCard,
    });
  },
};

export default Recipes;
