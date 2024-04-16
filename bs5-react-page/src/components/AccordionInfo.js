import React from 'react';
import {Accordion} from 'react-bootstrap';


function AccordionInfo() {
  return (
      <Accordion flush>
          <Accordion.Item eventKey="0">
              <Accordion.Header>Learn more</Accordion.Header>
              <Accordion.Body>
                  While skydiving is undeniably an adventure sport, it also demands a commitment to safety and rigorous
                  training. Skydiving centers prioritize comprehensive training programs, equipment checks, and
                  adherence to safety protocols to ensure a secure experience for participants.
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
              <Accordion.Header>Will I like it?</Accordion.Header>
              <Accordion.Body>
                  This combination of adrenaline-fueled excitement, personal growth, and a commitment to safety makes
                  skydiving an unforgettable and life-affirming activity that continues to attract people seeking the
                  ultimate adventure in the vast blue canvas of the sky.
                  You will <b>love</b> it.
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
              <Accordion.Header>Is it safe?</Accordion.Header>
              <Accordion.Body>
                  Safety is paramount in the world of skydiving, and the sport has evolved with advanced technology,
                  rigorous training programs, and strict safety standards. Skydiving centers prioritize the well-being
                  of participants, ensuring that each jump is a carefully orchestrated adventure with a focus on both
                  excitement and security. Whether it's a tandem jump for beginners or experienced skydivers performing
                  intricate aerial maneuvers, the world of skydiving continues to captivate the adventurous spirit,
                  offering a unique blend of adrenaline, skill, and camaraderie high above the earth.
              </Accordion.Body>
          </Accordion.Item>
      </Accordion>
  );
}

export default AccordionInfo;