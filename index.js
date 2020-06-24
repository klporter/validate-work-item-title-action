const core = require('@actions/core');
const githubContext = JSON.parse(process.env.GH_CONTEXT)

try {
    console.log(`Repository: ${githubContext.repository}`);
    const prTitle = JSON.stringify(githubContext.event);

} catch (error) {
    core.setFailed(error.message);
}