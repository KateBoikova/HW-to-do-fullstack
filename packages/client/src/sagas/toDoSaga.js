import { put } from 'redux-saga/effects';
import {
  changeThemeSuccess,
  changeThemeError,
  changeThemeRequest,
  createTaskError,
  createTaskRequest,
  createTaskSuccess,
  deleteTaskError,
  deleteTaskRequest,
  deleteTaskSuccess,
  getTasksError,
  getTasksRequest,
  getTasksSuccess,
  updateTaskError,
  updateTaskRequest,
  updateTaskSuccess,
} from '../actions';
import * as API from '../api';

export function * getTasksSaga () {
  yield put(getTasksRequest());
  try {
    const { data: tasks } = yield API.getTasks();
    yield put(getTasksSuccess(tasks));
  } catch (e) {
    yield put(getTasksError(e));
  }
}
export function * createTaskSaga (action) {
  const { task } = action;
  yield put(createTaskRequest(task));
  try {
    const { data: newTask } = yield API.createTask(task);
    yield put(createTaskSuccess(newTask));
  } catch (e) {
    yield put(createTaskError(e));
  }
}

export function * updateTaskSaga (action) {
  const { id } = action;
  yield put(updateTaskRequest());
  try {
    const { data: updatedTask } = yield API.updateTask(id);
    yield put(updateTaskSuccess(updatedTask));
  } catch (e) {
    yield put(updateTaskError(e));
  }
}

export function * deleteTaskSaga (action) {
  const { id } = action;
  yield put(deleteTaskRequest());
  try {
    yield API.deleteTask(id);
    yield put(deleteTaskSuccess(id));
  } catch (e) {
    yield put(deleteTaskError(e));
  }
}

export function * changeThemeSaga (action) {
  const { theme } = action;
  yield put(changeThemeRequest());
  try {
    const { data: newTheme } = yield API.changeTheme(theme);
    yield put(changeThemeSuccess(newTheme));
  } catch (error) {
    yield put(changeThemeError(error));
  }
}
