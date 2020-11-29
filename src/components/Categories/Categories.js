import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layDanhMucKhoaHoc } from "../../redux/actions/actions";
import { NavLink } from "react-router-dom";
import "./Categories.scss";

const Categories = (props) => {
  console.log("dang làm ở đây: fffffff", props);
  const dispatch = useDispatch();
  const danhMucKhoaHoc = useSelector((state) => state.courses.dmKhoaHoc);

  useEffect(async () => {
    dispatch(layDanhMucKhoaHoc());
  }, []);

  console.log("danh muc khoa hoc", danhMucKhoaHoc);
  return (
    <ul>
      <li className="nav-link">
        <a className="nav-link--title" href="#">
          <i className="fa fa-th" />
          Danh Sách Khóa Học
        </a>
        <div className="dropdown">
          <ul>
            {danhMucKhoaHoc?.map((course, index) => {
              return (
                <li key={index} className="dropdown-link">
                  <NavLink to={`/danhmuckhoahoc/${course.maDanhMuc}`}>
                    {course.tenDanhMuc}
                  </NavLink>
                </li>
              );
            })}
            <div className="arrow" />
          </ul>
        </div>
      </li>
    </ul>
  );
};

export default Categories;
