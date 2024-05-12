#!/usr/bin/env node
import * as fs from "fs";
import * as path from "path";
import * as readline from "readline";
import chalk from "chalk";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  chalk.yellow("Do you want to create a moodboard? (yes/no): "),
  (answer) => {
    if (answer.toLowerCase() === "yes") {
      console.log(chalk.green("Creating moodboard..."));
      // 这里可以添加创建 moodboard 的逻辑
    } else if (answer.toLowerCase() === "no") {
      const componentsDir = path.join(process.cwd(), "components");

      fs.readdir(componentsDir, (err, files) => {
        if (err) {
          console.error(chalk.red("Error reading directory:"), err);
          return;
        }

        console.log(chalk.green("Files in components directory:"));
        files.forEach((file) => {
          console.log(chalk.blue(file));
        });
      });
    } else {
      console.log(chalk.red("Invalid answer. Please answer 'yes' or 'no'."));
    }

    rl.close();
  }
);
