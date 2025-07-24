import InfluenceToBrand from "../../components/influencetobrand/InfluenceToBrand";
import Hero from "../../components/hero/Hero";
import OurTeam from "../../components/ourteam/OurTeam";

const Home = () => {
  return (
    <main>
      <Hero />
      <InfluenceToBrand />

      <OurTeam />

      <section className="investors">
        <div className="heading">
          <h1><span>Our</span> <span>investors</span></h1>
        </div>
      </section>

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
