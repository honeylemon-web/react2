import { useState } from "react";

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

export default function App() {
    const [baseName, setName] = useState("Bob");
    const [showStory, setShowStory] = useState(false);
    const [xItem, setX] = useState([""]);
    const [yItem, setY] = useState([""]);
    const [zItem, setZ] = useState([""]);
    const [ukus,setUkus] = useState("us");


    return (
      <>
      <form onSubmit={(event)=>{
        event.preventDefault();
        setShowStory(true);
        const customName = event.target.elements.customName;
        const newName = customName.value;
        const ukusField = event.target.elements.ukus;

        if(newName){
          setName(newName);
        }
        setX(randomValueFromArray(["Willy the Goblin","Big Daddy","Father Christmas"]));
        setY(randomValueFromArray(["the soup kitchen","Disneyland","the White House"]));
        setZ(randomValueFromArray(["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"]));
        
        if(ukusField.value === "us"){
          setUkus("us");
        }else{
          setUkus("uk");
        }

        }}>
        <div>        
          <label htmlFor="customname">Enter custom name:</label>
          <input type="text" placeholder="" name="customName"/>
        </div>
        <div>
          <label htmlFor="us">US</label>
          <input type="radio" value="us" defaultChecked name="ukus"/>
          <label htmlFor="uk">UK</label>
          <input type="radio" value="uk" name="ukus" />
        </div>
        <div>
          <button type="submit" className="button" >Generate random story</button>
          </div>
        
        {showStory && (
          <p>
            It was {ukus === 'us' ? '94 fahrenheit' :'34 centigrade'} outside, so {xItem} went for a walk. When they
            got to {yItem}, they stared in horror for a few moments, then {zItem}.
            {baseName || "Bob"} saw the whole thing, but was not surprised — {xItem} weighs {ukus === 'us' ? '300 pounds' :'21 stone'}
            , and it was a hot day.
          </p>
        )}
        </form>
      </>
    );
  }