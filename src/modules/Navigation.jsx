import Logo from "../images/logo.svg";

const link = [
  {
    id: 0,
    title: "Features",
  },
  {
    id: 1,
    title: "Team",
  },
  {
    id: 2,
    title: "Signin",
  },
];
const listItems = link.map((data) => (
  <li key={data.id}>
    <a href="/">{data.title}</a>
  </li>
));

export default function Navigation() {
  return (
    <>
      <nav className="app__navigation--section">
        <ul>
          <li>
            <img src={Logo} alt="Logo" />
          </li>
          <li>
            <ul>{listItems}</ul>
          </li>
        </ul>
      </nav>
    </>
  );
}
