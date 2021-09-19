import React from "react";

const Footer = () => {
  return (
    <>
      {/* <div className="divider"></div> */}
      <div className="footer">
        <div className="company-details">
          OPOD MEDIA LLP. MUMBAI <br />
          email: hello@opod.in
        </div>

        <div className="footer-buttons">
          <div className="contact-now">
            <span>CONTACT US</span>
          </div>
          <div className="privacy-policy">
            <span>PRIVACY POLICY</span>
          </div>
          <div className="careers">
            <span>CAREERS</span>
          </div>
          <div className="terms-and-conditions">
            <span>TERMS {"&"} CONDITIONS</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
