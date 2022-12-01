import { useState } from "react";
import WordRow from "./WordRow";

export default function App() {
  const [guess, setGuess] = useState("");
  return (
    <div className="mx-auto w-96">
      <header className="border-b border-gray-500 pb-2 my-2">
        <h1 className="text-4xl text-center">Spelldle</h1>
        <div>
          <input
            type="text"
            className="w-1/2 p-2 border-2 border-gray-500"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
          />
        </div>
      </header>
      <main className="grid grid-rows-6 gap-4">
        <WordRow letters="hello" />
        <WordRow letters="solar" />
        <WordRow letters="penny" />
        <WordRow letters="snack" />
        <WordRow letters="stare" />
        <WordRow letters="he" />
      </main>
    </div>
  );
}
