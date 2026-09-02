import { useState } from "react";
import Menu from "./Menu";
import Flashcard from "./Flashcard";
import chapters from "./flashcards";
import "./App.css";

function App() {
  const [selection, setSelection] = useState(null); // { chapter, subchapter }
  const [index, setIndex] = useState(0);

  const handleSelect = (chapter, subchapter) => {
    setSelection({ chapter, subchapter });
    setIndex(0);
  };

  const handleBack = () => {
    setSelection(null);
    setIndex(0);
  };

  if (!selection) {
    return <Menu chapters={chapters} onSelect={handleSelect} />;
  }

  const { chapter, subchapter } = selection;
  const cards = subchapter.cards;
  const card = cards[index];

  const prev = () => setIndex((i) => (i - 1 + cards.length) % cards.length);
  const next = () => setIndex((i) => (i + 1) % cards.length);

  return (
    <div className="app">
      <div className="practice-header">
        <button className="back-btn" onClick={handleBack}>← Back</button>
        <div className="breadcrumb">
          <span>Chapter {chapter.id}</span>
          <span className="sep">›</span>
          <span>{subchapter.title}</span>
        </div>
      </div>

      <p className="hint">Click the card to reveal the answer</p>

      <Flashcard key={card.id} question={card.question} answer={card.answer} />

      <div className="controls">
        <button onClick={prev} className="btn">&#8592; Prev</button>
        <span className="counter">{index + 1} / {cards.length}</span>
        <button onClick={next} className="btn">Next &#8594;</button>
      </div>
    </div>
  );
}

export default App;
