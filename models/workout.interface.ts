import { IExercise } from "./exercise.interface";

export interface IWorkout {
  id: string;
  startTime: string;
  exercises: IExercise[];
}
