import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Container from '@material-ui/core/Container';

import TestTable from './testTable';

import logo from './test.jpg';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });


class TrackInfo extends Component {
    render() {
        return (
            <div style={{ overflow: 'auto', height: '100%' }}>
                <Container className="testContainer">
                    <img className="trackImage" src={logo}></img>
                </Container>
                <Container>
                    <TestTable/>
                </Container>
            </div>
        )
    }
}

export default TrackInfo