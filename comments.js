// Create web server
// Copilot not working so i ask chatGPT
// Import the http module
const http = require('http');

// Define the server's port
const PORT = 3000;

// Create the server
const server = http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send a response back to the client
    res.end('Hello, World!\n');
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
