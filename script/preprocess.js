const path = require('path')
const { spawn } = require('child_process')
const commander = require('commander')

commander
  .command('serve')
  .arguments('[env]')
  // .description('启动服务，传递额外参数将注入为环境变量')
  .action(function(env, cmd) {
    process.env.APP_ENV = env || ''
    process.env.APP_MODE = 'development'
    const script = 'webpack-dev-server --config ./config/webpack.config.js --mode=development'
    spawn(script, { shell: true, stdio: 'inherit' })
  })

commander
  .command('build')
  .arguments('[env]')
  .action(function(env, cmd) {
    process.env.APP_ENV = env || ''
    process.env.APP_MODE = 'production'
    const buildScript = 'webpack --config ./config/webpack.config.js --mode=production'
    const postScript = `node ${path.resolve(__dirname, './postprocess.js')}`
    const script = `${buildScript} & ${postScript}`
    spawn(script, { shell: true, stdio: 'inherit' })
  })

commander.parse(process.argv)
