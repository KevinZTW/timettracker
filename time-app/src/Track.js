import React from "react";

function Track(){
    return(
        <div className="track">
            <h1 className = "track-title">Record your time!</h1>
            <form className="track-form">
                <span></span>
                <input className ="track-input" placeholder="I'm workding on "></input>
                <input className="act-button" type="button" value="start"></input>
                <input className="act-button" type="button" value="stop"></input>
            </form>


        </div>



    )
}

export default Track;