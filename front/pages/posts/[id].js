import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { getPostByIdRequest } from "../../api/requests/postRequest.js";
import AppContext from "../../components/AppContext.jsx";
import { getCommentsByPostRequest } from "../../api/requests/commentRequest.js";
import { DisplayCommentComponent } from "../../components/comment/DisplayCommentComponent.jsx";
import { DisplayPostComponent } from "../../components/post/DisplayPostComponent.jsx";
import { CreateCommentComponent } from "../../components/comment/CreateCommentComponent.jsx";

const PostDetails = () => {
  const { authData } = useContext(AppContext);

  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState();
  const [comments, setComments] = useState();

  const [fetchError, setFetchError] = useState();
  const loadPosts = async () => {
    try {
      const postResponse = await getPostByIdRequest(id);
      setPost(postResponse.data);
    } catch (err) {
      setFetchError(err);
    }
  };

  const loadComments = async () => {
    const commentResponse = await getCommentsByPostRequest(post.id);
    setComments(commentResponse.data);
  };

  useEffect(() => {
    id && loadPosts();
    post && !comments && loadComments();
  }, [id, post]);

  return (
    <div>
      {fetchError && fetchError.status === 404 && <h2>Post not found</h2>}
      {post && (
        <>
          <DisplayPostComponent
            key={id}
            title={post.title}
            content={post.content}
            publicatedAt={post.publicatedAt}
            authorId={post.authorId}
          />
          {authData && post.authorId === authData.id && <button>Delete</button>}

          {comments &&
            comments.map((comment, index) => {
              return (
                <DisplayCommentComponent
                  key={index}
                  id={comment.id.toString()}
                  content={comment.content}
                  writedAt={comment.writedAt.toString()}
                  authorId={comment.authorId}
                />
              );
            })}
          {authData && <CreateCommentComponent postId={post.id} />}
        </>
      )}
    </div>
  );
};

export default PostDetails;
