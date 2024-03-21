import './App.css';

import HomePage from './pages/HomePage';
import Notifications from './pages/Notifications';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
          <NavBar/>
          <div className='pageContainer'>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/notifications" component={Notifications} />
            </Switch>
          </div>
        </Router>

    </div>
  );
}

export default App;
