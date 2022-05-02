import * as yup from "yup";

export const createCommentSchema = yup.object().shape({
  content: yup.string().required("please specified some content"),
  postId: yup.number().required("please specified a postfffff"),
});

export const validationSchema = yup.object().shape({
  content: yup.string().required("please specified some content"),
});
