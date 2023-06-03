import SpoonacularSource from '../data/spoonacular-source';
import { createRecipeItemTemplate } from '../views/templates/template-creator';

const SearchRecipeButtonInitiator = {
  init({ button, input, container }) {
    button.addEventListener('click', async (e) => {
      e.preventDefault();
      if (input.value !== '') {
        const results = await SpoonacularSource.searchRecipe(input.value);
        container.innerHTML = '';
        results.forEach((result) => {
          container.innerHTML += createRecipeItemTemplate(result);
        });
      }
    });
  },
};

export default SearchRecipeButtonInitiator;
