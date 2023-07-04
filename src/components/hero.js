import homeheroimage from "../assets/images/hero/homeheroimage.png";
import { GetStartedButton } from "./buttons/actionButtons";

export let HomeHero = () => {
  return (
    <div className="container-fluid">
      {/* <SalesPageNavbar /> */}
      <div className="row align-items-center justify-content-center px-4">
        <div className="col-lg-6 col-md-7 col-sm-12 pt-3">
          <h2 className=" d-none d-lg-block d-md-none d-sm-none d-xs-none">
            Lorem ipsum dolor sit amet, consectetur adipiscing
            <br />
          </h2>
          <h3 className=" d-xs-block d-sm-block d-md-block d-lg-none">
            Lorem ipsum dolor sit amet, consectetur adipiscing
            <br />
          </h3>
          {/* <p className="mt-4">
            We are a digital Inn that makes tech career transitioning easy
            through mentored training and career portfolio building.{" "}
          </p> */}
          <div className="d-none d-lg-block d-md-block d-sm-none d-xs-none mt-4">
            <GetStartedButton />
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12">
          <img
            src={homeheroimage}
            className="d-block mx-lg-auto img-fluid"
            alt=""
            loading=""
          />
          <div className="d-xs-block d-sm-block d-md-none d-lg-none mt-4 text-center">
            <GetStartedButton />
          </div>
        </div>
      </div>
    </div>
  );
};
