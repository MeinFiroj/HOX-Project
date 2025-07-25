import Contacts from "../Contacts";

const Doubts = () => {
  const text = {
    email: "Email",
    whatsapp: "Whatsapp",
    call: "Call",
  };
  return (
    <section className="doubts">
      <div className="heading">
        <h1>
          <span>Got</span> <span>Doubts</span>
        </h1>
      </div>
      <div className="para">
        <p>
          Feel free to message us on WhatsApp! <br /> Our team is always ready
          to help with any questions or concerns. <br /> We're just one message
          away — let's talk!
        </p>
      </div>
      <Contacts text={text} />
    </section>
  );
};

export default Doubts;
