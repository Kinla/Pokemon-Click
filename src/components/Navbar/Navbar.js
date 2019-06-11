import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBBtn } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './style.css'

const Navbar = (props) => {
  const bgDkBlue = {backgroundColor: '#003A70'}
  const bgBlue = {backgroundColor: '#3D7DCA'}
  const newGame = props.newGame

  return(
    <div>
      <Router>
        <header>
          <MDBNavbar dark scrolling fixed="top" className="d-flex flex-row justify-content-between w-100" style={bgDkBlue}>
            <MDBNavbarBrand href="/" className="p-2 flex-fill text-left mx-0">
            <img src="https://fontmeme.com/permalink/190608/181d3f2d1139cbd6325c69b925fe885f.png" alt="pokemon-font" border="0" width="auto" height="40"/>
            </MDBNavbarBrand>
            <MDBNavbarBrand className="p-2 flex-fill text-white text-center mx-0 ubuntu">{props.message}       
            {newGame && <MDBBtn color="yellow" size="sm" className="font-weight-bold ml-5 ubuntu" style={{fontSize: "1rem"}} onClick={() => props.onClick()}>New Game</MDBBtn>}  
            </MDBNavbarBrand>
            <MDBNavbarBrand className="p-2 flex-fill text-white text-right mx-0 ubuntu"><span>Score: {props.score}</span><span className="mx-3">|</span><span>High Score: {props.highScore}</span></MDBNavbarBrand>
          </MDBNavbar>
        </header>
      </Router>
      <div style={bgBlue} className="text-center white-text mt-5 py-5">
        <MDBContainer>
          <br />
          <h3 className="font-weight-bold ubuntu">Gotta Catch 'Em All!</h3>
          <br/>
          <h5>Click on a pokemon to catch it, but you will lose them all if you click on any more than once!</h5>
        </MDBContainer>
      </div>
    </div>
  );
}

export default Navbar;