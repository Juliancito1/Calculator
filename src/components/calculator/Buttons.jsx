import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Buttons = () => {
  return (
    <section className="buttonsPad">
      <Container>
        <Row>
          <Col lg={3}>
            <Button className="w-100">7</Button>
          </Col>
          <Col lg={3}>
            <Button className="w-100">8</Button>
          </Col>
          <Col lg={3}>
            <Button className="w-100">9</Button>
          </Col>
          <Col lg={3}>
            <Button className="w-100">DEL</Button>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
            <Button className="w-100">4</Button>
          </Col>
          <Col lg={3}>
            <Button className="w-100">5</Button>
          </Col>
          <Col lg={3}>
            <Button className="w-100">6</Button>
          </Col>
          <Col lg={3}>
            <Button className="w-100">+</Button>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
            <Button className="w-100">1</Button>
          </Col>
          <Col lg={3}>
            <Button className="w-100">2</Button>
          </Col>
          <Col lg={3}>
            <Button className="w-100">3</Button>
          </Col>
          <Col lg={3}>
            <Button className="w-100">-</Button>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
            <Button className="w-100">.</Button>
          </Col>
          <Col lg={3}>
            <Button className="w-100">0</Button>
          </Col>
          <Col lg={3}>
            <Button className="w-100">/</Button>
          </Col>
          <Col lg={3}>
            <Button className="w-100">x</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Buttons;
