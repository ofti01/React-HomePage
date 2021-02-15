import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import SignUp from './pages/SignUp';
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/services" exact component={Services}></Route>
        <Route path="/sign-up" exact component={SignUp}></Route>
        <Route path="/products" exact component={Products}></Route>
      </Switch>
    </Router>
  );
}

export default App;
