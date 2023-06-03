import API_ENDPOINT from '../globals/api-endpoint';

class SpoonacularSource {
  static async latestRecipe() {
    const response = await fetch(API_ENDPOINT.LATEST_RECIPE);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async searchRecipe(val) {
    const response = await fetch(`${API_ENDPOINT.BASE_SEARCH}&query=${val}`);
    const responseJson = await response.json();
    return responseJson.results;
  }
}

export default SpoonacularSource;
