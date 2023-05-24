import Home from '../views/pages/home';
import Recipes from '../views/pages/recipes';
import Favorites from '../views/pages/favorites';
import Articles from '../views/pages/articles';
import RecipeDetails from '../views/pages/recipe-details';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/recipes': Recipes,
  '/favorites': Favorites,
  '/articles': Articles,
  '/detail/:id': RecipeDetails,
};

export default routes;
