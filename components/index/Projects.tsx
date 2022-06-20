import { useEffect, useRef, useState } from "react";
import styles from "../../styles/Home.module.css";
import { annotate } from "rough-notation";
import { animated, useSpring, useTrail } from "@react-spring/web";
const descriptions = [
  " building things to make lives better.",
  " cryptography and security.",
  " cloud technologies.",
];

export default function Title() {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
  const trail = useTrail(9, {
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 400,
  });
  return (
    <>
      <div className="custom-shape-divider-bottom-1654974253">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div
        style={{
          backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          marginTop: -5,
          marginBottom: -5,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <animated.h1
            className="work-card"
            style={{ color: "white", padding: "5rem", ...props }}
          >
            Here&apos;s some of my work!
          </animated.h1>
        </div>
        {[
          [
            {
              title: "Flight Scanner",
              href: "https://www.ubuy.com.pk/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFpNFFvYzQzUFMuX1NMMTUwMF8uanBn.jpg",
            },
            {
              title: "Flight Scanner",
              href: "https://www.ubuy.com.pk/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFpNFFvYzQzUFMuX1NMMTUwMF8uanBn.jpg",
            },
            {
              title: "Flight Scanner",
              href: "https://www.ubuy.com.pk/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFpNFFvYzQzUFMuX1NMMTUwMF8uanBn.jpg",
            },
          ],
          [
            {
              title: "Flight Scanner",
              href: "https://www.ubuy.com.pk/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFpNFFvYzQzUFMuX1NMMTUwMF8uanBn.jpg",
            },
            {
              title: "Flight Scanner",
              href: "https://www.ubuy.com.pk/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFpNFFvYzQzUFMuX1NMMTUwMF8uanBn.jpg",
            },
            {
              title: "Flight Scanner",
              href: "https://www.ubuy.com.pk/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFpNFFvYzQzUFMuX1NMMTUwMF8uanBn.jpg",
            },
          ],
          [
            {
              title: "Flight Scanner",
              href: "https://www.ubuy.com.pk/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFpNFFvYzQzUFMuX1NMMTUwMF8uanBn.jpg",
            },
            {
              title: "Flight Scanner",
              href: "https://www.ubuy.com.pk/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFpNFFvYzQzUFMuX1NMMTUwMF8uanBn.jpg",
            },
            {
              title: "Flight Scanner",
              href: "https://www.ubuy.com.pk/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFpNFFvYzQzUFMuX1NMMTUwMF8uanBn.jpg",
            },
          ],
        ].map((row, i) => (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                padding: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "clamp(50rem, 90%, 90rem)",
                }}
              >
                {row.map((col, j) => (
                  <animated.div
                    className={styles.work_card}
                    style={{
                      ...trail[j + i * 3],
                      padding: "20px",
                      height: 200,
                      width: "30%",
                      backgroundImage: `url("${col.href}")`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: " cover",
                    }}
                    key={i}
                  >
                    <h1 style={{ color: "white" }}>{col.title}</h1>
                  </animated.div>
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="custom-shape-divider-top-1654975218">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </>
  );
}
