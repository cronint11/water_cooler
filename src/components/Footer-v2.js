import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";


function Footer() {
    return (
        <div>
            <div className='footer-buffer' />
            <div className="sticky-footer">
                <h6 className="slogan">We know movies, music, tv shows, books, podcasts, video games and more...</h6>
                <Link className="footer" to="/feed">Home</Link>
                <Link className="footer" to="/media">Profile</Link>
                <Link className="footer" to="/watchlist">Watchlist</Link>
                <Link className="footer" to="#">Friends</Link>
            </div>
        </div>
    )
}

export default Footer;