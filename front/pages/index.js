import styles from "../styles/Home.module.css"
import React, { useState, useEffect } from "react"
import { DisplayPostComponent } from "../components/post/DisplayPostComponent.jsx"
import { getAllPostRequest } from "../api/requests/postRequest.js"
import Link from "next/link"

const Index = () => {
  const [posts, setPosts] = useState()

  const loadPosts = async () => {
    const response = await getAllPostRequest()
    setPosts(response.data)
  }

  useEffect(() => {
    loadPosts()
  }, [])

  return (
    <div className={styles.container}>
      {posts &&
        posts.map((e, index) => (
          <div key={index}>
            <DisplayPostComponent
              title={e.title}
              content={e.content}
              publicatedAt={e.publicatedAt}
              authorId={e.authorId}
            />
            <Link href={`/posts/${e.id}`}>
              <a className="pl-5 pt-5">Voir plus</a>
            </Link>
          </div>
        ))}
    </div>
  )
}

export default Index
