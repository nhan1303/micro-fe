import React from "react";
// import ReactApp from "@react-mfe/App";
import ReactWrapper from "./components/ReactWrapper";
import VueWrapper from "./components/VueWrapper";
import AngularWrapper from "./components/AngularWrapper";
import SvelteWrapper from "./components/SvelteWrapper";

// const ReactApp = React.lazy(() => import("reactApp/App"));

function App() {
  return (
    <>
      <p>Hello from Shell App</p>
      {/* <ReactApp /> */}
      <AngularWrapper component="App" />
      {/* <ReactWrapper component="App" />
      <VueWrapper component="App" />
      <SvelteWrapper component="App" /> */}
    </>
  );
}

export default App;
