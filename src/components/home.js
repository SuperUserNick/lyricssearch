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
        }
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
        this.setState({song: this.state.inputSong})
    }

    getLyrics(lyrics){
        this.setState({lyrics: lyrics})
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
        const button = {marginTop: '10px'}
    return (
        <div className="columns" >
            <div className="column is-three-fifths is-offset-one-fifth" style={headerStyle}>
                <h1>Please enter an artist and the song of your choice for the lyrics!</h1>
                <div style={inputStyle}>
                <form onSubmit={this.handleSubmit}>
                {!this.state.artist && <div>
                        <input type="text" className="input" value={this.state.inputArtist} onChange={this.handleChangeArtist} placeholder="First enter an artist" />
                        <button className="button is-light " style={button} onClick={() => this.addArtist()}>Next</button>
                </div>}
                
                    {
                        this.state.artist &&
                        <div> 
                        <input type="text" className="input" value={this.state.inputSong} onChange={this.handleChangeSong} placeholder="Next enter a song" />
                        <button className="button is-light spacing" type="submit" style={button} onClick={() => this.addSong()}>Submit</button>
                        </div>
                    }
                    </form>
                </div>
                <div className="spacing"></div>
                {this.state.lyrics && <Lyrics artist={this.state.artist} song={this.state.song} lyrics={this.state.lyrics}/>}
            </div>
        </div>
    )}
}

export default Home