import { takeLatest } from '@redux-saga/core/effects';
import ACTION_TYPES from '../actions/actionTypes';
import {
  getTasksSaga,
  createTaskSaga,
  updateTaskSaga,
  deleteTaskSaga,
  changeThemeSaga,
} from './toDoSaga';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.GET_TASKS_ACTION, getTasksSaga);
  yield takeLatest(ACTION_TYPES.CREATE_TASK_ACTION, createTaskSaga);
  yield takeLatest(ACTION_TYPES.UPDATE_TASK_ACTION, updateTaskSaga);
  yield takeLatest(ACTION_TYPES.DELETE_TASK_ACTION, deleteTaskSaga);
  yield takeLatest(ACTION_TYPES.CHANGE_THEME_ACTION, changeThemeSaga);
}
export default rootSaga;
