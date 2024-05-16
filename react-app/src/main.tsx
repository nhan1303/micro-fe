import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const entry = {
  mount(el: string | Element = "#app") {
    const target = typeof el === "string" ? document.querySelector(el)! : el;
    const app = ReactDOM.createRoot(target);
    app.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.count("React mount");
    return () => {
      // unmount
      app.unmount();
    };
  },
};

// only for development phase .env === 'development'
// entry.mount();

export default entry;

// ReactDOM.createRoot(document.getElementById("root")!).render(<App />);

// Vue
// import { createApp } from "vue";
// import App from "./App.vue";
// const app = createApp(App);
// app.mount('#root');
// app.mount(document.getElementById("root"));

// React
// import ReactDOM from 'react-dom/client'
// import App from "./App.tsx";
// ReactDOM.createRoot(document.getElementById("root")!).render(<App />);

// Angular

// Svelte
// import App from './App.svelte'
// const app = new App({
//   target: document.getElementById('root')!,
// })

// test
// const selector = '#root'
// const el = document.querySelector(selector)
// ReactDOM.createRoot(el!).render(<App />);
