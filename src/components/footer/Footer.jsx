import { NavLink } from "react-router-dom";

const Footer = () => {
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
      link: "https://instagram.com/yourhandle",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/145/145807.png", // LinkedIn
      link: "https://linkedin.com/in/yourhandle",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968958.png", // X (Twitter)
      link: "https://twitter.com/yourhandle",
      class: "twitter",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/145/145802.png", // Facebook
      link: "https://facebook.com/yourhandle",
    },
  ];
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
            {followUs.map((acc,idx) => {
              return (
                <a className="icon" target="_blank" key={idx} href={acc.link}>
                  <img loading="lazy" src={acc.image} className={acc.class} alt="" />
                </a>
              );
            })}
          </div>

          <p>
            Want us to analyze your brand? Enter your Instagram handle below.
          </p>
          <div className="input-cont">
            <input type="text" placeholder="Enter Your Instagram Handle" />
            <button>Send</button>
          </div>
        </div>
      </div>

      <hr />

      <p className="copyright">© 2025 Copyright. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
