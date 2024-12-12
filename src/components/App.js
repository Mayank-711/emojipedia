import React from "react";
import { Emocard } from "./emocard";
import emojipedia from "../emolist";

function generatecard(card){
  return (
    <Emocard 
    id = {card.id}
    key = {card.id}
    emoji = {card.emoji}
    name = {card.name}
    meaning = {card.meaning}
    />
  )
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(generatecard)}
      </dl>
    </div>
  );
}

export default App;
