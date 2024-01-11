import "./Footer.css";

function Footer() {
  return (
    <div className="Footer flex">
      <div className="logo">Yoga Guru | 2023</div>
      <div className="links">
        <a
          href="https://www.instagram.com/dhirajpatilom/"
          target="_blank"
          className="link"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/dhirajdpatil/"
          target="_blank"
          className="link"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        {/* <a href="" className="link">
          <i className="fa-brands fa-twitter"></i>
        </a> */}
      </div>
    </div>
  );
}

export default Footer;
