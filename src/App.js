import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./header/Header";
import HeaderTop from "./headerTop/HeaderTop";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/user-screens/LoginScreen";
import RegisterScreen from "./Screens/user-screens/RegisterScreen";
import "./App.css";
import ListUsersScreen from "./Screens/ListUsersScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="py-3">
        <HeaderTop />
      </div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/signin" element={<LoginScreen />} />
          <Route path="/list/hospital/users" element={<ListUsersScreen />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
