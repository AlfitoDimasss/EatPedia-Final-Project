import CONFIG from './config';

const API_ENDPOINT = {
  LATEST_RECIPE: `${CONFIG.BASE_URL}?apiKey=${CONFIG.KEY}&number=6&addRecipeInformation=true`,
  ALL_RECIPE: `${CONFIG.BASE_URL}movie/now_playing?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
  DETAIL: (id) => `${CONFIG.BASE_URL}movie/${id}?api_key=${CONFIG.KEY}`,
};

export default API_ENDPOINT;
