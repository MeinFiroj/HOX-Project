import Marque from "../../components/marque/Marque";
import image from "../../assets/images/dealingprocess.png";

const InfluenceToBrand = () => {
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
