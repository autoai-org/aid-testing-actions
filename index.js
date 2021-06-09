const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

async function main() {
    const isEdge = core.getInput('edge');
    console.log(eval(isEdge))
    await exec.exec('curl -s https://releases.autoai.org/aid/install.sh -o install.sh')
    await exec.exec('sudo chmod +x install.sh')
    if (eval(isEdge)) {
        console.info('Installing Latest AID (Edge version)')
        await exec.exec('sudo bash ./install.sh edge')
    } else {
        console.info('Installing Latest AID (Stable version)')
        await exec.exec('sudo bash ./install.sh')
    }
    await exec.exec('aid --version')
}   
try {
    main()
} catch (error) {
    core.setFailed(error.message)
}