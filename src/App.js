import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import SignUp from './components/SignUp/SignUp';
import Cart from './components/Cart/Cart';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="font-link">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
            <PrivateRoute path='/cart'>
              <Cart />
            </PrivateRoute>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/signup'>
              <SignUp />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
