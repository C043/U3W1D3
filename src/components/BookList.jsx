import { Button, Container, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";

class BookList extends Component {
  state = {
    query: "",
  };
  render() {
    return (
      <Container>
        <Form className="d-flex flex-column mb-3">
          <label htmlFor="filtro">Filter books</label>
          <input
            id="filtro"
            type="text"
            value={this.state.query}
            onChange={e => this.setState({ query: e.target.value })}
          />
        </Form>
        <Row className="gy-4 align-items-center">
          {this.props.genre.map(book => {
            if (book.title.toLowerCase().includes(this.state.query.toLowerCase())) {
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
            }
          })}
        </Row>
      </Container>
    );
  }
}

export default BookList;
