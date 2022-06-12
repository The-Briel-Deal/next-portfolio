import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Title from "../components/index/Title";
import Footer from "../components/Footer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { animated, useSpring } from "@react-spring/web";
const Home: NextPage = () => {
  const props = useSpring({
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: true ? 1 : 0,
    x: true ? 0 : 20,
    height: true ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Gabriel - SWE</title>
        <meta name="description" content="Gabriel Ford's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Parallax pages={3} style={{ top: "0", left: "0" }}>
          <ParallaxLayer
            offset={0}
            speed={1}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Title />
          </ParallaxLayer>

          <ParallaxLayer offset={0.7} speed={2}>
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
                justifyContent: "center",
                height: "100%",
                marginTop: -5,
              }}
            >
              <animated.h1
                className={styles.title}
                style={{ color: "white", ...props }}
              >
                Here&apos;s some of my work!
              </animated.h1>
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
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={0.5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <h1 className={styles.title}>I am a cute widdwe baby 😚</h1>
          </ParallaxLayer>
        </Parallax>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
