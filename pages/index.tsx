import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Link from "next/link";

const Home: NextPage = () => (
  <div>
    <Link href="/start-workout">
      <a>Start Workout</a>
    </Link>
  </div>
);

export default Home;
