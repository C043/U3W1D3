import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = props => {
  return (
    <Container>
      <Row className="gy-4 align-items-center">
        {props.genre.map(book => {
          return (
            <SingleBook
              key={book.asin}
              book={{
                title: book.title,
                img: book.img,
                price: book.price,
              }}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default BookList;
