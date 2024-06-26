import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import Footer from "./components/MyFooter";
import MyFooter from "./components/MyFooter";

const App = () => (
  <>
    <MyNav />;
    <Welcome />
    <AllTheBooks />
    <MyFooter />
  </>
);
export default App;
