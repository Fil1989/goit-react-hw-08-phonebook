import { Switch, NavLink, Redirect } from 'react-router-dom';
import { useEffect } from 'react';

import { connect } from 'react-redux';
import { Suspense, lazy } from 'react';
import authSelectors from './redux/auth-selectors';
import image from './images/avatar.png';
import { getCurrentUser, logout } from './redux/operations';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomePage = lazy(() => import('./components/HomePage'));
const Registration = lazy(() => import('./components/Registration'));
const Contacts = lazy(() => import('./components/Contacts'));
const LogIn = lazy(() => import('./components/LogIn'));

function App({ isAutenticated, myLogin, avatar, onLogout, onGetCurrentUser }) {
  useEffect(() => {
    onGetCurrentUser();
    // console.log('Hello World!');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
              <NavLink to="/">Logout</NavLink>
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

      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <PublicRoute path="/" exact component={HomePage} />
          <PublicRoute path="/register" component={Registration}>
            {isAutenticated && <Redirect to="/contacts" />}
          </PublicRoute>
          <PrivateRoute path="/contacts" component={Contacts} />
          <PublicRoute path="/login" component={LogIn}>
            {isAutenticated && <Redirect to="/contacts" />}
          </PublicRoute>
          )
          <Redirect to="/" />
        </Switch>
      </Suspense>
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
  onGetCurrentUser: () => getCurrentUser(),
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
