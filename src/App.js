import React, { useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./header/Header";
import HeaderTop from "./headerTop/HeaderTop";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/user-screens/LoginScreen";
import RegisterScreen from "./Screens/user-screens/RegisterScreen";
import "./App.css";
import ListUsersScreen from "./Screens/ListUsersScreen";
import UpdateUserInfoScreen from "./Screens/user-screens/UpdateUserInfoScreen";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <div className="py-3">
        <HeaderTop />
      </div>
      <Header />
      <Wrapper>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/signin" element={<LoginScreen />} />
            <Route path="/list/hospital/users" element={<ListUsersScreen />} />
            <Route
              path="/hospital/info/:id/update"
              element={<UpdateUserInfoScreen />}
            />
          </Routes>
        </main>
      </Wrapper>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
