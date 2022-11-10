const fs = require("fs");

const addressHeader = [
  "Robert Connolly",
  "123 Main Street",
  "New York, NY 10001",
];

fs.writeFileSync("hello.txt", "Hello from Node.js");

const letterContents = fs.readFileSync("hello.txt", "ascii");

console.log(letterContents);

fs.writeFileSync(
  "with-address.txt",
  addressHeader.join("\n") + "\n\n" + letterContents
);

const myStream = fs.createReadStream("hello.txt", "utf8");

myStream.on("data", (chunk) => {
  console.log("----- NEW CHUNK -----");
  //   console.log(chunk);
});
