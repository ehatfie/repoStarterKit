import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import logo from './test.jpg';
class NavBar extends Component {
  
  render() {
    
    return (
      <header className="header1">
        <Container className="container">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Container className="smallContainer2">
            <img className="image" src={logo}></img>
          </Container>
          <Container className="smallContainer">
            BAWK
          </Container>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
            <Container className="navContainer">
              <Link to="">TEST TEST</Link>
            </Container>
            
            <Container className="navContainer">
              <Link to="">TEST TEST</Link>
            </Container>
            <Container className="navContainer">
              <Link to="">TEST TEST TEST</Link>
            </Container>
          </Grid>
        </Grid>
        </Container>
      </header>
      // <header>
      //   <Navbar expand="lg" variant="light" bg="light">
      //     <Navbar.Brand href="#">Navbar</Navbar.Brand>
      //   </Navbar>
      // </header>
    )
  }
}



export default NavBar;