import Link from "next/link";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Navbar toggle button for mobile screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Logo */}
        <Link className="navbar-brand" href="#">
          <img src="log.jpeg" height={80} width={160} alt="Logo" />
        </Link>

        {/* Collapsible Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" href="/" style={{ fontSize: 20 }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href="/aboutus"
                style={{ fontSize: 20 }}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href="/contactus"
                style={{ fontSize: 20 }}
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href="/products"
                style={{ fontSize: 20 }}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/cart">
                <img src="cartlogo.png" height={40} alt="Cart" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/login">
                <img src="login.jpeg" height={80} width={140} alt="Login" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
