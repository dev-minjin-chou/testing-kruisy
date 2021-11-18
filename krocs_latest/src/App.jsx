import { useEffect } from "react";
import "./assets/css/footer.css";
import "aos/dist/aos.css";
import "./assets/css/app.css";
import 'swiper/swiper-bundle.css';
import Home from "./container/Home.jsx"
import Header from "./layout/Header/Header.jsx"
import Footer from "./layout/Footer/Footer"
import mainLogo from "./assets/images/logos/swim.png"
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import AOS from "aos";
import {CircularProgress} from "@material-ui/core";


function App() {
  // on page load 
  useEffect(() => {
    window.onload = function () {
      document.querySelectorAll('.logo-letter').forEach((v, i) => {
        setTimeout(() => {
          v.classList.add(`loader-text-animate`)
          v.classList.add(`animation-on-loader-${i}`)
        }, 700)
        document.querySelector('.spinner').classList.add('d-none');
    
      })
      setTimeout(() => {
        document.querySelector('.loader').classList.add('hide-loader');
        document.getElementById('app').classList.remove('no-scroll');
        AOS.init({
          once: true,
          duration: 1200,
        });
      }, 1800)
    }
  }, []);


  return (
    <>
      <Header />
      <Home />
      <Footer />
      <Loader />
      <GoToTop />
    </>
  );
}

// Loading screen
const Loader = () => {
  let letters = ['K', 'R', 'U', 'I', 'S', 'Y', 'K', 'R', 'O', 'C', 'S']
  useEffect(() => {
    window.onscroll = function () {
      var pageOffset = document.documentElement.scrollTop || document.body.scrollTop;
       let btn = document.getElementById('scrollToTop');
      if (btn) {
       if(pageOffset > 450){
         btn.classList.add('show-top') 
        }else{
          btn.classList.remove('show-top') 
       }
      }
    }
  },[])
  return (
    <div className="loader">
      <div>
        <div className="loader-logo-wrapper">
          <img  src={mainLogo} alt="Kruisy Krocs" />
        </div>
        <div className="logo-text-loader">
          {letters.map((word, i) => (
            <span
              key={i}
              className={`logo-letter ${i === 5 ? 'last-text' : ''}`}
            >
              {word}
            </span>
          ))}
        </div>
          <div className="spinner"> 
            <br />
            <CircularProgress thickness={6} size={28} className="progress"/>
            <p>Loading....</p>
          </div>
      </div>
    </div>
  );
};

// go to top button
const GoToTop = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  };
  return (
    <div onClick={goToTop} className="go-to-top" id="scrollToTop">
      <ArrowUpwardIcon/>
    </div>
  );
};

export default App;
