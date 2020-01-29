import React, { useState } from "react";

import uuid from "uuid/v4";
import moment from "moment";
import { useRouter } from "next/router";
import { ISelectedExercises } from "../models/selected-exercises.interface";
import ExerciseLibrary from "../components/ExerciseLibrary";
import { IWorkout } from "../models/workout.interface";

const StartWorkout = (): JSX.Element => {
  const router = useRouter();

  const [selectedExercises, setSelectedExercises] = useState<
    ISelectedExercises
  >({});

  const startWorkout = (): void => {
    const id = uuid();
    const startTime = moment().toISOString();
    const exercises = Object.values(selectedExercises);

    const workout: IWorkout = {
      id,
      startTime,
      exercises
    };

    localStorage.setItem(id, JSON.stringify(workout));
    router.push(`/workout/${id}`);
  };

  return (
    <>
      <button onClick={startWorkout}>Start</button>
      <ExerciseLibrary
        selectedExercises={selectedExercises}
        setExercises={setSelectedExercises}
      />
    </>
  );
};

export default StartWorkout;
