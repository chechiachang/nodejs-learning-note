// Hello world

console.log("Hello World")

/** 
* 1. install nodejs windows LTS
* 2. write index.js file
* 3. save flie with ctrl + s
* 4. open terminal with ctrl + shift + `
* 5. run with node index.js
* 6. retuen to editor with ctrl + shift + `
*/

// Basic web server page
// https://nodejs.dev/learn/how-to-exit-from-a-nodejs-program

// This part create a web server with nodejs
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hi!')
})

app.listen(3000, ()  => console.log('Server ready'))

/**
 * 1. Run node index.js
 * 2. open web browser and go to localhost:3000
 * 3. [terminal]    Enter ctrl + c to interrup node program
 * 4. [browser]     refresh will see connectio refused error due to there is no program running on localhost:3000 anymore
 */

// Save your work with version control

/**
 * 1. [browser] Go to https://github.com
 * 2. Register a new user account
 * 3. Go to 'your repositories' -> 'New' to create a new repository
 * 4. Name your repository. ex. nodejs-learning-note. Keep the rest default. -> create repository
 * 5. Copy repository url. ex. https://github.com/chechiachang/nodejs-learning-note.git
 * 6. [terminal] git clone https://github.com/chechiachang/nodejs-learning-note.git
 * 7. change directory with cd nodejs-learning-node
 * 8. move your index.js to nodejs-learning-node directory
 * 9. [terminal] git add index.js
 * 10. [terminal] git commit -m "My first nodejs"
 * 11. [terminal] git push
 * 12. [browser] Check your work in your repository. All changes will show on github
 * 13. Modify index.js -> git add -> git commit -> git push
 */