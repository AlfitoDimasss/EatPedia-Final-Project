import { createRecipeItemTemplate } from '../views/templates/template-creator';
import API_ENDPOINT from '../globals/api-endpoint';

let query = API_ENDPOINT.BASE_SEARCH;

const getKeyword = () => {
  const keyword = document.getElementById('recipesSearch').value;
  if (keyword !== '') {
    query += `&query=${keyword}`;
  }
};

const getFoodType = () => {
  const foodType = document.getElementById('foodType').value;
  if (foodType !== 'all') {
    query += `&type=${foodType}`;
  }
};

const getNutrition = () => {
  const minCalorie = document.getElementById('minCalorie').value;
  if (minCalorie !== '') {
    query += `&minCalories=${minCalorie}`;
  }

  const maxCalorie = document.getElementById('maxCalorie').value;
  if (maxCalorie !== '') {
    query += `&maxCalories=${maxCalorie}`;
  }

  const minCholesterol = document.getElementById('minCholesterol').value;
  if (minCholesterol !== '') {
    query += `&minCholesterol=${minCholesterol}`;
  }

  const maxCholesterol = document.getElementById('maxCholesterol').value;
  if (maxCholesterol !== '') {
    query += `&maxCholesterol=${maxCholesterol}`;
  }

  const minFat = document.getElementById('minFat').value;
  if (minFat !== '') {
    query += `&minFat=${minFat}`;
  }

  const maxFat = document.getElementById('maxFat').value;
  if (maxFat !== '') {
    query += `&maxFat=${maxFat}`;
  }
};

const getDiet = () => {
  const diet1 = document.getElementById('diet1').checked;
  const diet2 = document.getElementById('diet2').checked;
  const diet3 = document.getElementById('diet3').checked;

  if (diet1 || diet2 || diet3) {
    query += '&diet=';
    if (diet1) query += `,${diet1.value}`;
    if (diet2) query += `,${diet2.value}`;
    if (diet3) query += `,${diet3.value}`;
  }
};

const getAllergy = () => {
  const allergy1 = document.getElementById('allergy1').checked;
  const allergy2 = document.getElementById('allergy2').checked;
  const allergy3 = document.getElementById('allergy3').checked;

  if (allergy1 || allergy2 || allergy3) {
    query += '&intolerance=';
    if (allergy1) query += `,${allergy1.value}`;
    if (allergy2) query += `,${allergy2.value}`;
    if (allergy3) query += `,${allergy3.value}`;
  }
};

const SearchFilterButtonInitiator = {
  init({ btnMobile, btnDesktop, container, card }) {
    btnMobile.addEventListener('click', async (e) => {
      e.preventDefault();
      query = API_ENDPOINT.BASE_SEARCH;
      container.innerHTML = '';
      getKeyword();
      getFoodType();
      getNutrition();
      getDiet();
      getAllergy();
      const resp = await fetch(query);
      const resultsJson = await resp.json();
      const { results } = resultsJson;
      card.style.display = 'none';
      results.forEach((result) => {
        container.innerHTML += createRecipeItemTemplate(result);
      });
    });

    btnDesktop.addEventListener('click', async (e) => {
      e.preventDefault();
      query = API_ENDPOINT.BASE_SEARCH;
      container.innerHTML = '';
      getKeyword();
      getFoodType();
      getNutrition();
      getDiet();
      getAllergy();
      const resp = await fetch(query);
      const resultsJson = await resp.json();
      const { results } = resultsJson;
      results.forEach((result) => {
        container.innerHTML += createRecipeItemTemplate(result);
      });
    });
  },
};

export default SearchFilterButtonInitiator;
