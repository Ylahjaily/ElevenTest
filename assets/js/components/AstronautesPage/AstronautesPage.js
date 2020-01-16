import React, {useEffect} from 'react';
import AstronautesList from "./AstronautesList"
import {connect} from "react-redux";
import {fetchAstronautes} from '../../actions/astronautesActions'

const AstronautesPage = (props) =>
{
    const astronautes = props.astronautes
    const fetchAstronautes = props.fetchAstronautes

    useEffect(()=>
    {
        fetchAstronautes()
    },
        []
    )

    return (
        <div>
            <h1>Astronautes </h1>
            <AstronautesList astronautes = {astronautes}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        astronautes : state.astronautes
    }
}

export default connect(mapStateToProps, {fetchAstronautes})(AstronautesPage);