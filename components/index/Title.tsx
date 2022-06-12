import { useEffect, useRef, useState } from "react";
import styles from "../../styles/Home.module.css";
import { annotate } from "rough-notation";
const descriptions = [
  " building things to make lives better.",
  " cryptography and security.",
  " cloud technologies.",
];

export default function Title() {
  const myName = useRef(null);
  useEffect(() => {
    if (myName?.current) {
      const annotateMyName = annotate(myName.current, { type: "underline" });
      annotateMyName.show();
    } else {
      console.log("myName is not ready");
    }
  }, []);
  return (
    <>
      <h1 className={styles.title}>
        My name is{" "}
        <span ref={myName} className={styles.name}>
          Gabriel
        </span>
      </h1>
      <p className={styles.description}>
        <code className={styles.code}>
          I&apos;m A Software Engineer that loves building things to make lives
          better.
        </code>
      </p>
    </>
  );
}
