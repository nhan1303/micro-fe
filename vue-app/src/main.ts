import { createApp } from "vue";
import App from "./App.vue";

const entry = {
  mount(el: string | Element = '#app') {
    const app = createApp(App);
    app.mount(el);
    console.count('Vue mount');
    return () => {
      // unmount
      app.unmount();
    };
  },
};

// only for development phase .env === 'development'
// entry.mount();

export default entry;
