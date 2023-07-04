import languagehubng from "../assets/images/languagehubng.jpg";
import { GetStartedButton } from "./buttons/actionButtons";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src={languagehubng}
              className="img-fluid"
              width="100"
              height="94"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              /> */}
            {/* <button className="btn btn-outline-success" type="submit">
              Get Started
            </button> */}
            <GetStartedButton />
            {/* </form> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
