import { makeIngredients, makeInstruction, makeNutritions, makeLabel, makeEquipments } from '../../utils/detail-recipe-utilities';

const createRecipeItemTemplate = (recipe) => `
<div class="recipe-item">
  <div class="recipe-item__header">
    <img class="recipe-item__header__poster" alt="${recipe.title}"
        src="${recipe.image || 'https://picsum.photos/id/666/800/450?grayscale'}">
  </div>
  <div class="recipe-item__content">
    <h3><a href="/#/detail/${recipe.id}">${recipe.title}</a></h3>
    <div class="recipe-item__content__icons">
      <div class="recipe-item__content__icons__icon">
        <i class="fa-solid fa-heart-pulse" style="color: #50bb2b;"></i>
        <span>${recipe.healthScore || 'N/A'}</span>
        <p>Healthy</p>
      </div>
      <div class="recipe-item__content__icons__icon">
        <i class="fas fa-clock" style="color: #eab049;"></i>
        <span>${recipe.readyInMinutes}</span>
        <p>Minutes</p>
      </div>
      <div class="recipe-item__content__icons__icon">
        <i class="fas fa-utensils" style="color: #d32929;"></i>
        <span>${recipe.servings}</span>
        <p>Servings</p>
      </div>
    </div>
  </div>
</div>
`;

const createArticleItemTemplate = (article) => `
  <div class="article-item">
    <div class="article-item__header">
      <img class="article-item__header__poster" 
        src="${article.image}"
    </div>
    <div class="article-item__content">
      <h3><a href="${article.link}" target="_blank">${article.title}</a></h3>
      <p>${article.description}</p>
    </div>
  </div>
`;

const makeRecipeItem = (recipes) => {
  let item = '';
  recipes.forEach((r) => {
    item += createRecipeItemTemplate(r);
  });
  return item;
};

const createRecipeDetailTemplate = (recipe, equipments, instructions) => `
  <div class="recipe-detail">
    <h1 class="recipe-detail__title">${recipe.title}</h1>
    <div class="recipe-detail__left-side">
      <img src="${recipe.image}" alt="${recipe.title}" class="recipe-detail__image">
      <div class="recipe-detail__information">
        <div class="recipe-detail__information__item">
          <p class="recipe-detail__information__item__head">Time:</p>
          <p class="recipe-detail__information__item__body">${recipe.readyInMinutes} Min</p>
        </div>
        <div class="recipe-detail__information__item">
          <p class="recipe-detail__information__item__head">Serving:</p>
          <p class="recipe-detail__information__item__body">${recipe.servings} Portion</p>
        </div>
        <div class="recipe-detail__information__item">
          <p class="recipe-detail__information__item__head">Health Score:</p>
          <p class="recipe-detail__information__item__body">${recipe.healthScore} %</p>
        </div>
        <div class="recipe-detail__information__item">
          <p class="recipe-detail__information__item__head">Weight Point:</p>
          <p class="recipe-detail__information__item__body">${recipe.weightWatcherSmartPoints} Pts</p>
        </div>
      </div>
      <div class="recipe-detail__ingredients">
        <h5>Ingredients<h5>
        <hr>
        <ul>
          ${makeIngredients(recipe.extendedIngredients)}
        </ul>
      </div>
      <div class="recipe-detail__equipments">
        <h5>Equipment</h5>
        <ul>
          ${makeEquipments(equipments.equipment)}
        </ul>
      </div>
      <div class="recipe-detail__ingredients">
        <h5>Instruction<h5>
        <hr>
        <ul>
          ${makeInstruction(instructions)}
        </ul>
      </div>
      <div class="recipe-detail__summary">
        <h5>Summary<h5>
        <hr>
        <p>${recipe.summary}</p>
      </div>
    </div>
    <div class="recipe-detail__right-side">
      <div class="recipe-detail__nutritions">
        <h5>Nutrition Facts<h5>
        <div class="recipe-detail__nutrition">
          ${makeNutritions(recipe.nutrition)}
        </div>
      </div>
      <div class="recipe-detail__label">
        ${makeLabel()}
      </div>
    </div>
    
  </div>
`;

export { createRecipeItemTemplate, createArticleItemTemplate, createRecipeDetailTemplate };
