import React from "react";
import { changeSentenceState } from "./data";

const Letter = ({
  setSentenceState,
  sentence,
  sentenceState,
  letterState,
  setLetterState,
}) => {
  const handleOnClick = (index, letter) => {
    let oldSentenceState = sentenceState;
    console.log(oldSentenceState);
    let newSentenceState = changeSentenceState(sentenceState, sentence, letter);
    console.log(newSentenceState);
    setSentenceState(newSentenceState);
    console.log(sentenceState);
    console.log(letterState[index].class);
    let newValues = [...letterState];
    // eslint-disable-next-line no-lone-blocks
    {
      !(newSentenceState === oldSentenceState)
        ? (newValues[index].class =
            "text-green-500 w-16 h-16 border-2 border-green-500 flex justify-center items-center text-4xl rounded-2xl mx-9 cursor-pointer hover:bg-gray-800 pointer-events-none")
        : (newValues[index].class =
            "text-red-500 w-16 h-16 border-2 border-red-500 flex justify-center items-center text-4xl rounded-2xl mx-9 cursor-pointer hover:bg-gray-800 pointer-events-none");
    }
    setLetterState(newValues);
    console.log(letterState);
  };
  return (
    <div className="flex flex-wrap w-3/5">
      {letterState.map((item) => (
        <div
          key={item.letter}
          className={item.class}
          onClick={() => handleOnClick(item.index, item.letter)}
        >
          {item.letter}
        </div>
      ))}
    </div>
  );
};
export default Letter;
