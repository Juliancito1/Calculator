import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Result from './Result';
import Buttons from './Buttons';

const Calculator = () => {
    return (
        <Container>
            <div className='calculator'>
                <Row>
                    <Col xs={9} md={9} lg={9}>
                    <h3 className='text-light'>Calc</h3>
                    </Col>
                    <Col xs={3} md={3} lg={3}>
                    <h4 className='text-light'>Theme</h4>
                    </Col>
                </Row>
                <Result></Result>
                <Buttons></Buttons>
            </div>
        </Container>
    );
};

export default Calculator;