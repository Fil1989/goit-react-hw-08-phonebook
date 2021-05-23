import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import HomePage from './components/HomePage';
import Registration from './components/Registration';
import LogIn from './components/LogIn';
import Contacts from './components/Contacts';
import { connect } from 'react-redux';
import authSelectors from './redux/auth-selectors';
import image from './images/avatar.png';
import { logout } from './redux/operations';

function App({ isAutenticated, myLogin, avatar, onLogout }) {
  return (
    <div className="App">
      <header className="menu">
        <div>
          <NavLink to="/" className="menu-main">
            Головна
          </NavLink>
          {isAutenticated ? (
            <NavLink to="/contacts" className="menu-main">
              Контакти
            </NavLink>
          ) : (
            <span>Контакти</span>
          )}
        </div>

        {isAutenticated ? (
          <div className="menu-profile">
            <span>
              <img src={avatar} alt="Avatar" width="20" /> Welcome,{myLogin}
            </span>
            <button onClick={onLogout}>
              <NavLink to="/register">Logout</NavLink>
            </button>
          </div>
        ) : (
          <div>
            <NavLink to="/register" className="menu-profile">
              Реєстрація
            </NavLink>
            <NavLink to="/login" className="menu-profile">
              Логін
            </NavLink>
          </div>
        )}
      </header>

      <Switch>
        <Route path="/" exact component={HomePage} />
        {/* <Route path="/register" component={Registration} /> */}
        <Route path="/register" component={Registration}>
          {isAutenticated && <Redirect to="/contacts" />}
        </Route>
        <Route path="/contacts" component={Contacts}>
          {!isAutenticated && <Redirect to="/" />}
        </Route>
        <Route path="/login" component={LogIn}>
          {isAutenticated && <Redirect to="/contacts" />}
        </Route>
        )
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
const mapStateToProps = state => ({
  isAutenticated: authSelectors.getIsAunticated(state),
  myLogin: authSelectors.getUserLogin(state),
  avatar: image,
});

const mapDispatchToProps = {
  onLogout: () => logout(),
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
