import React  from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fetchAstronaute} from "../../actions/astronautesActions";
import AstronauteDetailsCard from "./AstronauteDetailsCard";



class AstronauteDetailsList extends React.Component
{
    componentDidMount()
    {
    this.props.fetchAstronaute(this.props.match.params.id);
    }

    render(){
        return (
            <div>
                <AstronauteDetailsCard astronaute = {this.props.astronaute} />
            </div>
        )
    }
}

AstronauteDetailsList.proptypes = {
    astronaute : PropTypes.object.isRequired,
    fetchAstronaute : PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        astronaute : state.astronaute
    }
}

export default connect(mapStateToProps, {fetchAstronaute})(AstronauteDetailsList)