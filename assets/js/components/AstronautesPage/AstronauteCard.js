import React  from 'react';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'

export default function AstronauteCard(props)
{

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h1>{props.astronaute.name}</h1>
                    <p>{props.astronaute.age} years old</p>
                    <Link className="btn btn-primary" to={`/astronaute/${props.astronaute.id}`}>Details</Link>
                </div>
            </div>
        </div>
    )
}

AstronauteCard.proptypes = {
    astronaute : PropTypes.object.isRequired
}

