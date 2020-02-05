import React, { Component } from 'react';
import Columns from 'react-columns';
//import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import SimpleCard from '../cards/simpleCard';
import TrackInfo from '../trackInfo/trackInfo';



class HomePage extends Component {
  render() {
    return (
      <div style={{backgroundColor:"lightblue", height: '1000px'}}>
        <Grid
        container
        direction="col"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={1}
        >
          <Grid item xs={3}>
            <Container className="homeNavButton">
              FUNK
            </Container>
          </Grid>
          <Grid item xs={3}>
            <Container className="homeNavButtonAlt">
              TWO
            </Container>
          </Grid>
          <Grid item xs={3}>
            <Container className="homeNavButton">
              ONE
            </Container>
          </Grid>
          <Grid item xs={3}>
            <Container className="homeNavButtonAlt">
              TWO
            </Container>
          </Grid>
        </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={8}>
          <Container className="largeHome">
            <TrackInfo />
          </Container>
        </Grid>
        <Grid item xs={4}>
          <Container className="otherHome">
            <TrackInfo/>
          </Container>
        </Grid>
      </Grid>
      </Grid>
      </div>
    )
  }
}

export default HomePage;


{/* <div className="container" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh', width: '100vh'}}>
          <Container>
            
          </Container>
          
          <Container>
            <Button variant="contained" color="secondary">
              Join
            </Button>
          </Container>
        </div>
          <h3>This is a heading</h3>
          <p>This is a paragraph.</p>
      </div> */}