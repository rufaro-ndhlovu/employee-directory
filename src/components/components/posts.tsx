"use client";

import React, { useState, useEffect} from "react";
import styles from "./posts.module.css";
import { getPosts, updatePost, deletePost } from "../../../firebase/employeeService";

const Posts = ({ posts }: { posts: any[] }) => {
    
    return (
        <>
            <div>
                {posts.map((post) => (
                    <div key={post.id}>
                        <h1>{post.userFullName}</h1>
                        <p>{post.postTitle}</p>
                        <p>{post.postDescription}</p>
                        <button>Edit</button>
                        <button>Delete</button>
                        <button>Like/React</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Posts;