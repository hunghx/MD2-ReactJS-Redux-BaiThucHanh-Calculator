// khởi tạo giá tị cho state là 1 mảng danh sách sinh viên
const initState = {
  content: "",
  color: "#000000",
};
// tạo reducer cho store
const reducer = (state = initState, action) => {
  switch (action.type) {
    case "ONCHANGE":
      // cập nhật lại state khi có sự thay đổi dữ liệu
      state = { ...state, ...action.payload };
      console.log(state);
      return state;
    default:
      return state;
  }
};
export default reducer;
