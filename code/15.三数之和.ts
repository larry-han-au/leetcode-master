/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b)
    const res: number[][] = []
    const length = nums.length
    for(let i = 0; i < length; i++) {
        if(nums[i] > 0) return res
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        
        let left = i + 1;
        let right = length - 1;

        while(left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            if(sum === 0) {
                res.push([nums[i], nums[left], nums[right]])
                left++
                right--
                while(nums[right] === nums[right + 1]) right--
                while(nums[left] === nums[left - 1]) left++
            } else if (sum < 0) {
                left++
            } else {
                right--
            }
        }
    }
    return res;
};
// @lc code=end

