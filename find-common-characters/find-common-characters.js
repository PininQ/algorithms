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

/*
    先用 map 记录第一个单词中的每个字母出现的次数，然后从第二个开始遍历，
    比较每个字母出现次数 如果没有在 Map 中，则从 Map 中删除， 如果有就将出现次数设置为更小的那个
 */
var commonChars2 = function (A) {
    let len = A.length;
    if (len === 1)
        return [...A[0]]

    let myMap = new Map();
    let count = 1;
    for (let item of A[0]) {
        count = 1;
        if (myMap.has(item)) {
            count += myMap.get(item);
        }
        myMap.set(item, count);
    }

    let reg;
    let matchResult;
    let res = [];
    for (let [k, v] of myMap.entries()) {
        for (let i = 1; i < len; i++) {
            reg = new RegExp(k, 'g');
            matchResult = A[i].match(reg);
            if (Array.isArray(matchResult)) {
                matchResult.length < myMap.get(k) && myMap.set(k, matchResult.length);
            } else {
                myMap.delete(k);
            }
        }
    }

    for (let [k, v] of myMap.entries()) {
        res.push(...new Array(v).fill(k));
    }
    return res;
}

var commonChars3 = function (A) {
    let resArr = A[0].split('');
    for (let i = 1, len = A.length; i < len; i++) {
        let tmpArr1 = A[i].split('');
        let tmpArr2 = [];
        tmpArr1.forEach((str) => {
            let num = resArr.indexOf(str);
            if (num >= 0) {
                tmpArr2.push(str);
                resArr.splice(num, 1);
            }
        })
        resArr = tmpArr2;
    }
    return resArr;
}

console.log(commonChars2(["bella", "label", "roller"])); // ["e","l","l"]