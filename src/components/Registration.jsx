const Registration = () => {
  return (
    <section className="registration">
      <form /*onSubmit={}*/ className="add_contact__form">
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
          Register
        </button>
      </form>
    </section>
  );
};
export default Registration;
