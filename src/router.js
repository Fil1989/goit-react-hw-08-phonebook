import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Registration from './components/Registration';
import LogIn from './components/LogIn';
import Contacts from './components/Contacts';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/register" component={Registration} />
      <Route path="/login" component={LogIn} />
      <Route path="/contacts" component={Contacts} />
    </Switch>
  );
};
export default Routes;
