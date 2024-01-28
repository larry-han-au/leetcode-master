/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapPairs(head: ListNode | null): ListNode | null {
    const dummy = new ListNode(-1, head)
    let prev = dummy;
    while(prev && prev.next && prev.next.next) {
        // 不能怕麻烦，多几个指针，避免思路混乱
        const nodeNNN = prev.next.next.next
        const nodeNN = prev.next.next;
        const nodeN = prev.next;

        prev.next = nodeNN;
        nodeNN.next = nodeN;
        nodeN.next = nodeNNN;
        prev = nodeN;
    }
    return dummy.next;
};
// @lc code=end

