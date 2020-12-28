import {
  SET_USER
} from "../types"


export const loginUser = () => dispatch => {
  dispatch({
    type: SET_USER,
    payload: 'test'
  })
}

