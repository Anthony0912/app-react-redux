const initialProps = {
  showAlert: false,
  textAlet: "",
};

export default function (state = initialProps, action) {
  switch (action.type) {
    case "UPDATE_SHOW_ALERT":
      return { ...state, showAlert: action.payload };
    case "SET_TEXT_ALERT":
      return {
        ...state,
        textAlet: action.payload,
      };
    default:
      return state;
  }
}
