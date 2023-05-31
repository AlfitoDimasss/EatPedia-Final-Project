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
        <p class="filter-button">Filter</p>
        <div class="recipes-wrapper">
          ${FilterCard()}
        </div>
      </section>
    `;

    const filter = document.querySelector('.filter-button');
    filter.addEventListener('click', () => {
      const filterCard = document.querySelector('.recipes__filter-wrapper');
      filterCard.style.display = 'block';
    });
  },
};

export default Recipes;
