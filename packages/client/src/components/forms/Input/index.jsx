import React from 'react';
import { ErrorMessage, Field } from 'formik';
import classNames from 'classnames';
import defaultStyles from './Input.module.scss';

function Input (props) {
  const { name, styles = defaultStyles, ...rest } = props;
  return (
    <>
      <Field name={name}>
        {({ field, form, meta }) => {
          const inputClassNames = classNames(styles.input, {
            [styles.validInput]: !meta.error && meta.touched,
            [styles.invalid]: meta.error && meta.touched,
          });
          return <input {...field} {...rest} className={inputClassNames} />;
        }}
      </Field>
      <ErrorMessage name={name} component='div' className={styles.error} />
    </>
  );
}

export default Input;
