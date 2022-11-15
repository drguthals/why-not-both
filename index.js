/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  // Your code here
  app.log.info("Yay, the app was loaded!");

  app.on("issues.opened", async (context) => {
    const message = context.payload.issue.body;
    if (message.indexOf(' or ') > -1) {
      const issueComment = context.issue({
        body: "![The why not both girl](https://media3.giphy.com/media/3o85xIO33l7RlmLR4I/giphy.gif)",
      });
      return context.octokit.issues.createComment(issueComment);
    }
  });

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
