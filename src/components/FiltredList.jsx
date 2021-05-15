import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleDelete } from '../redux/actions';

const FiltredList = props => {
  function filteredList() {
    return props.contacts.filter(contact =>
      contact.name.toLowerCase().includes(props.filter.toLowerCase()),
    );
  }

  return (
    <>
      {filteredList().map(contact => {
        return (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button onClick={() => props.onDelete(contact.id)}>Delete</button>
          </li>
        );
      })}
    </>
  );
};

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
    filter: state.filter,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => dispatch(handleDelete(id)),
  };
};
FiltredList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(FiltredList);
