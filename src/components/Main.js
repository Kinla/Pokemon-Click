import React from "react";
import { MDBContainer, MDBRow} from "mdbreact";

const Main = (props) => {
  return (
    <MDBContainer className="mt-4" style={{maxWidth: "700px"}}>
      <MDBRow>{props.children}</MDBRow>
    </MDBContainer>
  );
}

export default Main;