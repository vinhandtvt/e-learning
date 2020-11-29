import axios from "../../api/axios";
import {
  LAY_DANH_SACH_KHOA_HOC,
  LAY_DANH_MUC_KHOA_HOC,
  MA_NHOM,
  LAY_KHOA_HOC_THEO_DANH_MUC,
} from "../../constants/constants";

export const layDanhSachKhoaHoc = () => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${MA_NHOM}`
    );

    dispatch({ type: LAY_DANH_SACH_KHOA_HOC, payload: data });
  };

  //   const data = await axios.get("/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc");
  //   return {
  //     type: "LAY_DANH_SACH_KHOA_HOC",
  //     payload: data,
  //   };
};

export const layDanhMucKhoaHoc = () => {
  return async (dispatch) => {
    const { data } = await axios.get("/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc");

    dispatch({
      type: LAY_DANH_MUC_KHOA_HOC,
      payload: data,
    });
  };
};

export const layKhoaHocTheoDanhMucAction = (maDanhMuc) => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=${MA_NHOM}`
    );

    dispatch({
      type: LAY_KHOA_HOC_THEO_DANH_MUC,
      payload: data,
    });
  };
};
