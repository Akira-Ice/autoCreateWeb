const fs = require("fs");

function deleteFolder(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file) => {
      const currentFilePath = `${folderPath}/${file}`;
      if (fs.lstatSync(currentFilePath).isDirectory()) {
        deleteFolder(currentFilePath);
      } else {
        fs.unlinkSync(currentFilePath);
      }
    });
    fs.rmdirSync(folderPath);
    console.log(`${folderPath} Successfully deleted!`);
  } else {
    console.log(`${folderPath} is non-existent`);
  }
}

module.exports = deleteFolder;
