import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import LayDanhSachKhoaHoc from "../../components/LayDanhSachKhoaHoc/LayDanhSachKhoaHoc";
import NavBar from "../../components/NavBar/NavBar";
import { Route } from "react-router-dom";
import { layDanhMucKhoaHoc } from "../../redux/actions/actions";

const TrangChu = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Carousel />
      <LayDanhSachKhoaHoc />
      {/* <Footer /> */}
    </>
  );
};

export default TrangChu;
