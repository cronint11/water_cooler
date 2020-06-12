import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


function Footer() {
    return (   
    <Container className='sticky-footer'>
    <h6 className="slogan">We know movies, music, tv shows, books, podcasts, video games and more...</h6>      
    <Navbar  sticky="bottom" className="bottom">
    <Navbar.Brand id="footer" href="/feed">Home</Navbar.Brand>
    <Navbar.Brand id="footer" href="/media">Profile</Navbar.Brand>
    <Navbar.Brand id="footer" href="/watchlist">Watchlist</Navbar.Brand>
    <Navbar.Brand id="footer" href="/friends">Friends</Navbar.Brand>
    </Navbar>
    
    </Container>
    )}

export default Footer;