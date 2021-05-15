import { useEffect } from 'react';
// import ContactList from './components/ContactList';
import FiltredList from './components/FiltredList';
import ContactForm from './components/ContactForm';
import { connect } from 'react-redux';
import { takeContactsFromServer } from './redux/operations';
import React, { Suspense } from 'react';

const ContactList = React.lazy(() => import('./components/ContactList'));

function App({ filter, onTakeContactsFromServer }) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => onTakeContactsFromServer(), []);

  return (
    <div className="App">
      <h2>Phonebook</h2>
      <ContactForm />

      <ul>
        {filter.length === 0 && (
          <Suspense fallback="Wait">
            <ContactList />
          </Suspense>
        )}
        {filter.length !== 0 && <FiltredList />}
      </ul>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    filter: state.filter,
    contacts: state.contacts,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onTakeContactsFromServer: () => dispatch(takeContactsFromServer()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
