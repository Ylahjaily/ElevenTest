import React  from 'react';
import {Link} from 'react-router-dom'

export default function AstronauteCard(props)
{
    const astronaute = props.astronaute
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h1>{astronaute.name}</h1>
                    <p>{astronaute.age} years old</p>
                    <Link className="btn btn-primary" to={`/astronaute/${astronaute.id}`}>Details</Link>
                </div>
            </div>
        </div>
    )
}


