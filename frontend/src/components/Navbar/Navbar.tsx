import * as React from 'react';
import { Button, Typography } from '@material-ui/core';
import { Home, LocalMovies, Work } from '@material-ui/icons'
import icon_128 from "../../assets/icon_128.png"
import './Navbar.css'

const Navbar = () => {

    return (
        <div className="navbar__main">
            <div className="navbar__main-links">
                <div className="navbar__main-links_logo">
                    <img src={icon_128} />
                </div>
                <div className="navbar__main-links_container">
                    <p><a href="#home"><Typography variant="h6">Home</Typography></a></p>
                    <p><a href="#home"><Typography variant="h6">About Me</Typography></a></p>
                    <p><a href="#home"><Typography variant="h6">Projects</Typography></a></p>
                    <p><a href="#home"><Typography variant="h6">Contact Me</Typography></a></p>
                </div>
            </div>
            <div className="navbar__main-sign">
                <Button variant="contained">Resume</Button>
            </div>
            <div className="navbar__main-menu">
            </div>

        </div>
    )
}

export default Navbar
