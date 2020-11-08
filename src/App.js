// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Connexion from './Connexion';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
          <Route path="/connexion">
            <Header />
            <Connexion />
            
             
          </Route>



         <Route to="/">
            <Header />
            <Home />

         </Route>
       </Switch>
     </Router>
      
    </div>
  );
}

export default App;
