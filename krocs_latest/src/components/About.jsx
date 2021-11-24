import aboutImg from "../assets/images/arts/about.png";
import crocks from "../assets/images/logos/swim.png";

const About = () => {
  return (
    <section id="home" className="not-margin">
      <div className="cs_container cs_row" data-aos="fade-up">
      <div className="description" data-aos="fade-up">
        <div className="sec-heading-wrapper text-left">
          <h2 className="sec-heading" data-aos="zoom-out"> WELCOME </h2>
        </div>
        <p data-aos="fade-up">
          Amidst the jungle, you've come to an undiscovered swamp, filled with 5,000 Kruisy Krocs
          vibing away on the Ethereum blockchain.
        </p>
        <p data-aos="fade-up">
          Kruisy Krocs are a collection of randomly generated NFTs with millions of possible
          combinations.
        </p>
        <p data-aos="fade-up">
          These Krocs are waiting to be adopted, to unlock their true potential ~ working together to
          create a DAO.
        </p>
        <br />
        <div className="sec-heading-wrapper text-left">
          <h2 className="sec-heading" data-aos="zoom-out"> LEGENDARY KROCS </h2>
        </div>
        <p>
          The Legendary Krocs are the 36 Krocs that look after the other Krocs. Each owner of these
          Legendary Kroc NFTs will stand the chance to walk away with a $20,000 bonus. Once all
          Kruisy Krocs are sold out, the Stonk Kroc will walk away with a bonus of $30,000.
        </p>
      </div>
      <div className="examples" data-aos="fade-down">
        <img loading="lazy"  className="about-img" src={aboutImg} alt="KRUICY KROCS" />
        <img loading="lazy"  className="about-img about-swim" src={crocks} alt="KRUICY KROCS" />
      </div>
      </div>
    </section>
  );
};

export default About;
