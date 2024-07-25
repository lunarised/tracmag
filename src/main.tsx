import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { Breakpoint, BreakpointProvider } from "react-socks";
import { LargeViewPort } from "./components/viewPort.tsx";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <BreakpointProvider>
    <React.StrictMode>
      <Breakpoint medium up>
        <LargeViewPort />
      </Breakpoint>
      <Breakpoint small down></Breakpoint>
    </React.StrictMode>
  </BreakpointProvider>
);
