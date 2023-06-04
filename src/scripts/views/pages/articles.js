import EatpediaAPISource from '../../data/eatpedia-article-source';
import { createArticleItemTemplate } from '../templates/template-creator';
import dummyArticle from '../../data/dummy-article-data.json';

const Articles = {
  async render() {
    return `
      <div class="content" id="content"></div>
    `;
  },

  async afterRender() {
    const content = document.querySelector('.content');
    content.innerHTML += `
    <section class="section">
      <h1 class="recipes__title">Semua Artikel</h1>
      <div class="article__article-container" id="articleContainer"></div>
    </section>
    `;
    const articleContainer = document.getElementById('articleContainer');
    const articles = await EatpediaAPISource.getArticles();
    // const articles = dummyArticle;
    articles.forEach((article) => {
      articleContainer.innerHTML += createArticleItemTemplate(article);
    });
  },
};

export default Articles;
