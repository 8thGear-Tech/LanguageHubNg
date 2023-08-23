import Navbar from "../components/navbar";
import { HomeHero } from "../components/hero";
import mandarin from "../assets/images/flags/mandarin.png";
import french from "../assets/images/flags/french.png";
import german from "../assets/images/flags/german.png";
import yoruba from "../assets/images/flags/yoruba.png";

//about
import mission from "../assets/images/about/mission.png";
import vision from "../assets/images/about/vision.png";
import values from "../assets/images/about/values.png";
import { GetStartedButton } from "../components/buttons/actionButtons";

// thumbsvg
import { ThumbSVG } from "../components/svgs/thumbs";

// session
import session from "../assets/images/sessions/session.png";

// team
// import teamMemberA from "../assets/images/team/teamMemberA.png";
// import teamMemberA from "../assets/images/team/teamMemberA.png";
import madamewunmi from "../assets/images/team/madamewunmi.png";
import olamide from "../assets/images/team/olamide.png";

// Footer
import languagehubng from "../assets/images/languagehubng.jpg";
import Socials from "../components/svgs/Socials";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeHero />
      <Flags />
      <About />
      <OurOfferings />
      <OurSessions />
      <OurTeam />
      <Footer />
    </>
  );
};

const Flags = () => {
  return (
    <>
      <div className="container-fluid mt-4">
        <div
          className="row d-flex justify-content-center py-5"
          style={{ backgroundColor: "#FAF9F9" }}
        >
          <div className="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center">
            <img src={mandarin} className="mx-4" width="100" height="94" />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center">
            <img src={french} className="mx-4" width="100" height="94" />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center">
            <img src={german} className="mx-4" width="100" height="94" />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center">
            <img src={yoruba} className="mx-4" width="100" height="94" />
          </div>
        </div>
      </div>
    </>
  );
};
const About = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center justify-content-evenly my-5">
        <h3 className="text-center mb-4">Lorem ipsum dolor sit amet</h3>
        <div className="col-lg-3 col-md-3 col-sm-12 p-0">
          <div className="position-relative">
            <img
              src={mission}
              className="card-img"
              alt="..."
              style={{ objectFit: "cover", height: "100%" }}
            />
            <div className="card-img-overlay text-center p-0 d-flex align-items-center justify-content-center">
              <div>
                <h5 className="card-title text-white">Mission</h5>
                <p className="card-text text-center text-white">
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 p-0">
          <div className="position-relative">
            <img
              src={vision}
              className="card-img"
              alt="..."
              style={{ objectFit: "cover", height: "100%" }}
            />
            <div className="card-img-overlay text-center p-0 d-flex align-items-center justify-content-center">
              <div>
                <h5 className="card-title text-white">Vision</h5>
                <p className="card-text text-center text-white">
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 p-0">
          <div className="position-relative">
            <img
              src={values}
              className="card-img"
              alt="..."
              style={{ objectFit: "cover", height: "100%" }}
            />
            <div className="card-img-overlay text-center p-0 d-flex align-items-center justify-content-center">
              <div>
                <h5 className="card-title text-white">Values</h5>
                <p className="card-text text-center text-white">
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <GetStartedButton />
      </div>
    </div>
  );
};

const OurOfferings = () => {
  return (
    <>
      <br />
      <br />
      <div
        className="container-fluid p-5"
        style={{ backgroundColor: "#F9F6F6" }}
      >
        <div className="row d-lg-flex d-md-flex">
          <div className="col-lg-3 col-md-6 py-2">
            {/* <CheckBox /> */}
            <h4>Our Offerings</h4>
            <br />
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum
              dolor sit amet
            </p>
          </div>
          <div className="col-lg-3 col-md-6 py-2">
            {/* <CheckBox /> */}
            <div>
              <ThumbSVG />
              <h4>Lorem</h4>
            </div>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum
              dolor sit amet
            </p>
          </div>
          <div className="col-lg-3 col-md-6 py-2">
            {/* <CheckBox /> */}
            <div>
              <ThumbSVG />
              <h4>Lorem</h4>
            </div>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum
              dolor sit amet
            </p>
          </div>
          <div className="col-lg-3 col-md-6 py-2">
            {/* <CheckBox /> */}
            <div>
              <ThumbSVG />
              <h4>Lorem</h4>
            </div>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum
              dolor sit amet
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const OurSessions = () => {
  return (
    <>
      <div className="container">
        <h4 className="text-center mt-5 mb-3">Our Sessions</h4>
        <div class="row justify-content-center">
          <div class="col-lg-5 col-md-8 d-flex mt-4">
            <div class="d-flex justify-content-between align-items-center px-5 py-4 sessionCard w-100">
              <div class="me-5">
                <img src={session} class="img-fluid" width="75" alt="..." />
              </div>

              <div class="flex-grow-1">
                <div class="card-body d-flex flex-column justify-content-between">
                  <h5>
                    <b>Weekday Classes</b>
                  </h5>
                  <p className="m-0 p-0">
                    <b>Monday - Thursdays</b>
                  </p>
                  <p className="m-0 p-0">9.00am - 12.00pm</p>
                  <p className="m-0 p-0">2.00pm - 5.00pm</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-8 d-flex mt-4">
            <div class="d-flex justify-content-between align-items-center px-5 py-4 sessionCard w-100">
              <div class="me-5">
                <img src={session} class="img-fluid" width="75" alt="..." />
              </div>

              <div class="flex-grow-1">
                <div class="card-body d-flex flex-column justify-content-between">
                  <h5>
                    <b>Weekday Classes</b>
                  </h5>
                  <p className="m-0 p-0">
                    <b>Monday - Thursdays</b>
                  </p>
                  <p className="m-0 p-0">9.00am - 12.00pm</p>
                  <p className="m-0 p-0">2.00pm - 5.00pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const OurSessionns = () => {
  return (
    <>
      <br />
      <br />
      <div className="container" style={{ backgroundColor: "#FFFFFF" }}>
        <h3 className="text-center">Our Sessions</h3>

        <div className="row d-flex justify-content-center justify-content-md-between">
          <div className="row my-5">
            <div className="card mb-2 col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center align-items-center">
              <div className="row d-flex justify-content-evenly">
                <div className="col-4">
                  <div className="image-container d-flex align-items-center">
                    <img
                      src={session}
                      alt=""
                      style={{ maxWidth: "70px", height: "auto" }}
                    />
                  </div>
                </div>
                <div className="col-8">
                  <div className="text-container py-4">
                    <h5>
                      <b>Weekday Classes</b>
                    </h5>
                    <p className="m-0 p-0">
                      <b>Monday - Thursdays</b>
                    </p>
                    <p className="m-0 p-0">9.00am - 12.00pm</p>
                    <p className="m-0 p-0">2.00pm - 5.00pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-2 col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center align-items-center">
              <div className="row">
                <div className="col-4">
                  <div className="image-container d-flex align-items-center justify-content-center">
                    <img
                      src={session}
                      alt=""
                      style={{ maxWidth: "70px", height: "auto" }}
                    />
                  </div>
                </div>
                <div className="col-8">
                  <div className="text-container py-4">
                    <h5>
                      <b>Weekday Classes</b>
                    </h5>
                    <p className="m-0 p-0">
                      <b>Monday - Thursdays</b>
                    </p>
                    <p className="m-0 p-0">9.00am - 12.00pm</p>
                    <p className="m-0 p-0">2.00pm - 5.00pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <GetStartedButton />
        </div>
      </div>

      {/* <div
        className="container-fluid  align-items-center"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <h3 className="text-center">Our Sessions</h3>

        <div className=" flex justify-content-center">
          <div className="row  my-5">
            <div
              className="card mb-2 col-lg-6 col-md-6 col-sm-12 col-12 order-lg-1 order-2"
              style={{ marginRight: "0px" }}
            >
              <div className="row">
                <div className="col-4">
                  <div className="image-container">
                    <img
                      src={session}
                      alt=""
                      style={{ maxWidth: "50px", height: "auto" }}
                    />
                  </div>
                </div>
                <div className="col-8">
                  <div className="text-container">
                    <h4>Weekday Classes</h4>
                    <p>Monday - Thursdays</p>
                    <p>9.00am - 12.00pm</p>
                    <p>2.00pm - 5.00pm</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card mb-2 col-lg-6 col-md-6 col-sm-12 col-12 order-lg-2 order-1"
              style={{ marginLeft: "0px" }}
            >
              <div className="row">
                <div className="col-4">
                  <div className="image-container">
                    <img
                      src={session}
                      alt=""
                      style={{ maxWidth: "50px", height: "auto" }}
                    />
                  </div>
                </div>
                <div className="col-8">
                  <div className="text-container">
                    <h4>Weekday Classes</h4>
                    <p>Monday - Thursdays</p>
                    <p>9.00am - 12.00pm</p>
                    <p>2.00pm - 5.00pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <GetStartedButton />
        </div>
      </div> */}
    </>
  );
};

const OurTeam = () => {
  return (
    <>
      <br />
      <br />
      <div
        className="container-fluid p-5 align-items-center"
        style={{ backgroundColor: "#F2F0F0" }}
      >
        <h3 className="text-center">Our Team</h3>
        <div class="row d-flex justify-content-center mt-4">
          <div class="col-lg-3">
            <div class="">
              <img src={madamewunmi} class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 className="mt-2">Omowunmi Obidairo</h6>
                <p className="" style={{ fontSize: "0.9rem" }}>
                  Lead Language Instructor
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="">
              <img src={olamide} class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 className="mt-2">Olamide Ogunbanjo</h6>
                <p className="" style={{ fontSize: "0.9rem" }}>
                  Language Instructor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center py-3"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <img src={languagehubng} alt="" width="100" height="100" />
      </div>

      <Socials />

      <h6 className="text-center">Magodo, Lagos.</h6>

      <p className="text-center" style={{ fontSize: "0.8rem" }}>
        © 2023 Language Hub Ng. All Rights Reserved.
      </p>
    </>
  );
};
export default Home;
