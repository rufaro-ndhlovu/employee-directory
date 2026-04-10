"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PostsForm from "@/components/postsForm";
import { getPosts, updatePost, deletePost } from "../../../firebase/employeeService";
import SideMenu from "@/components/components/sideMenu";
import { getUserLoggedIn } from "../../../firebase/employeeService";
import ButtonComp from "@/components/components/button";

export default function Announcements() { 
  // State to hold the list of posts
  const [posts, setPosts] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);

  // Function to load the currently logged-in user
  const loadUser = async () => {
    const userItem = await getUserLoggedIn();
    console.log("user item:", userItem);
    setUser(userItem[0]);
  };

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

    useEffect(() => {
      loadUser();
    }, [])

  return (
    <div className={styles.announcementsPage}>
      <SideMenu />

      <main className={styles.announcementsContent}>
        <section className={styles.pageHeader}>
          <div>
            <h1>Announcements</h1>
            <p className={styles.subtitle}>
              Company news, updates, and reminders are shared here for the whole team.
            </p>
          </div>

          <div className={styles.badge}>{posts.length} announcement{posts.length === 1 ? "" : "s"}</div>
        </section>

        <section className={styles.formSection}>
          <PostsForm fetchPosts={fetchPosts} user={user} />
        </section>

        <section className={styles.postsSection}>
          {posts.length > 0 ? (
            <div className={styles.posts}>
              {posts.map((post) => (
                <article key={post.id} className={styles.post}>
                  <div className={styles.postHeader}>
                    <div>
                      <p className={styles.postAuthor}>{post.userFullName}</p>
                      <h3 className={styles.postTitle}>{post.postTitle}</h3>
                    </div>
                    <span className={styles.postDate}>{post.date}</span>
                  </div>

                  <p className={styles.postDescription}>{post.postDescription}</p>

                  <div className={styles.postActions}>
                    <ButtonComp
                      text="Edit"
                      style={{
                        width: "auto",
                        color: "#fff",
                        background: "linear-gradient(135deg, #6fc7c2, #a185ff)",
                      }}
                      onClick={() => {}}
                    />
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              No announcements yet. Use the form above to share news with the team.
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
