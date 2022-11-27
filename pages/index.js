import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Client-Side Rendering");
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data[0]);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next By Khun Mee</title>
        <meta name="description" content="threated by Khun Mee" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello! Home (Client Side)</h1>
      <div>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
      </div>
      <ul>
        <li>
          <Link href="/resume">
            <small>Resume</small>
          </Link>
        </li>
        <li>
          <Link href="/i18n">
            <small>i18n</small>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <small>Profile</small>
          </Link>
        </li>
        <li>
          <Link href="/profile/upgrade">
            <s>
              <small>Profile</small>
            </s>
          </Link>
        </li>
        <li>
          <Link href="/gallery">
            <small>Gallery</small>
          </Link>
        </li>
        <li>
          <Link href="/api/posts">
            <small>ETC.</small>
          </Link>
        </li>
      </ul>
    </div>
  );
}

// npx create-next-app@latest hello-next
// npm i react-intl   i18n
