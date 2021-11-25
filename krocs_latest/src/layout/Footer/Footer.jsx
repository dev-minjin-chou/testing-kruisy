
import { Instagram } from "@material-ui/icons"

const Footer = () => {
  const scrollTo_Section = (sec_id) => {
    let element = document.getElementById(sec_id);
    const yOffset = -97;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };
  return (
    <footer className="footer">
      <div className="cs_container cs_row">
        <div className="infos cs_column" >
          <div className="blockmark cs_column">
            <div className="typo">KRUICY KROCS</div>
            <p className="baseline">5,000 unique KROCS in need of partners.</p>
          </div>
          <p className="copyright">©2021 KRUICY KROCS. All rights reserved.</p>
        </div>
        <div className="right cs_column">
          <div className="nav cs_column">
            <a onClick={() => scrollTo_Section('home')} href="javascript:void(0)">Home</a>
            <a onClick={() => scrollTo_Section('devroadmap')} href="javascript:void(0)">Dev RoadMap</a>
            <a onClick={() => scrollTo_Section('roadmap')} href="javascript:void(0)">RoadMap</a>
            <a onClick={() => scrollTo_Section('faq')} href="javascript:void(0)">FAQ</a>
            <a onClick={() => scrollTo_Section('team')} href="javascript:void(0)">Team</a>
          </div>
          <div className="social cs_row">
            <div className="link">
              <a href="https://twitter.com/KruisyKrocs" target="_blank" rel="noopener" className="twitter cs_row"></a>
            </div>
            <div className="link">
              <a href="https://discord.gg/kruisykrocs" target="_blank" rel="noopener" className="discord cs_row"></a>
            </div>
            <div className="link">
              <a href="https://www.instagram.com/kruisykrocs/" target="_blank" rel="noopener" className="opensea cs_row">
                <Instagram className="insta-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
