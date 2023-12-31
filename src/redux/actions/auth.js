/** @format */
export const fetchUser = (data) => {
  return (dispatch) => {
    dispatch({ type: "FETCH_USER_SUCCESS", payload: data });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_USER_LOGOUT", payload: null });
  };
};
