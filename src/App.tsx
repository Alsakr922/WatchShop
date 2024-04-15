/* eslint-disable @typescript-eslint/no-unused-vars */
import "./sass/App.scss";
import HeadingBar from "./components/HeadingBar/HeadingBar";
import { useState } from "react";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";
import Brands from "./components/Brands/Brands";
import User from "./components/Auth/User";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import { Store } from "./redux/Store";

function App() {
  const [Theme, setTheme] = useState("light");
  const [logIn , setlogIn] = useState(false)
  const handleLogin= () => {
    setlogIn(!logIn);
    console.log(logIn)
  }
  const changeTheme = () => {
    Theme === "dark" ? setTheme("light") : setTheme("dark");
    console.log(Theme);
  };

  return (
    <Provider store={Store}>
    <div className={Theme}>
      <HeadingBar LogIn={handleLogin} changeThemes={changeTheme} currentTheme={Theme} />
      <Hero />
      <Categories />
      <Products />
      <Brands />
      <User show={logIn} />
      <Footer />
    </div>
    </Provider>
  );
}

export default App;
