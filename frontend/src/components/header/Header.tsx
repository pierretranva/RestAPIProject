import * as React from 'react';
import { Typography, Link } from '@material-ui/core';
import { LinkedIn, Instagram, GitHub } from '@material-ui/icons'
import Globe from 'react-globe.gl'
import './Header.css'
import countries from './hexData.json'


const thing: Array<Number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arcsData = [thing].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: [['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)], ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]]
}));
const Header = () => {

    return (
        <div className="header__main">
            <div className="header__main-name">
                <Typography align="left" variant="body1">Hi, my name is</Typography>
                <Typography align="left" variant="h2">Pierre Tran.</Typography>
                <Typography align="left" variant="h2">Computer Science Student at Virginia Tech</Typography>
            </div>
            <div className="header__main-links">

                <Link className="header__main-links_linkedin" href="https://www.linkedin.com/in/pierretranva/" target="_blank" rel="noopener noreferrer"><LinkedIn /></Link>
                <Link className="header__main-links_instagram" href="https://www.instagram.com/p_tran1/" target="_blank" rel="noopener noreferrer"><Instagram /></Link>
                <Link className="header__main-links_github" href="https://github.com/pierretranva" target="_blank" rel="noopener noreferrer"><GitHub /></Link>

            </div>
            <div className="header__main-globe">
                <Globe
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
                    backgroundColor="rgba(0,0,0,0)"
                    animateIn={false}
                    atmosphereColor="#c6b7df"
                    hexPolygonsData={countries.features}
                    hexPolygonResolution={3}
                    showAtmosphere={true}
                    atmosphereAltitude={.25}
                    arcsData={arcsData}
                    arcColor={'color'}
                    arcDashLength={.9}
                    arcDashGap={() => Math.random()}
                    arcDashAnimateTime={() => Math.random() * 4000 + 500} />

            </div>
        </div>
    )
}

export default Header
