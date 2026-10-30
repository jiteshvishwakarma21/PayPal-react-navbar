import Logo from "./Logo";
import NavMenu from "./NavMenu";
import AuthButtons from "./AuthButtons";

function Navbar() {
  return (
    <header className="header">
      <nav className="navbar" aria-label="Main navigation">
        <Logo />
        <NavMenu />
        <AuthButtons />
      </nav>
    </header>
  );
}

export default Navbar;