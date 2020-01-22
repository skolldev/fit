import App from "next/app";
import React from "react";
import { exerciseLibrary } from "../mock-data/exercise-library";
import ExerciseLibraryContext from "../components/ExerciseLibraryContext";

class DefaultApp extends App {
  state = {
    library: exerciseLibrary
  };

  counter = 4;
  public addExercise(): void {
    const lib = { ...this.state.library };
    const id = this.counter.toString();
    lib[id] = {
      displayName: `Exercise ${id}`,
      equipment: "Barbell",
      image: "https://webkit.org/demos/srcset/image-src.png"
    };
    this.setState({ library: lib });
    this.counter++;
  }

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
