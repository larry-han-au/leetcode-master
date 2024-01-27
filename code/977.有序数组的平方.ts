/*
 * @lc app=leetcode.cn id=977 lang=typescript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
function sortedSquares(nums: number[]): number[] {
    const sortedNums = new Array(nums.length) // 可以用extra space
    let sortedIndex = nums.length - 1
    let start = 0;
    let end = nums.length - 1;
    while(start <= end) {
        if(Math.pow(nums[start], 2) > Math.pow(nums[end], 2)) {
            sortedNums[sortedIndex--] = Math.pow(nums[start++], 2)
        } else {
            sortedNums[sortedIndex--] = Math.pow(nums[end--], 2)
        }
    }
    return sortedNums;
};
// @lc code=end

