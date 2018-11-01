// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (head === null || head.next === null)
        return head

    let cur = head
    while (cur.next) {
        if (cur.val === cur.next.val)
            cur.next = cur.next.next
        else
            cur = cur.next
    }
    return head
};

var deleteDuplicates2 = function (head) {
    let set = {}
    if (!head || !head.next)
        return head
    let cur = head
    set[cur.val] = cur.val
    while (cur.next) {
        if (set[cur.next.val] == undefined) {
            set[cur.next.val] = cur.next.val
            cur = cur.next
        } else {
            cur.next = cur.next.next
        }
    }
    return head
};

// 测试
let head = new ListNode(1)
head.next = 1
head.next = 2
console.log(deleteDuplicates2(head));