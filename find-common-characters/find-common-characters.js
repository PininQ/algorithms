/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
    // 记录所有单词中共同存在的字母和出现次数: { [字母]: 出现次数 }
    let outerHash = {};

    A.forEach((word, index) => {
        // 记录单词内部每个字母出现几次
        const innerHash = {};

        for (let i = 0; i < word.length; i++) {
            const chr = word[i];

            if (index === 0) {
                innerHash[chr] = innerHash[chr] ? innerHash[chr] + 1 : 1;
            } else if (outerHash[chr]) {
                innerHash[chr] = innerHash[chr] || 0;
                if (innerHash[chr] < outerHash[chr]) {
                    innerHash[chr] += 1;
                }
            }
        }
        outerHash = innerHash;
    });
    return Object.keys(outerHash).reduce((pre, cur) => ([...pre, ...Array(outerHash[cur]).fill(cur)]), []);
};