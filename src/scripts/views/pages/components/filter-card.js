const FilterCard = () => `
<div class="recipes__filter-card-wrapper" id="filterCard">
  <div class="recipes__filter-card">
    <p class="recipes__filter-card__close">&times;</p>
    <h5>Filter Resep</h5>
    <form action="">
      <label for="foodType">Tipe Masakan</label>
      <select id="foodType">
        <option value="all">Semua Jenis</option>
        <option value="appetizer">Makanan Pembuka</option>
        <option value="main course">Makanan Utama</option>
        <option value="dessert">Makanan Penutup</option>
        <option value="breakfast">Sarapan</option>
        <option value="salad">Salad</option>
        <option value="soup">Sup</option>
        <option value="drink">Minuman</option>
      </select>
      <hr>
      <label>Nutrisi</label>
      <label for="minCalorie" class="label-inner">Kalori</label>
      <div class="recipes__filter-card__nutrition-wrapper">
        <input type="text" placeholder="Min" id="minCalorie">
        <input type="text" placeholder="Max" id="maxCalorie">
      </div>
      <label for="minCholesterol" class="label-inner">Kolestrol</label>
      <div class="recipes__filter-card__nutrition-wrapper">
        <input type="text" placeholder="Min" id="minCholesterol">
        <input type="text" placeholder="Max" id="maxCholesterol">
      </div>
      <label for="minFat" class="label-inner">Lemak</label>
      <div class="recipes__filter-card__nutrition-wrapper">
        <input type="text" placeholder="Min" id="minFat">
        <input type="text" placeholder="Max" id="maxFat">
      </div>
      <hr>
      <label for="diet">Diet</label>
      <div id="diet" class="recipes__filter-card__diet">
        <input type="checkbox" id="diet1" value="vegetarian">
        <label for="diet1" class="label-inner-checkbox"> Vegetarian</label><br>
        <input type="checkbox" id="diet2" value="pascetarian">
        <label for="diet2" class="label-inner-checkbox"> Pascetarian</label><br>
        <input type="checkbox" id="diet3" value="gluten">
        <label for="diet3" class="label-inner-checkbox"> Gluten Free</label><br>
      </div>
      <hr>
      <label for="allergy">Alergi</label>
      <div id="allergy" class="recipes__filter-card__allergy">
        <input type="checkbox" id="allergy1" value="peanut">
        <label for="allergy1" class="label-inner-checkbox"> Kacang</label><br>
        <input type="checkbox" id="allergy2" value="egg">
        <label for="allergy2" class="label-inner-checkbox"> Telur</label><br>
        <input type="checkbox" id="allergy3" value="seafood">
        <label for="allergy3" class="label-inner-checkbox"> Seafood</label><br>
      </div>
      <div class="recipes__filter-button-wrapper">
        <button type"button" id="filterButtonMobile" class="recipes__filter-button__mobile">Search</button>
        <button type"button" id="filterButtonDesktop" class="recipes__filter-button__desktop">Search</button>
      </div>
    </form>
  </div>
</div>
`;

export default FilterCard;
