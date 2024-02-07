/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    const map = {}
    for(let i = 0; i < nums.length; i++) {
        if((target - nums[i]) in map) {
            return [i, map[target - nums[i]]]
        } else {
            map[nums[i]] = i
        }
    }
    return []
};
// @lc code=end

