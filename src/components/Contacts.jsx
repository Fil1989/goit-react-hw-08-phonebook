import { useEffect } from 'react';
// import React, { Suspense } from 'react';
import FiltredList from './FiltredList';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import { connect } from 'react-redux';
import { takeContactsFromServer } from '../redux/operations';
// const ContactList = React.lazy(() => import('./ContactList'));

const Contacts = ({ filter, onTakeContactsFromServer }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    onTakeContactsFromServer();
  }, []);
  return (
    <main className="main">
      <ContactForm />

      <ul>
        {filter.length === 0 && (
          //   <Suspense fallback="Wait">
          <ContactList />
          //   </Suspense>
        )}
        {filter.length !== 0 && <FiltredList />}
      </ul>
    </main>
  );
};
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
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
// export default Contacts;
