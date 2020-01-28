import App from "next/app";
import React from "react";
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
      <ExerciseLibraryContext.Provider value={this.state.library}>
        <Component {...pageProps} />
      </ExerciseLibraryContext.Provider>
    );
  }
}

export default DefaultApp;
