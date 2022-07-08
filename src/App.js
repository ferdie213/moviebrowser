import './App.css';
import { useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import MovieView from './components/MovieView';
import SearchView from './components/SearchView';
import NotFoundPage from './components/NotFoundPage';
import { Switch, Route } from 'react-router-dom'


function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if(searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=958e286c0fe0fbcd0e0f1c099cbd3f4d&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data.results)
      })
    }
  }, [searchText])

  return (
    <div>
      <Navbar searchText={ searchText } setSearchText={ setSearchText } />
      <Switch>
          <Route path="/" exact>
              <HomeView />
          </Route>
          <Route path="/about" component={AboutView} />
          <Route path="/search">
            <SearchView keyword={searchText} searchResults={searchResults} />
          </Route>       
          <Route path="/movies/:id" component={MovieView} />
          <Route path="/404" component={NotFoundPage} />
      </Switch>  
    </div>
  );
}

export default App;
