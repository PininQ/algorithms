'''
解题思路：
1.按空格切割出访问次数和域名
2.使用字典存储，域名作为 key，访问次数作为 value
3.对字典中的 value 进行遍历，将 . 右边的域名继续作为 key，并更新键对应的值
4.最后，遍历字典，拼接键值对添加到 list 中作为结果返回
'''


class Solution(object):
    # 执行用时：76 ms
    def subdomainVisits(self, cpdomains):
        """
        :type cpdomains: List[str]
        :rtype: List[str]
        """
        res = []
        subdomains = {}
        for each in cpdomains:
            value, key = each.split(' ')
            value = int(value)
            # 返回指定键的值，如果值不在字典中返回 0
            subdomains[key] = subdomains.get(key, 0) + value
            # 如果包含子字符串返回开始的索引值，否则返回 -1
            pos = key.find('.')
            while pos != -1:
                # 从 . 开始到结尾的字符串
                key = key[pos + 1::]
                # 访问次数累加
                subdomains[key] = subdomains.get(key, 0) + value
                pos = key.find('.')
        for key, value in subdomains.items():
            res.append(str(value) + ' ' + key)
        return res

    # 执行用时：80 ms
    def subdomainVisits2(self, cpdomains):
        res = {}
        for each in cpdomains:
            a = each.find(' ')
            count = int(each[:a])
            # 从空格处分割，取域名部分，再按 . 分割，以列表的形式存放在 item 中
            item = each[a + 1:].split('.')
            for v in range(len(item)):
                key = '.'.join(item[v:])
                if key in res.keys():
                    res[key] += count
                # 键不存在，则添加
                else:
                    res[key] = count
        # 使用列表推导式拼接键值对，返回结果
        return [str(value) + ' ' + key for key, value in res.items()]

    def subdomainVisits3(self, cpdomains):
        dicts = {}
        n = len(cpdomains)
        for item in cpdomains:
            array = item.split(' ')
            num = (int)(array[0])
            domain = array[1]
            domainLen = len(domain.split('.'))
            for i in range(domainLen):
                tmp = domain.split('.', i).pop()
                if tmp in dicts.keys():
                    dicts[tmp] = dicts[tmp] + num
                else:
                    dicts[tmp] = num

        domainList = []
        for key in dicts:
            tmp = (str)(dicts[key]) + " " + key
            domainList.append(tmp)

        return domainList

    # 执行用时：100 ms  ---
    def subdomainVisits4(self, cpdomains):
        import collections
        cnt = collections.defaultdict(int)
        for cpdomain in cpdomains:
            count, domain = cpdomain.split()
            parts = domain.split('.')[::-1]
            for x in range(1, len(parts) + 1):
                cnt['.'.join(parts[:x][::-1])] += int(count)
        return ['{} {}'.format(v, k) for k, v in cnt.items()]


if __name__ == '__main__':
    # ["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]
    cpdomains = ["9001 discuss.leetcode.com"]
    print(Solution().subdomainVisits4(cpdomains))
    # ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]
    cpdomains2 = [
        "900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"
    ]
    print(Solution().subdomainVisits4(cpdomains2))
