import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";

function Menu() {
  let data = useSelector((state) => state.productDetails.value);
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <Link to="/" className="fs-3 text-decoration-none ms-3">
            Shoppy
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 me-3 mb-lg-0">
              <li class="nav-item">
                <Link to="/" className="text-decoration-none me-3">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/cart" className="text-decoration-none me-3">
                  Cart ({data.length})
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
