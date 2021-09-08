import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const TypedText = () => {
  return (
    <ReactTypingEffect
        text={["Alone we can do so little;", "Together we can do so much."]}
        speed={50}
        eraseSpeed={20}
        eraseDelay={1500}
        typingDelay={500}
        style={{
            color: "#D0D9CE",
            fontSize: "32px",
            fontWeight: "300"
        }}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
    />
  );
};

export default TypedText;