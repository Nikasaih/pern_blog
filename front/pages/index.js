import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import { rootRoute } from "../api/routes/rootRoute.js";
import { getAllPost } from "../api/routes/postRoutes.js";
import axios, { AxiosResponse } from "axios";

const Index = () => {
  const [posts, setPosts] = useState();

  const loadPosts = async () => {
    const fullRoute = rootRoute + getAllPost;
    const dataFetched = await axios.get(fullRoute);
    setPosts(dataFetched);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  //todo add posts as componetn
  return (
    <div className={styles.container}>
      <p>Index</p>
    </div>
  );
};

export default Index;
