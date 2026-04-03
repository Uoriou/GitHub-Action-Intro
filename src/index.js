import * as core from "@actions/core";
import * as github from "@actions/github";

// Can i have two different actions like this in a single index.js file 
try {
    // `who-to-greet` input defined in action metadata file
    const nameToGreet = core.getInput("who-to-greet");
    core.info(`Hello ${nameToGreet}, The commit was successful !`);

    //const filesToCheck = core.getInput("files")
    //core.info(`Task ${filesToCheck}`);
    // Get the current time and set it as an output variable
    const time = new Date().toTimeString();
    core.setOutput("time", time);

    // Get the JSON webhook payload for the event that triggered the workflow
    //const payload = JSON.stringify(github.context.payload, undefined, 2);
    //core.info(`The event payload: ${payload}`);
} catch (error) {
  	core.setFailed(error.message);
}

