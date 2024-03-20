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
      <NavBar/>
      <div className='pageContainer'>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/notifications" component={Notifications} />
          </Switch>
        </Router>

      </div>
    </div>
  );
}

export default App;
