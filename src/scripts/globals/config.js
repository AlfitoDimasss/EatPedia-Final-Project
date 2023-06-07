const CONFIG = {
  KEY: '6ebe61cabaf44fccbbe8c6284e83f45d',
  BASE_URL: 'https://api.spoonacular.com/recipes/',
  DEFAULT_LANGUAGE: 'en-us',
  BASE_URL_ARTICLE: 'https://eatpedia-article-api.up.railway.app/',
  CACHE_NAME: `EatPedia-${new Date().toISOString()}`,
  DATABASE_NAME: 'eatpedia-recipes-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'recipes',
};

export default CONFIG;
