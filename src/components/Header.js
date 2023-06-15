import React from "react";
import troll from "../images/troll-face.png";

function Header() {
    return (
        <header className="header">
            <img alt="troll" src={troll} className="header--image"/>
            <h2 className="header--title">Meme Generator</h2>
            <h3 className="header--project">React Project</h3>
        </header>
    )
}

export default Header;

