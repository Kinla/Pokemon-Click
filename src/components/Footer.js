import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const Footer = () => {
  const bgDkBlue = {backgroundColor: '#003A70'}

  return (
    <MDBFooter className="font-small">
      <div style={bgDkBlue} className="footer-copyright text-center py-3">
        <MDBContainer fluid >
          &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/Kinla"> Sharon Chien </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;