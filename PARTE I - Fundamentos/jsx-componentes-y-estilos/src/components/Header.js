import image from "../../src/react-logo.png";
function Header() {
  return (
    <header>
      <nav className="flex navbar">
        <img alt="react-logo" className="nav-logo" src={image} />
        <ul className="flex nav-items-list">
          <li>Home</li>
          <li>Pricing</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
