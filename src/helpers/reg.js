// A regular expression that gets the string and splits it to:
// 1. sort, alphabetically
// 2. sort by, price
const reg = /(sort\s*(?:by)?)/i;

export default (sentence) => {
  const [,first, second] = sentence.split(reg);
  return {first, second}
}
