import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Buttons = () => {
  return (
    <section className="buttonsPad backgroundKeypad">
      <Container>
        <Row className="mt-3">
          <Col xs={3} md={3} lg={3}>
            <Button variant="dark" className="w-100 buttons">7</Button>
          </Col>
          <Col xs={3} md={3} lg={3}>
            <Button variant="dark" className="w-100 buttons">8</Button>
          </Col>
          <Col xs={3} md={3} lg={3}>
            <Button variant="dark" className="w-100 buttons">9</Button>
          </Col>
          <Col xs={3} md={3} lg={3}>
            <Button variant="dark" className="w-100 fs-5 resdel p-2 border-0">DEL</Button>
          </Col>
        </Row>
        <Row className="my-3">
          <Col xs={3} md={3} lg={3}>
            <Button variant="dark" className="w-100 buttons">4</Button>
          </Col>
          <Col xs={3} md={3} lg={3}>
            <Button variant="dark" className="w-100 buttons">5</Button>
          </Col>
          <Col xs={3} md={3} lg={3}>
            <Button variant="dark" className="w-100 buttons">6</Button>
          </Col>
          <Col xs={3} md={3} lg={3}>
            <Button variant="dark" className="w-100 buttons">+</Button>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={3} md={3} lg={3}>
            <Button variant="dark" className="w-100 buttons">1</Button>
          </Col>
          <Col xs={3} md={3} lg={3}>
            <Button variant="dark" className="w-100 buttons">2</Button>
          </Col>
          <Col xs={3} md={3} lg={3}>
            <Button variant="dark" className="w-100 buttons">3</Button>
          </Col>
          <Col xs={3} md={3} lg={3}>
            <Button variant="dark" className="w-100 buttons">-</Button>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={3} md={3} lg={3}>
            <Button variant="dark" className="w-100 buttons">.</Button>
          </Col>
          <Col xs={3} md={3} lg={3}>
            <Button variant="dark" className="w-100 buttons">0</Button>
          </Col>
          <Col xs={3} md={3} lg={3}>
            <Button variant="dark" className="w-100 buttons">/</Button>
          </Col>
          <Col xs={3} md={3} lg={3}>
            <Button variant="dark" className="w-100 buttons">x</Button>
          </Col>
        </Row>
        <Row>
            <Col xs={6} md={6} lg={6}>
                <Button variant="dark" className="w-100 fs-5 resdel border-0">RESET</Button>
            </Col>
            <Col xs={6} md={6} lg={6}>
                <Button variant="danger" className="w-100 fs-5 equal border-0">=</Button>
            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Buttons;
