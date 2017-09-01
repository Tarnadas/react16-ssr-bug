const path = require('path')

module.exports = [
  {
    entry: path.join(__dirname, 'src/scripts/app.js'),
    output: {
      filename: 'app.js',
      path: path.join(__dirname, 'build/scripts')
    },
    node: {
      __dirname: false,
      __filename: false,
      console: true,
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      child_process: 'empty'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            babelrc: false,
            presets: [
              ['env', {
                targets: {
                  browsers: [
                    'last 3 Chrome versions',
                    'last 2 ff versions'
                  ]
                },
                modules: false,
                useBuiltIns: true
              }]
            ],
            plugins: ['transform-react-jsx']
          }
        }
      ]
    }
  },
  {
    target: 'node',
    entry: path.join(__dirname, 'src/server.js'),
    output: {
      filename: 'server.js',
      path: path.join(__dirname, 'build')
    },
    node: {
      __dirname: false,
      __filename: false
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            babelrc: false,
            presets: [
              ["env", {
                "targets": {
                  "node": "current"
                }
              }]
            ],
            plugins: ['transform-react-jsx']
          }
        }
      ]
    }
  }
]
