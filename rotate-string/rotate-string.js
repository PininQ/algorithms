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

var rotateString2 = function(A, B) {
    /* 相通 */
    return A.length === B.length && ~(A + A).indexOf(B);
};

console.log(rotateString('abcde', 'cdeab')); // true
console.log(rotateString('abcde', 'abced')); // false