import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import { rootRoute } from "../api/routes/rootRoute.js";
import { getAllPost } from "../api/routes/postRoutes.js";
import axios from "axios";
import { Post } from "../components/Post.jsx";

const fullRoute = rootRoute + getAllPost;

const Index = () => {
  const [posts, setPosts] = useState();

  const loadPosts = async () => {
    const response = await axios.get(fullRoute);
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
