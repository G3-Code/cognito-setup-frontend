import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  ACTIVATE_LOGOUT,
  ACTIVATE_LOGOUT_SUCCESS
} from "../actions";

const initialState = {
  isLogged: false,
  isLoggin: false,
  user: {}
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
        isLogging: false,
        isLogged: true
      };
    case ACTIVATE_LOGOUT:
      console.log("::REDUCER :: ACTIVATE_LOGOUT :: ");
      return {
        isLogging: false,
        isLogged: true
      };
    case ACTIVATE_LOGOUT_SUCCESS:
      console.log("::REDUCER :: ACTIVATE_LOGOUT_SUCCESS :: ");
      return {
        isLogging: false,
        isLogged: true
      };
    default:
      return state;
  }
};

export default reducer;
