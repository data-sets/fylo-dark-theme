import Illustration from "../images/illustration-intro.png";
import DesktopCurly from "../images/bg-curvy-desktop.svg";

export default function Header() {
  return (
    <>
      <header className="app__header--section">
        <img src={Illustration} alt="Illustration" />
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button>Get Started</button>
      </header>
      <div className="illustration">
        <img src={DesktopCurly} alt="Curly Shape" />
      </div>
    </>
  );
}
