export const FETCHING_DATA = "FETCHING_DATA";
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS";

export const getData = data => dispatch => {
  console.log("ACTION:: GET DATA :: -------" + data);
  dispatch({ type: FETCHING_DATA, payload: data });
  dispatch({ type: FETCHING_DATA_SUCCESS, payload: data });
};
