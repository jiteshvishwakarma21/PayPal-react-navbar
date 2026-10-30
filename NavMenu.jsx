function NavMenu() {
  return (
    <div className="nav-links">
      <a href="#home">
        Personal
        <span className="chevron" aria-hidden="true" />
      </a>

      <a href="#home">
        Business
        <span className="chevron" aria-hidden="true" />
      </a>

      <a href="#home">
        Partners
        <span className="chevron" aria-hidden="true" />
      </a>

      <a href="#home">
        Useful Info
        <span className="chevron" aria-hidden="true" />
      </a>
    </div>
  );
}

export default NavMenu;