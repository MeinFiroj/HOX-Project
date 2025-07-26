import gsap from "gsap";
import { useState } from "react";

import nikhilKamath from "../../assets/images/investors/nikhil-kamath.png";
import varunAlagh from "../../assets/images/investors/varun-alagh.png";
import ghazalAlagh from "../../assets/images/investors/ghazal-alagh.png";
import asishMohapatra from "../../assets/images/investors/asish-mohapatra.webp";
import shashankKumar from "../../assets/images/investors/shashank-kumar.webp";
import sahilBarua from "../../assets/images/investors/sahil-barua.webp";
import viditAatrey from "../../assets/images/investors/vidit-aatrey.webp";
import sanjeevBarnwal from "../../assets/images/investors/sanjeev-barnwal.webp";
import visheshKhurana from "../../assets/images/investors/vishesh-khurana.webp";
import ankushSachdeva from "../../assets/images/investors/ankush-sachdeva.webp";
import arjunVaidya from "../../assets/images/investors/arjun-vaidya.webp";
import trishaVaidya from "../../assets/images/investors/trisha-vaidya.webp";
import aakritVaish from "../../assets/images/investors/aakrit-vaish.webp";
import mitenSampat from "../../assets/images/investors/mitten-sampat.webp";
import dilipkumarKhandelwal from "../../assets/images/investors/dilipkumar-khandelwal.webp";
import sandeepJethwani from "../../assets/images/investors/sandeep-jethwani.webp";
import sambhavJain from "../../assets/images/investors/sambhav-jain.webp";
import toshanTamhane from "../../assets/images/investors/toshan-tamhane.webp";
import vaibhavSisinty from "../../assets/images/investors/vaibhav-sisinty.webp";
import mohitSadani from "../../assets/images/investors/mohit-sadaani.webp";
import shantanuDeshpande from "../../assets/images/investors/shantanu-deshpande.webp";

const OurInvestors = () => {
  const investors = [
    { name: "Nikhil Kamath", company: "Zerodha", image: nikhilKamath },
    { name: "Varun Alagh", company: "Mamaearth", image: varunAlagh },
    { name: "Ghazal Alagh", company: "Mamaearth", image: ghazalAlagh },
    { name: "Asish Mohapatra", company: "OfBusiness", image: asishMohapatra },
    { name: "Shashank Kumar", company: "Razorpay", image: shashankKumar },
    { name: "Sahil Barua", company: "Delhivery", image: sahilBarua },
    { name: "Vidit Aatrey", company: "Meesho", image: viditAatrey },
    { name: "Sanjeev Barnwal", company: "Meesho", image: sanjeevBarnwal },
    { name: "Vishesh Khurana", company: "Shiprocket", image: visheshKhurana },
    { name: "Ankush Sachdeva", company: "ShareChat", image: ankushSachdeva },
    { name: "Arjun Vaidya", company: "Verlinvest", image: arjunVaidya },
    { name: "Trisha Vaidya", company: "Dr Vaidya’s", image: trishaVaidya },
    { name: "Aakrit Vaish", company: "Haptik", image: aakritVaish },
    { name: "Miten Sampat", company: "CRED", image: mitenSampat },
    {
      name: "Dilipkumar Khandelwal",
      company: "Deutsche Bank India",
      title: "MD and CEO",
      image: dilipkumarKhandelwal,
    },
    { name: "Sandeep Jethwani", company: "Dezerv", image: sandeepJethwani },
    { name: "Sambhav Jain", company: "Fampay", image: sambhavJain },
    { name: "Toshan Tamhane", company: "UPL", image: toshanTamhane },
    { name: "Vaibhav Sisinty", company: "GrowthSchool", image: vaibhavSisinty },
    { name: "Mohit Sadani", company: "The Moms Co", image: mohitSadani },
    {
      name: "Shantanu Deshpande",
      company: "Bombay Shaving Company",
      image: shantanuDeshpande,
    },
  ];

  const [currentImg, setCurrentImg] = useState(null);

  const showImg = (e) => {
    setCurrentImg(<img loading="lazy" src={e.target.dataset.img} />);
    gsap.to(".cursor", {
      scale: 10,
    });
  };

  const hideImg = (e) => {
    setCurrentImg(null);
    gsap.to(".cursor", {
      scale: 1,
    });
  };

  const customCursor = (e) => {
    const container = document.querySelector(".all-investors");
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(".cursor", {
      left: x,
      top: y,
      duration: 1,
    });
  };

  return (
    <section className="investors">
      <div className="heading">
        <h1>
          <span>Our</span> <span>Investors</span>
        </h1>
      </div>

      <hr />

      <div onMouseMove={customCursor} className="all-investors">
        {investors.map((investor, idx) => {
          return (
            <div
              key={idx}
              className="investor"
              onMouseEnter={showImg}
              onMouseLeave={hideImg}
            >
              <h3>{investor.name}</h3>
              <p>
                {investor.title}
                {investor.company}
              </p>

              <div className="overlay" data-img={investor.image}></div>
            </div>
          );
        })}

        <div className="cursor">{currentImg}</div>
      </div>

      <hr />
    </section>
  );
};

export default OurInvestors;
