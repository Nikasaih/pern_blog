import { Post } from "../../components/Post.jsx";
import React, { useState, useEffect } from "react";

import { rootRoute } from "../../api/routes/rootRoute.js";
import {
  getAllPost,
  getOnePostByIdRoute,
} from "../../api/routes/postRoutes.js";
import { useRouter } from "next/router";
import axios from "axios";
import { getPostByIdRequest } from "../../api/requests/postRequest.js";

const PostDetails = () => {
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
        <Post
          key={id}
          title={post.title}
          content={post.content}
          publicatedAt={post.publicatedAt}
          authorId={post.authorId}
        />
      )}
    </div>
  );
};

export default PostDetails;
