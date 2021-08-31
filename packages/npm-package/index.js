module.exports = function stripSpace(string) {
  if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
  console.log("test");
  console.log("test conflict");
  console.log('unrelated change');
  return string.replace(/\s/g, "");
};