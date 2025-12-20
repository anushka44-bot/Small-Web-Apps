const Navbar = ({ setCategory }) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-5 cursor-pointer">
            Newstop
          </span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <span
                className="nav-link cursor-pointer"
                onClick={() => setCategory("technology")}
              >
                Technology
              </span>
            </li>
            <li className="nav-item">
              <span
                className="nav-link cursor-pointer"
                onClick={() => setCategory("business")}
              >
                Business
              </span>
            </li>
            <li className="nav-item">
              <span
                className="nav-link cursor-pointer"
                onClick={() => setCategory("health")}
              >
                Health
              </span>
            </li>
            <li className="nav-item">
              <span
                className="nav-link cursor-pointer"
                onClick={() => setCategory("sports")}
              >
                Sports
              </span>
            </li>
            <li className="nav-item">
              <span
                className="nav-link cursor-pointer"
                onClick={() => setCategory("entertainment")}
              >
                Entertainment
              </span>
            </li>
            <li className="nav-item">
              <span
                className="nav-link cursor-pointer"
                onClick={() => setCategory("science")}
              >
                Science
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
