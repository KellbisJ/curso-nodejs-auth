const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin123...#';
  const hash = '$2b$10$IdcUI8yK8bPImFygpZlhH.uaBih/F6ETlXfJkL.pada7s4y7II61m';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
