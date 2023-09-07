import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Result from './Result';
import Buttons from './Buttons';

const Calculator = ({background, setBackground}) => {

    const [circle, setCircle] = useState(0);
    const [backgroundResult, setBackgroundResult] = useState("backgroundResult")
    const handleCircle = () => {
        let move = 30
        setCircle(circle + move);
        if(circle === 0)
        {
            setBackground("background2")
            setBackgroundResult("backgroundResult2")
        }
        if(circle === 30)
        {
            setBackground("background3")
            setBackgroundResult("backgroundResult3")
        }
        if(circle > 30)
        {
            setBackground("background")
            setBackgroundResult("backgroundResult")
            setCircle(0)
        }
    }

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
                        <div className='circle btn border-0 btn-danger' onClick={handleCircle} style={{transform: `translateX(${circle}px)`}}></div>
                    </div>
                    </Col>
                </Row>
                <Result backgroundResult={backgroundResult}></Result>
                <Buttons></Buttons>
            </section>
        </Container>
    );
};

export default Calculator;