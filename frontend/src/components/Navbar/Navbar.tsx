import * as React from 'react';
import { Button, Typography } from '@material-ui/core';
import { Home, LocalMovies, Work } from '@material-ui/icons'
import icon_128 from "../../assets/icon_128.png"
import './Navbar.css'
import myGlobe from '../globe/myGlobe'

const Navbar = () => {

    return (
        <div className="navbar__main">
            <div className="navbar__main-links">
                <div className="navbar__main-links_logo">
                    <myGlobe></myGlobe>
                </div>
                <div className="navbar__main-links_container">
                    <a href="#home"><Typography variant="h6">Home</Typography></a>
                    <a href="#home"><Typography variant="h6">About Me</Typography></a>
                    <a href="#home"><Typography variant="h6">Projects</Typography></a>
                    <a href="#home"><Typography variant="h6">Contact Me</Typography></a>
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
