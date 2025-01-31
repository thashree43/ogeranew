import "../style/home.css";
import LOGO from "../assets/Ogera_Logo.png";

export const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* Replace "Ogera" with the logo image */}
          <a className="navbar-brand" href="#">
            <img
              src={LOGO} // Path to your logo image
              alt="Ogera Logo"
              style={{
                height: "50px", // Adjust the height as needed
                width: "auto",  // Maintain aspect ratio
              }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                Products
              </a>
              <a className="nav-link" href="#">
                About Us
              </a>
              <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">
                Support
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
