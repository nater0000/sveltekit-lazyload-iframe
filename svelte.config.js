/** @type {import('@sveltejs/kit').Config} */
import preprocess from 'svelte-preprocess';

const config = {
  preprocess: [
    preprocess({
      scss: {
        prependData: "@import 'src/lib/styles/variables.scss';"
      }
    })
  ],
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte'
  }
};

export default config;
