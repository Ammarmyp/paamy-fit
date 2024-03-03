import { useState } from "react";
import Hero from "./components/Hero";
import Generator from "./components/Generator";
import Workout from "./components/Workout";
import { generateWorkout } from "./utils/functions";

function App() {
  const [workout, setWorkout] = useState([]);
  const [poison, setPoison] = useState("individual");
  const [muscle, setMuscles] = useState([]);
  const [goal, setGoal] = useState("strength_power");

  const updateWorkout = () => {
    if (muscle.length < 1) {
      return;
    }
    let newWorkout = generateWorkout({ poison, muscle, goal });
    setWorkout(newWorkout);

    window.location.href = "#workout";
  };

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-t from-slate-800 to-slate-950 text-sm sm:text-base">
      <Hero />
      <Generator
        poison={poison}
        setPoison={setPoison}
        muscle={muscle}
        setMuscles={setMuscles}
        goal={goal}
        setGoal={setGoal}
        updateWorkout={updateWorkout}
      />
      {workout && <Workout workout={workout} />}
    </main>
  );
}

export default App;
