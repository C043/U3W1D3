import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import Footer from "./components/MyFooter";
import MyFooter from "./components/MyFooter";
import SingleBook from "./components/SingleBook";

const App = () => (
  <>
    <MyNav />;
    <SingleBook
      book={{
        asin: "0345546792",
        title: "The Silent Corner: A Novel of Suspense (Jane Hawk)",
        img: "https://images-na.ssl-images-amazon.com/images/I/91dDIYze1wL.jpg",
        price: 7.92,
        category: "horror",
      }}
    />
    <Welcome />
    <AllTheBooks />
    <MyFooter />
  </>
);
export default App;
