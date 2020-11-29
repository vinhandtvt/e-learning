import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layKhoaHocTheoDanhMucAction } from "../../redux/actions/actions";

const DanhMucKhoaHoc = (props) => {
  const layKhoaHocTheoDanhMuc = useSelector(
    (state) => state.courses.layKhoaHocTheoDanhMuc
  );

  const dispatch = useDispatch();

  useEffect(async () => {
    let maDanhMuc = props.match.params.maDanhMuc;
    console.log("Danh muc khoa hoc", maDanhMuc);
    dispatch(await layKhoaHocTheoDanhMucAction(maDanhMuc));
  }, [props.match.params.maDanhMuc]);

  console.log("lay khoa hoc theo danh muc ", layKhoaHocTheoDanhMuc);

  return (
    <div id="danhMucKhoaHoc__container" className="danhMucKhoaHoc__container">
      <h2 className="danhMucKhoaHoc__container--title">Danh Mục Khóa Học</h2>
      <div className="danhMucKhoaHoc__container--content">
        {layKhoaHocTheoDanhMuc.map((course) => (
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
    </div>
  );
};

export default DanhMucKhoaHoc;
