module.exports = {
  zeroFill(num, size = 2) {
    const str = num.toString();
    const actualSize = str.length;

    if (actualSize >= size) { return str; }

    return `${'0'.repeat(size - actualSize)}${str}`;
  },
};
