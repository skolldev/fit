import "../styles/index.css";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Fitapp</title>
      <meta name="description" content="A fitness tracker built for you" />
      // @ts-ignore
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com/"
        crossOrigin="anonymous"
      />
    </Head>
    <span>Hello World!</span>
  </div>
);

export default Home;
