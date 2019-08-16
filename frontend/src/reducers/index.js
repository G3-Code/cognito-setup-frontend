import { FETCHING_DATA, FETCHING_DATA_SUCCESS } from "../actions";

const initialState = {
  isLogged: false,
  isLoggin: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      console.log("::REDUCER :: FETCHING_DATA :: " + action.payload);
      return {
        isLogging: true,
        isLogged: false
      };
    case FETCHING_DATA_SUCCESS:
      console.log("::REDUCER :: FETCHING_DATA_SUCCESS :: " + action.payload);
      return {
        isLoggin: false,
        isLogged: true
      };
    default:
      return state;
  }
};

export default reducer;
