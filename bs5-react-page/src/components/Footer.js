import React from 'react';
import {Container} from 'react-bootstrap';

function Footer() {
  return (
    <footer class="py-5" style={{backgroundColor: "darkgreen"}}>
        <Container className="px-4">
          <p class="text-center text-white">
              Defy Gravity, Embrace Freedom: Soar into the Skydive Adventure!
          </p>
        </Container>
    </footer>
  );
}

export default Footer;