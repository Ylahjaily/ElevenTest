import React  from 'react';
import PropTypes from "prop-types";

export default function AstronauteDetailsCard({astronaute})
{
    if(astronaute){
        return (
        <div>
            <div className="jumbotron">
                <h1 className="display-4">{astronaute.name}</h1>
                <p className="lead">{astronaute.description}</p>
                <hr className="my-4"/>
                <p>{astronaute.age} years old</p>
            </div>
        </div>
        )
    }
    return (
        <p>Loading</p>
    )
}

AstronauteDetailsCard.proptypes = {
    astronaute : PropTypes.object.isRequired
}

