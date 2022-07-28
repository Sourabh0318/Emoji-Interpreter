import React, { useState } from "react";
import "./styles.css";

// var user = "Sourabh";
var color = "blue";
var emojiDictionary = {
  "😊": "Smiling",
  "❤️": "Heart",
  "💀": "Skull",
  "😏": "Smirking Face",
  "😵‍💫": "Face with Spiral Eyes"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Sorry! We don't have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ color: color }}>Emoji Meaning</h1>
      <input onChange={inputHandler} />

      <div>
        <small>Meaning will display here</small>
        <h2 style={{ color: color }}>{meaning}</h2>

        <h3>emojis we know!</h3>
        {emojiWeKnow.map(function (emoji) {
          return (
            <span
              key={emoji}
              onClick={() => emojiClickHandler(emoji)}
              style={{ padding: "0.5rem", fontSize: "2rem", cursor: "pointer" }}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
