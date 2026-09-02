import { useState } from "react";
import "./Menu.css";

function Menu({ chapters, onSelect }) {
  const [openChapter, setOpenChapter] = useState(null);

  const toggle = (id) => setOpenChapter((prev) => (prev === id ? null : id));

  return (
    <div className="menu">
      <h1 className="menu-title">Flashcards</h1>
      <p className="menu-subtitle">Choose a chapter to practice</p>

      <ul className="chapter-list">
        {chapters.map((ch) => (
          <li key={ch.id} className="chapter-item">
            <button
              className={`chapter-btn ${openChapter === ch.id ? "open" : ""}`}
              onClick={() => toggle(ch.id)}
            >
              <span className="chapter-num">Chapter {ch.id}</span>
              <span className="chapter-name">{ch.title}</span>
              <span className="chevron">{openChapter === ch.id ? "▲" : "▼"}</span>
            </button>

            {openChapter === ch.id && (
              <ul className="subchapter-list">
                {ch.subchapters.map((sub) => (
                  <li key={sub.id}>
                    <button
                      className="subchapter-btn"
                      onClick={() => onSelect(ch, sub)}
                    >
                      <span className="sub-id">{sub.id}</span>
                      <span className="sub-name">{sub.title}</span>
                      <span className="card-count">{sub.cards.length} cards</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
