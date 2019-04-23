/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {
    if (A.length !== B.length) return false;
    A = A + A;
    while (A.indexOf(B) !== -1) {
        return true;
    }
    return false;
};

console.log(rotateString('abcde', 'cdeab')); // true
console.log(rotateString('abcde', 'abced')); // false