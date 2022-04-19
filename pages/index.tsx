import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Title from "../components/index/Title";
import Footer from "../components/Footer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gabriel - SWE</title>
        <meta name="description" content="Gabriel Ford's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Parallax pages={2} style={{ top: "0", left: "0" }}>
          <ParallaxLayer
            offset={0}
            speed={2.5}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Title />
          </ParallaxLayer>

          <ParallaxLayer
            offset={0}
            speed={2}
            style={{ backgroundColor: "#ff6d6d" }}
          />

          <ParallaxLayer
            offset={1}
            speed={0.5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <h1 className={styles.title}>I am a cute widdwe baby 😚
            </h1>
          </ParallaxLayer>
        </Parallax>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
