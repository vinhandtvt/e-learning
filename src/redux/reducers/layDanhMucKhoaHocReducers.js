import { LAY_DANH_MUC_KHOA_HOC } from "../../constants/constants";

export const danhMucKhoaHoc = (state = [], action) => {
  if (action.type === LAY_DANH_MUC_KHOA_HOC) {
    state = action.payload;
    console.log("LAY_DANH_MUC_KHOA_HOC reducers", state);
    return { ...state };
  }

  return { ...state };
};
