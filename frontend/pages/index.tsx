import "../styles/index.css";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import ExerciseLibrary from "../components/ExerciseLibrary";

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Fitapp</title>
      <meta name="description" content="A fitness tracker built for you" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com/"
        crossOrigin="anonymous"
      />
    </Head>
    <span>Hello World!</span>
    <ExerciseLibrary />
  </div>
);

export default Home;
