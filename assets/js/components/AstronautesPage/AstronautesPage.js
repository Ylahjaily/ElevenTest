import React  from 'react';
import AstronautesList from "./AstronautesList"
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {fetchAstronautes} from '../../actions/astronautesActions'

class AstronautesPage extends React.Component
{
    componentDidMount(){
        this.props.fetchAstronautes();
    }

    render()
    {
        return (
            <div>
                <h1>Astronautes </h1>
                <AstronautesList astronautes = {this.props.astronautes}/>
            </div>
        )
    }
};

AstronautesPage.propTypes = {
    astronautes : PropTypes.array.isRequired,
    fetchAstronautes : PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        astronautes : state.astronautes
    }
}

export default connect(mapStateToProps, {fetchAstronautes})(AstronautesPage);