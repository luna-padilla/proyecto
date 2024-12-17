function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        Iron Library
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item me-3">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item me-3">
            <a className="nav-link" href="#">
              Catalog
            </a>
          </li>
        </ul>
        <form className="d-flex mx-auto" role="search">
          <input
            className="form-control form-control-lg me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success btn-lg" type="submit">
            Search
          </button>
        </form>
        <span className="navbar-text ms-3">User</span>
      </div>
    </div>
  </nav>
  
  
  
  
 
  
  );
}

export default Navbar;
