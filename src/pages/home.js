import Navbar from "../components/navbar";
import { HomeHero } from "../components/hero";
import mandarin from "../assets/images/flags/mandarin.png";
import french from "../assets/images/flags/french.png";
import german from "../assets/images/flags/german.png";
import yoruba from "../assets/images/flags/yoruba.png";

//about
import mission from "../assets/images/about/mission.png";
import { GetStartedButton } from "../components/buttons/actionButtons";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeHero />
      <Flags />
      <About />
      <OurOfferings />
    </>
  );
};

const Flags = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center py-5"
        style={{ backgroundColor: "#FAF9F9" }}
      >
        <img src={mandarin} className="mx-4" width="100" height="94" />
        <img src={french} className="mx-4" width="100" height="94" />
        <img src={german} className="mx-4" width="100" height="94" />
        <img src={yoruba} className="mx-4" width="100" height="94" />
      </div>
    </>
  );
};
const About = () => {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center justify-content-evenly my-5">
          {" "}
          <h3 className="text-center mb-4">Lorem ipsum dolor sit amet</h3>{" "}
          <div className="card col-lg-3 col-md-3 col-sm-12">
            <img src={mission} className="card-img" alt="..." />
            <div className="card-img-overlay text-center">
              <h5 className="card-title text-white">Mission</h5>
              <p className="card-text text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum
                dolor sit amet, consectetur adipiscing
              </p>
            </div>
          </div>
          <div className="card col-lg-3 col-md-3 col-sm-12">
            <img src={mission} className="card-img" alt="..." />
            <div className="card-img-overlay text-center">
              <h5 className="card-title text-white">Mission</h5>
              <p className="card-text text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum
                dolor sit amet, consectetur adipiscing
              </p>
            </div>
          </div>
          <div className="card col-lg-3 col-md-3 col-sm-12">
            <img src={mission} className="card-img" alt="..." />
            <div className="card-img-overlay text-center">
              <h5 className="card-title text-white">Mission</h5>
              <p className="card-text text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum
                dolor sit amet, consectetur adipiscing
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          {" "}
          <GetStartedButton />
        </div>
      </div>
    </>
  );
};

const OurOfferings = () => {
  return (
    <div className="container-fluid p-5">
      <div className="">
        {" "}
        <div className="card-group">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-auto">
            <div className="row d-lg-flex d-md-flex ">
              <div className="col-lg-3 col-md-6  py-2">
                {/* <CheckBox /> */}
                <h4>Lorem ipsum dolor sit amet</h4>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum
                  dolor sit amet
                </p>
              </div>
              <div className="col-lg-3 col-md-6 d-flex py-2">
                {/* <CheckBox /> */}
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum
                  dolor sit amet
                </p>
              </div>
              <div className="col-lg-3 col-md-6 d-flex  py-2">
                {/* <CheckBox /> */}
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum
                  dolor sit amet
                </p>
              </div>
              <div className="col-lg-3 col-md-6 d-flex  py-2">
                {/* <CheckBox /> */}
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum
                  dolor sit amet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
