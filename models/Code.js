const mongoose = require('mongoose');

const codeSchema = new mongoose.Schema({
  code: { type: String, unique: true, required: true, minlength: 5, maxlength: 6 },
  createdAt: { type: Date, default: Date.now },
});

codeSchema.statics.createCode = async function () {
  const code = generateRandomCode();
  const newCode = await this.create({ code });
  return newCode.code;
};

codeSchema.statics.useCode = async function (code) {
  const existingCode = await this.findOne({ code });

  if (!existingCode) {
    throw { error: 'Enter a valid code' };
  }

  if (isCodeExpired(existingCode.createdAt)) {
    throw { error: 'The code has expired' };
  }

  if (existingCode.used) {
    throw { error: 'This code has already been used' };
  }

  // Mark the code as used
  existingCode.used = true;
  await existingCode.save();

  return 'Code is correct';
};

const Code = mongoose.model('Code', codeSchema);

function generateRandomCode() {
  const characters = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz0123456789';
  let code = '';
  for (let i = 0; i < 5; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  console.log(code)
  return code;
}

function isCodeExpired(createdAt) {
  const expirationTime = 60 * 1000; // 60 seconds
  const currentTime = new Date();
  return currentTime - createdAt > expirationTime;
}

module.exports = Code;
