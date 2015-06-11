'use strict';

var React = require('react');
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

var Chart = React.createClass({
  render: function () {
    return (
      <Grid fluid={ true }>
        <Row>
          <Col xs={ 12 }>
            Hello World!
          </Col>
        </Row>
      </Grid>
    )
  }
});

module.exports = Chart;
