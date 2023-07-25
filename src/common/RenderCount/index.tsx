import React, { useEffect, useRef } from "react";
import { Counter } from "./RenderCount.styles";

interface Props {}
const RenderCount: React.FC<Props> = ({ children }) => {
  const renderCounter = useRef(1);

  useEffect(() => {
    renderCounter.current = renderCounter.current + 1;
  });
  return (
    <Counter>
      {children} render count: {renderCounter.current}
    </Counter>
  );
};

export default RenderCount;
