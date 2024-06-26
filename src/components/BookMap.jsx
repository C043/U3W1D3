import SingleBook from "./SingleBook";

const BookMap = props =>
  props.genre.map(book => {
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
  });

export default BookMap;
