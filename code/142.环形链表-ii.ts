/*
 * @lc app=leetcode.cn id=142 lang=typescript
 *
 * [142] 环形链表 II
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

function detectCycle(head: ListNode | null): ListNode | null {
    let slow = head;
    let fast = head;
    while(fast && fast.next) { //习惯的while加condition判断，在初始值相同的时候不要用，多加一层内部的if判断
        slow = slow.next
        fast = fast.next.next
        if(slow === fast) {
            fast = head
            while(fast !== slow) {
                slow = slow.next
                fast = fast.next
            }
            return slow
        }
    }
    return null
};
// @lc code=end

