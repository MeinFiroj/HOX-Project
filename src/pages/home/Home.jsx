import InfluenceToBrand from "../../components/influencetobrand/InfluenceToBrand";
import Hero from "../../components/hero/Hero";
import OurTeam from "../../components/ourteam/OurTeam";
import OurInvestors from "../../components/ourinvestors/OurInvestors";

const Home = () => {
  return (
    <main>
      <Hero />
      <InfluenceToBrand />
      <OurTeam />
      <OurInvestors />

      {/* <section className="doubts">
        <div className="heading">
          <h1>Got Doubts</h1>
        </div>
      </section>

      <footer></footer> */}
    </main>
  );
};

export default Home;
