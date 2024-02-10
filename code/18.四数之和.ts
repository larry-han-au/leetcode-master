/*
 * @lc app=leetcode.cn id=18 lang=typescript
 *
 * [18] 四数之和
 */

// @lc code=start
function fourSum(nums: number[], target: number): number[][] {
    const length = nums.length
    const res: number[][] = []
    nums.sort((a, b) => a - b)
    // console.log(nums)
    for(let i = 0; i < length; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        for(let j = i + 1; j < length; j++) {
            if(j > i + 1 && nums[j - 1] === nums[j]) continue; 
            let left = j + 1
            let right = length - 1
            while(left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right]
                if(sum === target) {
                    res.push([nums[i], nums[j], nums[left], nums[right]])   
                    left++
                    right--
                    while(nums[left] === nums[left -1]) left++
                    while(nums[right] === nums[right + 1]) right--
                } else if (sum < target) {
                    left++
                } else {
                    right--
                }
            }
        }
    }
    return res
};
// @lc code=end

