const fs = require("fs");

// Read contents of the file
fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Remove extra spaces
  const cleanedData = data.replace(/\s+/g, " ");

  // Write the modified content back to the same file
  fs.writeFile("output.txt", cleanedData, "utf8", (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File contents have been cleaned and updated successfully.");
  });
});
