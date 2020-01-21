import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {fetchAstronaute} from "../../actions/astronautesActions";

const AstronauteDetailsList = (props) =>
{
    const astronaute = {
        id : props.astronaute.id,
        name : props.astronaute.name,
        description : props.astronaute.description,
        age : props.astronaute.age
    }

    const fetchAstronaute = props.fetchAstronaute

    useEffect(() =>
        {
            fetchAstronaute(props.match.params.id)
        },
        []
        )

    return (
        <div>
            <h1>details</h1>
            <h1>{astronaute.name}</h1>
            <h2>{astronaute.age}</h2>
            <h3>{astronaute.description}</h3>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        astronaute : state.astronaute
    }
}

export default connect(mapStateToProps, {fetchAstronaute})(AstronauteDetailsList)

