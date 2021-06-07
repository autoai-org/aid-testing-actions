const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

async function main() {
    const isEdge = core.getInput('edge');
    console.log(isEdge)
    if (eval(isEdge)) {
        console.info('Downloading Latest AID (Edge version)')
        await exec.exec('curl -s https://releases.autoai.org/aid/install.sh | sudo bash -s -- edge')
    } else {
        console.info('Downloading Latest AID (Stable version)')
        await exec.exec('curl -s https://releases.autoai.org/aid/install.sh | sudo bash -s')
    }
    
    await exec.exec('ls')
}
try {
    main()
} catch (error) {
    core.setFailed(error.message)
}