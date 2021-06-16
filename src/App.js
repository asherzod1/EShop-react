import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeP from './Pages/HomeP';
function App() {

  const routes = [
    {
      path:'/', comp:HomeP
    }
  ]
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {routes.map(item => 
            <Route path={item.path} component={item.comp} key={item.comp}></Route>
            )}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
