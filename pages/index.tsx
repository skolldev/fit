import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Link from "next/link";

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
    <Link href="/start-workout">
      <a>Start Workout</a>
    </Link>
  </div>
);

export default Home;
