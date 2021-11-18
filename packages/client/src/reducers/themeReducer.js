import ACTION_TYPES from '../actions/actionTypes';
import CONSTANTS from '../constants/index';

const initialState = {
  theme: CONSTANTS.THEMES.BEIGE,
  isFetching: false,
  error: null,
};

function themeReducer (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case ACTION_TYPES.CHANGE_THEME_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }

    case ACTION_TYPES.CHANGE_THEME_SUCCESS: {
      const { theme } = action;
      return {
        ...state,
        theme,
        isFetching: false,
        error: null,
      };
    }
    case ACTION_TYPES.CHANGE_THEME_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }
    default: {
      return state;
    }
  }
}

export default themeReducer;
