import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  tasks: [],
  isFetching: false,
  error: null,
};

function ToDoReducer (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case ACTION_TYPES.GET_TASKS_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION_TYPES.GET_TASKS_SUCCESS: {
      const { tasks } = action;
      return {
        ...state,
        isFetching: false,
        tasks,
      };
    }
    case ACTION_TYPES.GET_TASKS_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }
    case ACTION_TYPES.CREATE_TASK_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION_TYPES.CREATE_TASK_SUCCESS: {
      const { task } = action;
      const { tasks } = state;
      const newTasks = [...tasks, task];
      return {
        ...state,
        tasks: newTasks,
        error: null,
      };
    }
    case ACTION_TYPES.CREATE_TASK_ERROR: {
      const { error } = action;
      return {
        ...state,
        error,
      };
    }
    case ACTION_TYPES.UPDATE_TASK_REQUEST: {
      return { ...state, isFetching: true, error: null };
    }
    case ACTION_TYPES.UPDATE_TASK_SUCCESS: {
      const { updatedTask } = action;
      const { tasks } = state;
      const index = tasks.findIndex(t => t.id === updatedTask.id);
      tasks[index] = updatedTask;
      return {
        ...state,
        isFetching: true,
        tasks: [...tasks],
      };
    }
    case ACTION_TYPES.UPDATE_TASK_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }

    case ACTION_TYPES.DELETE_TASK_REQUEST: {
      return { ...state, isFetching: true, error: null };
    }
    case ACTION_TYPES.DELETE_TASK_SUCCESS: {
      const { id } = action;
      const { tasks } = state;
      tasks.splice(
        tasks.findIndex(t => t.id === id),
        1
      );
      return {
        ...state,
        isFetching: false,
        error: null,
        tasks: [...tasks],
      };
    }
    case ACTION_TYPES.DELETE_TASK_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }
    default:
      return state;
  }
}

export default ToDoReducer;
