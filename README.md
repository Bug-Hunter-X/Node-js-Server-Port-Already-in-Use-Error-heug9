# Node.js Server Port Already in Use Error

This repository demonstrates a common error in Node.js where a server fails to start because the specified port is already in use.  The solution shows how to gracefully handle this situation.

## Bug

The `bug.js` file contains a simple HTTP server that attempts to listen on port 8080. If another process is already using this port (e.g., another instance of the server, or a different application), the server will throw an error and exit.

## Solution

The `bugSolution.js` file provides a more robust solution.  It uses the `'error'` event listener to catch the port-in-use error and handles it gracefully, preventing the server from crashing and providing a more informative message to the user.