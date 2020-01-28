import uuid from "uuid/v4";
import { IExercise } from "../models/exercise.interface";

const DEFAULT_IMAGE = "https://webkit.org/demos/srcset/image-src.png";

const exercises: IExercise[] = [
  {
    displayName: "Bench Press",
    equipment: "Barbell"
  },
  {
    displayName: "Conventional Deadlift",
    equipment: "Barbell"
  },
  {
    displayName: "Sumo Deadlift",
    equipment: "Barbell"
  },
  {
    displayName: "High Bar Squat",
    equipment: "Barbell"
  },
  {
    displayName: "Low Bar Squat",
    equipment: "Barbell"
  },
  {
    displayName: "Safety Bar Squat",
    equipment: "Safety Squat Bar"
  },
  {
    displayName: "Semi Sumo Deadlift",
    equipment: "Barbell"
  },
  {
    displayName: "Close Grip Bench Press",
    equipment: "Barbell"
  },
  {
    displayName: "Military Press",
    equipment: "Barbell"
  },
  {
    displayName: "Seated Military Press",
    equipment: "Barbell"
  },
  {
    displayName: "Push Press",
    equipment: "Barbell"
  },
  {
    displayName: "Shoulder Press",
    equipment: "Dumbbell"
  },
  {
    displayName: "Seated Shoulder Press",
    equipment: "Dumbbell"
  },
  {
    displayName: "Lateral Raise",
    equipment: "Dumbbell"
  },
  {
    displayName: "Curl",
    equipment: "Dumbbell"
  },
  {
    displayName: "Hammer Curl",
    equipment: "Dumbbell"
  },
  {
    displayName: "Curl",
    equipment: "Barbell"
  },
  {
    displayName: "Reverse Grip Curl",
    equipment: "Barbell"
  },
  {
    displayName: "Shrugs",
    equipment: "Barbell"
  },
  {
    displayName: "Shrugs",
    equipment: "Dumbbell"
  },
  {
    displayName: "JM Press",
    equipment: "Barbell"
  },
  {
    displayName: "Lying Triceps Extension",
    equipment: "Barbell"
  },
  {
    displayName: "Skull Crusher",
    equipment: "Barbell"
  },
  {
    displayName: "Seated Triceps Extension",
    equipment: "Barbell"
  },
  {
    displayName: "Lateral Raise",
    equipment: "Cable"
  },
  {
    displayName: "One Arm Lateral Raise",
    equipment: "Cable"
  },
  {
    displayName: "Upright Row",
    equipment: "Cable"
  },
  {
    displayName: "Reverse Fly",
    equipment: "Cable"
  },
  {
    displayName: "Triceps Extension",
    equipment: "Cable"
  },
  {
    displayName: "Lying Triceps Extension",
    equipment: "Cable"
  },
  {
    displayName: "Triceps Pushdown",
    equipment: "Cable"
  },
  {
    displayName: "Triceps Kickback",
    equipment: "Dumbbell"
  },
  {
    displayName: "Lying Triceps Extension",
    equipment: "Dumbbell"
  },
  {
    displayName: "Triceps Extension",
    equipment: "Dumbbell"
  },
  {
    displayName: "Close Grip Bench Press",
    equipment: "Machine"
  },
  {
    displayName: "Dips",
    equipment: "Machine"
  },
  {
    displayName: "Dips",
    equipment: "Bodyweight"
  },
  {
    displayName: "Pushup",
    equipment: "Bodyweight"
  },
  {
    displayName: "Incline Pushup",
    equipment: "Bodyweight"
  },
  {
    displayName: "Decline Pushup",
    equipment: "Bodyweight"
  },
  {
    displayName: "Diamond Pushup",
    equipment: "Bodyweight"
  },
  {
    displayName: "Drag Curl",
    equipment: "Barbell"
  },
  {
    displayName: "Cable Curl",
    equipment: "Cable"
  },
  {
    displayName: "Reverse Grip Curl",
    equipment: "Cable"
  },
  {
    displayName: "Incline Curl",
    equipment: "Dumbbell"
  },
  {
    displayName: "Curl",
    equipment: "Machine"
  },
  {
    displayName: "Preacher Curl",
    equipment: "Barbell"
  },
  {
    displayName: "Wrist Curl",
    equipment: "Barbell"
  },
  {
    displayName: "Wrist Curl",
    equipment: "Dumbbell"
  },
  {
    displayName: "Finger Curl",
    equipment: "Barbell"
  },
  {
    displayName: "Finger Curl",
    equipment: "Dumbbell"
  },
  {
    displayName: "Reverse Wrist Curl",
    equipment: "Barbell"
  },
  {
    displayName: "Reverse Wrist Curl",
    equipment: "Dumbbell"
  },
  {
    displayName: "Bent-over Row",
    equipment: "Barbell"
  },
  {
    displayName: "Bent-over Row Underhand",
    equipment: "Barbell"
  },
  {
    displayName: "One Arm Bent-Over Row",
    equipment: "Cable"
  },
  {
    displayName: "Seated Row",
    equipment: "Cable"
  },
  {
    displayName: "One Arm Seated Row",
    equipment: "Cable"
  },
  {
    displayName: "Bent-over Row",
    equipment: "Dumbbell"
  },
  {
    displayName: "Kroc Row",
    equipment: "Dumbbell"
  },
  {
    displayName: "Kneeling Row",
    equipment: "Dumbbell"
  },
  {
    displayName: "High Row",
    equipment: "Machine"
  },
  {
    displayName: "Chest Supported Row",
    equipment: "Machine"
  },
  {
    displayName: "Seal Row",
    equipment: "Machine"
  },
  {
    displayName: "Seal Row",
    equipment: "Barbell"
  },
  {
    displayName: "T-bar Row",
    equipment: "Barbell"
  },
  {
    displayName: "Inverted Row",
    equipment: "Bodyweight"
  },
  {
    displayName: "Chin Up",
    equipment: "Bodyweight"
  },
  {
    displayName: "Pullup",
    equipment: "Bodyweight"
  },
  {
    displayName: "Lat Pulldown",
    equipment: "Machine"
  },
  {
    displayName: "Lat Pulldown Parallel Grip ",
    equipment: "Machine"
  },
  {
    displayName: "Lat Pulldown Close Grip ",
    equipment: "Machine"
  },
  {
    displayName: "Lat Pulldown Underhand",
    equipment: "Machine"
  },
  {
    displayName: "Lat Pullin",
    equipment: "Cable"
  },
  {
    displayName: "Lat Pullover",
    equipment: "Cable"
  },
  {
    displayName: "Lat Pulldown",
    equipment: "Machine"
  },
  {
    displayName: "Shrug",
    equipment: "Cable"
  },
  {
    displayName: "Shrug",
    equipment: "Dumbbell"
  },
  {
    displayName: "Shrug",
    equipment: "Machine"
  },
  {
    displayName: "Board Press",
    equipment: "Barbell"
  },
  {
    displayName: "Floor Press",
    equipment: "Barbell"
  },
  {
    displayName: "Incline Bench Press",
    equipment: "Barbell"
  },
  {
    displayName: "Decline Bench Press",
    equipment: "Barbell"
  },
  {
    displayName: "Pushup on Kness",
    equipment: "Bodyweight"
  },
  {
    displayName: "Standing Fly",
    equipment: "Cable"
  },
  {
    displayName: "Seated Fly",
    equipment: "Cable"
  },
  {
    displayName: "Bench Press",
    equipment: "Dumbbell"
  },
  {
    displayName: "Incline Bench Press 15°",
    equipment: "Dumbbell"
  },
  {
    displayName: "Incline Bench Press 30°",
    equipment: "Dumbbell"
  },
  {
    displayName: "Incline Bench Press 45°",
    equipment: "Dumbbell"
  },
  {
    displayName: "Decline Bench Press",
    equipment: "Dumbbell"
  },
  {
    displayName: "Fly",
    equipment: "Dumbbell"
  },
  {
    displayName: "Pullover",
    equipment: "Dumbbell"
  },
  {
    displayName: "Chest Press",
    equipment: "Machine"
  },
  {
    displayName: "Bench Press",
    equipment: "Machine"
  },
  {
    displayName: "Seated Fly",
    equipment: "Machine"
  },
  {
    displayName: "Peck Deck Fly",
    equipment: "Machine"
  },
  {
    displayName: "Reverse Grip Bench Press",
    equipment: "Barbell"
  },
  {
    displayName: "Crunch",
    equipment: "Machine"
  },
  {
    displayName: "Hanging Leg Raises",
    equipment: "Bodyweight"
  },
  {
    displayName: "Hanging Knee Raises",
    equipment: "Bodyweight"
  },
  {
    displayName: "Hanging Windscreen Wipers",
    equipment: "Bodyweight"
  },
  {
    displayName: "Roman Chair Leg Raises",
    equipment: "Bodyweight"
  },
  {
    displayName: "Roman Chair Knee Raises",
    equipment: "Bodyweight"
  },
  {
    displayName: "Pallof Press",
    equipment: "Cable"
  },
  {
    displayName: "Woodcutters",
    equipment: "Cable"
  },
  {
    displayName: "Hyperextension",
    equipment: "Barbell"
  },
  {
    displayName: "Good Morning",
    equipment: "Barbell"
  },
  {
    displayName: "Romanian Deadlift",
    equipment: "Barbell"
  },
  {
    displayName: "Straight Leg Deadlift",
    equipment: "Barbell"
  },
  {
    displayName: "Block Pull",
    equipment: "Barbell"
  },
  {
    displayName: "Rack Pull",
    equipment: "Barbell"
  },
  {
    displayName: "Deficit Deadlift",
    equipment: "Barbell"
  },
  {
    displayName: "Stiff Leg Deadlift",
    equipment: "Barbell"
  },
  {
    displayName: "Trap Bar Deadlift",
    equipment: "Trap Bar"
  },
  {
    displayName: "Deadlift",
    equipment: "Cable"
  },
  {
    displayName: "Romanian Deadlift",
    equipment: "Dumbbell"
  },
  {
    displayName: "Straight Leg Deadlift",
    equipment: "Dumbbell"
  },
  {
    displayName: "Stiff Leg Deadlift",
    equipment: "Dumbbell"
  },
  {
    displayName: "Back Extension",
    equipment: "Machine"
  },
  {
    displayName: "Sumo Block Pull",
    equipment: "Barbell"
  },
  {
    displayName: "Hip Thrust",
    equipment: "Barbell"
  },
  {
    displayName: "Hip Thrust",
    equipment: "Machine"
  },
  {
    displayName: "Rear Lunge",
    equipment: "Barbell"
  },
  {
    displayName: "Side Lunge",
    equipment: "Barbell"
  },
  {
    displayName: "Walking Lunge",
    equipment: "Barbell"
  },
  {
    displayName: "Rear Lunge",
    equipment: "Dumbbell"
  },
  {
    displayName: "Side Lunge",
    equipment: "Dumbbell"
  },
  {
    displayName: "Walking Lunge",
    equipment: "Dumbbell"
  },
  {
    displayName: "Lunge",
    equipment: "Barbell"
  },
  {
    displayName: "Lunge",
    equipment: "Dumbbell"
  },
  {
    displayName: "Bulgarian Split Squat",
    equipment: "Barbell"
  },
  {
    displayName: "Bulgarian Split Squat",
    equipment: "Dumbbell"
  },
  {
    displayName: "Box Squat",
    equipment: "Barbell"
  },
  {
    displayName: "Front Squat",
    equipment: "Barbell"
  },
  {
    displayName: "Zercher Squat",
    equipment: "Barbell"
  },
  {
    displayName: "Step up",
    equipment: "Dumbbell"
  },
  {
    displayName: "Belt Squat",
    equipment: "Machine"
  },
  {
    displayName: "Leg Press",
    equipment: "Machine"
  },
  {
    displayName: "Hack Squat",
    equipment: "Machine"
  },
  {
    displayName: "Single Leg Leg Press",
    equipment: "Machine"
  },
  {
    displayName: "Overhead Squat",
    equipment: "Barbell"
  },
  {
    displayName: "Squat",
    equipment: "Bodyweight"
  },
  {
    displayName: "Bulgarian Split Squat",
    equipment: "Bodyweight"
  },
  {
    displayName: "Hip Thrust",
    equipment: "Bodyweight"
  },
  {
    displayName: "Glute Bridge",
    equipment: "Bodyweight"
  },
  {
    displayName: "Single Leg Hip Thrust",
    equipment: "Bodyweight"
  },
  {
    displayName: "Single Leg Glute Bridge",
    equipment: "Bodyweight"
  },
  {
    displayName: "Glute-Ham Raise",
    equipment: "Barbell"
  },
  {
    displayName: "Lying Leg Curl",
    equipment: "Machine"
  },
  {
    displayName: "Nording Hamstring Curl",
    equipment: "Bodyweight"
  },
  {
    displayName: "Standing Calf Raise",
    equipment: "Barbell"
  },
  {
    displayName: "Standing Calf Raise",
    equipment: "Machine"
  },
  {
    displayName: "Seated Calf Raise",
    equipment: "Machine"
  },
  {
    displayName: "Leg Press Calf Raise",
    equipment: "Machine"
  },
  {
    displayName: "Clean and Jerk",
    equipment: "Barbell"
  },
  {
    displayName: "Clean",
    equipment: "Barbell"
  },
  {
    displayName: "Hang Clean",
    equipment: "Barbell"
  },
  {
    displayName: "Power Clean and Jerk",
    equipment: "Barbell"
  },
  {
    displayName: "Power Clean",
    equipment: "Barbell"
  },
  {
    displayName: "Hang Power Clean",
    equipment: "Barbell"
  },
  {
    displayName: "High Pulls",
    equipment: "Barbell"
  },
  {
    displayName: "Hang Pull",
    equipment: "Barbell"
  },
  {
    displayName: "Split Jerk",
    equipment: "Barbell"
  },
  {
    displayName: "Snatch",
    equipment: "Barbell"
  },
  {
    displayName: "Power Snatch",
    equipment: "Barbell"
  },
  {
    displayName: "Hang Snatch",
    equipment: "Barbell"
  },
  {
    displayName: "Hang Power Snatch",
    equipment: "Barbell"
  }
];

exercises.sort(({ displayName: a }, { displayName: b }) =>
  a > b ? 1 : b > a ? -1 : 0
);

const lib: IExercise[] = [];

for (let i = 0; i < exercises.length; i++) {
  const ex = exercises[i];
  if (!ex.image) {
    ex.image = DEFAULT_IMAGE;
  }
  ex.id = uuid();
  lib.push(ex);
}

export const exerciseLibrary = lib;
