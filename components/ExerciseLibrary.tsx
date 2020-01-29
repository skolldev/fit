import React, { useContext, useState, ChangeEvent } from "react";
import { ISelectedExercises } from "../models/selected-exercises.interface";
import { IExercise } from "../models/exercise.interface";
import Exercise from "./Exercise";
import ExerciseLibraryContext from "./ExerciseLibraryContext";

type Props = {
  selectedExercises: ISelectedExercises;
  setExercises: (value: React.SetStateAction<ISelectedExercises>) => void;
};

const ExerciseLibrary = ({
  setExercises,
  selectedExercises
}: Props): JSX.Element => {
  const totalLibrary = useContext(ExerciseLibraryContext);

  const [library, setLibrary] = useState(totalLibrary);
  const [filter, setFilter] = useState("");

  const filterLibrary = (event: ChangeEvent<HTMLInputElement>): void => {
    const filterValue = event.target.value.toLowerCase();
    const result = filterValue
      ? totalLibrary
          .filter(ex => ex.displayName.toLowerCase().includes(filterValue))
          .sort(({ displayName: a }, { displayName: b }) =>
            a > b ? 1 : b > a ? -1 : 0
          )
      : totalLibrary;

    setFilter(filterValue);
    setLibrary(result);
  };

  const getSelectedExercise = (
    key: string | undefined
  ): IExercise | undefined => {
    if (!key) {
      return undefined;
    }

    return selectedExercises[key];
  };

  const handleExercise = (exercise: IExercise): void => {
    if (exercise.id === undefined) {
      return;
    }

    const key = exercise.id.toString();
    const selection = { ...selectedExercises };
    const exists = selection[key] !== undefined;

    if (exists) {
      delete selection[key];
    } else {
      selection[key] = exercise;
    }

    setExercises(selection);
  };

  return (
    <div>
      <div className="flex flex-col w-1/6">
        <label htmlFor="exercise-search-input">Search Exercises</label>
        <input
          className="border border-gray-500"
          id="exercise-search-input"
          type="text"
          onChange={filterLibrary}
        />
      </div>
      <span className="text-xl">
        {filter
          ? `Found ${library.length} results for "${filter}":`
          : `Showing all ${totalLibrary.length} exercises`}
      </span>
      <div className="flex flex-col">
        {library.map(exercise => {
          return (
            <button
              type="button"
              key={exercise.id}
              className={`hover:bg-gray-400 focus:bg-gray-500 active:bg-gray-600 ${
                getSelectedExercise(exercise.id)
                  ? "border-l-4 border-red-700"
                  : null
              }`}
              onClick={(): void => {
                handleExercise(exercise);
              }}
              
            >
              <Exercise exercise={exercise} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ExerciseLibrary;
