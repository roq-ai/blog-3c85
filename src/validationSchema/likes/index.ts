import * as yup from 'yup';

export const likeValidationSchema = yup.object().shape({
  user_id: yup.string().nullable(),
  post_id: yup.string().nullable(),
});
