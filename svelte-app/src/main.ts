import App from "./App.svelte";

const entry = {
  mount(el: string | Element = "#app") {
    const target = typeof el === "string" ? document.querySelector(el)! : el;
    const app = new App({ target });
    console.count('Svelte mount');
    
    return () => {
      // unmount
      app.$destroy();
    };
  },
};

// only for development phase .env === 'development'
// entry.mount();

export default entry;
