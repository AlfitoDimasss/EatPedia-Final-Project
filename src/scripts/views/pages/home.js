import Jumbotron from './components/jumbotron';

const Home = {
  async render() {
    return `
      <div class="content" id="content"></div>
    `;
  },

  async afterRender() {
    const content = document.querySelector('.content');
    content.innerHTML += `
      ${Jumbotron()}
    `;
  },
};

export default Home;
