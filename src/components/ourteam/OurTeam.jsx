import { useState } from "react";

const OurTeam = () => {
  const [currentImg, setCurrentImg] = useState(null);

  const showImg = (e) => {
    e.target.style.opacity = 1;
    e.target.previousElementSibling.style.opacity = 1;
    setCurrentImg(
      <div className="members-img">
        <h4>{e.target.previousElementSibling.textContent}</h4>
        <img loading="lazy" src={e.target.parentElement.dataset.img} alt="Members image" />
      </div>
    );
  };

  const hideImg = (e) => {
    e.target.style.opacity = 0.5;
    e.target.previousElementSibling.style.opacity = 0;
    setCurrentImg(null);
  };

  return (
    <section className="our-team">
      <div className="heading">
        <h1>
          <span>Founding</span> <span>Team</span>
        </h1>
      </div>
      <hr className="sticky"/>

      <div className="content">
        <div className="members-cont">
          <div
            className="member"
            id="founder"
            data-img="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2021/01/15091432/Raj5225-min-768x1164.jpg"
          >
            <h4>Founder</h4>
            <h2 onMouseEnter={showImg} onMouseLeave={hideImg}>
              Raj Shamani
            </h2>
          </div>
          <div
            className="member"
            id="co-founder"
            data-img="https://d3vk3ilzkajryp.cloudfront.net/hox-website/image%20445.webp"
          >
            <h4>Co-Founder</h4>
            <h2 onMouseEnter={showImg} onMouseLeave={hideImg}>
              Neeraj Kumawat
            </h2>
          </div>
        </div>

        {currentImg}
      </div>

      <hr />
    </section>
  );
};

export default OurTeam;
