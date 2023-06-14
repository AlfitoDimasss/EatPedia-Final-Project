const CONFIG = {
  KEY: process.env.SPOONACULAR_API_KEY,
  BASE_URL: 'https://api.spoonacular.com/recipes/',
  DEFAULT_LANGUAGE: 'en-us',
  BASE_URL_ARTICLE: 'https://eatpedia-article-api.up.railway.app/',
  CACHE_NAME: new Date().toISOString(),
  DATABASE_NAME: 'eatpedia-recipes-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'recipes',
};

export default CONFIG;

// KEY SATU: 6ebe61cabaf44fccbbe8c6284e83f45d
// KEY DUA: 21f86240969c46f99896f1c07c9c6be0
// KEY TIGA: e58f22c3b9384efca9054f10dceaced6
