const core = require('@actions/core');
const githubContext = JSON.parse(process.env.GH_CONTEXT)

try {
    console.log(`Repository: ${githubContext.repository}`);
    const pullRequestTitle = githubContext.event.pull_request.title;
    console.log(`Validating ${pullRequestTitle}`)
    if (!pullRequestTitle.match(/(W-[0-9]{7}).*/)) {
        core.setFailed("GUS work item not found in title; no work items will be tagged in GUS")
    }
} catch (error) {
    core.setFailed(error.message);
}