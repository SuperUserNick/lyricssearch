import React, {Component} from 'react'

class Footer extends Component{

    render(){
        var style = {
            backgroundColor: "#F8F8F8",
            borderTop: "1px solid #E7E7E7",
            textAlign: "center",
            padding: "10px",
            position: "fixed",
            left: "0",
            bottom: "0",
            height: "40px",
            width: "100%",
        }
        var phantom = {
            display: 'block',
            padding: '20px',
            height: '40px',
            width: '100%',
          }
          
        
        return(
            <div>
                <div style={phantom} />
                <div style={style}>
                    <p style={{fontSize:'15px'}}>Powered by Gatsbyjs</p>
                </div>
            </div>
        )
    }
}

export default Footer