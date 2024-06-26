import SingleBook from "./SingleBook";

const BookList = props => {
  return props.map(book => (
    <SingleBook
      book={{
        title: book.title,
        img: book.img,
        price: book.price,
      }}
    />
  ));
};

export default BookList;
