import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Docs from './Docs';
import 'react-calendar/dist/Calendar.css';
import './Home.css';
import './Navbar.css';
import './doc.css';
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
      
      <Route path='/' component={Navbar}/>
      <Switch>
         <Route exact path='/' exact component={Home}/>
         </Switch>
         <Route path='/Docs' exact component={Docs}/>
      </Router>
    </div>
  );
}

export default App;
