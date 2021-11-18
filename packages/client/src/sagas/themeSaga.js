import ACTION_TYPES from './actionTypes';

export const changeThemeAction = () => ({
  type: ACTION_TYPES.CHANGE_THEME_ACTION,
});

export const changeThemeRequest = () => ({
  type: ACTION_TYPES.CHANGE_THEME_REQUEST,
});

export const changeThemeSuccess = theme => ({
  type: ACTION_TYPES.CHANGE_THEME_ACTION,
  theme: theme,
});

export const changeThemeError = error => ({
  type: ACTION_TYPES.CHANGE_THEME_ERROR,
  error,
});
