import UrlParser from '../../routes/url-parser';
import SpoonacularSource from '../../data/spoonacular-source';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createRecipeDetailTemplate } from '../templates/template-creator';
import { showLoader, hideLoader } from '../../utils/loader-indicator-util';
import dummyRecipeDetail from '../../data/dummy-recipe-detail.json';
import dummyRecipeEquipment from '../../data/dummy-recipe-equipment.json';
import dummyRecipeInstruction from '../../data/dummy-recipe-instruction.json';
import dummyRecipeSimilar from '../../data/dummy-recipe-similar.json';

const RecipesDetails = {
  async render() {
    return `
      <div class="content" id="content"></div>
      <div id="likeButtonContainer"></div>
      <div id="loaderContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    const content = document.querySelector('.content');
    content.innerHTML += `
      <section class="section">
        <div class="detail__detail-container" id="detailContainer"></div>
      </section>
    `;
    const loaderContainer = document.getElementById('loaderContainer');
    loaderContainer.innerHTML += `
    <div class="loader loader-detail" id="loader"></div>
    `;

    const loader = document.getElementById('loader');
    showLoader(loader);
    // const { detailResponseJson, detailInstructionJson, detailEquipmentJson, detailLabelHtml, detailSimilarRecipesJson } = await SpoonacularSource.getDetailRecipe(url.id);
    // hideLoader(loader);

    const detailContainer = document.getElementById('detailContainer');
    // detailContainer.innerHTML += createRecipeDetailTemplate(detailResponseJson, detailEquipmentJson, detailInstructionJson, detailLabelHtml, detailSimilarRecipesJson);
    detailContainer.innerHTML += createRecipeDetailTemplate(dummyRecipeDetail, dummyRecipeEquipment, dummyRecipeInstruction, null, dummyRecipeSimilar);

    // LikeButtonInitiator.init({
    //   likeButtonContainer: document.querySelector('#likeButtonContainer'),
    //   recipe: {
    //     id: detailResponseJson.id,
    //     title: detailResponseJson.title,
    //     image: detailResponseJson.image,
    //     healthScore: detailResponseJson.healthScore,
    //     readyInMinutes: detailResponseJson.readyInMinutes,
    //     servings: detailResponseJson.servings,
    //   },
    // });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      recipe: {
        id: dummyRecipeDetail.id,
        title: dummyRecipeDetail.title,
        image: dummyRecipeDetail.image,
        healthScore: dummyRecipeDetail.healthScore,
        readyInMinutes: dummyRecipeDetail.readyInMinutes,
        servings: dummyRecipeDetail.servings,
      },
    });
  },
};

export default RecipesDetails;
