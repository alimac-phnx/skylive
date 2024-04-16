import './App.css';
import {Button, Container, Row, Col, Image, Card } from "react-bootstrap";
import Header from './components/Header';
import Footer from './components/Footer';
import Text from './components/Text';
import AccordionInfo from './components/AccordionInfo';
import SimpleCard from './components/SimpleCard';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
      <div className="App">
        <div id="home" className = "p-3"/>
        <Header/>
        <section>
          <Container><Row className='px-4 my-10 my-text'>
            <Col sm={12}>
              <Text title ="Popular topics"></Text>
            </Col>

          </Row>
            <Row className='my-10'>
              <Col lg={3} sm= {12}>
                <SimpleCard className="my-card" title="Winter season" content="Skydiving during the winter season adds an extra layer of excitement and awe to this already thrilling adventure." btntext="Subscribe" srcimg="https://images.unsplash.com/photo-1591007232007-b26dfbbc9a9a?q=80&w=2018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
              </Col>
              <Col lg={3} sm= {12}>
                <SimpleCard className="my-card" title="Our technics" content="Skydiving techniques encompass a set of skills that jumper must master to ensure a safe and experience." btntext="Subscribe" srcimg="https://images.unsplash.com/photo-1598335952681-91d63fb23ec5?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
              </Col>
              <Col lg={3} sm= {12}>
                <SimpleCard className="my-card" title="Child tandem" content="Skydiving as a child in tandem with a certified instructor is a unique and exhilarating experience."  btntext="Subscribe"  srcimg="https://images.unsplash.com/photo-1598335792171-8d789af7f80d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
              </Col>
              <Col lg={3} sm= {12}>
                <SimpleCard className="my-card" title="Tandem" content="Tandem skydiving represents a remarkable and accessible entry into the world of skydiving, allowing." btntext="Subscribe" srcimg="https://images.unsplash.com/photo-1675645294783-8ae8e106a03a?q=80&w=1881&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
              </Col>
            </Row>
            <Row className='px-4 my-10 my-text'>
              <Col sm={12}>
                <Text title ="Our Sky Life"></Text>
              </Col>

            </Row>
            <Row className='px-10 my-10'>
              <Col sm={7}>
                <Image
                    src="https://images.unsplash.com/photo-1630879937467-4afa290b1a6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    fluid
                    className=""
                />
              </Col>
              <Col sm={5}>
                <Text title ="Skydiving" content="Skydiving is an exhilarating adventure that offers individuals the unique opportunity to defy gravity and experience the thrill of freefall before safely deploying a parachute. The experience begins with a leap from an aircraft at high altitude, where the adrenaline rush is unparalleled. As the skydiver plummets toward the Earth, they experience a breathtaking sense of freedom and weightlessness, surrounded by the vast expanse of the open sky. The initial freefall is followed by the serene descent under the open parachute, providing an opportunity to appreciate the stunning aerial views and enjoy a more peaceful moment before landing." />
                <Button href="#home" variant="outline-primary" style={{borderColor: "green", color: "darkgreen"}}>Read more</Button>
              </Col>
            </Row>
            <Row className='px-10 my-10'>
              <Col sm={7}>
                <Text title ="Enjoy your fear" content="Beyond the adrenaline-pumping excitement, skydiving is often described as a transformative and empowering experience. Confronting the fear of the unknown and stepping outside one's comfort zone can lead to a profound sense of accomplishment and personal growth. The camaraderie among fellow skydivers and the supportive environment at drop zones contribute to a vibrant community that shares a passion for this extraordinary sport. The courage it takes to make that initial leap fosters not only a sense of individual achievement but also a connection with a global community of thrill-seekers who appreciate the unparalleled sensation of soaring through the sky." />
                <Button href="#home" variant="outline-primary" style={{borderColor: "green", color: "darkgreen"}}>Read more</Button>
              </Col>
              <Col sm={5}>
                <Image
                    src="https://images.unsplash.com/photo-1566073283089-38a47111c835?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    fluid
                    className=""
                />
              </Col>
            </Row>
            <Row>
              <AccordionInfo/>
            </Row>
          </Container>
        </section>
        <Footer/>
      </div>
  );
}

export default App;
