// index.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('🚀 CI/CD Pipeline Deployed Successfully, Sesh!');
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
