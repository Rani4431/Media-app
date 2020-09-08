import React from 'react';
import './App.css'; 
import Login from '../src/LoginPage/login'
import MediaPage from '../src/MediaPage/mediaPage'
import Analytics from '../src/Analytics/analytics'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
    <Route path="/" component={Login} exact/>  

<Route path="/mediaPage" component={MediaPage}/>  
<Route path="/analytics" component={Analytics}/> 
</Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
