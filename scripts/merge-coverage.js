const fs = require('fs');
const path = require('path');

function getLcovFiles(directory) {
  const lcovFiles = [];

  function traverseDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);

    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        traverseDirectory(filePath);
      } else if (file === 'lcov.info') {
        lcovFiles.push(filePath);
      }
    }
  }

  traverseDirectory(directory);

  return lcovFiles;
}

const mergeLcovFiles = async function () {
  const files = getLcovFiles('coverage');

  const mergedReport = files.reduce(
    (mergedReport, currFile) => (mergedReport += fs.readFileSync(currFile)),
    ''
  );

  fs.writeFile(path.resolve('./coverage/lcov.info'), mergedReport, (err) => {
    if (err) {
      throw err;
    }

    console.log('Merged lcov.info files successfully');
  });
};

function main() {
  try {
    mergeLcovFiles();
  } catch (err) {
    console.log('Could not merge coverage files', err);
  }
}

main();
