import React, { Component } from 'react'
import 'bulma/css/bulma.css'


class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputArtist: "",
            artistWasSearched: false,
            artist: "",
            song: "",
            inputSong: "",
            showArtistSearch: true
        }
        this.handleChangeArtist = this.handleChangeArtist.bind(this)
        this.handleChangeSong = this.handleChangeSong.bind(this)
    }

    handleChangeArtist(event) {
        this.setState({inputArtist: event.target.value})
    }
    handleChangeSong(event){
        this.setState({inputSong: event.target.value})
    }

    addArtist(){
        this.setState({artist: this.state.inputArtist, artistWasSearched: true})
    }

    addSong(){
        this.setState({song: this.state.inputSong})
    }
    

    render(){
        const headerStyle = {marginTop: '150px'}
        const inputStyle = {marginTop: '160px'}
    return (
        <div className="columns" >
            <div className="column is-three-fifths is-offset-one-fifth" style={headerStyle}>
                <h1>Please enter an artist and the song of your choice for the lyrics!</h1>
                <div style={inputStyle}>
                {!this.state.artist && <div>
                        <input type="text" className="input" value={this.state.inputArtist} onChange={this.handleChangeArtist} placeholder="First enter an artist" />
                        <button className="button is-light" onClick={() => this.addArtist()}>Next</button>
                </div>}
                
                    {
                        this.state.artist &&
                        <div> 
                        <input type="text" className="input" value={this.state.inputSong} onChange={this.handleChangeSong} placeholder="Next enter a song" />
                        <button onClick={() => this.addSong()}>Submit</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )}
}

export default Home