const Doubts = () => {
  return (
    <section className="doubts">
      <div className="heading">
        <h1><span>Got</span> <span>Doubts</span></h1>
      </div>
      <div className="para">
        <p>Feel free to message us on WhatsApp! <br /> Our team is always ready to help with any questions or concerns. <br /> We're just one message away — let's talk!</p>
      </div>
      <div className="contacts">
        <a className="email" href="mailto:contact@houseofx.in">
            <button>Email</button>
        </a>
        <a className="whatsapp" href="https://wa.me/+917760930987">
            <button>Whatsapp</button>
        </a>
        <a className="call" href="tel:+917760930987">
            <button>Call</button>
        </a>
      </div>
    </section>
  );
};

export default Doubts;
