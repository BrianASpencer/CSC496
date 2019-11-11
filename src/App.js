import React,{useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  //for future searchability
  const [query, setQuery] = useState('');

  useEffect( () => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    //update fetch with search -- 
    const response = await fetch('http://gtest.dev.wwbtc.com/json/rec');
    const data = await response.json();
    setRecipes(data);
    console.log(data);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className = "search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className = "search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe 
        title={recipe.title}
        key={recipe.title}
        imageURL={recipe.field_images}
        ingredients={recipe.field_ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
