import { handleDelete } from '../../redux/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function ContactList({ filter, contacts, onDelete }) {
  return (
    <>
      {filter.length === 0 &&
        contacts.map(contact => {
          return (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button onClick={() => onDelete(contact.id)}>Delete</button>
            </li>
          );
        })}
    </>
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
    onDelete: id => dispatch(handleDelete(id)),
  };
};
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
