import App from "next/app";
import React from "react";
import { exerciseLibrary } from "../mock-data/exercise-library";
import { IExerciseLibrary } from "../models/exercise-library.interface";
import ExerciseLibraryContext from "../components/ExerciseLibraryContext";

class DefaultApp extends App {
  public render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <ExerciseLibraryContext.Provider value={exerciseLibrary}>
        <Component {...pageProps} />
      </ExerciseLibraryContext.Provider>
    );
  }
}

export default DefaultApp;
