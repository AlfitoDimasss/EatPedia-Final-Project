const LatestRecipe = () => `
  <section class="section latest-recipe-section">
    <div class="latest-recipe">
      <h1>Resep Terbaru</h1>
      <p>Resep-resep masakan terbaru yang diperbaharui setiap harinya.</p>
      <div class="latest-recipe__recipe-container" id="recipeContainer"></div>
      <a href="#/recipes" class="latest-recipe__btn-selengkapnya">Selengkapnya</a>
    </div>
    <img src="./images/honey.png" alt="Honey" crossorigin="anonymous" class="latest-recipe__decoration latest-recipe__decoration-1">
    <img src="./images/peach.png" alt="Peach" crossorigin="anonymous" class="latest-recipe__decoration latest-recipe__decoration-2">
  </section>
`;

export default LatestRecipe;
