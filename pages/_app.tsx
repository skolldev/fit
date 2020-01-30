import App from "next/app";
import React from "react";
import Head from "next/head";
import { exerciseLibrary } from "../mock-data/exercise-library";
import ExerciseLibraryContext from "../components/ExerciseLibraryContext";
import "../styles/index.css";

class DefaultApp extends App {
  state = {
    library: exerciseLibrary
  };

  public render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Fitapp</title>
          <meta name="description" content="A fitness tracker built for you" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com/"
            crossOrigin="anonymous"
          />
        </Head>
        <ExerciseLibraryContext.Provider value={this.state.library}>
          <Component {...pageProps} />
        </ExerciseLibraryContext.Provider>
      </>
    );
  }
}

export default DefaultApp;
