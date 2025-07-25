import client1 from "../../assets/images/client1.png";
import client2 from "../../assets/images/client2.png";

const HOXLaunch = () => {
  const cards = [
    {
      launchStatus: true,
      name: "KING",
      role: "Singer",
      quote: "A Fragrant Dream Realized with House of X",
      desc: `Blanko is a brand very close to me and my team. It's everything that KingsClan and I stand for...`,
      image: client1,
      link: "https://ifeelblanko.com/",
    },
    {
      launchStatus: true,
      name: "Sanjyot Keer",
      role: "Celebrity Chef",
      quote: "A Culinary Dream Realized with House of X",
      desc: `From childhood, my culinary journey was nurtured by my family's belief in me...`,
      image: client2,
      link: "https://curaahome.com/",
    },
    {
      launchStatus: false,
      name: "Launching Soon ....",
      role: "?",
      quote: "",
      desc: "",
      image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
      link: "https://example.com/soon",
    },
  ];

  return (
    <div className="hox-launch">
      <h1>HOX LAUNCH</h1>
      <div className="launch-cards">
        {cards.map((card, i) => (
          <a
            key={i}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="launch-card"
          >
            <img loading="lazy" src={card.image} alt={card.name} className="card-img" />
            <div className="card-content">
              <h2 className="card-title">{card.name}</h2>
              {card.role !== "?" ? (
                <>
                  <p className="card-role">{card.role}</p>
                  <h3 className="card-quote">"{card.quote}"</h3>
                  <p className="card-desc">{card.desc}</p>
                </>
              ) : (
                <p className="coming-soon">{card.name}</p>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default HOXLaunch;
