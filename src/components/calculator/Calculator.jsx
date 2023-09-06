import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Result from './Result';
import Buttons from './Buttons';

const Calculator = () => {
    return (
        <Container>
            <section className='calculator'>
                <Row>
                    <Col xs={9} md={9} lg={9}>
                    <h3 className='text-light'>Calc</h3>
                    </Col>
                    <Col xs={3} md={3} lg={3}>
                    <h4 className='text-light'>Theme</h4>
                    <section className='d-flex justify-content-between text-light'>
                        <h6>1</h6>
                        <h6>2</h6>
                        <h6>3</h6>
                    </section>
                    <div className='slider'>
                        <div className='circle btn'></div>
                    </div>
                    </Col>
                </Row>
                <Result></Result>
                <Buttons></Buttons>
            </section>
        </Container>
    );
};

export default Calculator;