import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Contacts from "../../components/Contacts";

const BePartner = () => {
  const navigate = useNavigate();
  const contacts = {
    email : 'Mail : contact@houseofx.in',
    call : 'Phone : +917760930987',
  }
  return (
    <div className="be-partner">
      <h1>BECOME A PARTNER</h1>

      <p>
        Become a partner with HOUSE OF X, the ultimate destination for
        manufacturers, vendors, and service providers. Whether you specialize in
        manufacturing, sourcing, packaging, transportation, or any other
        category, unleash your potential and be a perfect fit in our thriving
        ecosystem. Connect with us now and embark on an exciting journey of
        growth and success.
      </p>

      <Contacts text = {contacts}/>

      <button className="joining-btn" onClick={()=> navigate('/become-a-partner/joining-form')}>Join Now</button>

      <hr />

      <Outlet />
    </div>
  );
};

export default BePartner;
