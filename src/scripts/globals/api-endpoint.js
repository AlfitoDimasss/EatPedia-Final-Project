import CONFIG from './config';

const API_ENDPOINT = {
  LATEST_RECIPE: `${CONFIG.BASE_URL}?apiKey=${CONFIG.KEY}&number=6&addRecipeInformation=true`,
  BASE_SEARCH: `${CONFIG.BASE_URL}?apiKey=${CONFIG.KEY}&number=12&addRecipeInformation=true`,
  ARTICLES: `${CONFIG.BASE_URL_ARTICLE}articles`,
};

export default API_ENDPOINT;
