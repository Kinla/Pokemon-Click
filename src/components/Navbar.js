import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBBtn } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    const bgDkBlue = {backgroundColor: '#003A70'}
    const bgBlue = {backgroundColor: '#3D7DCA'}
    const newGame = this.props.newGame

    return(
      <div>
        <Router>
          <header>
            <MDBNavbar dark scrolling fixed="top" className="d-flex flex-row justify-content-between w-100" style={bgDkBlue}>
              <MDBNavbarBrand href="/" className="p-2 flex-fill text-left">
              <img src="https://fontmeme.com/permalink/190608/181d3f2d1139cbd6325c69b925fe885f.png" alt="pokemon-font" border="0" width="auto" height="40"/>
              </MDBNavbarBrand>
              <MDBNavbarBrand className="p-2 flex-fill text-white text-center">{this.props.message}</MDBNavbarBrand>
              {newGame && <MDBBtn color="yellow" size="sm" className="font-weight-bold" style={{fontSize: "1rem"}} onClick={() => this.props.onClick()}>New Game</MDBBtn>}  
              <MDBNavbarBrand className="p-2 flex-fill text-white text-right">Score: {this.props.score} | Top Score: {this.props.highScore}</MDBNavbarBrand>
            </MDBNavbar>
          </header>
        </Router>
        <div style={bgBlue} className="text-center white-text mt-5 py-5">
          <MDBContainer>
            <br />
            <h3>Gotta Catch 'Em All!</h3>
            <br/>
            <h5>Click on a pokemon to catch it, but you will lose them all if you click on any more than once!</h5>
          </MDBContainer>
        </div>
      </div>
    );
  }
}

export default Navbar;