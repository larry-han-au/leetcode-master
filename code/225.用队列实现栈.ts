/*
 * @lc app=leetcode.cn id=225 lang=typescript
 *
 * [225] 用队列实现栈
 */

// @lc code=start
class MyStack {
    private queue: number[]
    private tempQueue: number[]

    constructor() {
        this.queue = []
        this.tempQueue = []    
    }

    push(x: number): void {
        this.queue.push(x)
    }

    pop(): number {
        for(let i = 0, length = this.queue.length - 1; i < length; i++) { // length 一直在变
            this.tempQueue.push(this.queue.shift()!)
        }
        let res: number = this.queue.pop()!
        let temp: number[] = this.queue
        this.queue = this.tempQueue
        this.tempQueue = temp
        return res

        // for (let i = 0, length = this.queue.length - 1; i < length; i++) {
        //     this.tempQueue.push(this.queue.shift()!);
        // }
        // let res: number = this.queue.pop()!;
        // let temp: number[] = this.queue;
        // this.queue = this.tempQueue;
        // this.tempQueue = temp;
        // return res;
    }

    top(): number {
        let res = this.pop()
        this.push(res)
        return res
    }

    empty(): boolean {
        return this.queue.length === 0
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

