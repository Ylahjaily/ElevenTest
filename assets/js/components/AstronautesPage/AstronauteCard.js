import React  from 'react';
import {Link} from 'react-router-dom'

export default function AstronauteCard(props)
{

    const astronaute = {
        id : props.astronaute.id,
        name : props.astronaute.name,
        description : props.astronaute.description,
        age : props.astronaute.age
    }

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h1>{astronaute.name}</h1>
                    <p>{astronaute.age} years old</p>
                    <Link className="btn btn-primary" to={`/astronautes/${astronaute.id}`}>Details</Link>
                </div>
            </div>
        </div>
    )
}


