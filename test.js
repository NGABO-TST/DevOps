try {

const express = require("express");

if(!express){
throw new Error("Express not installed");
}

console.log("Test Passed: Express is installed");

}catch(error){

console.error("Test Failed:", error.message);
process.exit(1);

}