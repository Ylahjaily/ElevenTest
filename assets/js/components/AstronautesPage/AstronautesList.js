import React  from 'react';
import AstronauteCard from './AstronauteCard'


export default function AstronautesList({astronautes})
{
    const emptyMessage = (<p>There are no astronautes yet</p>)
    const astronautesList = (
        <div>
            { astronautes.map(astronaute => <AstronauteCard astronaute={astronaute}  key ={astronaute.id}/>) }
        </div>
    )

    return (
        <div>
            {astronautes.length === 0 ? emptyMessage : astronautesList }
        </div>
    )
}

