import { createContext } from "react";
import { IExercise } from "../models/exercise.interface";

const ExerciseLibraryContext = createContext<IExercise[]>([]);

export default ExerciseLibraryContext;
