class Solution:
    def commonChars(self, A: List[str]) -> List[str]:
        leader = ''
        for x in A[0]:
            if x not in leader:
                leader += x

        res = []
        for c in leader:
            min_time = 1000
            for a in A:
                min_time = min(a.count(c), min_time)
            while min_time > 0:
                res.append(c)
                min_time -= 1
        return res

    def commonChars2(self, A: List[str]) -> List[str]:
        number = []
        for i in range(len(A)):
            each = dict()
            for j in A[i]:
                if j not in each:
                    each[j] = 1
                else:
                    each[j] += 1
            number.append(each)

        result = []
        from functools import reduce
        union = list(reduce(lambda x, y: x & y, map(dict.keys, number)))
        for i in union:
            result.extend([i] * min([k[i] for k in number]))
        return result
