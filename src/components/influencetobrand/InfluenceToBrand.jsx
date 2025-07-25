import Marque from "../../components/marque/Marque";
import image from "../../assets/images/dealingprocess.png";
import useHorizontalScroll from "../onscrollslider/useHorizontalScroll";

const InfluenceToBrand = () => {
  useHorizontalScroll()
  return (
    <section className="influencetobrand">
      <Marque />
      <div className="slider-cont">
        <div className="slider">
          <img src={image} />
        </div>
      </div>
    </section>
  );
};

export default InfluenceToBrand;
