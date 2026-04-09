"use client";

import React, { useState } from "react";
import SideMenu from "@/components/components/sideMenu";
import styles from "./page.module.css";
import { FloatingLabel, Form } from "react-bootstrap";
import ButtonComp from "@/components/components/button";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Announcements() { 
  const [announcement, setAnnouncement] = useState("");
  const [description, setDescription] = useState("");

  function handlePostAnnouncement() {

  }

  return (
    <div>
      <SideMenu />
      <div className={styles.announcementsPage}>
        <h1>Announcements</h1>
        <div className={styles.announcementForm}>
        <form>
          {/* Annuncement Title */}
          <FloatingLabel 
            controlId="floatingTextarea" 
            label="Announcement Title"
            className="mb-3"
            placeholder="Write your announcement here..." 
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
            onClick={handlePostAnnouncement}
          />
        </form>
        </div> //Post div end

        {/* Display Announcements */}
        <div className={styles.posts}>

        </div>  
      </div>
    </div>
  );
}
