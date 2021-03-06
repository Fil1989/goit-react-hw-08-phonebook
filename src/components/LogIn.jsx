import { connect } from 'react-redux';
import { loginOperation } from '../redux/operations';

const LogIn = ({ login }) => {
  return (
    <section className="login">
      <form onSubmit={login}>
        <label htmlFor="addEmail">Email</label>
        <input
          type="email"
          name="email"
          //   pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          placeholder="Enter an email"
          //   onChange={onChange}
          id="addEmail"
        />
        <label htmlFor="addPassword">Password</label>

        <input
          type="password"
          name="password"
          //   pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          placeholder="Enter a password"
          //   onChange={onChange}
          id="addPassword"
        />
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </section>
  );
};


const mapDispatchToProps = {
  login: e => loginOperation(e),
};

export default connect(null, mapDispatchToProps)(LogIn);
