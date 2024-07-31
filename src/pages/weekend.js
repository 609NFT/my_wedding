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
            <div className='main-content'>
            <Container className='content'>
                <Row className="mt-4">
                    <Col md={6} className="mb-4">
                        <div className="column">
                            <img src={venue} alt="venue" className='venue' />
                            <h3 className='weekend_section'>Reception</h3>
                            <p className='p_tag'>
                                8/3/24 - 6:30 to 11:30 pm<br />
                                ---------------< br/>
                                Bridgehampton Tennis & Surf Club<br />
                                231 Midocean Drive<br />
                                Bridgehampton, NY 11932
                            </p>
                        </div>
                    </Col>
                    <Col md={6} className="mb-4">
                        <div className="column">
                            <img src={grass} alt="grass" className='grass' />
                            <h3 className='weekend_section'>Farewell</h3>
                            <p className='p_tag'>
                                8/4/24 - 12:00 pm<br />
                                Pool & BBQ <br />
                                15 Northview Hills Ct.<br />
                                Sag Harbor, NY 11963<br />
---------------<br />
                                Beach - 2:00 pm,<br />weather permitting
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-4">
                <Col md={12} className="mb-4">
                <h2 className='asterisk'>Transportation</h2>
        <p className='asterisk'>Hamptons Hopper shuttles are provided for transportation to and from the reception. Shuttles depart at 6:00 PM, please arrive 15 minutes prior. There are two pick up locations.</p> 

<p className='asterisk'>Location 1: Hope's House - 15 Northview Hills Court, Sag Harbor (cars may be left overnight on the street)</p>
<p className='asterisk'>Location 2: Sag Harbor Village in front of the Sag Harbor Cinema - 90 Main Street, Sag Harbor (we recommend ubering to the pickup, as there is limited overnight parking in the village)</p>

<p className='asterisk'>Shuttles will depart from the reception at 11:30 PM and make two drop off stops: Stop 1: Sag Harbor Village.
Stop 2: Hope's House.</p>
        </Col>
        </Row>
            </Container>
            </div>
        </div>
    );
}

export default Weekend;
