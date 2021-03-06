import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import Axios from 'axios';

import Lyrics from './lyrics'


class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputArtist: "",
            artistWasSearched: false,
            artist: "",
            song: "",
            inputSong: "",
            lyrics: "",
            error: false,
        }
        this.baseState = this.state // this is a solution to resetting all values to initial state
        this.handleChangeArtist = this.handleChangeArtist.bind(this)
        this.handleChangeSong = this.handleChangeSong.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeArtist(event) {
        this.setState({inputArtist: event.target.value})
    }
    handleChangeSong(event){
        this.setState({inputSong: event.target.value})
    }

    addArtist(){
        this.setState({artist: this.state.inputArtist, artistWasSearched: true})
        console.log(this.state.artist, this.state.song)
    }

    addSong(){
        this.state.error ? this.setState({error: false}) : this.setState({error: false})
        this.setState({song: this.state.inputSong})
    }

    getLyrics(lyrics){
        this.setState({lyrics: lyrics})
    }
    reset() {
        this.setState(this.baseState)
    }
    error(){
        this.reset()
        this.setState({error: true})
    }

    handleSubmit(event) {
        event.preventDefault()
        const artist = this.state.artist
        const song = this.state.song
        Axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
        .then(res => this.getLyrics(res.data.lyrics))
        .catch(() => this.error())
    }
    

    render(){
        const headerStyle = {marginTop: '200px'}
        const inputStyle = {marginTop: '50px'}
        const nextButton = {marginTop: '10px', backgroundColor: '#B9F6CA'}
        const submitButton = {marginTop: '10px', backgroundColor: '#69F0AE'}
        const resetButton = {marginTop: '10px', backgroundColor: '##00E676'}
    return (
        <div className="columns" >
            <div className="column box is-three-fifths is-offset-one-fifth" style={headerStyle}>
                <h1>Please enter an artist and the song of your choice for the lyrics!</h1>
                <div style={inputStyle}>
                <form onSubmit={this.handleSubmit}>
                {!this.state.artist && <div>
                        <input type="text" className="input" value={this.state.inputArtist} onChange={this.handleChangeArtist} placeholder="First enter an artist" />
                        <button className="button is-light " style={nextButton} onClick={() => this.addArtist()}>Next</button>
                </div>}
                
                    {
                        this.state.artist &&
                        <div> 
                        <input type="text" className="input" value={this.state.inputSong} onChange={this.handleChangeSong} placeholder="Next enter a song" />
                        {!this.state.lyrics ? <button className="button is-light spacing" type="submit" style={submitButton} onClick={() => this.addSong()}>Submit</button> :
                        <button className="button is-light" style={resetButton} onClick={()=>this.reset()}>Search Another</button>}
                        </div>
                    }
                    </form>
                </div>
                <div className="spacing"></div>
                {this.state.lyrics && <Lyrics artist={this.state.artist} song={this.state.song} lyrics={this.state.lyrics}/>}
                {this.state.error && <h1 style={{marginTop: '10px'}}>The song you are searching for could not be found - please check spelling or try searching another song</h1>}
            </div>
        </div>
    )}
}

export default Home