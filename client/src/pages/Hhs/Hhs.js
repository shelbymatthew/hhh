import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class hh extends Component {
  state = {
    hhs: [],
    image: "",
    rest: "",
    time: "",
    itemsDiscounted: []
  };

  componentDidMount() {
    this.loadHh();
    
  }

  loadHh = () => {
    API.getHhs()
      .then(res =>
        this.setState({ hhs: res.data, image: "", rest: "", time: "", itemsDiscounted: [] }),
      )
      .catch(err => console.log(err));
  };

  // deleteHh = id => {
  //   API.deleteHh(id)
  //     .then(res => this.loadhh())
  //     .catch(err => console.log(err));
  // };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.rest && this.state.time) {
  //     API.saveHh({
  //       rest: this.state.rest,
  //       time: this.state.time,
  //       itemsDiscounted: this.state.itemsDiscounted
  //     })
  //       .then(res => this.loadhh())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What hh Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.time}
                onChange={this.handleInputChange}
                name="time"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.itemsDiscounted}
                onChange={this.handleInputChange}
                name="itemsDiscounted"
                placeholder="itemsDiscounted (Optional)"
              />
              <FormBtn
                disabled={!(this.state.time && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Hh
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>hh On My List</h1>
            </Jumbotron>
            {this.state.hhs.length ? (
              <List>
                {this.state.hhs.map(hh => (
                  <ListItem key={hh._id}>
                      <strong>
                        {hh.rest}
                      </strong>

                    <DeleteBtn onClick={() => this.deleteHh(hh._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default hh;