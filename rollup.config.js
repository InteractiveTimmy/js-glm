export default {
  input: 'src/glm.js',
  output: [
    {
      format: 'umd',
      name: 'GLM',
      file: 'build/glm.js',
      indent: '\t'
    },
    {
      format: 'es',
      file: 'build/glm.module.js',
      indent: '\t'
    }
  ],
  watch: {
    include: 'src/**'
  }
};