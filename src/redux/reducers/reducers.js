import {
  LAY_DANH_SACH_KHOA_HOC,
  LAY_DANH_MUC_KHOA_HOC,
  LAY_KHOA_HOC_THEO_DANH_MUC,
} from "../../constants/constants";

const stateDefault = {
  dsKhoaHoc: [],
  dmKhoaHoc: [],
  layKhoaHocTheoDanhMuc: [],
  showCategories: false,
};

export const courses = (state = stateDefault, action) => {
  if (action.type === LAY_DANH_SACH_KHOA_HOC) {
    state.dsKhoaHoc = action.payload;
    console.log("state reducers 1", state);
    return { ...state };
  }
  if (action.type === LAY_DANH_MUC_KHOA_HOC) {
    state.dmKhoaHoc = action.payload;
    console.log("LAY_DANH_MUC_KHOA_HOC reducers 1", state);
    return { ...state };
  }
  if (action.type === LAY_KHOA_HOC_THEO_DANH_MUC) {
    state.layKhoaHocTheoDanhMuc = action.payload;
    return { ...state };
  }

  return { ...state };
};
