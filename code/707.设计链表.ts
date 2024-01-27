/*
 * @lc app=leetcode.cn id=707 lang=typescript
 *
 * [707] 设计链表
 */

// @lc code=start

class MyLinkedList {
    private dummyHead: ListNode;
    private size: number;
    constructor() {
        this.dummyHead = new ListNode(-1);
        this.size = 0;
    }

    get(index: number): number {
        if(index > (this.size - 1) || index < 0) return -1;
        let cur = this.dummyHead.next;
        while(index--) cur = cur.next;
        return cur.val;
    }

    addAtHead(val: number): void {
        const newHead = new ListNode(val);
        newHead.next = this.dummyHead.next;
        this.dummyHead.next = newHead;
        this.size++;
    }

    addAtTail(val: number): void {
        let dummyCopy = this.dummyHead;
        while(dummyCopy.next) {
            dummyCopy = dummyCopy.next;
        }
        dummyCopy.next = new ListNode(val);
        this.size++;
    }

    addAtIndex(index: number, val: number): void {
        if(index < this.size) {
            let cur = this.dummyHead;
            while(index--) {
                cur = cur.next;
            }
            const nodeToAdd = new ListNode(val)
            nodeToAdd.next = cur.next
            cur.next = nodeToAdd
            this.size++;
        }
    }

    deleteAtIndex(index: number): void {
        if(index < this.size) {
            let cur = this.dummyHead;
            while(index--) {
                cur = cur.next;
            }
            cur.next = cur.next.next
            this.size--;
        }
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

