const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

try {
    const reporting = core.getInput('reporting')
} catch (error) {
    core.setFailed(error.message);
}