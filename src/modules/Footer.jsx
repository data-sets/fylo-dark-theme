import Logo from "../images/logo.svg";
import Phone from "../images/icon-phone.svg";
import Mail from "../images/icon-email.svg";
import Location from "../images/icon-location.svg";

export default function Footer() {
  return (
    <>
      <footer className="app__footer--section">
        <div>
          <div>
            <img src={Logo} alt="Fylo Logo" />
          </div>
          <ul>
            <li>
              <img src={Location} alt="Location Icon" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </li>
            <li>
              <a href="/">
                <img src={Phone} alt="Phone Icon" />
                <p>+1-543-123-4567</p>
              </a>
              <br />
              <a href="/">
                <img src={Mail} alt="Mail Icon" />
                <p>example@fylo.com</p>
              </a>
            </li>
            <li>
              <a href="/">About Us</a>
              <a href="/">Jobs</a>
              <a href="/">Press</a>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
              <a href="/">Terms</a>
              <a href="/">Privacy</a>
            </li>
            <li className="social-media">
              <a href="/">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="/">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="/">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
