const FilterCard = () => `
<div class="recipes__filter-wrapper">
  <div class="recipes__filter">
    <h5>Filter Resep</h5>
    <form action="">
      <label for="foodType">Tipe Masakan</label>
      <select name="" id="foodType" class="recipes__filter__food-type">
        <option value="">Semua Jenis</option>
        <option value="">Breakfast</option>
        <option value="">Appetizer</option>
        <option value="">Drink</option>
      </select>
      <hr class="hr-form">
      <label for="">Nutrisi</label>
      <label for="kaloriMin" class="label-inner">Kalori</label>
      <div class="recipes__filter__calori-wrapper">
        <input type="text" placeholder="Min" id="kaloriMin" class="recipes__filter__calori">
        <input type="text" placeholder="Max" id="kaloriMax" class="recipes__filter__calori">
      </div>
      <label for="kolestrolMin" class="label-inner">Kolestrol</label>
      <div class="recipes__filter__calori-wrapper">
        <input type="text" placeholder="Min" id="kolestrolMin" class="recipes__filter__calori">
        <input type="text" placeholder="Max" id="kolestrolMax" class="recipes__filter__calori">
      </div>
      <label for="lemakMin" class="label-inner">Lemak</label>
      <div class="recipes__filter__calori-wrapper">
        <input type="text" placeholder="Min" id="lemakMin" class="recipes__filter__calori">
        <input type="text" placeholder="Max" id="lemakMax" class="recipes__filter__calori">
      </div>
      <hr class="hr-form">
      <label for="diet">Diet</label>
      <div id="diet" class="recipes__filter-diet">
        <input type="checkbox" id="vehicle1" value="Bike">
        <label for="vehicle1" class="label-inner-checkbox"> Vegetarian</label><br>
        <input type="checkbox" id="vehicle2" value="Car">
        <label for="vehicle2" class="label-inner-checkbox"> Pascetarian</label><br>
        <input type="checkbox" id="vehicle3" value="Boat">
        <label for="vehicle3" class="label-inner-checkbox"> Gluten Free</label><br>
      </div>
      <hr class="hr-form">
      <label for="alergi">Alergi</label>
      <div id="alergi" class="recipes__filter-allergy">
        <input type="checkbox" id="vehicle1" value="Bike">
        <label for="vehicle1" class="label-inner-checkbox"> Kacang</label><br>
        <input type="checkbox" id="vehicle2" value="Car">
        <label for="vehicle2" class="label-inner-checkbox"> Telur</label><br>
        <input type="checkbox" id="vehicle3" value="Boat">
        <label for="vehicle3" class="label-inner-checkbox"> Seafood</label><br>
      </div>
      <div class="recipes__allergy-button-wrapper">
        <button type"button" class="recipes__filter-button">Search</button>
      </div>
    </form>
  </div>
</div>
`;

export default FilterCard;
