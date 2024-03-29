/*
 * @lc app=leetcode.cn id=160 lang=typescript
 *
 * [160] 相交链表
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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let p1 = headA;
    let p2 = headB;
    while(p1 && p2) {
        if(p1 === p2 ) return p1;
        if(p1.next === null && p2.next === null) return null;
        p1 = p1.next
        p2 = p2.next
        if(!p1) p1 = headB;
        if(!p2) p2 = headA;
    
    }
    return null
};
// @lc code=end

