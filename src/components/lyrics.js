import React from 'react'

const Lyrics = props => {
    return(
        <div className="columns">
        <div className="column is-half">
            <p>
            {props.lyrics}
            </p>
        </div>
        </div>
    )
}
export default Lyrics