import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import { Post } from "../components/Post.jsx";
import { getAllPostRequest } from "../api/requests/postRequest.js";

const Index = () => {
  const [posts, setPosts] = useState();

  const loadPosts = async () => {
    const response = await getAllPostRequest();
    setPosts(response.data);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className={styles.container}>
      <p>Index</p>
      {posts &&
        posts.map((e, index) => (
          <Post
            key={index}
            title={e.title}
            content={e.content}
            publicatedAt={e.publicatedAt}
            authorId={e.authorId}
          />
        ))}
    </div>
  );
};

export default Index;
