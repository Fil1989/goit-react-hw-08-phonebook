import {
  handleChange,
  handleFilterChange,
  handleSubmit,
} from '../redux/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function ContactForm({ filter, onChange, onFilterChange, onSubmit }) {
  return (
    <>
      <section className="add_contact">
        <form onSubmit={onSubmit} className="add_contact__form">
          <label htmlFor="addContact">Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="Name of contact"
            onChange={onChange}
            id="addContact"
          />
          <label htmlFor="addNumber">Number</label>
          <input
            type="tel"
            name="number"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            placeholder="Enter a number"
            onChange={onChange}
            id="addNumber"
          />
          <button type="submit" className="btn">
            Add contact
          </button>
        </form>
      </section>
      <section>
        <h2>Contacts</h2>
        <label htmlFor="addFilter">Filter contacts by name</label>

        <input
          name="filter"
          placeholder="Enter a filter"
          type="text"
          onChange={onFilterChange}
          value={filter}
          id="addFilter"
        />
      </section>
    </>
  );
}
const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    onChange: () => dispatch(handleChange()),
    onFilterChange: e => dispatch(handleFilterChange(e)),
    onSubmit: e => dispatch(handleSubmit(e)),
  };
};
console.log(window);

ContactForm.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
