import { useState } from "react";
import Flashcard from "./Flashcard";
import flashcards from "./flashcards";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + flashcards.length) % flashcards.length);
  const next = () => setIndex((i) => (i + 1) % flashcards.length);

  const card = flashcards[index];

  return (
    <div className="app">
      <h1 className="title">Flashcards</h1>
      <p className="hint">Click the card to reveal the answer</p>

      <Flashcard key={card.id} question={card.question} answer={card.answer} />

      <div className="controls">
        <button onClick={prev} className="btn">&#8592; Prev</button>
        <span className="counter">{index + 1} / {flashcards.length}</span>
        <button onClick={next} className="btn">Next &#8594;</button>
      </div>
    </div>
  );
}

export default App;
