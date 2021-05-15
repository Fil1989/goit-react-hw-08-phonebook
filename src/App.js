import { Switch, Route, NavLink } from 'react-router-dom';
import HomePage from './components/HomePage';
import Registration from './components/Registration';
import LogIn from './components/LogIn';
import Contacts from './components/Contacts';
// import Routes from './router';

function App() {
  return (
    <div className="App">
      <header className="menu">
        <div>
          <NavLink to="/" className="menu-main">
            Головна
          </NavLink>
          <NavLink to="/contacts" className="menu-main">
            Контакти
          </NavLink>
        </div>
        <div>
          <NavLink to="/register" className="menu-profile">
            Реєстрація
          </NavLink>
          <NavLink to="/login" className="menu-profile">
            Логін
          </NavLink>
        </div>
      </header>

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/register" component={Registration} />
        <Route path="/login" component={LogIn} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </div>
  );
}

export default App;
