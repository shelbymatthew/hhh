import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import PropTypes from 'prop-types';

const propTypes = {
  image: PropTypes.string,
  rest: PropTypes.string,
  time: PropTypes.array,
  url: PropTypes.string,
  outOfDate: PropTypes.number,
  itemsDiscounted: PropTypes.array,
  date: PropTypes.string
};

class Hhs extends Component {
render() {
    return (
      <Container>
        <List>
          <ListItem>
          <img src={this.props.image} alt={this.props.rest}/>
          </ListItem>
          <ListItem>
          <h1>{this.props.rest}</h1>
          </ListItem>
        
        {this.props.itemsDiscounted.map((itemsDiscounted, i) =>
        <ListItem>
          <div key={`itemDiscounted${i}`}>
            <h4>{itemsDiscounted.item + " " + itemsDiscounted.price} </h4>
          </div>
          </ListItem>
        )
        }
        </List>
        </Container>
    );
  }
};

export default Hhs;


