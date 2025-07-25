import InfluenceToBrand from "../../components/influencetobrand/InfluenceToBrand";
import Hero from "../../components/hero/Hero";
import OurTeam from "../../components/ourteam/OurTeam";
import OurInvestors from "../../components/ourinvestors/OurInvestors";
import Doubts from "../../components/gotdoubts/Doubts";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <main>
      <Hero />
      <InfluenceToBrand />
      <OurTeam />
      <OurInvestors />
      <Doubts />
      <Footer />
    </main>
  );
};

export default Home;
