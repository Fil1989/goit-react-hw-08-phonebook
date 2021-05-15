const LogIn = () => {
  return (
    <section className="login">
      <form>
        <label htmlFor="addEmail">Email</label>
        <input
          type="tel"
          name="number"
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
          Log In
        </button>
      </form>
    </section>
  );
};
export default LogIn;
