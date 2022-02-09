import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Search from './Pages/Search/Search';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/'>
            <Home/>
          </Route>
          <Route path='/search'>
            <Search btns/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
