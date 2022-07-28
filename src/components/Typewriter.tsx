import React, { useState } from 'react';

import useInterval from '@hooks/useInterval';

type Props = {
  messagePrefix: string;
  messages: string[];
  speed?: number;
  delay?: number;
};

const Typewriter = ({ messagePrefix = '', messages, speed = 120, delay = 10 }: Props) => {
  const [letterIndex, setLetterIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(1);
  const [isDeleting, setIsDeleting] = useState(false);

  useInterval(
    () => {
      if (isDeleting) {
        setLetterIndex((prevLetterIndex) => prevLetterIndex - 1);
        if (letterIndex <= 0) {
          setIsDeleting(false);
          if (wordIndex < messages.length - 1) {
            setWordIndex((prevWordIndex) => prevWordIndex + 1);
          } else {
            setWordIndex(0);
          }
        }
      } else {
        setLetterIndex((prevLetterIndex) => prevLetterIndex + 1);
        if (letterIndex >= messages[wordIndex].length + delay) {
          setIsDeleting(true);
        }
      }
    },
    speed
  )

  return (
    <div className="text-3xl text-white text-center mt-2 after:content-['|'] after:animate-blink">
      {messagePrefix + messages[wordIndex].substring(0, letterIndex)}
    </div>
    
  );
};

export default Typewriter;
