#!/usr/bin/env node
// test with:
//      curl -X POST --data-binary @server.js http://localhost:3000
//      curl -X OPTIONS http://localhost:3000
import http from 'http';
import crypto from 'crypto';

const PORT = 3000;

const server = http.createServer((req, response) => {
  // OPTIONS for CORS
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', '*');
  response.setHeader('Access-Control-Allow-Headers', '*');

  if (req.method === 'OPTIONS') {
    response.statusCode = 204;
    response.end();
    return;
  }

  response.setHeader('Content-Type', 'application/json');

  // POST only
  if (req.method.toLowerCase() !== 'post') {
    response.statusCode = 405;
    response.end(
      JSON.stringify({ status: 'error', kind: 'wrong method' }) + '\n'
    );
    return;
  }

  // file upload required
  let contentLength = parseInt(req.headers['content-length']);
  if (isNaN(contentLength) || contentLength <= 0) {
    response.statusCode = 411;
    response.end(
      JSON.stringify({ status: 'error', kind: 'no content supplied' }) + '\n'
    );
    return;
  }

  // hash the content
  let hash = crypto.createHash('sha256');
  req.pipe(hash);

  req.on('end', () => {
    hash.end();
    // synthesize some results
    const rawDigest = hash.read();
    const levels = [];
    for (let i = 0; i < 8; i++) {
      let val = rawDigest.readUInt32BE(i * 4);
      levels.push(val / 4_294_967_295);
    }
    // pass them back to the frontend
    response.end(
      JSON.stringify({
        status: 'success',
        levels: levels,
      }) + '\n'
    );
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
