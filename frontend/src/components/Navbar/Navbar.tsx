import * as React from 'react';
import { Button } from '@material-ui/core';
import { Home, LocalMovies, Work } from '@material-ui/icons'
import icon_128 from "../../assets/icon_128.png"
import './Navbar.css'
function handleClick() {
    console.info('You clicked a breadcrumb.');
}

const Navbar = () => {

    return (
        <div className="navbar__main">
            <div className="navbar__main-links">
                <div className="navbar__main-links_logo">
                    <img src={icon_128} />
                </div>
                <div className="navbar__main-links_container">
                    <p><a href="#home">Work</a></p>
                    <p><a href="#home">Education</a></p>
                    <p><a href="#home">Projects</a></p>
                    <p><a href="#home">Skills</a></p>
                </div>
            </div>
            <div className="navbar__main-sign">
                <Button variant="contained">Contact</Button>
            </div>
            <div className="navbar__main-menu">
            </div>

        </div>
    )
}

export default Navbar
