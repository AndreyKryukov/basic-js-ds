const { NotImplementedError } = require('../extensions/index.js');

module.exports = function removeKFromList(l, k) {
  let lNew = l;
  while (lNew) {
    if (lNew.value === k) {
      lNew.value = lNew.next.value;
      lNew.next = lNew.next.next;
    } else {
      lNew = lNew.next;
    }
  }
  return l;
}
