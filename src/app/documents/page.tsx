"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Posts from "@/components/components/posts";
import PostsForm from "@/components/postsForm";
import { getPosts, updatePost, deletePost } from "../../../firebase/employeeService";

export default function Announcements() { 
  // State to hold the list of posts
    const [posts, setPosts] = useState<any[]>([]);

  // Function to fetch posts from the database and update the state
    const fetchPosts = async () => {
        try {
            // Fetch posts data from the database
            const postsData = await getPosts();
            setPosts(postsData);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    }

    // Fetch posts when the component mounts
    useEffect(() => {
        fetchPosts();
    }, []);

  return (
    <div className={styles.announcementsPage}>
      <PostsForm fetchPosts={fetchPosts} />
        {/* Display Announcements */}
        <div className={styles.posts}>
            <div>
                {posts.map((post) => (
                    <div key={post.id} className={styles.post}>
                        <h1>{post.userFullName}</h1>
                        <p>{post.postTitle}</p>
                        <p>{post.postDescription}</p>
                        <button>Edit</button>
                        <button>Delete</button>
                        <button>Like/React</button>
                    </div>
                ))}
            </div>
        </div>  
    </div>
  );
}
