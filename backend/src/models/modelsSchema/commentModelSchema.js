// Todo with yup
import * as yup from "yup";

export const createCommentSchema = yup.object().shape({
  content: yup.string().required("please specified some content"),
  authorId: yup.number().required("please specified a author"),
  postId: yup.number().required("please specified a post"),
});
