import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function Footer() {
    return (   
        <div className="sticky-footer">
            <h6 className="slogan">We know movies, music, tv shows, books, podcasts, video games and more...</h6>      
            <Link id="footer" to="/feed">Home</Link>
            <Link id="footer" to="/media">Profile</Link>
            <Link id="footer" to="/watchlist">Watchlist</Link>
            <Link id="footer" to="#">Friends</Link>
        </div>
    )
}

export default Footer;