import React from "react";
import "./styles.css";

import useIsMobile, { useWindowSize } from "../commons/customHooks";

export default function App() {
  // const size = useWindowSize();
  const [size, device] = useIsMobile();

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        {size.width}px / {size.height}px
      </div>
    </div>
  );
}
