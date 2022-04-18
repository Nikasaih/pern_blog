import * as yup from "yup";

export const createPostSchema = yup.object().shape({
  title: yup.string().required("please specified a title"),
  content: yup.string().required("please specified a content"),
  isPublish: yup.boolean().required("please specified if it's public"),
  authorId: yup.number().required("please specified a author"),
});
