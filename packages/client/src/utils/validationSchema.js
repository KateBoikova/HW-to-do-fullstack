import * as yup from 'yup';

export const TODO_FORM_SCHEMA = yup.object({
  body: yup
    .string('The string is required')
    .min(2, 'Minimum 2 letters are required')
    .max(200, 'The task should not contain more than 200 letters')
    .ensure(),
});
