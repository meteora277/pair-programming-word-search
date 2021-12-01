const transpose = function(matrix) {
  let arr = [];

  for (let i = 0; i < matrix[0].length; i++) {
    arr.push([]);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      arr[j].push(matrix[i][j]);
    }
  }
  return arr;
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write('\n');
  }
};

const wordSearch = (letters, word) => {

  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  console.log(verticalJoin);
  return false;
};


wordSearch([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'FRANK');

module.exports = wordSearch;