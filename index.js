#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const componentsDir = path.join(__dirname, "components");

fs.readdir(componentsDir, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  files.forEach((file) => {
    console.log(file);
  });
});
