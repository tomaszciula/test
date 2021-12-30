
import React, { useState } from "react";
import Header from "./Header";
import Image from "./Image";
import Footer from "./Footer";
import { ChangeLettersToUnreadable, letters, sentence } from "./data";
import Letter from "./Letter";

const MainWindow = () => {
  const [sentenceState, setSentenceState] = useState(
    ChangeLettersToUnreadable(sentence)
  );
  const [letterState, setLetterState] = useState(letters)
  return (
    <div className="bg-black">
      <Header sentence={sentenceState} />
      <div className="flex w-auto h-50">
        <Image />
        <Letter
          setSentenceState={setSentenceState}
          sentenceState={sentenceState}
          sentence={sentence}
          letterState={letterState}
          setLetterState={setLetterState}
        />
      </div>
      <Footer />
    </div>
  );
};

export default MainWindow;
