const Contacts = (props) => {
  const { email, whatsapp, call } = props.text;

  return (
    <div className="contacts">
      <a className="email" href="mailto:contact@houseofx.in">
        <button>{email}</button>
      </a>
      <a className="whatsapp" href="https://wa.me/+917760930987">
        <button>{whatsapp}</button>
      </a>
      <a className="call" href="tel:+917760930987">
        <button>{call}</button>
      </a>
    </div>
  );
};

export default Contacts;
