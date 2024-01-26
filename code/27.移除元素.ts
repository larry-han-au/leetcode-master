/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start

// 快慢指针的含义，慢指针所到之处都是不等于val的，快指针遇到val，快慢差值加一，slow所在的位置前面所元素都是符合要求的
// 所以直接返回slow即是符合要求的array的大小
// 用fast去找符合条件的，只要遇到1个符合条件的，交换符合条件的到slow的的位置，slow就加一记录一下
function removeElement1(nums: number[], val: number): number {
    let slow = 0;
    for(let fast = 0; fast < nums.length; fast++) {
        if(nums[fast] !== val) {
            nums[slow++] = nums[fast]
        }
    }
    return slow 
};

// 双向指针
function removeElement(nums: number[], val: number): number {
    let slow = 0;
    let fast = nums.length - 1;
    while(slow <= fast) {
        while(slow <= fast && nums[slow] !== val) slow++;
        while(slow <= fast && nums[fast] === val) fast--;
        if(slow < fast) nums[slow++] = nums[fast--]
    }
    return slow
};
// @lc code=end

