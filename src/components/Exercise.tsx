import React from "react";
import { IExercise } from "../models/exercise.interface";

type ExerciseProps = {
  exercise: IExercise;
};

const Exercise = ({ exercise }: ExerciseProps): JSX.Element => {
  return (
    <div className="flex">
      <img
        className="w-16"
        src={exercise.image}
        alt={`${exercise.displayName}`}
      />
      <div className="ml-4 flex flex-col justify-center text-left">
        <span className="font-bold text-lg">{exercise.displayName}</span>
        <span className="text-sm">{exercise.equipment}</span>
      </div>
    </div>
  );
};

export default Exercise;
