import { Badge, Button, Card, Col } from "react-bootstrap";

const SingleBook = props => (
  <Col xs="12" md="6" lg="4" xl="3">
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src={props.book.img} alt={props.book.title} style={{ height: "437px" }} />
      <Card.Body className="d-flex flex-column align-items-center justify-content-center gap-2">
        <div className="d-flex justify-content-center align-items-center gap-2">
          <Card.Title className="line-clamp m-0 fs-6">{props.book.title}</Card.Title>
          <Badge>{props.book.price}$</Badge>
        </div>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
  </Col>
);

export default SingleBook;
