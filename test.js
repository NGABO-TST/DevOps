try {
  const server = require("./server"); // require your server file
  console.log("Server file loaded successfully");
} catch (err) {
  console.error("Server failed to load:", err.message);
  process.exit(1);
}