const fs = require('fs');
const path = require('path');

// Read the .npmignore file
const npmignore = fs.readFileSync('.npmignore', 'utf-8');

// Split the .npmignore file contents into an array of file paths
const filesToDelete = npmignore.split('\n').filter(Boolean);

// Get this file path
const thisFilePath = path.resolve(__filename);

// Add this file path to the array of files to delete
filesToDelete.push(thisFilePath);

// Delete each file or directory listed in the .npmignore file
filesToDelete.forEach((item) => {
  const itemPath = path.resolve(item);
  if (fs.existsSync(itemPath)) {
    try {
      fs.rmSync(itemPath, { recursive: true });
    } catch (error) {
      console.error(error);
    }
  }
});
