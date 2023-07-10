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


// team
import teamMemberA from "../assets/images/team/teamMemberA.png";
import teamMemberB from "../assets/images/team/teamMemberB.png";
import OurSessions from "../components/OurSessions";
import Footer from "../components/Fooer";



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
            <img src={vision} className="card-img" alt="..." />
            <div className="card-img-overlay text-center">
              <h5 className="card-title text-white">Vision</h5>
              <p className="card-text text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum
                dolor sit amet, consectetur adipiscing
              </p>
            </div>
          </div>
          <div className="card col-lg-3 col-md-3 col-sm-12">
            <img src={values} className="card-img" alt="..." />
            <div className="card-img-overlay text-center">
              <h5 className="card-title text-white">Values</h5>
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
    <>
    <br />
    <br />
    <div className="container-fluid p-5"  style={{ backgroundColor: '#F9F6F6' }}>
    <div className="row d-lg-flex d-md-flex">
      <div className="col-lg-3 col-md-6 py-2">
        {/* <CheckBox /> */}
        <h4>Lorem ipsum dolor sit amet</h4>
        <br />
        <p className="">
        Lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet
        </p>
      </div>
      <div className="col-lg-3 col-md-6 py-2">
        {/* <CheckBox /> */}
        <div>
          <ThumbSVG />
          <h4>Lorem</h4>
        </div>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet
        </p>
      </div>
      <div className="col-lg-3 col-md-6 py-2">
        {/* <CheckBox /> */}
        <div>
          <ThumbSVG />
          <h4>Lorem</h4>
        </div>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet
        </p>
      </div>
      <div className="col-lg-3 col-md-6 py-2">
        {/* <CheckBox /> */}
        <div>
          <ThumbSVG />
          <h4>Lorem</h4>
        </div>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet
        </p>
      </div>
    </div>
  </div>
 </>
  );
};

<OurSessions />


const OurTeam = () => {
  return (
    <>
      <br />
      <br />
      <div className="container-fluid p-5 align-items-center" style={{ backgroundColor: '#F2F0F0' }}>
        <h3 className="text-center">Our Team</h3>

        <div className="d-flex justify-content-center">
          <div className="row align-items-center justify-content-center justify-content-lg-between my-5">
            {/* Card 2 */}
            <div className="card mb-2 col-lg-6 col-md-6 col-sm-12 col-12 order-lg-1 order-2">
              <div className="row">
                <div className="col-12">
                  <div className="image-container">
                    <img src={teamMemberA} className="card-image" alt="" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="text-container">
                    <h4>Name</h4>
                    <p>Role</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 1 */}
            <div className="card mb-2 col-lg-6 col-md-6 col-sm-12 col-12 order-lg-2 order-1">
              <div className="row">
                <div className="col-12">
                  <div className="image-container">
                    <img src={teamMemberB} className="card-image" alt="" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="text-container">
                    <h4>Name</h4>
                    <p>Role</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

<Footer />
export default Home;
