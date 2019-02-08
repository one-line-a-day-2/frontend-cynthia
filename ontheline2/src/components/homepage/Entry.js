import React from 'react';

const Entry = props => {
    return (
        <div>
            {props.entries.map( entry => {
                return <p>{entry.entry}</p>
            })}

        </div>
    )
}

export default Entry;

 