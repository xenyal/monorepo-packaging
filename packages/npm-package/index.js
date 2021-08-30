module.exports = function stripSpace(string) {
  if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
  console.log("test");
  return string.replace(/\s/g, "");
};