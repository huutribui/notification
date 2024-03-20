import './App.css';

import HomePage from './pages/HomePage';
import Notifications from './pages/Notifications';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/notifications" component={Notifications} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
