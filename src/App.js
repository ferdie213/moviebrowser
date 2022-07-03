import './App.css';
import { useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import SearchView from './components/SearchView';
import { Switch, Route } from 'react-router-dom'


function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

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
      </Switch>  
    </div>
  );
}

export default App;
