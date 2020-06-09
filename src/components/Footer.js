import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


function Footer() {
    return (   
    <Container>
    <Navbar  sticky="bottom" className="bottom">
    <Navbar.Brand id="footer" href="/feed">Home</Navbar.Brand>
    <Navbar.Brand id="footer" href="/media">Profile</Navbar.Brand>
    <Navbar.Brand id="footer" href="/watchlist">Watchlist</Navbar.Brand>
    <Navbar.Brand id="footer" href="#">Friends</Navbar.Brand>
    </Navbar>
    </Container>
    )}

export default Footer;