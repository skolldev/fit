import React, { useContext } from "react";
import { IExerciseLibrary } from "../models/exercise-library.interface";
import Exercise from "./Exercise";
import ExerciseLibraryContext from "./ExerciseLibraryContext";

const ExerciseLibrary = (): JSX.Element => {
  const library = useContext(ExerciseLibraryContext);
  return (
    <div>
      {Object.keys(library).map(id => {
        const exercise = library[id];
        return <Exercise key={id} exercise={exercise} />;
      })}
    </div>
  );
};

export default ExerciseLibrary;
