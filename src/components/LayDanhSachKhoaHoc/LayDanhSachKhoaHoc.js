import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachKhoaHoc } from "../../redux/actions/actions";

const LayDanhSachKhoaHoc = () => {
  const dispatch = useDispatch();
  const danhSachKhoaHoc = useSelector((state) => state.courses.dsKhoaHoc);
  console.log("trong lay danh sach khoa hoc: ", danhSachKhoaHoc);
  useEffect(async () => {
    dispatch(layDanhSachKhoaHoc());
  }, []);

  return (
    <>
      <h2
        style={{ color: "white", justifyContent: "center", display: "flex" }}
        className="mt-5"
      >
        Các khóa học gần đây
      </h2>
      <div className="coursesList">
        {danhSachKhoaHoc.map((course) => (
          <div key={course.maKhoaHoc} className="coursesItem">
            <div className="img__container">
              <img
                className="course__img"
                src={course.hinhAnh}
                alt={course.tenKhoaHoc}
              />
            </div>
            <h3 className="course__title">{course.tenKhoaHoc}</h3>
            <div className="course__author">{course.nguoiTao.hoTen}</div>
            <div className="course__views">{course.luotXem}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LayDanhSachKhoaHoc;
