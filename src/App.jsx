import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import MyFooter from "./components/MyFooter";
import BookList from "./components/BookList";

import horrorBooks from "./data/horror.json";
import BtnFilter from "./components/BtnFilter";
import { Container, Row } from "react-bootstrap";

const App = () => (
  <>
    <MyNav />;
    <Welcome />
    <BtnFilter title="Horror" />
    <BookList genre={horrorBooks} />
    <MyFooter />
  </>
);
export default App;
