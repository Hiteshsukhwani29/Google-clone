import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import SearchPage from './Pages/SearchPage/SearchPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/search'>
            <SearchPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
