const { spawn } = require("child_process");
const commander = require("commander");

commander
  .command("serve")
  .arguments("[env]")
  .action(function(env, cmd) {
    process.env.APP_ENV = env || "";
    process.env.APP_MODE = "development";
    const script = "webpack-dev-server --config config/webpack.dev.js";
    spawn(script, { shell: true, stdio: "inherit" });
  });

commander.parse(process.argv);
