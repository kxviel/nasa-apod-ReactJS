import { Container, Row, Col, Spinner } from "react-bootstrap";

interface MyProps {
  displayData: any;
  isLoading: boolean;
}

function Body(props: MyProps) {
  return (
    <>
      <Container className="body-root" fluid>
        <Row className="h-100 justify-content-center align-items-center">
          {props.isLoading ? (
            <Spinner animation="grow" variant="info" />
          ) : (
            <Col className="image-col h-100 mt-3" sm={12}>
              {props.displayData?.media_type === "video" ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={props.displayData?.url}
                  title={props.displayData?.title}
                  style={{ border: "0px" }}
                />
              ) : (
                <img src={props.displayData?.url} alt="Display" />
              )}
              <h5>{props.displayData?.title}</h5>
              <hr />
              <p style={{ textAlign: "center", fontSize: "15px" }}>
                @{new Date().getFullYear()} Kevin D Goveas
              </p>
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
}

export default Body;
