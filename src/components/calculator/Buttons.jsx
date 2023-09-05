import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Buttons = () => {
  return (
    <section className="buttonsPad backgroundKeypad">
      <Container>
        <Row className="mt-lg-3">
          <Col lg={3}>
            <Button className="w-100 buttons">7</Button>
          </Col>
          <Col lg={3}>
            <Button className="w-100 buttons">8</Button>
          </Col>
          <Col lg={3}>
            <Button className="w-100 buttons">9</Button>
          </Col>
          <Col lg={3}>
            <Button className="w-100 fs-4 resdel border-0">DEL</Button>
          </Col>
        </Row>
        <Row className="my-lg-3">
          <Col lg={3}>
            <Button className="w-100 buttons">4</Button>
          </Col>
          <Col lg={3}>
            <Button className="w-100 buttons">5</Button>
          </Col>
          <Col lg={3}>
            <Button className="w-100 buttons">6</Button>
          </Col>
          <Col lg={3}>
            <Button className="w-100 buttons">+</Button>
          </Col>
        </Row>
        <Row className="mb-lg-3">
          <Col lg={3}>
            <Button className="w-100 buttons">1</Button>
          </Col>
          <Col lg={3}>
            <Button className="w-100 buttons">2</Button>
          </Col>
          <Col lg={3}>
            <Button className="w-100 buttons">3</Button>
          </Col>
          <Col lg={3}>
            <Button className="w-100 buttons">-</Button>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col lg={3}>
            <Button className="w-100 buttons">.</Button>
          </Col>
          <Col lg={3}>
            <Button className="w-100 buttons">0</Button>
          </Col>
          <Col lg={3}>
            <Button className="w-100 buttons">/</Button>
          </Col>
          <Col lg={3}>
            <Button className="w-100 buttons">x</Button>
          </Col>
        </Row>
        <Row>
            <Col lg={6}>
                <Button className="w-100 fs-5 resdel border-0">RESET</Button>
            </Col>
            <Col lg={6}>
                <Button className="w-100 fs-5 equal border-0">=</Button>
            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Buttons;
