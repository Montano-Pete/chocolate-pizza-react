import './App.css';
import Header from './Header.js';
import ImageSection from './ImageSection.js'
import Recipe from './Recipe.js';
import Footer from './Footer.js';
import IngredientList from './IngredientList';

function App() {
  return (
    <div>
      <Header />
      <ImageSection />
      <Recipe />
      <IngredientList />
      <Footer />
    </div>
  );
}

export default App;
