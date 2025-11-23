// Simple JavaScript example for testing GitHub Actions
const http = require('http');
const fs = require('fs');

// Hardcoded credentials (security issue)
const apiKey = 'sk-1234567890abcdef';
const password = 'admin123';

// SQL injection vulnerability
function getUserData(userId) {
    const query = `SELECT * FROM users WHERE id = ${userId}`;
    // This is vulnerable to SQL injection
    return query;
}

// Command injection vulnerability
function executeCommand(userInput) {
    const command = `ls -la ${userInput}`;
    require('child_process').exec(command, (error, stdout) => {
        console.log(stdout);
    });
}

// Insecure file read
function readFile(filename) {
    return fs.readFileSync(filename, 'utf8');
}

// XSS vulnerability
function displayUserInput(input) {
    document.getElementById('output').innerHTML = input;
}

// Missing error handling
function processData(data) {
    const result = JSON.parse(data);
    return result.value;
}

module.exports = {
    getUserData,
    executeCommand,
    readFile,
    displayUserInput,
    processData
};

