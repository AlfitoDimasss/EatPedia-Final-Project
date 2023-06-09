import FilterCard from './components/filter-card';
import SearchRecipeButtonInitiator from '../../utils/search-recipe-button-initiator';
import FilterCardInitiator from '../../utils/filter-card-initiator';
import SearchFilterButtonInitiator from '../../utils/search-filter-button-initiator';
import DisplayRecipesPagination from '../../utils/display-recipes-pagination-initiator';
import SpoonacularSource from '../../data/spoonacular-source';

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
        <p class="recipes__filter-toggle">Search using <span id="filterToggle">Filter</span></p>
        <h1 class="recipes__title">Latest Recipes</h1>
        <div class="recipes__wrapper">
          ${FilterCard()}
          <div>
            <div class="recipes__recipe-container" id="recipeContainer"></div>
            <nav class="pagination-container">
              <div id="pagination-numbers">
              </div>
            </nav>
          </div>
        </div>
      </section>
    `;

    const searchButton = document.getElementById('searchButton');
    const keywordInput = document.getElementById('recipesSearch');
    const filterCard = document.getElementById('filterCard');
    const closeButtonFilterCard = document.querySelector('.recipes__filter-card__close');
    const toggleFilterCard = document.getElementById('filterToggle');
    const filterButtonMobile = document.getElementById('filterButtonMobile');
    const filterButtonDesktop = document.getElementById('filterButtonDesktop');

    const recipes = await SpoonacularSource.getBaseRecipe();

    FilterCardInitiator.init({
      toggle: toggleFilterCard,
      card: filterCard,
      closeBtn: closeButtonFilterCard,
    });

    SearchRecipeButtonInitiator.init({
      button: searchButton,
      input: keywordInput,
    });

    SearchFilterButtonInitiator.init({
      btnMobile: filterButtonMobile,
      btnDesktop: filterButtonDesktop,
      card: filterCard,
    });

    DisplayRecipesPagination.init({
      recipes,
    });
  },
};

export default Recipes;
