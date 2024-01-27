/*
 * @lc app=leetcode.cn id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
function minSubArrayLen(target: number, nums: number[]): number {
    let left = 0;
    let sum = 0;
    let min = nums.length + 1;

    for(let right = 0; right < nums.length; right++) {
        sum += nums[right]
        while(sum >= target) {
            min = Math.min(min, right - left + 1)    
            sum -= nums[left++]
        }
    }
    return min === nums.length + 1 ? 0: min;
};
// @lc code=end

