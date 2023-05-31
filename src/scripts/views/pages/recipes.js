import FilterCard from './components/filter-card';

const Recipes = {
  async render() {
    return `
      <div class="content" id="content"></div>
    `;
  },

  async afterRender() {
    const content = document.querySelector('.content');
    content.innerHTML += `
      <section class="section">
        <p class="filter-button">Pencarian menggunakan <span>Filter</span></p>
        <div class="recipes-wrapper">
          ${FilterCard()}
          <div>Container Menu</div>
        </div>
      </section>
    `;

    const filter = document.querySelector('.filter-button span');
    const filterCard = document.querySelector('.recipes__filter-wrapper');
    filter.addEventListener('click', () => {
      filterCard.style.display = 'block';
    });
  },
};

export default Recipes;
