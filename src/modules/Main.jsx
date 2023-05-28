import File from "../images/icon-any-file.svg";
import Security from "../images/icon-security.svg";
import Access from "../images/icon-access-anywhere.svg";
import Collab from "../images/icon-collaboration.svg";
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
        <section></section>
      </main>
    </>
  );
}
