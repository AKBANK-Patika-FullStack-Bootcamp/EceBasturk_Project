import './App.css';
import React from "react";
import {User} from './pages/User';
import {Apartment} from './pages/Apartment';
import {Water} from './pages/Water';
import {Electricity} from './pages/Electricity';
import {Due} from './pages/Due';
import {Home} from './pages/Home';
import {Login} from './pages/Login';
import { Resident } from './pages/Redisent';
import {NotFound} from './pages/NotFound';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    
     <Switch>
      <Route path='/' component={Login} exact/> 
<Route path="*" component={NotFound} />



     </Switch>
    </BrowserRouter>
  );
}

export default App;
//<Route path='/home' component={Home} />
{/* <Route path='/resident' component={Resident} />
<Route path="*" component={NotFound} />
       <Route path='/user' component={User}/> */}
      //  <Route path='/apartment' component={Apartment}/>

      //  <Route path='/electricity' component={Electricity} />
      //  <Route path='/water' component={Water} />
      //  <Route path='/due' component={Due} />
      // <Route path='/' component={Login} exact/> 
      // <Route path='/resident' component={Resident} />