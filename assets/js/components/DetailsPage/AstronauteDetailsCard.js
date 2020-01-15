import React  from 'react';
import PropTypes from "prop-types";

export default function AstronauteDetailsCard(props)
{
    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-4">{props.astronaute.astronaute.name}</h1>
                <p className="lead">{props.astronaute.astronaute.description}</p>
                <hr className="my-4"/>
                <p>{props.astronaute.astronaute.age} years old</p>
            </div>
        </div>
    )
}

