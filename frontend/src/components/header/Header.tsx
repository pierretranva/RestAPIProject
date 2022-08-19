
import { Typography, Link } from '@material-ui/core';
import { LinkedIn, Instagram, GitHub } from '@material-ui/icons'

import './Header.css'



const Header = () => {



    return (
        <div className="header__main">
            <div className="header__main-name">
                <Typography className="header__main-name_sub" align="left" variant="subtitle1">Hi, my name is </Typography>
                <Typography align="left" noWrap={true} variant="h1">Pierre Tran.</Typography>
                <div className="header__main-links">

                    <Link className="header__main-links_linkedin" href="https://www.linkedin.com/in/pierretranva/" target="_blank" rel="noopener noreferrer"><LinkedIn /></Link>
                    <Link className="header__main-links_instagram" href="https://www.instagram.com/p_tran1/" target="_blank" rel="noopener noreferrer"><Instagram /></Link>
                    <Link className="header__main-links_github" href="https://github.com/pierretranva" target="_blank" rel="noopener noreferrer"><GitHub /></Link>

                </div>
            </div>

        </div>
    )
}

export default Header
