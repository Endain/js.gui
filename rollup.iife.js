import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js2';

// Rollup to generate a global-style module
export default {
    'entry': 'index.js',
    'format': 'iife',
    'moduleName': 'gui',
    'dest': 'build/js.gui.js',
    plugins: [
        uglify( {}, minify )
    ]
};
