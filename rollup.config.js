import css from  'rollup-plugin-css-only';
import babel from '@rollup/plugin-babel';

export default {
  input:'formbuilder/index.js',
  output: {
    dir:"dist/",
    format:"es",
    inlineDynamicImports:true
  },
  externals: ['/@babel\/runtime/','react'],
  plugins: [babel({babelHelpers:'runtime'})]

}
