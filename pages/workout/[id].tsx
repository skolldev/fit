import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import moment from "moment";
import { NextPage } from "next";
import { IWorkout } from "../../models/workout.interface";

const Workout: NextPage = () => {
  const [workout, setWorkout] = useState<IWorkout | null>(null);
  const router = useRouter();

  useEffect(() => {
    const id = router.query.id as string;
    const storage = localStorage.getItem(id);
    if (storage) {
      const result = JSON.parse(storage);
      setWorkout(result);
    }
  }, [router.query.id]);

  return workout ? (
    <div>
      Workout ID: {workout.id}
      <br />
      Workout Starttime:
      {moment(workout.startTime).toLocaleString()}
      <br />
      Workout Exercises:
      {workout.exercises.map(ex => ex.displayName)}
    </div>
  ) : (
    <div>Not found :/</div>
  );
};

export default Workout;
