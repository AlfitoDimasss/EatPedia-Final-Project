import SpoonacularSource from '../data/spoonacular-source';
import DisplayRecipesPagination from './display-recipes-pagination-initiator';

const SearchRecipeButtonInitiator = {
  init({ button, input }) {
    button.addEventListener('click', async (e) => {
      e.preventDefault();
      if (input.value !== '') {
        const results = await SpoonacularSource.searchRecipe(input.value);
        const title = document.querySelector('.recipes__title');
        title.innerText = `${results.length} Recipes Found`;
        DisplayRecipesPagination.init({
          recipes: results,
        });
      }
    });
  },
};

export default SearchRecipeButtonInitiator;
