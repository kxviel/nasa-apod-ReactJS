import { useState } from "react";
import Logo from "../logo.png";
import { Container, Row, Col, Form } from "react-bootstrap";

interface MyProps {
  onSubmit: any;
  initialDate: any;
}

function Navbar(props: MyProps) {
  const [currentDate, setDate] = useState(props.initialDate);

  return (
    <>
      <Container className="navbar-root" fluid>
        <Row className="h-100 justify-content-between align-items-center">
          <Col md={5} sm={5}>
            <div className="brand">
              <img src={Logo} alt="" />
              <p className="title">Astronomic Picture of the Day</p>
            </div>
          </Col>
          <Col md={5} sm={5}>
            <Row className="form-grp justify-content-around">
              <Col sm={9} xs={10}>
                <Form.Control
                  defaultValue={currentDate}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                  type="date"
                />
              </Col>
              <Col sm={3} xs={2}>
                <button
                  onClick={() => {
                    props.onSubmit(currentDate);
                  }}
                >
                  Set
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Navbar;
