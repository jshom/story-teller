# Story Teller
Change the way people perceive information. Make the user live in the present. This was done by revealing a story through the illusion of someone typing and deleting messages in realtime.
## Usage
To use this, you can edit the myStory variable in config.js. Here is an example
``` javascript
// config.js
const config = {
  elementId: 'curLine',
  story: `
    Hey.
    Here is an example of how this works.
    Feel free to submit any bugs or feature requests on GitHub.
    Also, if you enjoyed it shoot me an email.
    Thanks for trying this out.
  `,
  closer: '<a href="https://github.com/jshom">https://github.com/jshom</a>',
  startLine: 1
}
```
## Deployment
This was made with easy deployments. You can startup any web-server to send the HTML, CSS and JS files. If you are running this locally, just open index.html. Also, I'd recommend using the minified version of the story-teller
