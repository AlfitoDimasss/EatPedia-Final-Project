import dummyDetail from '../../data/dummy-detail-recipe.json';
import dummyEquipments from '../../data/dummy-equipment.json';
import dummyInstructions from '../../data/dummy-instruction.json';
import UrlParser from '../../routes/url-parser';
import { createRecipeDetailTemplate } from '../templates/template-creator';

const RecipesDetails = {
  async render() {
    return `
      <div class="content" id="content"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    // const { detailResponseJson, detailInstructionJson, detailEquipmentJson } = await SpoonacularSource.getDetailRecipe(url.id);
    const content = document.querySelector('.content');
    content.innerHTML += `
      <section class="section">
        <div class="detail__detail-container" id="detailContainer"></div>
      </section>
    `;
    const detailData = dummyDetail;
    const detailContainer = document.getElementById('detailContainer');
    // detailContainer.innerHTML += createRecipeDetailTemplate(detailResponseJson, detailEquipmentJson, detailInstructionJson);
    detailContainer.innerHTML += createRecipeDetailTemplate(detailData, dummyEquipments, dummyInstructions);
  },
};

export default RecipesDetails;
