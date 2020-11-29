import React, { useState } from "react";

const Button = (props) => {
  const [size] = useState(props.size);
  const [color] = useState(props.color);
  const [content] = useState(props.content);
  return (
    <button style={{ backgroundColor: color, fontSize: size }}>
      {content}
    </button>
  );
};

export default Button;
