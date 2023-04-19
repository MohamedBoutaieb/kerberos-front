// const path = require("path");
// module.exports = {
//   entry: "./src/index.tsx",
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         use: "ts-loader",
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".tsx", ".ts", ".js"],
//     fallback: {
//       "stream": false,
//       buffer: require.resolve("buffer"),
   
//     },
//   },
//   plugins: [
//     // Work around for Buffer is undefined:
//     // https://github.com/webpack/changelog-v5/issues/10
//     new webpack.ProvidePlugin({
//       Buffer: ["buffer", "Buffer"],
      
//     }),
//     new webpack.ProvidePlugin({
//       process: "process/browser",
//     }),

//     ,fsdflùk
//   ],
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "dist"),
//   },
 
// };
