import React from 'react'

const Lyrics = props => {
    const formatted = props.lyrics.split("\n")
    return(
        <div className="columns">
        <div className="column is-half">
        <br></br>
        <h1 style={{fontSize: '25px'}}>{props.song} by {props.artist}</h1>
        <br></br>
            {formatted.map((line, key) => (<p key={key}>{line}</p>))}
        </div>
        </div>
    )
}
export default Lyrics
