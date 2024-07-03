'use client';
import Image from "next/image";
import styles from "./page.module.css";
import MyButton from "./MyButton.js"

export default function Home() {
  return (
    <main>
      <h1>Welcome to my app</h1>
      <br />
      <MyButton />
      <MyButton />
    </main>
  );
}
