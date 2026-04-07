try {
  const app = require("./app"); // app loads without starting server
  console.log("App loaded successfully");
} catch(err){
  console.error("Server failed to load:", err.message);
  process.exit(1);
}