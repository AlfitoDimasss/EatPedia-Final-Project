import CONFIG from './config';

const API_ENDPOINT = {
  LATEST_RECIPE: `${CONFIG.BASE_URL}complexSearch?apiKey=${CONFIG.KEY}&number=4&addRecipeInformation=true`,
  BASE_SEARCH: `${CONFIG.BASE_URL}complexSearch?apiKey=${CONFIG.KEY}&number=24&addRecipeInformation=true`,
  DETAIL_INFORMATION: (id) => `${CONFIG.BASE_URL}${id}/information?apiKey=${CONFIG.KEY}&includeNutrition=true`,
  DETAIL_INSTRUCTION: (id) => `${CONFIG.BASE_URL}${id}/analyzedInstructions?apiKey=${CONFIG.KEY}`,
  SIMMLIAR_RECIPE: (id) => `${CONFIG.BASE_URL}${id}/similar?apiKey=${CONFIG.KEY}`,
  NUTRITION_IMAGE: (id) => `${CONFIG.BASE_URL}${id}/nutritionLabel.png?apiKey=${CONFIG.KEY}`,
  ARTICLES: `${CONFIG.BASE_URL_ARTICLE}articles`,
};

export default API_ENDPOINT;
