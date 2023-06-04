const createRecipeItemTemplate = (recipe) => `
<div class="recipe-item">
  <div class="recipe-item__header">
    <img class="recipe-item__header__poster" alt="${recipe.title}"
        src="${recipe.image || 'https://picsum.photos/id/666/800/450?grayscale'}">
  </div>
  <div class="recipe-item__content">
    <h3><a href="#">${recipe.title}</a></h3>
    <div class="recipe-item__content__icons">
      <div class="recipe-item__content__icons__icon">
        <i class="fa-solid fa-heart-pulse" style="color: #50bb2b;"></i>
        <span>${recipe.healthScore}</span>
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
      <h2>${article.title}</h2>
      <p>${article.description}</p>
    </div>
  </div>
`;

export { createRecipeItemTemplate, createArticleItemTemplate };
