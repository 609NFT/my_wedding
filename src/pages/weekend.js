import React from 'react';
import Navigation from '../components/navigation';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure this is correctly imported
import { Container, Row, Col } from 'react-bootstrap';
import venue from "../new_venue.png";
import grass from "../new_grass.png";

function Weekend() {
    return (
        <div className="static-background">
            <Navigation />
            <Container className='content'>
                <Row className="mt-4">
                    <Col md={6} className="mb-4">
                        <div className="column">
                            <img src={venue} alt="venue" className='venue' />
                            <h3 className='weekend_section'>Reception</h3>
                            <p className='p_tag'>
                                8/3 - 6:30 pm<br />
                                Bridgehampton Tennis & Surf Club<br />
                                231 Midocean Drive,<br />
                                Bridgehampton, NY 11932
                            </p>
                        </div>
                    </Col>
                    <Col md={6} className="mb-4">
                        <div className="column">
                            <img src={grass} alt="grass" className='grass' />
                            <h3 className='weekend_section'>Beach Day</h3>
                            <p className='p_tag'>
                                8/4 - 11:00 am<br />
                                Ocean Road Beach<br />
                                1251 Ocean Rd,<br />
                                Sagaponack, NY 11962
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-4">
                <Col md={12} className="mb-4">
                <h2 className='asterisk'>Transportation</h2>
        <p className='asterisk'>The Hamptons Hopper will be available to take you safely to and from the venue for the celebration. Please check back the week of the wedding for exact details on pickup and dropoff. Please let Brian and Hope know where you're staying so we can coordinate.</p>
        </Col>
        </Row>
            </Container>
        </div>
    );
}

export default Weekend;
