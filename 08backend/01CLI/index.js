import fs from "fs";
import { Command } from "commander";

const program = new Command();

program
    .name("counter")
    .description("CLI to some file based utilities")
    .version("1.0.0");

program
    .command("count_words")
    .description("Counts number of words present in a file")
    .argument("<file>", "file to count words")
    .action((file) => {

        fs.readFile(file, "utf-8", (err, data) => {

            if (err) {
                console.error("Error:", err.message);
                process.exit(1);
            }

            const count = data.trim().split(/\s+/).length;

            console.log(`There are ${count} words in the file`);

        });

    });

program.parse();
