const { spawn } = require("child_process");
const commander = require("commander");

commander
  .command("build")
  .arguments("[env]")
  .action(function(env, cmd) {
    process.env.APP_ENV = env || "";
    process.env.APP_MODE = "production";
    const script = "webpack --config config/webpack.prod.js";
    spawn(script, { shell: true, stdio: "inherit" });
  });

commander.parse(process.argv);
