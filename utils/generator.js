const crypto = require("crypto");

export const generateUniqueCode = () => {
  const randomNum = Math.floor(Math.random() * 9999) + 1;
  //   console.log("Random Num:", randomNum);
  const timestamp = Date.now().toString();
  const hash = crypto.createHash("sha1");
  hash.update(randomNum + timestamp);
  const uniqueCode = hash.digest("hex").substr(0, 5);
  //   console.log(uniqueCode);
  return uniqueCode;
};
