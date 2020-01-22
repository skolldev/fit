import { IExercise } from "./exercise.interface";

export interface IExerciseLibrary {
  [id: string]: IExercise;
}
