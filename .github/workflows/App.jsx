import React from 'react';
import './App.css';
import Contact_us from './Routers_learn/Contact_us';
import Home from './Routers_learn/Home';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Dashboard from './Routers_learn/Dashboard';
import About_ from './Routers_learn/About_';
import State_in_react from './Components/State_in_react';

function App(props) {
  return (
   <div> 
    
    <Router>
      <Home/>
             <Switch>
  {/* {<Route exact path ="/" component = {Home} /> }
    <Route exact path ="/contact" component={Contact_us} />
    <Route exact path ="/dashboard" component = {Dashboard} />
    <Route exact path ="/about" component={About_} /> */}
    
    <Route exact path='/dashboard'>
<Dashboard/>
    </Route>
    <Route exact path='/contact'>
<Contact_us/>
    </Route>
    <Route exact path='/analyser'>
      <State_in_react/>
    </Route>
    
    <Route exact path='/about'>
<About_/>
    </Route>
     </Switch>
          </Router>
       
       </div>
  );
}

export default App;
