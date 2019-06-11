import React from 'react';
import { MDBCard, MDBCol } from 'mdbreact';

const Card = (props) => {
  const container = {
      paddingTop: "100%",
      width: "100%",
      position: "relative",
  }  
  const image = {
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    width: "100%",
    height: "auto",
    maxHeight: "100%",
    objectFit: "scale-down",
  }

  return (
    <MDBCol size="4" md="3" className="mb-4">
      <MDBCard className="p-2 h-100 pokemon" onClick={() => props.onClick(props.id)}>
          <div style={container}>
            <img src={props.image} style={image} alt={props.name} ></img>    
          </div>
      </MDBCard>
    </MDBCol>
  )
}

export default Card;