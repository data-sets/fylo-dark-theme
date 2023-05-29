import File from "../images/icon-any-file.svg";
import Security from "../images/icon-security.svg";
import Access from "../images/icon-access-anywhere.svg";
import Collab from "../images/icon-collaboration.svg";
import Team from "../images/illustration-stay-productive.png";
import Arrow from "../images/icon-arrow.svg";
import Profile1 from "../images/profile-1.jpg";
import Profile2 from "../images/profile-2.jpg";
import Profile3 from "../images/profile-3.jpg";
import Quote from "../images/bg-quotes.png";

export default function Main() {
  return (
    <>
      <main className="app__main--section">
        <ul>
          <li>
            <img src={Access} alt="Access Logo" />
            <h3>Access your files, anywhere</h3>
            <p>
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </li>
          <li>
            <img src={Security} alt="Security Logo" />
            <h3>Security you can trust</h3>
            <p>
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </li>
          <li>
            <img src={Collab} alt="File Logo" />
            <h3>Real-time collaboration</h3>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </li>
          <li>
            <img src={File} alt="Collab Logo" />
            <h3>Store any type of file</h3>
            <p>
              Whether you're sharing holidays photos or work documents, Fylo has
              you covered allowing for all file types to be securely stored and
              shared.
            </p>
          </li>
        </ul>
        <section className="app__production--section">
          <div>
            <img src={Team} alt="Team Illustration" />
          </div>
          <div>
            <h2>Stay productive, wherever you are</h2>
            <p>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <span>
              <a href="/">
                See how Fylo works <img src={Arrow} alt="Arrow Icon" />
              </a>
            </span>
          </div>
        </section>
        <img src={Quote} alt="quote" className="app__quote" />
        <section className="app__testimonial--section">
          <div>
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <span>
              <img src={Profile1} alt="" />
              <div>
                <h4>Satish Patel</h4>
                <h5>Founder & CEO, Huddle</h5>
              </div>
            </span>
          </div>
          <div>
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <span>
              <img src={Profile2} alt="" />
              <div>
                <h4>Bruce McKenzie</h4>
                <h5>Founder & CEO, Huddle</h5>
              </div>
            </span>
          </div>
          <div>
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <span>
              <img src={Profile3} alt="" />
              <div>
                <h4>Iva Boyd</h4>
                <h5>Founder & CEO, Huddle</h5>
              </div>
            </span>
          </div>
        </section>
        <section className="app__access--section">
          <div>
            <h2>Get early access today</h2>
            <p>
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
            <div>
              <form action="">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="email@example.com"
                />
                <button>Get Started For Free</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
