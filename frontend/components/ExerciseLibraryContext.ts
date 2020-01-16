import { createContext } from "react";
import { IExerciseLibrary } from "../models/exercise-library.interface";

const ExerciseLibraryContext = createContext<IExerciseLibrary>({});

export default ExerciseLibraryContext;
