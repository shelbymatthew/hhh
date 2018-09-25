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
          <div key={`article${i}`}>
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


// class hh extends Component {
//   state = {
//     hhs: [],
//     image: "",
//     rest: "",
//     time: "",
//     itemsDiscounted: []
//   };

//   componentDidMount() {
//     this.loadHh();
    
//   }

//   loadHh = () => {
//     API.getHhs()
//       .then(res =>
//         this.setState({ hhs: res.data, image: "", rest: "", time: "", itemsDiscounted: [] }),
//       )
//       .catch(err => console.log(err));
//   };

//   // deleteHh = id => {
//   //   API.deleteHh(id)
//   //     .then(res => this.loadhh())
//   //     .catch(err => console.log(err));
//   // };

//   // handleInputChange = event => {
//   //   const { name, value } = event.target;
//   //   this.setState({
//   //     [name]: value
//   //   });
//   // };

//   // handleFormSubmit = event => {
//   //   event.preventDefault();
//   //   if (this.state.rest && this.state.time) {
//   //     API.saveHh({
//   //       rest: this.state.rest,
//   //       time: this.state.time,
//   //       itemsDiscounted: this.state.itemsDiscounted
//   //     })
//   //       .then(res => this.loadhh())
//   //       .catch(err => console.log(err));
//   //   }
//   // };

//   render() {
//     return (
//       <Container fluid>
//         <Row>
//           <Col size="md-12 sm-12">
//             <Jumbotron>
//               <h1>Houston Happy Hour</h1>
//             </Jumbotron>
//             {this.state.hhs.length ? (
//               <List>
//                 {this.state.hhs.map(hh => (
//                   <ListItem key={hh._id}>
//                       <strong>
//                         {hh.rest}
//                       </strong>
//                       <ListItem><img src={hh.image} alt={hh.rest}/></ListItem>
//                       <List>
//                         {this.state.hhs.itemsDiscounted.map(itemsDiscounted => (
//                           <ListItem key={itemsDiscounted._id}>
//                               <strong>
//                                 {itemsDiscounted.item}
//                               </strong>
//                           </ListItem>
                    
//                 ))}
//               </List>
//                   </ListItem>
                    
//                 ))}
//               </List>
//             ) : (
//               <h3>No Results to Display</h3>
//             )}
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

// export default hh;