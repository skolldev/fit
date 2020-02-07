import React, { useState, useEffect } from "react";

import uuid from "uuid/v4";
import moment from "moment";
import { useHistory } from "react-router-dom";
import { ISelectedExercises } from "../models/selected-exercises.interface";
import ExerciseLibrary from "../components/ExerciseLibrary";
import { IWorkout } from "../models/workout.interface";
import { IError } from "../models/error.interface";

const StartWorkout = () => {
  const [error, setError] = useState<IError>({});
  const [selectedExercises, setSelectedExercises] = useState<
    ISelectedExercises
  >({});
  const history = useHistory();

  useEffect(() => {
    if (Object.keys(selectedExercises).length > 0) {
      const errors = { ...error };
      delete errors.MIN_ONE_EXERCISE;
      setError(errors);
    }
    // We only want this effect to run when the selected exercises change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedExercises]);

  const startWorkout = (): void => {
    const id = uuid();
    const startTime = moment().toISOString();
    const exercises = Object.values(selectedExercises);

    if (Object.keys(error).length) {
      return;
    }

    console.log(Object.keys(selectedExercises));
    if (Object.keys(selectedExercises).length === 0) {
      setError({
        ...error,
        MIN_ONE_EXERCISE: "You need to select at least one exercise"
      });
      return;
    }

    const workout: IWorkout = {
      id,
      startTime,
      exercises
    };

    localStorage.setItem(id, JSON.stringify(workout));
    history.push(`/workout/${id}`);
  };

  return (
    <>
      <button type="button" onClick={startWorkout}>
        Start
      </button>
      {error.length}
      <ExerciseLibrary
        selectedExercises={selectedExercises}
        setExercises={setSelectedExercises}
      />
    </>
  );
};

export default StartWorkout;
