import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
  const navigation = useNavigation();
  const location = useLocation();
  const showHomeContent = () => {
    if (location.pathname === "/") {
      return <h2>This is Home Page</h2>;
    } else {
      {
        return navigation.state === "loading" ? (
          "Loading..."
        ) : (
          <Outlet></Outlet>
        );
      }
    }
  };
  console.log(location);
  return (
    <div>
      <Header></Header>
      {showHomeContent()}
      <Footer></Footer>
    </div>
  );
};

export default Home;
