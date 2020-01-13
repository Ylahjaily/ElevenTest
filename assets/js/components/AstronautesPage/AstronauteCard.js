import React  from 'react';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'

export default function AstronauteCard({astronaute})
{
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h1>{astronaute.name}</h1>
                    <p>{astronaute.age} years old</p>
                    <Link className="btn btn-primary" to={`/user/${astronaute.id}`}>Details</Link>
                </div>
            </div>
        </div>
    )
}

AstronauteCard.proptypes = {
    astronaute : PropTypes.object.isRequired
}

