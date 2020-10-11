import { LOADER, ALL_ALBUM, GET_ERROR, FETCH_ALL } from "../../constants/type";
const initialState = {
  albumResponse: [],
  loader: false,
  errResponse: "",
  fetchAllResponse: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ALL_ALBUM:
      return {
        ...action,
        albumResponse: action.payload,
      };

    case GET_ERROR:
      return {
        ...state,
        errResponse: action.payload,
      };
    case LOADER:
      return {
        ...state,
        loader: action.payload,
      };
    case FETCH_ALL:
      console.log(action.payload);
      return {
        ...state,
        fetchAllResponse: action.payload,
      };
    default:
      return state;
  }
}
