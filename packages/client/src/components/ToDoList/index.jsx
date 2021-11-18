import React from 'react';
import { connect } from 'react-redux';
import styles from '../../pages/ToDoPage/ToDoPage.module.scss';
import ToDoListItem from './ToDoListItem';
import { updateTaskAction, deleteTaskAction } from '../../actions';

function ToDoList (props) {
  const { tasks, updateTaskAction, deleteTaskAction } = props;

  return (
    <ul className={styles.tasksList}>
      {tasks.map(task => (
        <ToDoListItem
          {...task}
          key={task.id}
          updateTask={updateTaskAction}
          deleteTask={deleteTaskAction}
        />
      ))}
    </ul>
  );
}
const mapStateToProps = state => state.todo;
const mapDispatchToProps = dispatch => {
  return {
    updateTaskAction: id => {
      dispatch(updateTaskAction(id));
    },
    deleteTaskAction: id => {
      dispatch(deleteTaskAction(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
