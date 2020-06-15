// NODE

const fs = require('fs').promises; // promises not supported out of the box by node

const text = 'This is a test and it should be stored in a file.';

fs.writeFile('node-message.txt', text).then(() => {
  console.log('Wrote to file');
});

// execute with 'node app.js', no need to allow writing to files
