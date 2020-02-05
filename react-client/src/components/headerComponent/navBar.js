import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
              <Link to="/">Home</Link>
            </Container>
            <Container className="navContainer">
              <Link to="/about">About</Link>
            </Container>
          </Grid>
        </Grid>
        </Container>
      </header>
    )
  }
}



export default NavBar;