import dummyDetail from '../../data/dummy-detail-recipe.json';
import { createRecipeDetailTemplate } from '../templates/template-creator';

const RecipesDetails = {
  async render() {
    return `
      <div class="content" id="content"></div>
    `;
  },

  async afterRender() {
    const content = document.querySelector('.content');
    content.innerHTML += `
      <section class="section">
        <div class="detail__detail-container" id="detailContainer"></div>
      </section>
    `;
    const detailData = dummyDetail;
    const detailContainer = document.getElementById('detailContainer');
    detailContainer.innerHTML += createRecipeDetailTemplate(detailData);
  },
};

export default RecipesDetails;
