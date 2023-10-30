import { useState } from "react";

export default function App() {
  const [baseName, setBaseName] = useState(["Bob"]);

  function storySetUp(event) {
    event.preventDefault();
    const customname = event.target.elements.customname;
    const newName = customname.value;
    setBaseName([].concat(baseName, [newName]));
    
    randomNumber = Math.floor(Math.random() * 3);
    xItemArray = ["Willy the Goblin","Big Daddy","Father Christmas"];
    yItemArray = ["the soup kitchen","Disneyland","the White House"];
    zItemArray = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];
    xItem = xItemArray[randomNumber];
    randomNumber = Math.floor(Math.random() * 3);
    yItem = yItemArray[randomNumber];
    randomNumber = Math.floor(Math.random() * 3);
    zItem = zItemArray[randomNumber];
  }
  let randomNumber;
  const button = document.querySelector('.button');
  const showStory = false;
  const xItem = "";
  const yItem = "";
  const zItem = "";
  const ukus = "us";
  return (
    <>
      <div>
        <label htmlFor="customname">Enter custom name:</label>
        <input type="text" placeholder="" className="customname"/>
      </div>
      <div>
        <label htmlFor="us">US</label>
        <input type="radio" value="us" checked={ukus === "us"} />
        <label htmlFor="uk">UK</label>
        <input type="radio" value="uk" checked={ukus === "uk"} />
      </div>
      <div>
        <button className="button">Generate random story</button>
      </div>
      
    



      button.addEventListener('click', storySetUp);

      {showStory && (
        <p>
          It was 94 fahrenheit outside, so {xItem} went for a walk. When they
          got to {yItem}, they stared in horror for a few moments, then {zItem}.
          Bob saw the whole thing, but was not surprised — {xItem} weighs 300
          pounds, and it was a hot day.
        </p>
      )}
    </>
  );
}