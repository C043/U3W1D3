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
    <Container>
      <Row className="gy-4 align-items-center">
        <BookList genre={horrorBooks} />
      </Row>
    </Container>
    <MyFooter />
  </>
);
export default App;
