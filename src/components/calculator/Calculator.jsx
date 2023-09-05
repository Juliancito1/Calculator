import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Result from './Result';

const Calculator = () => {
    return (
        <Container>
            <div className='calculator'>
                <Row>
                    <Col lg={9}>
                    <h3>Calc</h3>
                    </Col>
                    <Col lg={3}>
                    <h4>Theme</h4>
                    </Col>
                </Row>
                <Result></Result>
            </div>
        </Container>
    );
};

export default Calculator;