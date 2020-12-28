import {
  SET_USER
} from '../types';

const userReducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
      }
  }
}

export default userReducer 