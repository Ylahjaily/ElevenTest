import React, {useEffect} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fetchAstronaute} from "../../actions/astronautesActions";
import AstronauteDetailsCard from "./AstronauteDetailsCard";


const AstronauteDetailsList = (astronaute) =>
{

    useEffect(() => {
        astronaute.fetchAstronaute(astronaute.match.params.id)
    })

        return (
            <div>
                <AstronauteDetailsCard astronaute = {astronaute} />
            </div>
        )

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