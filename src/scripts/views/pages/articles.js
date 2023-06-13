import EatpediaAPISource from '../../data/eatpedia-article-source';
import { createArticleItemTemplate } from '../templates/template-creator';
import { showLoader, hideLoader } from '../../utils/loader-indicator-util';

const Articles = {
  async render() {
    return `
      <div class="content" id="content"></div>
      <div id="loaderContainer"></div>
    `;
  },

  async afterRender() {
    const content = document.querySelector('.content');
    content.innerHTML += `
    <section class="section">
      <h1 class="article__title">Semua Artikel</h1>
      <div class="article__article-container" id="articleContainer"></div>
    </section>
    `;
    const loaderContainer = document.getElementById('loaderContainer');
    loaderContainer.innerHTML += `
      <div class="loader loader-detail" id="loader"></div>
    `;

    const loader = document.getElementById('loader');
    showLoader(loader);
    const articles = await EatpediaAPISource.getArticles();
    hideLoader(loader);
    const articleContainer = document.getElementById('articleContainer');
    articles.forEach((article) => {
      articleContainer.innerHTML += createArticleItemTemplate(article);
    });
  },
};

export default Articles;
