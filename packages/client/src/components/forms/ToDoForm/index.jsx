import React from 'react';
import { Formik, Form } from 'formik';
import { TODO_FORM_SCHEMA } from '../../../utils/validationSchema';
import styles from '../../../pages/ToDoPage/ToDoPage.module.scss';
import Input from './../Input/index';
import { connect } from 'react-redux';
import { createTaskAction } from '../../../actions';

function ToDoForm (props) {
  const { createTaskAction } = props;

  const addTask = (values, formikBag) => {
    createTaskAction(values);
    formikBag.resetForm();
  };

  const inputStyles = {
    input: styles.input,
    validInput: styles.validInput,
    invalid: styles.invalid,
    error: styles.error,
  };

  return (
    <div className={styles.toDoFormInput}>
      <Formik
        initialValues={{ body: '' }}
        onSubmit={addTask}
        validationSchema={TODO_FORM_SCHEMA}
      >
        {formikProps => (
          <Form>
            <Input
              name='body'
              placeholder='Enter your task'
              styles={inputStyles}
            />
            <button type='onSubmit' title='Add a task'>
              Add task
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    createTaskAction: data => {
      dispatch(createTaskAction(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(ToDoForm);
