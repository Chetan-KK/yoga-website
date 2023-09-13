import { Link } from "react-scroll";

import "./Hero.css";

function Hero() {
  return (
    <div className="Hero flex" id="hero">
      <div className="main_heading">
        Awaken Your Body, Mind, and Soul with Yoga
      </div>
      <div className="sub_heading center">
        Join Our Yoga Community for Expert Guidance, Inspiration, and <br /> a
        Healthier, More Fulfilling Life.
      </div>
      <Link to="join" spy={true} offset={-100} smooth={true} duration={500}>
        <div className="button">Join Classes now</div>
      </Link>
    </div>
  );
}

export default Hero;
