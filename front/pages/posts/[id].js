import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { getPostByIdRequest } from "../../api/requests/postRequest.js";
import AppContext from "../../components/AppContext.jsx";
import { DisplayPostComponent } from "../../components/post/DisplayPostComponent.jsx";

const PostDetails = () => {
  const { auth } = useContext(AppContext);

  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState();
  const [fetchError, setFetchError] = useState();
  const loadPosts = async () => {
    try {
      const response = await getPostByIdRequest(id);
      setPost(response.data);
    } catch (err) {
      setFetchError(err);
    }
  };

  useEffect(() => {
    id && loadPosts();
  }, [id]);

  return (
    <div>
      {fetchError && fetchError.request.status === 404 && (
        <h2>Post not found</h2>
      )}
      {post && (
        <>
          <DisplayPostComponent
            key={id}
            title={post.title}
            content={post.content}
            publicatedAt={post.publicatedAt}
            authorId={post.authorId}
          />
          <button>Delete</button>
        </>
      )}
    </div>
  );
};

export default PostDetails;
