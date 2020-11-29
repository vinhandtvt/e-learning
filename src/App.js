import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.scss";
import "./sass/main.scss";

import TrangChu from "./pages/TrangChu/TrangChu";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { Route, Switch } from "react-router-dom";
import DanhMucKhoaHoc from "./pages/DanhMucKhoaHoc/DanhMucKhoaHoc";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact component={TrangChu} />
        <Route path="/home" exact component={TrangChu} />
        <Route
          path="/danhmuckhoahoc/:maDanhMuc"
          exact
          component={DanhMucKhoaHoc}
        />
      </Switch>

      <Footer />
    </div>
  );
}
