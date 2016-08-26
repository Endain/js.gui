import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js2';

// Rollup to generate an AMD module
export default {
    'entry': 'index.js',
    'format': 'amd',
    'moduleId': 'gui',
    'dest': 'build/js.gui.amd.js',
    plugins: [
        uglify( {}, minify )
    ]
};
