import React from "react";
import Button from "../Button/Button";
import Categories from "../Categories/Categories";
import Container from "../Container/Container";
import Form from "../Form/Form";
import { NavLink } from "react-router-dom";
// import "./NavBar.scss";
// import navStyle from "./NavBar.scss";

const NavBar = (props) => {
  console.log("11", props);
  return (
    <header className="header" id="header">
      <nav className="container">
        <div className="logo-container">
          <NavLink to="/home" className="logo">
            Cyber<span>Soft</span>
          </NavLink>
        </div>
        <div className="nav-btn">
          <div className="nav-links">
            <Categories />
          </div>
          <Form />
          <div className="log-sign">
            <a href="#" className="btn transparent">
              Đăng nhập
            </a>
            <a href="#" className="btn solid">
              đăng ký
            </a>
          </div>
        </div>
        <div className="hamburger-menu-container">
          <div className="hamburger-menu">
            <div className="line line-1" />
            <div className="line line-2" />
            <div className="line line-3" />
          </div>
        </div>
      </nav>
    </header>

    // <Container>
    //   <nav className="navbar navbar-expand-lg">
    //     <div className="col-10 col-md-9 col-lg-9 col-xl-7 ">
    //       <div className="header__left">
    //         <a className="navbar-brand" href="#">
    //           <img src="./img/logo-coral.svg" alt="Udemy logo" />
    //         </a>
    //         <Categories danhMucKhoaHoc={props.danhMucKH} />
    //         <Form />
    //       </div>
    //     </div>
    //     <div
    //       className="col-2 col-md-3 col-lg-3 col-xl-5 "
    //       style={{ marginTop: 4 }}
    //     >
    //       <div className="header__right">
    //         <ul className="navbar-nav">
    //           <li className="nav-item ude-btnGroup">
    //             <Button content="Login" color="yellow" size="15px" />
    //             <Button content="SignUp" color="green" size="15px" />
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon" />
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       {/* form */}
    //     </div>
    //   </nav>
    // </Container>
  );
};

export default NavBar;
