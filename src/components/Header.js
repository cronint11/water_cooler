import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(props) {
  return (
    <Container>
      <h2>When you thirst for new media!</h2>
      <p>
        We know movies, music, tv shows, books, podcasts, video games and more!
      </p>
    </Container>
  );
};

export default Header;