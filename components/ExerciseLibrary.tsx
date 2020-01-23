import React, { useContext, useState, ChangeEvent } from "react";
import Exercise from "./Exercise";
import ExerciseLibraryContext from "./ExerciseLibraryContext";

const ExerciseLibrary = (): JSX.Element => {
  const totalLibrary = useContext(ExerciseLibraryContext);

  const [library, setLibrary] = useState(totalLibrary);

  const filterLibrary = (event: ChangeEvent<HTMLInputElement>): void => {
    setLibrary(
      totalLibrary.filter(ex =>
        ex.displayName.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  return (
    <div>
      <span className="text-xl">
        Total exercise count: {totalLibrary.length}
      </span>
      <div className="flex flex-col w-1/6">
        <label htmlFor="exercise-search-input">Search Exercises</label>
        <input
          className="border border-gray-500"
          id="exercise-search-input"
          type="text"
          onChange={filterLibrary}
        />
      </div>
      {library.map(exercise => {
        return <Exercise key={exercise.id} exercise={exercise} />;
      })}
    </div>
  );
};

export default ExerciseLibrary;
