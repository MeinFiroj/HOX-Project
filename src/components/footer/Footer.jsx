import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Footer = () => {
  const { register, handleSubmit, reset } = useForm();
  const quickLinks = [
    { text: "Careers", link: "/careers" },
    { text: "Disclaimer Policy", link: "/disclaimer" },
    { text: "Privacy Policy", link: "/privacy-policy" },
    { text: "Terms of Service", link: "/terms" },
    { text: "Contact Us", link: "/contact" },
    { text: "Become a Partner", link: "/become-a-partner" },
  ];

  const followUs = [
    {
      image: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png", // Instagram
      link: "https://www.instagram.com/houseofx.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/145/145807.png", // LinkedIn
      link: "https://www.linkedin.com/company/house-of-x-01/",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968958.png", // X (Twitter)
      link: "https://x.com/houseofx_in",
      class: "twitter",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/145/145802.png", // Facebook
      link: "https://www.facebook.com/people/House-Of-X/100091892672838/?mibextid=LQQJ4d",
    },
  ];

  const onSubmit = () => {
    toast.success(
      "Thanks for submitting! Our team will review your Instagram handle and share insights within 24 hours."
    );
    reset();
  };
  return (
    <footer>
      <div className="content">
        <div className="heading">
          <h1>
            <span>
              House <br /> of <br /> X
            </span>{" "}
            <span className="endless"> = Endless Potential</span>
          </h1>
        </div>

        <div className="links">
          <h4>Quick Links</h4>
          {quickLinks.map((link, idx) => (
            <NavLink className={"link"} key={idx} to={link.link}>
              {link.text}
            </NavLink>
          ))}
        </div>

        <div className="connect">
          <h4>Connect With Us</h4>
          <div className="icons">
            {followUs.map((acc, idx) => {
              return (
                <a className="icon" target="_blank" key={idx} href={acc.link}>
                  <img
                    loading="lazy"
                    src={acc.image}
                    className={acc.class}
                    alt=""
                  />
                </a>
              );
            })}
          </div>

          <p>
            Want us to analyze your brand? Enter your Instagram handle below.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="input-cont">
            <input
              {...register("Instagram Handle", { required: true })}
              type="text"
              placeholder="Enter Your Instagram Handle"
            />
            <button>Send</button>
          </form>
        </div>
      </div>

      <hr />

      <p className="copyright">© 2025 Copyright. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
