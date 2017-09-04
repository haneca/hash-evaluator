const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

function calculateHash(type, size) {
  const buf = Buffer.alloc(size, 1);
  const algorythm = crypto.createHash(type);

  let start = new Date();
  algorythm.update(buf);
  algorythm.digest('hex');

  let duration = new Date() - start;
  console.log(type + ': ' + duration + 'ms');
}

let types = ['md5', 'sha1', 'sha256', 'sha512'];
let size = 1024 * 1024 * 1024 * 2 - 1;
types.forEach((type) => {
  calculateHash(type, size);  
});
