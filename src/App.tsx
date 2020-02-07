import React from "react";
import "./tailwind.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StartWorkout from "./pages/start-workout";
import ExerciseLibraryContext from "./components/ExerciseLibraryContext";
import { exerciseLibrary } from "./data/exercise-library";

const App = () => {
  return (
    <ExerciseLibraryContext.Provider value={exerciseLibrary}>
      <div className="App">
        <Router>
          <Link to="/">Home</Link>
          <Link to="/start-workout">Start Workout</Link>
          <Switch>
            <Route path="/start-workout">
              <StartWorkout />
            </Route>
          </Switch>
        </Router>
      </div>
    </ExerciseLibraryContext.Provider>
  );
};

export default App;
