import React from 'react';
import PropTypes from 'prop-types';
import API from '../../utils/API';
import Hhs from '../Hhs';

const propTypes = {
    image: PropTypes.string,
    rest: PropTypes.string,
    time: PropTypes.array,
    url: PropTypes.string,
    outOfDate: PropTypes.number,
    itemsDiscounted: PropTypes.array,
    date: PropTypes.string
};

/**
 * hhsList class
 */
class HhList extends React.Component {
  /**
   * Constructor method for hhs list
   * @param {*} props
   */
    constructor(props) {
        super(props);
        this.state = {
            hhs: [],
        };
        this.loadHhs = this.loadHhs.bind(this);
    }
/**
 * Loading hhs
 */
    componentDidMount() {
        this.loadHhs();
    };

   /**
   * Loadhhs function
   */
    loadHhs() {
        API.getHhs()
            .then((res) =>
                this.setState({
                    hhs: res.data,
                }),
        )
            .catch((err) => console.log(err));
    };
    /**
   * Render function
   * @return {JSX}
   */
    render() {
        return (
            <div>
                {this.state.hhs.map((hhs) => (
                    <Hhs
                        key={hhs._id}
                        id={hhs._id}
                        image={hhs.image}
                        rest={hhs.rest}
                        time={hhs.url}
                        itemsDiscounted={hhs.itemsDiscounted}
                    />
                ))}
            </div>
        );
    }
}
HhList.propTypes = propTypes;
export default HhList;