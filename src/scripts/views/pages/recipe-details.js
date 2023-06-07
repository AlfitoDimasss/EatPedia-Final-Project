import dummyDetail from '../../data/dummy-detail-recipe.json';
import dummyEquipments from '../../data/dummy-equipment.json';
import dummyInstructions from '../../data/dummy-instruction.json';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import SpoonacularSource from '../../data/spoonacular-source';
import { createLikeButtonTemplate, createRecipeDetailTemplate } from '../templates/template-creator';

const RecipesDetails = {
  async render() {
    return `
      <div class="content" id="content"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { detailResponseJson, detailInstructionJson, detailEquipmentJson } = await SpoonacularSource.getDetailRecipe(url.id);

    const content = document.querySelector('.content');
    content.innerHTML += `
      <section class="section">
        <div class="detail__detail-container" id="detailContainer"></div>
      </section>
    `;

    const detailContainer = document.getElementById('detailContainer');
    detailContainer.innerHTML += createRecipeDetailTemplate(detailResponseJson, detailEquipmentJson, detailInstructionJson);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      recipe: {
        id: detailResponseJson.id,
        title: detailResponseJson.title,
        image: detailResponseJson.image,
        healthScore: detailResponseJson.healthScore,
        readyInMinutes: detailResponseJson.readyInMinutes,
        servings: detailResponseJson.servings,
      },
    });
  },
};

export default RecipesDetails;
