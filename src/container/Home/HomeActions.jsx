import axios from "axios";
import api_contants from "../../constants/api";
import { LOADER, ALL_ALBUM, GET_ERROR, FETCH_ALL } from "../../constants/type";

export const allAlbum = (startCount) => (dispatch) => {
  dispatch({
    type: LOADER,
    payload: true,
  });
  axios
    .get(`${api_contants.getAlbumApi}?_start=${startCount}&_limit=10`)
    .then((res) => {
      if (res.status) {
        dispatch({
          type: ALL_ALBUM,
          payload: res.data,
        });
        dispatch({
          type: LOADER,
          payload: false,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: GET_ERROR,
        payload: err,
      });
    });
};

export const fetchAll = () => (dispatch) => {
  dispatch({
    type: LOADER,
    payload: true,
  });
  axios
    .get(`${api_contants.getAlbumApi}`)
    .then((res) => {
      if (res.status) {
        dispatch({
          type: FETCH_ALL,
          payload: res.data,
        });
        dispatch({
          type: LOADER,
          payload: false,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: GET_ERROR,
        payload: err,
      });
    });
};
