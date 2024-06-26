import SingleBook from "./SingleBook";

const BookList = props => {
  return props.genre.map(book => {
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
};

export default BookList;
