
// https://github.com/sveltejs/svelte-preprocess
// https://github.com/alialaa/svelte-course/blob/adding-scss/package.json
// npm i -D svelte-preprocess@4.10.7
// npm i -D sass@1.55.0


import sveltePreprocess from 'svelte-preprocess';

// 1
// const config = {
//     preprocess: sveltePreprocess({
//         scss: {
//         }
//     })
// }

// 2
// const config = {
//     preprocess: sveltePreprocess({
//         scss: {
//             prependData: ''
//         }
//     })
// }

// 3
const config = {
    preprocess: sveltePreprocess({
        scss: {
            prependData: '@use "src/styles/variables.scss";'
        }
    })
} 



export default config;