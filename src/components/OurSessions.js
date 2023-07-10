import React from 'react';
import "../App.css"; // Import the external CSS file

// session
import session from "../assets/images/sessions/session.png";

import { GetStartedButton } from "../components/buttons/actionButtons";

const OurSessions = () => {
  return (
    <>
      <br />
      <br />
      <div className="container-fluid p-5 align-items-center" style={{ backgroundColor: '#FFFFFF' }}>
        <h3 className="text-center">Our Sessions</h3>

        <div className="d-flex justify-content-center">
          <div className="row align-items-center justify-content-center justify-content-lg-between my-5">
            {/* Card 2 */}
            <div className="card mb-2 col-lg-6 col-md-6 col-sm-12 col-12 order-lg-1 order-2">
              <div className="row">
                <div className="col-4">
                  <div className="image-container">
                    <img src={session} alt="" style={{ maxWidth: '50px', height: 'auto' }} />
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

            {/* Card 1 */}
            <div className="card mb-2 col-lg-6 col-md-6 col-sm-12 col-12 order-lg-2 order-1">
              <div className="row">
                <div className="col-4">
                  <div className="image-container">
                    <img src={session} alt="" style={{ maxWidth: '50px', height: 'auto' }} />
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
      </div>
    </>
  );
};

export default OurSessions;
