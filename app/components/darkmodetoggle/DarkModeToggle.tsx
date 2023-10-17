"use client";
import { useContext, useState } from "react";
import styles from "./darkmodetoggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";

export default function DarkModeToggle() {
  const { mode, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggleTheme}>
      <div className={styles.icon}>🌙</div>
      <div
        className={styles.ball}
        style={mode === "dark" ? { left: "2px" } : { right: "2px" }}
      ></div>
      <div className={styles.icon}> ☀️</div>
    </div>
  );
}
