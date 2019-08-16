export const FETCHING_DATA = "FETCHING_DATA";
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS";

export const getData = data => dispatch => {
  console.log("ACTION:: GET DATA :: -------" + data);
  dispatch({ type: FETCHING_DATA, payload: data });
  dispatch({ type: FETCHING_DATA_SUCCESS, payload: data });
};

export const ACTIVATE_LOGOUT = "ACTIVATE_LOGOUT";
export const ACTIVATE_LOGOUT_SUCCESS = "ACTIVATE_LOGOUT_SUCCESS";
export const activateLogout = () => dispatch => {
  console.log("ACTION:: ACTIVATE LOGOUT :: -------");
  dispatch({ type: ACTIVATE_LOGOUT });
  dispatch({ type: ACTIVATE_LOGOUT_SUCCESS });
};
