const fs = require("fs");
const { Command } = require("commander");
const program = new Command();

const count = (fileName) => {
  fs.readFile(fileName, "utf-8", function (err, data) {
    let total = data.split(' ').length;
    console.log(total + " words in this file");
  });
};

program
  .name("count_words")
  .description("CLI to count words in a text file")
  .version("0.8.0");

program
  .command("count")
  .description("count words")
  .argument("<string>", "file path to count words")
  .action((str, options) => {
    count(str);
  });

program.parse();

//command : node index.js count <file-path>