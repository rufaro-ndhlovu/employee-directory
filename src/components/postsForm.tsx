"use client";

import React, { useState,  } from "react";
import styles from "./postsForm.module.css";
import { FloatingLabel, Form } from "react-bootstrap";
import ButtonComp from "@/components/components/button";
import { addPost } from "../../firebase/employeeService";
import SideMenu from "./components/sideMenu";

const PostsForm = ({ fetchPosts }: { fetchPosts: () => void }) => {
    // State for announcement title and description
    const [announcement, setAnnouncement] = useState("");
    const [description, setDescription] = useState("");

    // Post data object to be sent to the database
    const postData = {
        postTitle: announcement,
        postDescription: description,
        date: new Date().toISOString(),
        userFullName: "Jane Fonda" 
    }

    // Handle form submission to post an announcement with Firestore integration
    const handlePostAnnouncement = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        try {
            await addPost(postData);
            setAnnouncement("");
            setDescription("");
            fetchPosts(); // Refresh the posts list after adding a new post
        } catch (error) {
            console.error("Error posting announcement:", error);
        }
    }

  return (
    <div>
      <div className={styles.announcementsPage}>
        {/* Side Menu for navigation */}
        <SideMenu />

        {/* Announcement Form Section */}
        <h1>Announcements</h1>

        <div className={styles.announcementForm}>
            <form onSubmit={handlePostAnnouncement}>
            {/* Annuncement Title */}
            <FloatingLabel 
                controlId="floatingTextarea" 
                label="Announcement Title"
                className="mb-3"
                placeholder="Enter announcement title..." 
                >
                <Form.Control 
                    as="textarea"
                    value={announcement}
                    onChange={(e) => setAnnouncement(e.target.value)}
                />
            </FloatingLabel>

            {/* Annuncement Description */}
            <FloatingLabel 
                controlId="floatingTextarea2" 
                label="Announcement Description"
                className="mb-3"
                placeholder="Enter announcement description..." 
                >
                <Form.Control 
                    as="textarea"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </FloatingLabel>

            {/* Annuncement Button */}
            <ButtonComp 
                text="Post Announcement"
                style={{
                width: "auto",
                color: "#fff",
                background: "linear-gradient(135deg, #6fc7c2, #a185ff)",
                }}
            />
            </form> 
          </div>
        </div>
    </div>
    )
}

export default PostsForm;