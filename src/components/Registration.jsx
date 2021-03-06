import { registerAUser } from '../redux/operations';
import { connect } from 'react-redux';

const Registration = ({ submitOfRegistration }) => {
  return (
    <section className="registration">
      <form onSubmit={submitOfRegistration} className="add_contact__form">
        <label htmlFor="addContact">Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="Name of contact"
          //   onChange={onChange}
          id="addContact"
        />
        <label htmlFor="addEmail">Email</label>
        <input
          type="email"
          name="email"
          //   pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          placeholder="Enter an email"
          // onChange={onChange}
          id="addEmail"
        />
        <label htmlFor="addPassword">Password</label>

        <input
          type="password"
          name="password"
          //   pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          placeholder="Enter a password"
          // onChange={onChange}
          id="addPassword"
        />
        <button type="submit" className="btn">
          Register
        </button>
      </form>
    </section>
  );
};

const mapDispatchToProps = dispatch => ({
  submitOfRegistration: e => dispatch(registerAUser(e)),
});

export default connect(null, mapDispatchToProps)(Registration);
