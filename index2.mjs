#!/usr/bin/env zx

import chalk from "chalk";
import { question } from "zx";
import { readdir } from "fs/promises";

const answer = await question(
  chalk.yellow("Do you want to create a moodboard? (yes/no): ")
);

if (answer.toLowerCase() === "yes") {
  console.log(chalk.green("Creating moodboard..."));
  // 这里可以添加创建 moodboard 的逻辑
} else if (answer.toLowerCase() === "no") {
  const componentsDir = "components";

  try {
    const files = await readdir(componentsDir);
    console.log(chalk.green("Files in components directory:"));
    files.forEach((file) => console.log(chalk.blue(file)));
  } catch (err) {
    console.error(chalk.red("Error reading directory:"), err);
  }
} else {
  console.log(chalk.red("Invalid answer. Please answer 'yes' or 'no'."));
}
