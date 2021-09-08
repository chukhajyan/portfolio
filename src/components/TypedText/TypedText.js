import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import "../TypedText/TypedText.scss";

const TypedText = () => {
  return (
    <ReactTypingEffect
        text={["Alone we can do so little;", "Together we can do so much."]}
        speed={50}
        eraseSpeed={20}
        eraseDelay={1500}
        typingDelay={500}
        className="typed-text"
        cursorRenderer={cursor => <h1 className="typed-text-cursor">{cursor}</h1>}
    />
  );
};

export default TypedText;