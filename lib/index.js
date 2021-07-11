const core = require('@actions/core');
const child_process = require("child_process");

const execute = (command, args) => {
  console.log(`${command} ${args.join(' ')}`);
  return child_process.spawnSync(command, args, {
    stdio: ['ignore', process.stdout, process.stderr]
  });
}

const destroyApplication = ({ applicationName }) => {
  return execute('heroku', ['apps:destroy', `--app=${applicationName}`, `--confirm=${applicationName}`]);
}

async function run() {
  try {
    let config = {
      applicationName: core.getInput('application_name'),
    };

    destroyApplication(config);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
