import React from 'react';
import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignupPage from './Components/SignupPage/SignupPage';

function App() {
  return (<Router>
    <div className="App">
        <Switch>

          <Route exact path="/">     
            <LoginPage />
          </Route>

           <Route path="/signup">
            <SignupPage />
          </Route>

          {/*<Route path="/moviedetail:id">  
            <Moviedetails/>
          </Route> */}

        </Switch>
    </div>
  </Router>
  );
}

export default App;
